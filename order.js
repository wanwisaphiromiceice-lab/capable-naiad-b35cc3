<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>หม่าล่าสามสหาย | สั่งอาหารออนไลน์</title>

<style>
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Tahoma, Arial, sans-serif;
    background: #fff7ed;
    color: #292524;
    line-height: 1.6;
}

header {
    background: linear-gradient(135deg, #7f1d1d, #dc2626, #f97316);
    color: white;
    text-align: center;
    padding: 35px 15px;
}

header h1 {
    margin: 0;
    font-size: 30px;
}

header p {
    margin: 8px 0 0;
}

.container {
    max-width: 900px;
    margin: auto;
    padding: 15px;
}

.notice {
    background: #fef3c7;
    border: 2px solid #f59e0b;
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
}

.card {
    background: white;
    padding: 20px;
    margin: 20px 0;
    border-radius: 16px;
    box-shadow: 0 3px 12px #00000012;
}

h2 {
    color: #991b1b;
    margin-top: 0;
}

.product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 15px 0;
    border-bottom: 1px solid #e5e7eb;
}

.product:last-child {
    border-bottom: none;
}

.product-info {
    flex: 1;
}

.product-name {
    font-size: 16px;
    font-weight: bold;
}

.product-price {
    color: #dc2626;
    font-size: 14px;
}

.quantity {
    display: flex;
    align-items: center;
    gap: 10px;
}

.quantity button {
    width: 38px;
    height: 38px;
    border: none;
    border-radius: 10px;
    background: #dc2626;
    color: white;
    font-size: 22px;
    cursor: pointer;
}

.quantity span {
    min-width: 25px;
    text-align: center;
    font-weight: bold;
}

.sauce-box {
    background: #fff7ed;
    border: 2px solid #fed7aa;
    border-radius: 15px;
    padding: 18px;
    margin-top: 15px;
}

.sauce-title {
    font-size: 17px;
    font-weight: bold;
    color: #991b1b;
    margin-bottom: 12px;
}

.radio-option {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 13px;
    margin: 8px 0;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    background: white;
    cursor: pointer;
}

.radio-option:has(input:checked) {
    border: 2px solid #dc2626;
    background: #fee2e2;
}

.radio-option input {
    width: 20px;
    height: 20px;
    margin: 0;
    accent-color: #dc2626;
}

.radio-option span {
    font-size: 16px;
}

.sauce-note {
    background: #dcfce7;
    color: #166534;
    padding: 12px;
    border-radius: 10px;
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
}

.cart-item {
    padding: 12px 0;
    border-bottom: 1px solid #e5e7eb;
}

.cart-item strong {
    color: #991b1b;
}

.cart-detail {
    font-size: 14px;
    color: #57534e;
    padding-left: 12px;
}

.total {
    text-align: right;
    font-size: 26px;
    font-weight: bold;
    color: #dc2626;
    margin-top: 20px;
}

.status {
    padding: 12px;
    border-radius: 10px;
    background: #fef3c7;
    color: #92400e;
    margin-top: 12px;
}

.status.ok {
    background: #dcfce7;
    color: #166534;
}

.form-label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d6d3d1;
    border-radius: 10px;
    margin-top: 6px;
    font-size: 16px;
    font-family: inherit;
}

.form-textarea {
    min-height: 85px;
    resize: vertical;
}

.submit-btn {
    width: 100%;
    padding: 18px;
    margin-top: 25px;
    border: none;
    border-radius: 12px;
    background: #16a34a;
    color: white;
    font-size: 19px;
    font-weight: bold;
    cursor: pointer;
}

.submit-btn:disabled {
    background: #9ca3af;
    cursor: not-allowed;
}

