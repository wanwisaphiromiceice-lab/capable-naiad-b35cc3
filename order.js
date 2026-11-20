const crypto = require("node:crypto");

const MENU = [
  ["M01", "หมู", 10],
  ["M02", "ไก่", 10],
  ["M03", "ปลาดอลี่", 10],
  ["M04", "ไส้กรอกชีส", 10],
  ["M05", "ไส้กรอกแดงแหลมทอง", 10],
  ["M06", "เต้าหู้ปลาสี่เหลี่ยม", 10],
  ["M07", "หมูยอ", 10],
  ["M08", "โบโลน่า", 10],
  ["M09", "ปูอัด", 10],
  ["M10", "ไส้กรอกหนังกรอบ", 10],
  ["M11", "หมึกหลอด", 10],

  ["D01", "กีวี่ปั่น", 30],
  ["D02", "สตรอว์เบอร์รีปั่น", 30],
  ["D03", "สับปะรดปั่น", 30],
  ["D04", "ส้มปั่น", 30],
  ["D05", "แตงโมปั่น", 30],
  ["D06", "เสาวรสปั่น", 30],
  ["D07", "ไมโลปั่น", 30],
  ["D08", "M-150 ปั่น", 30],
  ["D09", "เลิฟซ่าองุ่นเคียวโฮปั่น", 30],
  ["D10", "เลิฟซ่าฮันนี่เลมอนปั่น", 30],
  ["D11", "เลิฟซ่าลิ้นจี่ปั่น", 30],
  ["D12", "เลิฟซ่าโยเกิร์ตปั่น", 30]
];

const catalog = new Map(
  MENU.map(([id, name, price]) => [
    id,
    { id, name, price }
  ])
);

function reply(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify(data)
  };
}

function success(data) {
  return reply(200, {
    success: true,
    ...data
  });
}

function error(statusCode, message) {
  return reply(statusCode, {
    success: false,
    message
  });
}

function safeEqual(a, b) {
  const first = crypto
    .createHash("sha256")
    .update(String(a))
    .digest();

  const second = crypto
    .createHash("sha256")
    .update(String(b))
    .digest();

  return crypto.timingSafeEqual(first, second);
}

function createAdminToken() {
  const payload = Buffer.from(
    JSON.stringify({
      expires: Date.now() + 8 * 60 * 60 * 1000
    })
  ).toString("base64url");

  const signature = crypto
    .createHmac("sha256", process.env.ADMIN_PASSWORD)
    .update(payload)
    .digest("base64url");

  return `${payload}.${signature}`;
}

function verifyAdminToken(token) {
  if (!process.env.ADMIN_PASSWORD) {
    return false;
  }

  const parts = String(token || "").split(".");

  if (parts.length !== 2) {
    return false;
  }

  const [payload, signature] = parts;

  const expected = crypto
    .createHmac("sha256", process.env.ADMIN_PASSWORD)
    .update(payload)
    .digest("base64url");

  if (!safeEqual(signature, expected)) {
    return false;
  }

  try {
    const decoded = JSON.parse(
      Buffer.from(payload, "base64url").toString()
    );

    return decoded.expires > Date.now();
  } catch {
    return false;
  }
}

async function sendLineNotification(message) {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const userId = process.env.LINE_ADMIN_USER_ID;

  if (!token || !userId) {
    return "not_configured";
  }

  try {
    const response = await fetch(
      "https://api.line.me/v2/bot/message/push",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: userId,
          messages: [
            {
              type: "text",
              text: message.slice(0, 4900)
            }
          ]
        })
      }
    );

    return response.ok ? "sent" : "failed";
  } catch (err) {
    console.error("LINE ERROR:", err);
    return "failed";
  }
}

