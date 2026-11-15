// ==========================================
// 🌶️ ระบบรับออเดอร์ ร้านหม่าล่าสามสหาย
// ==========================================

// รายการสินค้าและราคาที่ถูกต้อง
const products = {

  // 🍢 หม่าล่า 10 บาท/ไม้
  "หมู": 10,
  "ไก่": 10,
  "ปลาดอลี่": 10,
  "ไส้กรอกชีส": 10,
  "ไส้กรอกแดงแหลมทอง": 10,
  "เต้าหู้ปลาสี่เหลี่ยม": 10,
  "หมูยอ": 10,
  "โบโลน่า": 10,
  "ปูอัด": 10,
  "ไส้กรอกหนังกรอบ": 10,
  "หมึกหลอด": 10,

  // 🥤 น้ำปั่น 30 บาท/แก้ว
  "กีวี่ปั่น": 30,
  "สตรอว์เบอร์รีปั่น": 30,
  "สับปะรดปั่น": 30,
  "ส้มปั่น": 30,
  "แตงโมปั่น": 30,
  "เสาวรสปั่น": 30,
  "ไมโลปั่น": 30,
  "M-150 ปั่น": 30,
  "เลิฟซ่ารสองุ่นเคียวโฮปั่น": 30,
  "เลิฟซ่ารสฮันนี่เลมอนปั่น": 30,
  "เลิฟซ่ารสลิ้นจี่ปั่น": 30,
  "เลิฟซ่ารสโยเกิร์ตปั่น": 30

};

// ประเภทสินค้า
const malaProducts = new Set([
  "หมู",
  "ไก่",
  "ปลาดอลี่",
  "ไส้กรอกชีส",
  "ไส้กรอกแดงแหลมทอง",
  "เต้าหู้ปลาสี่เหลี่ยม",
  "หมูยอ",
  "โบโลน่า",
  "ปูอัด",
  "ไส้กรอกหนังกรอบ",
  "หมึกหลอด"
]);

// ตัวเลือกซอสที่อนุญาต
const allowedSauces = [
  "ซอสหม่าล่า",
  "ซอสบาร์บีคิว"
];

// ระดับความเผ็ด
const allowedSpicyLevels = [
  "เผ็ดน้อย",
  "เผ็ดกลาง",
  "เผ็ดมาก"
];

// วิธีใส่ซอส
const allowedServingMethods = [
  "ราดซอส",
  "แยกซอส"
];

// ==========================================
// ฟังก์ชันตอบกลับ
// ==========================================

function jsonResponse(statusCode, data) {

  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(data)
  };

}

// ==========================================
// ระบบหลัก
// ==========================================