.secondary-btn {
    width: 100%;
    padding: 13px;
    margin-top: 12px;
    border: 2px solid #16a34a;
    border-radius: 12px;
    background: white;
    color: #166534;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}

.message {
    margin-top: 15px;
    text-align: center;
    font-weight: bold;
    white-space: pre-line;
}

.order-preview {
    margin-top: 18px;
    padding: 15px;
    background: #f0fdf4;
    border: 1px solid #86efac;
    border-radius: 12px;
}

.order-preview textarea {
    width: 100%;
    min-height: 230px;
    margin-top: 10px;
    padding: 12px;
    border: 1px solid #d6d3d1;
    border-radius: 10px;
    font-family: inherit;
    font-size: 14px;
    resize: vertical;
}

footer {
    text-align: center;
    padding: 25px;
    color: #78716c;
}

[hidden] {
    display: none !important;
}

@media (max-width: 480px) {
    .container {
        padding: 10px;
    }

    .card {
        padding: 15px;
    }

    header h1 {
        font-size: 26px;
    }

    .product-name {
        font-size: 14px;
    }
}
</style>
</head>

<body>

<header>
    <h1>🌶️ หม่าล่าสามสหาย 🍢</h1>
    <p>หม่าล่าแซ่บ ๆ พร้อมน้ำปั่นเย็นชื่นใจ 🥤</p>
</header>

<main class="container">

    <div class="notice">
        🛒 สั่งซื้อขั้นต่ำ 100 บาท<br>
        🍢 หม่าล่า 10 บาท/ไม้<br>
        🥤 น้ำปั่น 30 บาท/แก้ว<br>
        🥣 แยกซอสฟรี ไม่มีค่าใช้จ่ายเพิ่มเติม
    </div>

    <!-- เมนูหม่าล่า -->
    <section class="card">
        <h2>🍢 เมนูหม่าล่า</h2>
        <div id="mala-menu"></div>
    </section>

    <!-- เมนูน้ำปั่น -->
    <section class="card">
        <h2>🥤 เมนูน้ำปั่น</h2>
        <div id="drink-menu"></div>
    </section>

    <!-- เลือกซอส -->
    <section class="card" id="sauce-section" hidden>

        <h2>🌶️ เลือกซอสสำหรับหม่าล่า</h2>

        <p>
            กรุณาเลือกประเภทซอส ระดับความเผ็ด
            และวิธีใส่ซอส
        </p>

        <div class="sauce-box">
            <div class="sauce-title">
                1. เลือกประเภทซอส *
            </div>

            <label class="radio-option">
                <input
                    type="radio"
                    name="sauce"
                    value="ซอสหม่าล่า"
                >
                <span>🌶️ ซอสหม่าล่า</span>
            </label>

            <label class="radio-option">
                <input
                    type="radio"
                    name="sauce"
                    value="ซอสบาร์บีคิว"
                >
                <span>🍖 ซอสบาร์บีคิว</span>
            </label>
        </div>

        <div class="sauce-box" id="spicy-section" hidden>
            <div class="sauce-title">
                2. เลือกระดับความเผ็ด *
            </div>

            <label class="radio-option">
                <input
                    type="radio"
                    name="spicyLevel"
                    value="เผ็ดน้อย"
                >
                <span>🌶️ เผ็ดน้อย</span>
            </label>

            <label class="radio-option">
                <input
                    type="radio"
                    name="spicyLevel"
                    value="เผ็ดกลาง"
                >
                <span>🌶️🌶️ เผ็ดกลาง</span>
            </label>

            <label class="radio-option">
                <input
                    type="radio"
                    name="spicyLevel"
                    value="เผ็ดมาก"
                >
                <span>🌶️🌶️🌶️ เผ็ดมาก</span>
            </label>
        </div>

        <div class="sauce-box">
            <div class="sauce-title">
                3. เลือกวิธีใส่ซอส *
            </div>

            <label class="radio-option">
                <input
                    type="radio"
                    name="servingMethod"
                    value="ราดซอส"
                >
                <span>🍢 ราดซอส</span>
            </label>

            <label class="radio-option">
                <input
                    type="radio"
                    name="servingMethod"
                    value="แยกซอส"
                >
                <span>🥣 แยกซอส</span>
            </label>
        </div>

        <div class="sauce-note">
            ❤️ ราดซอสหรือแยกซอสได้ฟรี
            ไม่มีค่าใช้จ่ายเพิ่มเติม
        </div>

    </section>

    <!-- ตะกร้าสินค้า -->
    <section class="card">
        <h2>🛒 ตะกร้าสินค้า</h2>

        <div id="cart-items">
            ยังไม่ได้เลือกสินค้า
        </div>

        <div class="total" id="total-price">
            ยอดรวม 0 บาท
        </div>

        <div class="status" id="minimum-message">
            กรุณาสั่งซื้อขั้นต่ำ 100 บาท
        </div>
    </section>

    <!-- ข้อมูลลูกค้า -->
    <section class="card">

        <h2>📝 ข้อมูลลูกค้า</h2>

        <form id="order-form">

            <label class="form-label" for="customer-name">
                ชื่อลูกค้า *
            </label>

            <input
                class="form-input"
                id="customer-name"
                type="text"
                maxlength="100"
                required
                placeholder="กรอกชื่อลูกค้า"
            >

            <label class="form-label" for="customer-phone">
                เบอร์โทรศัพท์ *
            </label>

            <input
                class="form-input"
                id="customer-phone"
                type="tel"
                inputmode="tel"
                maxlength="20"
                required
                placeholder="08xxxxxxxx"
            >

            <label class="form-label" for="order-type">
                วิธีรับสินค้า *
            </label>

            <select
                class="form-select"
                id="order-type"
                required
            >
                <option value="">
                    -- เลือกวิธีรับสินค้า --
                </option>

                <option value="รับที่ร้าน">
                    รับที่ร้าน
                </option>

                <option value="จัดส่ง">
                    จัดส่ง
                </option>
            </select>

            <div id="address-section" hidden>
                <label class="form-label" for="customer-address">
                    ที่อยู่จัดส่ง *
                </label>

                <textarea
                    class="form-textarea"
                    id="customer-address"
                    maxlength="500"
                    placeholder="กรอกที่อยู่จัดส่ง"
                ></textarea>
            </div>

            <label class="form-label" for="customer-note">
                หมายเหตุเพิ่มเติม
            </label>

            <textarea
                class="form-textarea"
                id="customer-note"
                maxlength="500"
                placeholder="เช่น หวานน้อย ไม่ใส่น้ำแข็ง"
            ></textarea>

            <button
                class="submit-btn"
                id="submit-btn"
                type="submit"
            >
                📲 ส่งออเดอร์เข้า LINE ร้าน
            </button>

            <div
                class="message"
                id="order-message"
                role="status"
            ></div>

            <div class="order-preview" id="order-preview" hidden>
                <strong>📋 ข้อความออเดอร์ของคุณ</strong>

                <p>
                    หาก LINE ไม่แสดงข้อความอัตโนมัติ
                    ให้กดคัดลอก แล้วนำไปวางในแชตของร้าน
                </p>

                <textarea
                    id="order-text"
                    readonly
                ></textarea>

                <button
                    type="button"
                    class="secondary-btn"
                    id="copy-order-btn"
                >
                    📋 คัดลอกข้อความออเดอร์
                </button>

                <button
                    type="button"
                    class="secondary-btn"
                    id="open-line-btn"
                >
                    💚 เปิดแชต LINE ร้านอีกครั้ง
                </button>
            </div>

        </form>

    </section>

</main>

<footer>
    ❤️ ขอบคุณที่อุดหนุนร้านหม่าล่าสามสหาย ❤️
</footer>

<script>

// =====================================
// 1. ตั้งค่าร้าน
// =====================================

const LINE_OA_ID = "@620aykma";

const MINIMUM_ORDER = 100;

const MAX_QUANTITY = 999;

// =====================================
// 2. รายการสินค้า
// =====================================

const products = [

    // หม่าล่า 11 เมนู

    {
        id: "pork",
        name: "หมู",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "chicken",
        name: "ไก่",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "dory",
        name: "ปลาดอลี่",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "cheese_sausage",
        name: "ไส้กรอกชีส",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "red_sausage",
        name: "ไส้กรอกแดงแหลมทอง",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "fish_tofu",
        name: "เต้าหู้ปลาสี่เหลี่ยม",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "pork_yor",
        name: "หมูยอ",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "bologna",
        name: "โบโลน่า",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "crab",
        name: "ปูอัด",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "crispy_sausage",
        name: "ไส้กรอกหนังกรอบ",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    {
        id: "squid",
        name: "หมึกหลอด",
        price: 10,
        unit: "ไม้",
        category: "mala"
    },

    // น้ำปั่น 12 เมนู

    {
        id: "kiwi",
        name: "กีวี่ปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "strawberry",
        name: "สตรอว์เบอร์รีปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "pineapple",
        name: "สับปะรดปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "orange",
        name: "ส้มปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "watermelon",
        name: "แตงโมปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "passionfruit",
        name: "เสาวรสปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "milo",
        name: "ไมโลปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "m150",
        name: "M-150 ปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "loveza_grape",
        name: "เลิฟซ่ารสองุ่นเคียวโฮปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "loveza_honey",
        name: "เลิฟซ่ารสฮันนี่เลมอนปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "loveza_lychee",
        name: "เลิฟซ่ารสลิ้นจี่ปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    },

    {
        id: "loveza_yogurt",
        name: "เลิฟซ่ารสโยเกิร์ตปั่น",
        price: 30,
        unit: "แก้ว",
        category: "drink"
    }

];

// =====================================
// 3. ตะกร้าสินค้า
// =====================================

const cart = {};

let preparedOrderText = "";

let preparedLineUrl = "";

// =====================================
// 4. แสดงสินค้า
// =====================================

function renderProducts() {

    const malaMenu =
        document.getElementById("mala-menu");

    const drinkMenu =
        document.getElementById("drink-menu");

    malaMenu.replaceChildren();
    drinkMenu.replaceChildren();

    products.forEach(product => {

        const row = document.createElement("div");
        row.className = "product";

        const info = document.createElement("div");
        info.className = "product-info";

        const name = document.createElement("div");
        name.className = "product-name";
        name.textContent = product.name;

        const price = document.createElement("div");
        price.className = "product-price";
        price.textContent =
            `${product.price} บาท/${product.unit}`;

        info.append(name, price);

        const quantity = document.createElement("div");
        quantity.className = "quantity";

        const minus = document.createElement("button");
        minus.type = "button";
        minus.textContent = "−";
        minus.setAttribute(
            "aria-label",
            `ลดจำนวน ${product.name}`
        );

        minus.addEventListener("click", () => {
            changeQuantity(product.id, -1);
        });

        const number = document.createElement("span");
        number.id = "qty-" + product.id;
        number.textContent = cart[product.id] || 0;

        const plus = document.createElement("button");
        plus.type = "button";
        plus.textContent = "+";
        plus.setAttribute(
            "aria-label",
            `เพิ่มจำนวน ${product.name}`
        );

        plus.addEventListener("click", () => {
            changeQuantity(product.id, 1);
        });

        quantity.append(minus, number, plus);
        row.append(info, quantity);

        if (product.category === "mala") {
            malaMenu.appendChild(row);
        } else {
            drinkMenu.appendChild(row);
        }

    });

}

// =====================================
// 5. เพิ่มหรือลดจำนวนสินค้า
// =====================================

function changeQuantity(id, amount) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    const current = cart[id] || 0;

    const next = Math.max(
        0,
        Math.min(MAX_QUANTITY, current + amount)
    );

    cart[id] = next;

    document.getElementById(
        "qty-" + id
    ).textContent = next;

    updateSauceVisibility();
    updateCart();
    hidePreparedOrder();

}

// =====================================
// 6. ตรวจสอบว่ามีหม่าล่าหรือไม่
// =====================================

function hasMala() {

    return products.some(product =>
        product.category === "mala" &&
        (cart[product.id] || 0) > 0
    );

}

// =====================================
// 7. แสดงตัวเลือกซอส
// =====================================

function updateSauceVisibility() {

    document.getElementById(
        "sauce-section"
    ).hidden = !hasMala();

}

// =====================================
// 8. อ่านค่าที่เลือก
// =====================================

function getSelectedRadio(name) {

    const selected = document.querySelector(
        `input[name="${name}"]:checked`
    );

    return selected ? selected.value : "";

}

// =====================================
// 9. เลือกซอส
// =====================================

document.querySelectorAll(
    'input[name="sauce"]'
).forEach(input => {

    input.addEventListener("change", () => {

        const sauce = getSelectedRadio("sauce");

        const spicySection =
            document.getElementById("spicy-section");

        if (sauce === "ซอสหม่าล่า") {

            spicySection.hidden = false;

        } else {

            spicySection.hidden = true;

            document.querySelectorAll(
                'input[name="spicyLevel"]'
            ).forEach(radio => {
                radio.checked = false;
            });

        }

        updateCart();
        hidePreparedOrder();

    });

});

document.querySelectorAll(
    'input[name="spicyLevel"], input[name="servingMethod"]'
).forEach(input => {

    input.addEventListener("change", () => {
        updateCart();
        hidePreparedOrder();
    });

});

// =====================================
// 10. คำนวณยอดรวม
// =====================================

function getTotal() {

    return products.reduce((sum, product) => {

        const quantity = cart[product.id] || 0;

        return sum + product.price * quantity;

    }, 0);

}

// =====================================
// 11. แสดงตะกร้า
// =====================================

function updateCart() {

    const container =
        document.getElementById("cart-items");

    container.replaceChildren();

    let hasItems = false;

    products.forEach(product => {

        const quantity = cart[product.id] || 0;

        if (quantity === 0) return;

        hasItems = true;

        const item = document.createElement("div");
        item.className = "cart-item";

        const title = document.createElement("strong");

        title.textContent =
            `${product.name} × ${quantity} ${product.unit}` +
            ` = ${quantity * product.price} บาท`;

        item.appendChild(title);
        container.appendChild(item);

    });

    if (!hasItems) {
        container.textContent = "ยังไม่ได้เลือกสินค้า";
    }

    if (hasMala()) {

        const sauce = getSelectedRadio("sauce");
        const spicyLevel = getSelectedRadio("spicyLevel");
        const servingMethod = getSelectedRadio("servingMethod");

        const detail = document.createElement("div");
        detail.className = "cart-item";

        const heading = document.createElement("strong");
        heading.textContent = "🌶️ รายละเอียดซอส";

        detail.appendChild(heading);

        const lines = [];

        if (sauce) {
            lines.push("ซอส: " + sauce);
        }

        if (sauce === "ซอสหม่าล่า" && spicyLevel) {
            lines.push("ระดับความเผ็ด: " + spicyLevel);
        }

        if (servingMethod) {
            lines.push("วิธีใส่ซอส: " + servingMethod);
        }

        if (lines.length === 0) {
            lines.push("ยังไม่ได้เลือกซอส");
        }

        lines.forEach(text => {
            const line = document.createElement("div");
            line.className = "cart-detail";
            line.textContent = text;
            detail.appendChild(line);
        });

        container.appendChild(detail);

    }

    const total = getTotal();

    document.getElementById(
        "total-price"
    ).textContent = `ยอดรวม ${total} บาท`;

    const minimum =
        document.getElementById("minimum-message");

    if (total < MINIMUM_ORDER) {

        minimum.textContent =
            `⚠️ กรุณาสั่งเพิ่มอีก ${MINIMUM_ORDER - total} บาท`;

        minimum.className = "status";

    } else {

        minimum.textContent =
            "✅ ยอดครบขั้นต่ำ 100 บาทแล้ว";

        minimum.className = "status ok";

    }

}

// =====================================
// 12. เลือกรับสินค้า
// =====================================

document.getElementById("order-type")
.addEventListener("change", function() {

    const isDelivery = this.value === "จัดส่ง";

    document.getElementById(
        "address-section"
    ).hidden = !isDelivery;

    document.getElementById(
        "customer-address"
    ).required = isDelivery;

    hidePreparedOrder();

});

// =====================================
// 13. ตรวจสอบซอส
// =====================================

function validateSauce() {

    if (!hasMala()) return true;

    const sauce = getSelectedRadio("sauce");
    const spicyLevel = getSelectedRadio("spicyLevel");
    const servingMethod = getSelectedRadio("servingMethod");

    if (!sauce) {
        return "กรุณาเลือกประเภทซอส";
    }

    if (
        sauce === "ซอสหม่าล่า" &&
        !spicyLevel
    ) {
        return "กรุณาเลือกระดับความเผ็ด";
    }

    if (!servingMethod) {
        return "กรุณาเลือกวิธีใส่ซอส";
    }

    return true;

}

// =====================================
// 14. สร้างรายการสินค้า
// =====================================

function buildOrderItems() {

    return products
        .filter(product => (cart[product.id] || 0) > 0)
        .map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: cart[product.id],
            unit: product.unit,
            category: product.category
        }));

}