async function handler(event) {
  if (event.httpMethod !== "POST") {
    return error(405, "อนุญาตเฉพาะ POST");
  }

  if ((event.body || "").length > 25000) {
    return error(413, "ข้อมูลมีขนาดใหญ่เกินไป");
  }

  let data;

  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return error(400, "ข้อมูล JSON ไม่ถูกต้อง");
  }

  try {
    // ใช้ API ของ Netlify Blobs โดยตรง
    const { getStore } = await import("@netlify/blobs");

    const store = getStore("mala-orders-v1");

    const action = data.action;

    // ==============================
    // ตรวจสอบการทำงานของระบบ
    // ==============================

    if (action === "health") {
      return success({
        message: "ระบบรับออเดอร์พร้อมทำงาน"
      });
    }

    // ==============================
    // สร้างคำสั่งซื้อ
    // ==============================

    if (action === "createOrder") {
      const p = data.payload || {};

      const customerName = String(
        p.customerName || ""
      ).trim().slice(0, 100);

      const phone = String(p.phone || "").trim();

      const orderType = p.orderType;

      const address = String(
        p.address || ""
      ).trim().slice(0, 500);

      const payment = p.payment;

      if (!customerName) {
        return error(400, "กรุณากรอกชื่อลูกค้า");
      }

      if (!/^0\d{9}$/.test(phone)) {
        return error(400, "เบอร์โทรศัพท์ไม่ถูกต้อง");
      }

      if (!["delivery", "pickup"].includes(orderType)) {
        return error(400, "กรุณาเลือกวิธีรับสินค้า");
      }

      if (!["cash", "transfer"].includes(payment)) {
        return error(400, "กรุณาเลือกวิธีชำระเงิน");
      }

      if (orderType === "delivery" && !address) {
        return error(400, "กรุณากรอกที่อยู่จัดส่ง");
      }

      if (
        !Array.isArray(p.items) ||
        p.items.length === 0 ||
        p.items.length > MENU.length
      ) {
        return error(400, "รายการสินค้าไม่ถูกต้อง");
      }

      let subtotal = 0;
      let hasMala = false;

      const items = [];
      const usedIds = new Set();

      for (const item of p.items) {
        const product = catalog.get(item.id);
        const qty = Number(item.qty);

        if (
          !product ||
          !Number.isInteger(qty) ||
          qty < 1 ||
          qty > 100 ||
          usedIds.has(item.id)
        ) {
          return error(400, "ข้อมูลสินค้าไม่ถูกต้อง");
        }

        usedIds.add(item.id);

        items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          qty
        });

        subtotal += product.price * qty;

        if (product.id.startsWith("M")) {
          hasMala = true;
        }
      }

      if (subtotal < 100) {
        return error(400, "ยอดสั่งซื้อขั้นต่ำ 100 บาท");
      }

      const sauce = hasMala
        ? String(p.sauce || "")
        : "";

      const spicy = hasMala
        ? String(p.spicy || "")
        : "";

      const sauceMethod = hasMala
        ? String(p.sauceMethod || "")
        : "";

      if (hasMala) {
        if (
          !["ซอสหม่าล่า", "ซอสบาร์บีคิว"].includes(sauce)
        ) {
          return error(400, "กรุณาเลือกประเภทซอส");
        }

        if (
          !["ราดซอส", "แยกซอส"].includes(sauceMethod)
        ) {
          return error(400, "กรุณาเลือกวิธีใส่ซอส");
        }

        if (
          sauce === "ซอสหม่าล่า" &&
          !["เผ็ดน้อย", "เผ็ดกลาง", "เผ็ดมาก"].includes(spicy)
        ) {
          return error(400, "กรุณาเลือกระดับความเผ็ด");
        }
      }

      const deliveryFee =
        orderType === "delivery" ? 20 : 0;

      const total = subtotal + deliveryFee;

      const orderId =
        "MS-" +
        Date.now().toString(36).toUpperCase() +
        "-" +
        crypto.randomBytes(4).toString("hex").toUpperCase();

      const trackingKey = crypto
        .randomBytes(24)
        .toString("hex");

      const order = {
        orderId,
        trackingKey,
        customerName,
        phone,
        orderType,
        address: orderType === "delivery" ? address : "",
        payment,
        sauce,
        spicy,
        sauceMethod,
        note: String(p.note || "").trim().slice(0, 500),
        items,
        subtotal,
        deliveryFee,
        total,
        status: "preparing",
        createdAt: new Date().toISOString()
      };

      // บันทึกออเดอร์ก่อนตอบกลับลูกค้า
      const saved = await store.setJSON(
        `order-${orderId}`,
        order,
        { onlyIfNew: true }
      );

      if (!saved.modified) {
        return error(
          500,
          "ไม่สามารถบันทึกออเดอร์ได้ กรุณาติดต่อร้าน"
        );
      }

      // LINE แจ้งเตือนร้าน (ไม่ทำให้การบันทึกออเดอร์ล้มเหลว)
      const lineMessage = [
        "🌶️ หม่าล่าสามสหาย",
        "🛒 มีคำสั่งซื้อใหม่",
        "",
        `เลขออเดอร์: ${orderId}`,
        `ลูกค้า: ${customerName}`,
        `โทร: ${phone}`,
        `วิธีรับ: ${orderType === "delivery" ? "จัดส่ง" : "รับที่ร้าน"}`,
        `ที่อยู่: ${address || "-"}`,
        "",
        "รายการสินค้า:",
        ...items.map(
          x => `${x.name} × ${x.qty} = ${x.price * x.qty} บาท`
        ),
        "",
        `ซอส: ${sauce || "-"}`,
        `ความเผ็ด: ${spicy || "-"}`,
        `วิธีใส่ซอส: ${sauceMethod || "-"}`,
        `หมายเหตุ: ${order.note || "-"}`,
        `ชำระเงิน: ${payment === "transfer" ? "โอนเงิน" : "เงินสด"}`,
        `รวมทั้งสิ้น: ${total} บาท`
      ].join("\n");

      const lineNotification =
        await sendLineNotification(lineMessage);

      return success({
        orderId,
        trackingKey,
        total,
        status: "preparing",
        lineNotification
      });
    }

    // ==============================
    // ลูกค้าติดตามสถานะ
    // ==============================

    if (action === "getOrderStatus") {
      const orderId = String(data.orderId || "");

      if (!/^MS-[A-Z0-9-]+$/.test(orderId)) {
        return error(400, "เลขออเดอร์ไม่ถูกต้อง");
      }

      const order = await store.get(
        `order-${orderId}`,
        { type: "json" }
      );

      if (
        !order ||
        !safeEqual(
          order.trackingKey,
          data.trackingKey || ""
        )
      ) {
        return error(404, "ไม่พบคำสั่งซื้อ");
      }

      return success({
        orderId: order.orderId,
        orderType: order.orderType,
        total: order.total,
        status: order.status
      });
    }

    // ==============================
    // ร้านเข้าสู่ระบบ
    // ==============================

    if (action === "adminLogin") {
      const adminPassword = process.env.ADMIN_PASSWORD;

      if (
        !adminPassword ||
        adminPassword.length < 12
      ) {
        return error(
          503,
          "กรุณาตั้งค่า ADMIN_PASSWORD ใน Netlify อย่างน้อย 12 ตัวอักษร"
        );
      }

      if (
        !safeEqual(
          data.password || "",
          adminPassword
        )
      ) {
        return error(401, "รหัสผ่านร้านไม่ถูกต้อง");
      }

      return success({
        token: createAdminToken()
      });
    }

    // ==============================
    // ร้านดูรายการออเดอร์
    // ==============================

    if (action === "getAdminOrders") {
      if (!verifyAdminToken(data.token)) {
        return error(401, "กรุณาเข้าสู่ระบบร้านใหม่");
      }

      const orders = [];
      let cursor;

      do {
        const page = await store.list({
          prefix: "order-",
          cursor
        });

        for (const blob of page.blobs) {
          const order = await store.get(
            blob.key,
            { type: "json" }
          );

          if (order) {
            const { trackingKey, ...safeOrder } = order;
            orders.push(safeOrder);
          }
        }

        cursor = page.next_cursor;

      } while (cursor && orders.length < 1000);

      orders.sort(
        (a, b) =>
          b.createdAt.localeCompare(a.createdAt)
      );

      return success({
        orders: orders.slice(0, 300)
      });
    }

    // ==============================
    // ร้านเปลี่ยนสถานะ
    // ==============================

    if (action === "updateOrderStatus") {
      if (!verifyAdminToken(data.token)) {
        return error(401, "กรุณาเข้าสู่ระบบร้านใหม่");
      }

      const orderId = String(data.orderId || "");
      const nextStatus = String(data.nextStatus || "");

      if (!/^MS-[A-Z0-9-]+$/.test(orderId)) {
        return error(400, "เลขออเดอร์ไม่ถูกต้อง");
      }

      const order = await store.get(
        `order-${orderId}`,
        { type: "json" }
      );

      if (!order) {
        return error(404, "ไม่พบคำสั่งซื้อ");
      }

      let allowedNext = null;

      if (order.status === "preparing") {
        allowedNext =
          order.orderType === "delivery"
            ? "delivering"
            : "ready_pickup";
      } else if (
        order.status === "delivering" ||
        order.status === "ready_pickup"
      ) {
        allowedNext = "completed";
      }

      if (nextStatus !== allowedNext) {
        return error(
          409,
          "ไม่สามารถเปลี่ยนสถานะตามลำดับนี้ได้"
        );
      }

      order.status = nextStatus;
      order.updatedAt = new Date().toISOString();

      await store.setJSON(
        `order-${orderId}`,
        order
      );

      const statusText = {
        preparing: "กำลังเตรียมอาหาร",
        delivering: "กำลังจัดส่ง",
        ready_pickup: "รอรับสินค้า",
        completed:
          order.orderType === "delivery"
            ? "จัดส่งสำเร็จ"
            : "รับสินค้าเรียบร้อย"
      };

      const lineNotification =
        await sendLineNotification(
          `📦 ออเดอร์ ${orderId}\nสถานะ: ${statusText[nextStatus]}`
        );

      return success({
        orderId,
        status: nextStatus,
        lineNotification
      });
    }

    return error(400, "ไม่รู้จักคำสั่งที่ส่งมา");

  } catch (err) {
    console.error("ORDER FUNCTION ERROR:", err);

    return error(
      500,
      "ระบบบันทึกออเดอร์ขัดข้อง กรุณาติดต่อร้านก่อนกดสั่งซ้ำ"
    );
  }
}

module.exports = { handler };
