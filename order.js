const products = {
  "หมูสามชั้น": 15,
  "ไก่หมัก": 10,
  "ลูกชิ้นหมู": 10,
  "ไส้กรอกชีส": 15,
  "เห็ดเข็มทอง": 10,
  "ปูอัด": 10
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  try {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const shopUserId = process.env.LINE_SHOP_USER_ID;

    if (!token || !shopUserId) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "ยังไม่ได้ตั้งค่า LINE ใน Netlify"
        })
      };
    }

    const data = JSON.parse(event.body || "{}");
    const name = String(data.name || data.customerName || "").trim();
    const phone = String(data.phone || "").trim();
    const spice = String(data.spice || "").trim();
    const note = String(data.note || "").trim();
    const items = Array.isArray(data.items) ? data.items : [];

    if (!name || !items.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "ข้อมูลคำสั่งซื้อไม่ครบ" })
      };
    }

    let total = 0;
    const lines = [];

    for (const item of items) {
      const productName = String(item.name || "");
      const qty = Number(item.qty ?? item.quantity);

      if (
        !Object.hasOwn(products, productName) ||
        !Number.isInteger(qty) ||
        qty < 1 ||
        qty > 100
      ) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "รายการสินค้าไม่ถูกต้อง" })
        };
      }

      const amount = products[productName] * qty;
      total += amount;
      lines.push(`${productName} x ${qty} = ${amount} บาท`);
    }

    const orderId = Date.now().toString();

    const message = [
      "🌶️ ออเดอร์ใหม่ ร้านหม่าล่าสามสหาย",
      `เลขออเดอร์: ${orderId}`,
      `ชื่อลูกค้า: ${name}`,
      `เบอร์โทร: ${phone || "-"}`,
      `ระดับความเผ็ด: ${spice || "-"}`,
      "",
      ...lines,
      "",
      `รวมทั้งหมด ${total} บาท`,
      `หมายเหตุ: ${note || "-"}`
    ].join("\n");

    const response = await fetch(
      "https://api.line.me/v2/bot/message/push",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: shopUserId,
          messages: [{ type: "text", text: message }]
        })
      }
    );

    if (!response.ok) {
      console.error("LINE API error:", response.status);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "ส่งข้อความเข้า LINE ไม่สำเร็จ" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        orderId,
        total
      })
    };
  } catch (error) {
    console.error("Order error:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "ระบบขัดข้อง" })
    };
  }
};