// =====================================
// 15. สร้างข้อความออเดอร์
// =====================================

function buildOrderText(data) {

    const {
        name,
        phone,
        orderType,
        address,
        note,
        items,
        total
    } = data;

    const orderLines = [

        "🌶️🍢 ออเดอร์ใหม่ หม่าล่าสามสหาย",

        "",

        `👤 ชื่อลูกค้า: ${name}`,

        `📞 เบอร์โทร: ${phone}`,

        `🚚 วิธีรับสินค้า: ${orderType}`

    ];

    if (orderType === "จัดส่ง") {
        orderLines.push(`📍 ที่อยู่: ${address}`);
    }

    orderLines.push("", "🛒 รายการสินค้า");

    items.forEach(item => {

        orderLines.push(
            `${item.name} × ${item.quantity} ${item.unit}` +
            ` = ${item.price * item.quantity} บาท`
        );

    });

    if (hasMala()) {

        const sauce = getSelectedRadio("sauce");
        const spicyLevel = getSelectedRadio("spicyLevel");
        const servingMethod = getSelectedRadio("servingMethod");

        orderLines.push(
            "",
            "🌶️ รายละเอียดซอส",
            `ประเภทซอส: ${sauce}`
        );

        if (sauce === "ซอสหม่าล่า") {
            orderLines.push(
                `ระดับความเผ็ด: ${spicyLevel}`
            );
        }

        orderLines.push(
            `วิธีใส่ซอส: ${servingMethod}`,
            "ค่าแยกซอส: ฟรี"
        );

    }

    orderLines.push(
        "",
        `💰 ยอดรวมทั้งหมด: ${total} บาท`,
        `📝 หมายเหตุ: ${note || "-"}`,
        "",
        "กรุณายืนยันคำสั่งซื้อค่ะ ❤️"
    );

    return orderLines.join("\n");

}