exports.handler = async (event) => {

  if (event.httpMethod !== "POST") {

    return jsonResponse(405, {
      success: false,
      error: "Method not allowed"
    });

  }

  try {

    // ======================================
    // LINE ENVIRONMENT VARIABLES
    // ======================================

    const token =
      process.env.LINE_CHANNEL_ACCESS_TOKEN;

    const shopUserId =
      process.env.LINE_SHOP_USER_ID;

    if (!token || !shopUserId) {

      return jsonResponse(500, {
        success: false,
        error: "ยังไม่ได้ตั้งค่า LINE ใน Netlify"
      });

    }

    // ======================================
    // รับข้อมูลจากเว็บไซต์
    // ======================================

    let data;

    try {

      data = JSON.parse(event.body || "{}");

    } catch {

      return jsonResponse(400, {
        success: false,
        error: "รูปแบบข้อมูลไม่ถูกต้อง"
      });

    }

    const name =
      String(data.name || data.customerName || "").trim();

    const phone =
      String(data.phone || "").trim();

    const orderType =
      String(data.orderType || "").trim();

    const address =
      String(data.address || "").trim();

    const note =
      String(data.note || "").trim();

    const items =
      Array.isArray(data.items) ? data.items : [];

    // ======================================
    // ตรวจสอบข้อมูลลูกค้า
    // ======================================

    if (!name || !phone || !items.length) {

      return jsonResponse(400, {
        success: false,
        error: "กรุณากรอกข้อมูลคำสั่งซื้อให้ครบ"
      });

    }

    if (!["รับที่ร้าน", "จัดส่ง"].includes(orderType)) {

      return jsonResponse(400, {
        success: false,
        error: "กรุณาเลือกวิธีรับสินค้า"
      });

    }

    if (orderType === "จัดส่ง" && !address) {

      return jsonResponse(400, {
        success: false,
        error: "กรุณากรอกที่อยู่จัดส่ง"
      });

    }

    // ======================================
    // ตรวจสอบรายการสินค้า
    // ======================================

    let total = 0;

    const lines = [];

    let hasMala = false;

    let selectedSauce = "";
    let selectedSpicyLevel = "";
    let selectedServingMethod = "";

    for (const item of items) {

      if (!item || typeof item !== "object") {

        return jsonResponse(400, {
          success: false,
          error: "รายการสินค้าไม่ถูกต้อง"
        });

      }

      const productName =
        String(item.name || "").trim();

      const qty =
        Number(item.qty ?? item.quantity);

      if (
        !Object.prototype.hasOwnProperty.call(
          products,
          productName
        ) ||
        !Number.isInteger(qty) ||
        qty < 1 ||
        qty > 999
      ) {

        return jsonResponse(400, {
          success: false,
          error: `รายการสินค้าไม่ถูกต้อง: ${productName}`
        });

      }

      const price = products[productName];

      const amount = price * qty;

      total += amount;

      const unit = malaProducts.has(productName)
        ? "ไม้"
        : "แก้ว";

      lines.push(
        `• ${productName} × ${qty} ${unit} = ${amount} บาท`
      );

      // ====================================
      // ตรวจสอบซอสสำหรับหม่าล่า
      // ====================================

      if (malaProducts.has(productName)) {

        hasMala = true;

        const sauce =
          String(item.sauce || "").trim();

        const spicyLevel =
          String(item.spicyLevel || "").trim();

        const servingMethod =
          String(item.servingMethod || "").trim();

        if (!allowedSauces.includes(sauce)) {

          return jsonResponse(400, {
            success: false,
            error: "กรุณาเลือกประเภทซอส"
          });

        }

        if (
          sauce === "ซอสหม่าล่า" &&
          !allowedSpicyLevels.includes(spicyLevel)
        ) {

          return jsonResponse(400, {
            success: false,
            error: "กรุณาเลือกระดับความเผ็ด"
          });

        }

        if (!allowedServingMethods.includes(servingMethod)) {

          return jsonResponse(400, {
            success: false,
            error: "กรุณาเลือกวิธีใส่ซอส"
          });

        }

        // ตรวจสอบว่าออเดอร์ใช้ซอสชุดเดียวกัน
        if (!selectedSauce) {

          selectedSauce = sauce;

          selectedSpicyLevel =
            sauce === "ซอสหม่าล่า"
              ? spicyLevel
              : "";

          selectedServingMethod = servingMethod;

        } else {

          const currentSpicyLevel =
            sauce === "ซอสหม่าล่า"
              ? spicyLevel
              : "";

          if (
            selectedSauce !== sauce ||
            selectedSpicyLevel !== currentSpicyLevel ||
            selectedServingMethod !== servingMethod
          ) {

            return jsonResponse(400, {
              success: false,
              error: "กรุณาเลือกซอสแบบเดียวกันสำหรับหม่าล่าทั้งออเดอร์"
            });

          }

        }

      }

    }

    // ======================================
    // ตรวจสอบยอดขั้นต่ำ
    // ======================================

    if (total < 100) {

      return jsonResponse(400, {
        success: false,
        error: "ยอดสั่งซื้อขั้นต่ำ 100 บาท"
      });

    }

    // ======================================
    // สร้างเลขออเดอร์
    // ======================================

    const orderId =
      Date.now().toString();

    // ======================================
    // สร้างข้อความสำหรับ LINE
    // ======================================

    const messageLines = [

      "🌶️🍢 ออเดอร์ใหม่ หม่าล่าสามสหาย",

      "━━━━━━━━━━━━━━",

      `🧾 เลขออเดอร์: ${orderId}`,

      `👤 ลูกค้า: ${name}`,

      `📞 เบอร์โทร: ${phone}`,

      `🚚 วิธีรับสินค้า: ${orderType}`,

      ...(orderType === "จัดส่ง"
        ? [`📍 ที่อยู่: ${address}`]
        : []),

      "",

      "🛒 รายการสินค้า",

      "━━━━━━━━━━━━━━",

      ...lines,

      ""

    ];

    // ======================================
    // เพิ่มรายละเอียดซอส
    // ======================================

    if (hasMala) {

      messageLines.push(
        "🌶️ รายละเอียดซอส"
      );

      messageLines.push(
        `ประเภทซอส: ${selectedSauce}`
      );

      if (selectedSauce === "ซอสหม่าล่า") {

        messageLines.push(
          `ระดับความเผ็ด: ${selectedSpicyLevel}`
        );

      }

      messageLines.push(
        `วิธีใส่ซอส: ${selectedServingMethod}`
      );

      messageLines.push(
        "ค่าแยกซอส: ฟรี"
      );

      messageLines.push("");

    }

    messageLines.push(

      "━━━━━━━━━━━━━━",

      `💰 ยอดรวมทั้งหมด: ${total} บาท`,

      `📝 หมายเหตุ: ${note || "-"}`,

      "━━━━━━━━━━━━━━",

      "❤️ ขอบคุณที่อุดหนุน"

    );

    const message =
      messageLines.join("\n");

    // LINE จำกัดความยาวข้อความ
    if (message.length > 5000) {

      return jsonResponse(400, {
        success: false,
        error: "รายละเอียดออเดอร์ยาวเกินไป"
      });

    }

    // ======================================
    // ส่งข้อความเข้า LINE
    // ======================================

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

          messages: [

            {
              type: "text",
              text: message
            }

          ]

        })

      }
    );

    // ======================================
    // ตรวจสอบผลการส่ง LINE
    // ======================================

    if (!response.ok) {

      const lineError = await response.text();

      console.error(
        "LINE API error:",
        response.status,
        lineError
      );

      return jsonResponse(502, {
        success: false,
        error: "ส่งข้อความเข้า LINE ไม่สำเร็จ"
      });

    }

    // ======================================
    // ส่งสำเร็จ
    // ======================================

    return jsonResponse(200, {

      success: true,

      message: "ส่งคำสั่งซื้อสำเร็จ",

      orderId: orderId,

      total: total

    });

  } catch (error) {

    console.error(
      "Order error:",
      error.message
    );

    return jsonResponse(500, {
      success: false,
      error: "ระบบขัดข้อง กรุณาลองใหม่อีกครั้ง"
    });

  }

};