// =====================================
// 16. สร้างลิงก์ LINE OA
// =====================================

function buildLineUrl(orderText) {

    return (
        "https://line.me/R/oaMessage/" +
        encodeURIComponent(LINE_OA_ID) +
        "/?" +
        encodeURIComponent(orderText)
    );

}

// =====================================
// 17. ซ่อนข้อความออเดอร์เดิม
// =====================================

function hidePreparedOrder() {

    preparedOrderText = "";
    preparedLineUrl = "";

    document.getElementById(
        "order-preview"
    ).hidden = true;

}

// =====================================
// 18. ตรวจสอบและเปิด LINE
// =====================================

document.getElementById("order-form")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const message =
        document.getElementById("order-message");

    message.textContent = "";

    const total = getTotal();

    if (total < MINIMUM_ORDER) {

        message.style.color = "red";

        message.textContent =
            "❌ ยอดสั่งซื้อขั้นต่ำ 100 บาท";

        return;

    }

    const sauceValidation = validateSauce();

    if (sauceValidation !== true) {

        message.style.color = "red";

        message.textContent =
            "❌ " + sauceValidation;

        document.getElementById(
            "sauce-section"
        ).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        return;

    }

    const name =
        document.getElementById("customer-name")
        .value.trim();

    const phone =
        document.getElementById("customer-phone")
        .value.trim();

    const orderType =
        document.getElementById("order-type").value;

    const address =
        document.getElementById("customer-address")
        .value.trim();

    const note =
        document.getElementById("customer-note")
        .value.trim();

    if (!name || !phone || !orderType) {

        message.style.color = "red";

        message.textContent =
            "❌ กรุณากรอกข้อมูลลูกค้าให้ครบ";

        return;

    }

    if (orderType === "จัดส่ง" && !address) {

        message.style.color = "red";

        message.textContent =
            "❌ กรุณากรอกที่อยู่จัดส่ง";

        return;

    }

    const items = buildOrderItems();

    const orderData = {
        name,
        phone,
        orderType,
        address: orderType === "จัดส่ง" ? address : "",
        note,
        items,
        total
    };

    preparedOrderText = buildOrderText(orderData);
    preparedLineUrl = buildLineUrl(preparedOrderText);

    document.getElementById(
        "order-text"
    ).value = preparedOrderText;

    document.getElementById(
        "order-preview"
    ).hidden = false;

    message.style.color = "#166534";

    message.textContent =
        "✅ เตรียมข้อความออเดอร์แล้ว\n" +
        "กรุณากดส่งข้อความใน LINE เพื่อยืนยันออเดอร์";

    // เปิดแชต LINE OA พร้อมข้อความออเดอร์
    window.location.href = preparedLineUrl;

});

// =====================================
// 19. คัดลอกข้อความออเดอร์
// =====================================

document.getElementById("copy-order-btn")
.addEventListener("click", async function() {

    if (!preparedOrderText) return;

    const message =
        document.getElementById("order-message");

    try {

        await navigator.clipboard.writeText(
            preparedOrderText
        );

        message.style.color = "#166534";

        message.textContent =
            "✅ คัดลอกข้อความแล้ว\n" +
            "นำไปวางในแชต LINE ของร้านและกดส่งได้เลย";

    } catch (error) {

        const textarea =
            document.getElementById("order-text");

        textarea.focus();
        textarea.select();

        message.style.color = "#92400e";

        message.textContent =
            "กรุณาคัดลอกข้อความที่เลือกไว้ " +
            "แล้วนำไปวางใน LINE";

    }

});

// =====================================
// 20. เปิด LINE อีกครั้ง
// =====================================

document.getElementById("open-line-btn")
.addEventListener("click", function() {

    if (!preparedLineUrl) return;

    window.location.href = preparedLineUrl;

});

// =====================================
// 21. เมื่อแก้ข้อมูลลูกค้า
// ให้เตรียมออเดอร์ใหม่
// =====================================

[
    "customer-name",
    "customer-phone",
    "customer-address",
    "customer-note"
].forEach(id => {

    document.getElementById(id)
    .addEventListener("input", hidePreparedOrder);

});

// =====================================
// 22. เริ่มต้นเว็บไซต์
// =====================================

renderProducts();

updateSauceVisibility();

updateCart();

</script>

</body>
</html>
