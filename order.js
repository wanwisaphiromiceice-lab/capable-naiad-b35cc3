<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>หม่าล่าสามสหาย | สั่งอาหารออนไลน์</title>

<style>
*{box-sizing:border-box}
body{margin:0;background:#fff7ed;color:#292524;font:16px Tahoma,Arial,sans-serif}
header{background:linear-gradient(120deg,#991b1b,#ea580c);color:white;text-align:center;padding:26px 12px}
h1{margin:0 0 8px}
nav{position:sticky;top:0;display:flex;gap:8px;justify-content:center;background:white;padding:10px;box-shadow:0 2px 8px #0002;z-index:2}
main{max-width:900px;margin:auto;padding:12px}
.card{background:white;border-radius:16px;padding:18px;margin:14px 0;box-shadow:0 3px 10px #0001}
h2{color:#991b1b;margin:0 0 12px}
button{border:0;border-radius:10px;padding:11px 13px;font:inherit;font-weight:bold;cursor:pointer}
button:disabled{opacity:.55}
.red{background:#dc2626;color:white}
.green{background:#15803d;color:white}
.blue{background:#2563eb;color:white}
.dark{background:#292524;color:white}
.gray{background:#e7e5e4}
.full{width:100%;margin-top:14px;padding:15px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:10px}
.product{border:1px solid #eee;border-radius:12px;padding:13px;text-align:center}
.product b{display:block;min-height:45px}
.product .icon{font-size:35px}
.price{color:#dc2626;font-weight:bold;margin:8px}
.row{display:flex;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid #eee;padding:12px 0}
.qty{display:flex;align-items:center;gap:10px}
.qty button{padding:7px 12px}
label{display:block;margin-top:12px;font-weight:bold}
input,select,textarea{display:block;width:100%;padding:12px;border:1px solid #d6d3d1;border-radius:9px;margin-top:6px;font:inherit}
textarea{resize:vertical}
.notice{background:#ffedd5;padding:13px;border-radius:10px;margin:14px 0;line-height:1.7}
.total{text-align:right;color:#b91c1c;font-size:23px;font-weight:bold}
.error{color:#b91c1c;font-weight:bold}
.ok{color:#166534;font-weight:bold}
[hidden]{display:none!important}
.status{background:#fef3c7;border-radius:14px;padding:22px;text-align:center;font-size:22px}
.order{border:1px solid #ddd;border-radius:12px;padding:15px;margin:12px 0;line-height:1.8;overflow-wrap:anywhere}
.order button{margin:5px 0}
footer{text-align:center;color:#777;padding:24px}
@media(max-width:500px){
.grid{grid-template-columns:repeat(2,1fr)}
nav button{font-size:12px;padding:10px 6px}
}
</style>
</head>

<body>

<header>
<h1>🌶️ หม่าล่าสามสหาย ❤️</h1>
<div>🍢 หม่าล่าไม้ละ 10 บาท • 🥤 น้ำปั่นแก้วละ 30 บาท</div>
</header>

<nav>
<button class="red" onclick="page('shop')">🛒 สั่งอาหาร</button>
<button class="blue" onclick="openTracking()">📦 ติดตาม</button>
<button class="dark" onclick="page('admin')">🔐 สำหรับร้าน</button>
</nav>

<main>

<section id="shop">

<div class="notice">
ขั้นต่ำ 100 บาท (ไม่รวมค่าจัดส่ง)<br>
ค่าจัดส่ง 20 บาท • รับเองฟรี<br>
ไม่มีระบบยกเลิกออเดอร์
</div>

<div class="card">
<h2>🍢 เมนูหม่าล่า</h2>
<div id="malaMenu" class="grid"></div>
</div>

<div class="card">
<h2>🥤 เมนูน้ำปั่น</h2>
<div id="drinkMenu" class="grid"></div>
</div>

<div class="card">
<h2>🛒 ตะกร้าสินค้า</h2>
<div id="cart"></div>
<p id="subtotal"></p>
<p id="deliveryFee"></p>
<div class="total" id="total"></div>
</div>

<div class="card">
<h2>📝 ข้อมูลลูกค้า</h2>

<label>ชื่อผู้สั่ง
<input id="name" maxlength="100" placeholder="ชื่อ-นามสกุล">
</label>

<label>เบอร์โทรศัพท์
<input id="phone" type="tel" maxlength="10" placeholder="08xxxxxxxx">
</label>

<label>วิธีรับสินค้า
<select id="orderType" onchange="renderCart()">
<option value="delivery">จัดส่ง (+20 บาท)</option>
<option value="pickup">รับเองที่ร้าน (ฟรี)</option>
</select>
</label>

<label id="addressLabel">ที่อยู่จัดส่ง
<textarea id="address" maxlength="500" placeholder="บ้านเลขที่ ซอย หมู่บ้าน จุดสังเกต"></textarea>
</label>

<label>วิธีชำระเงิน
<select id="payment">
<option value="cash">เงินสด / เก็บเงินปลายทาง</option>
<option value="transfer">โอนเงิน</option>
</select>
</label>

<div id="sauceBox">

<label>เลือกซอส
<select id="sauce" onchange="renderSauce()">
<option value="">-- เลือกซอส --</option>
<option>ซอสหม่าล่า</option>
<option>ซอสบาร์บีคิว</option>
</select>
</label>

<label id="spicyLabel">ระดับความเผ็ด
<select id="spicy">
<option value="">-- เลือกระดับ --</option>
<option>เผ็ดน้อย</option>
<option>เผ็ดกลาง</option>
<option>เผ็ดมาก</option>
</select>
</label>

<label>วิธีใส่ซอส
<select id="sauceMethod">
<option value="">-- เลือกวิธี --</option>
<option>ราดซอส</option>
<option>แยกซอส</option>
</select>
</label>

</div>

<label>หมายเหตุ
<textarea id="note" maxlength="500" placeholder="รายละเอียดเพิ่มเติม"></textarea>
</label>

<div class="notice">
กดยืนยันเพียงครั้งเดียว ระบบจะบันทึกออเดอร์ก่อนแสดงเลขคำสั่งซื้อ
</div>

<button id="submitBtn" class="green full" onclick="submitOrder()">
✅ ยืนยันคำสั่งซื้อ
</button>

<p class="error" id="submitError"></p>

</div>
</section>

<section id="tracking" hidden>
<div class="card">

<h2>📦 ติดตามสถานะ</h2>

<p>เลขออเดอร์: <strong id="orderId"></strong></p>
<p id="trackTotal"></p>

<div class="status" id="status">กำลังโหลด...</div>

<p class="error" id="trackError"></p>

<button class="blue full" onclick="refreshTracking()">
🔄 อัปเดตสถานะ
</button>

<p>ตรวจสอบอัตโนมัติทุก 10 วินาที</p>

</div>
</section>

<section id="admin" hidden>
<div class="card">

<h2>🔐 จัดการออเดอร์ร้าน</h2>

<div id="loginBox">

<label>รหัสผ่านร้าน
<input id="adminPassword" type="password" autocomplete="current-password">
</label>

<button class="dark full" onclick="login()">เข้าสู่ระบบ</button>

<p class="error" id="loginError"></p>

</div>

<div id="dashboard" hidden>

<button class="blue" onclick="loadOrders()">🔄 รีเฟรชออเดอร์</button>
<button class="gray" onclick="logout()">ออกจากระบบ</button>

<div id="orders"></div>

</div>
</div>
</section>

</main>

<footer>❤️ ขอบคุณที่อุดหนุนร้านหม่าล่าสามสหาย ❤️</footer>

<script>
"use strict";

const API="/.netlify/functions/order";

const PRODUCTS=[
["M01","หมู",10],
["M02","ไก่",10],
["M03","ปลาดอลี่",10],
["M04","ไส้กรอกชีส",10],
["M05","ไส้กรอกแดงแหลมทอง",10],
["M06","เต้าหู้ปลาสี่เหลี่ยม",10],
["M07","หมูยอ",10],
["M08","โบโลน่า",10],
["M09","ปูอัด",10],
["M10","ไส้กรอกหนังกรอบ",10],
["M11","หมึกหลอด",10],

["D01","กีวี่ปั่น",30],
["D02","สตรอว์เบอร์รีปั่น",30],
["D03","สับปะรดปั่น",30],
["D04","ส้มปั่น",30],
["D05","แตงโมปั่น",30],
["D06","เสาวรสปั่น",30],
["D07","ไมโลปั่น",30],
["D08","M-150 ปั่น",30],
["D09","เลิฟซ่าองุ่นเคียวโฮปั่น",30],
["D10","เลิฟซ่าฮันนี่เลมอนปั่น",30],
["D11","เลิฟซ่าลิ้นจี่ปั่น",30],
["D12","เลิฟซ่าโยเกิร์ตปั่น",30]
];

const $=id=>document.getElementById(id);

const cart={};

let current=null;
let adminToken="";
let trackTimer=null;
let adminTimer=null;
let busy=false;

const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#39;"
}[c]));

const money=n=>Number(n||0).toLocaleString("th-TH")+" บาท";

function menus(){
PRODUCTS.forEach(([id,name,price])=>{
const d=document.createElement("div");
d.className="product";

d.innerHTML=`
<div class="icon">${id[0]==="M"?"🍢":"🥤"}</div>
<b>${esc(name)}</b>
<div class="price">${money(price)}</div>
<button class="red">+ เพิ่ม</button>
`;

d.querySelector("button").onclick=()=>{
cart[id]=Math.min(100,(cart[id]||0)+1);
renderCart();
};

$(id[0]==="M"?"malaMenu":"drinkMenu").append(d);
});
}

function items(){
return PRODUCTS
.filter(([id])=>cart[id]>0)
.map(([id,name,price])=>({
id,name,price,qty:cart[id]
}));
}

function subtotal(){
return items().reduce((s,p)=>s+p.price*p.qty,0);
}

function fee(){
return $("orderType").value==="delivery"?20:0;
}

function mala(){
return items().some(x=>x.id.startsWith("M"));
}

function renderSauce(){
$("spicyLabel").hidden=$("sauce").value!=="ซอสหม่าล่า";
}

function renderCart(){

const box=$("cart");
box.replaceChildren();

const selected=items();

if(!selected.length){
box.textContent="ยังไม่มีสินค้าในตะกร้า";
}

selected.forEach(p=>{

const row=document.createElement("div");
row.className="row";

const label=document.createElement("span");
label.textContent=`${p.name} × ${p.qty} = ${money(p.price*p.qty)}`;

const buttons=document.createElement("div");
buttons.className="qty";

for(const [symbol,delta] of [["−",-1],["+",1]]){

const b=document.createElement("button");
b.className=delta===1?"red":"gray";
b.textContent=symbol;

b.onclick=()=>{
cart[p.id]=Math.max(0,Math.min(100,(cart[p.id]||0)+delta));
renderCart();
};

buttons.append(b);
}

row.append(label,buttons);
box.append(row);

});

$("subtotal").textContent="ค่าอาหาร: "+money(subtotal());
$("deliveryFee").textContent="ค่าจัดส่ง: "+money(fee());
$("total").textContent="รวม "+money(subtotal()+fee());

$("addressLabel").hidden=$("orderType").value!=="delivery";
$("sauceBox").hidden=!mala();

renderSauce();
}

async function api(action,extra={}){

const r=await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({action,...extra})
});

let j;

try{
j=await r.json();
}catch{
throw Error("ติดต่อระบบหลังบ้านไม่ได้ กรุณาตรวจสอบว่าเว็บไซต์เผยแพร่บน Netlify แล้ว");
}

if(!r.ok||j.success===false){
throw Error(j.message||"เกิดข้อผิดพลาด");
}

return j;
}

async function submitOrder(){

if(busy)return;

$("submitError").textContent="";

if(subtotal()<100){
$("submitError").textContent="กรุณาสั่งซื้อขั้นต่ำ 100 บาท";
return;
}

const payload={
customerName:$("name").value.trim(),
phone:$("phone").value.trim(),
orderType:$("orderType").value,
address:$("address").value.trim(),
payment:$("payment").value,
sauce:mala()?$("sauce").value:"",
spicy:mala()?$("spicy").value:"",
sauceMethod:mala()?$("sauceMethod").value:"",
note:$("note").value.trim(),
items:items()
};

if(!payload.customerName||!/^0\d{9}$/.test(payload.phone)){
$("submitError").textContent="กรุณากรอกชื่อและเบอร์โทร 10 หลัก";
return;
}

if(payload.orderType==="delivery"&&!payload.address){
$("submitError").textContent="กรุณากรอกที่อยู่จัดส่ง";
return;
}

if(mala()&&(
!payload.sauce||
!payload.sauceMethod||
(payload.sauce==="ซอสหม่าล่า"&&!payload.spicy)
)){
$("submitError").textContent="กรุณาเลือกซอส ระดับความเผ็ด และวิธีใส่ซอส";
return;
}

busy=true;
$("submitBtn").disabled=true;
$("submitBtn").textContent="⏳ กำลังบันทึกออเดอร์...";

try{

const r=await api("createOrder",{payload});

if(!r.orderId||!r.trackingKey){
throw Error("ยังไม่ได้รับการยืนยันจากระบบ");
}

current={
orderId:r.orderId,
trackingKey:r.trackingKey
};

localStorage.setItem("malaLastOrder",JSON.stringify(current));

for(const k of Object.keys(cart)){
delete cart[k];
}

renderCart();
page("tracking");

$("orderId").textContent=r.orderId;
$("trackTotal").textContent="ยอดรวม "+money(r.total);

await refreshTracking();

}catch(e){

$("submitError").textContent=
"❌ "+e.message+
" หากไม่แน่ใจว่าออเดอร์ถูกบันทึกหรือไม่ กรุณาติดต่อร้านก่อนกดซ้ำ";

}finally{

busy=false;
$("submitBtn").disabled=false;
$("submitBtn").textContent="✅ ยืนยันคำสั่งซื้อ";

}
}

function openTracking(){

try{
current=JSON.parse(localStorage.getItem("malaLastOrder")||"null");
}catch{}

if(!current){
alert("ยังไม่มีออเดอร์สำหรับติดตาม");
return;
}

page("tracking");
refreshTracking();
}

async function refreshTracking(){

if(!current)return;

$("trackError").textContent="";

try{

const o=await api("getOrderStatus",current);

$("orderId").textContent=o.orderId;
$("trackTotal").textContent="ยอดรวม "+money(o.total);

const statuses={
preparing:"🟠 กำลังเตรียมอาหาร",
delivering:"🔵 กำลังจัดส่ง",
ready_pickup:"🟢 รอรับสินค้า",
completed:o.orderType==="pickup"
?"✅ รับสินค้าเรียบร้อย"
:"✅ จัดส่งสำเร็จ"
};

$("status").textContent=statuses[o.status]||"ไม่ทราบสถานะ";

}catch(e){
$("trackError").textContent=e.message;
}
}

function page(id){

for(const x of ["shop","tracking","admin"]){
$(x).hidden=x!==id;
}

clearInterval(trackTimer);
clearInterval(adminTimer);

if(id==="tracking"&&current){
trackTimer=setInterval(refreshTracking,10000);
}

if(id==="admin"&&adminToken){
adminTimer=setInterval(loadOrders,15000);
}

window.scrollTo(0,0);
}

async function login(){

$("loginError").textContent="";

try{

const r=await api("adminLogin",{
password:$("adminPassword").value
});

adminToken=r.token;

$("adminPassword").value="";
$("loginBox").hidden=true;
$("dashboard").hidden=false;

await loadOrders();

clearInterval(adminTimer);
adminTimer=setInterval(loadOrders,15000);

}catch(e){
$("loginError").textContent=e.message;
}
}

function logout(){

adminToken="";
clearInterval(adminTimer);

$("loginBox").hidden=false;
$("dashboard").hidden=true;
$("orders").replaceChildren();
}

async function loadOrders(){

if(!adminToken)return;

try{

const r=await api("getAdminOrders",{token:adminToken});

const box=$("orders");
box.replaceChildren();

if(!r.orders.length){
box.textContent="ยังไม่มีคำสั่งซื้อ";
return;
}

for(const o of r.orders){

const d=document.createElement("div");
d.className="order";

const status={
preparing:"🟠 กำลังเตรียมอาหาร",
delivering:"🔵 กำลังจัดส่ง",
ready_pickup:"🟢 รอรับสินค้า",
completed:"✅ เสร็จสิ้น"
}[o.status]||o.status;

d.innerHTML=`
<b>${esc(o.orderId)}</b><br>
👤 ${esc(o.customerName)}<br>
☎️ ${esc(o.phone)}<br>
📍 ${esc(o.orderType==="delivery"?o.address:"รับเองที่ร้าน")}<br>
🍢 ${o.items.map(x=>esc(x.name)+" × "+x.qty).join("<br>🍢 ")}<br>
🌶️ ${esc(o.sauce||"-")} / ${esc(o.spicy||"-")} / ${esc(o.sauceMethod||"-")}<br>
📝 ${esc(o.note||"-")}<br>
💳 ${o.payment==="transfer"?"โอนเงิน":"เงินสด"}<br>
💰 ${money(o.total)}<br>
📦 ${esc(status)}<br>
`;

let next="";
let caption="";

if(o.status==="preparing"){

next=o.orderType==="delivery"?"delivering":"ready_pickup";
caption="🍢 อาหารเสร็จพร้อมส่ง";

}else if(["delivering","ready_pickup"].includes(o.status)){

next="completed";

caption=o.orderType==="delivery"
?"✅ ส่งออเดอร์เรียบร้อย"
:"✅ รับสินค้าเรียบร้อย";
}

if(next){

const b=document.createElement("button");
b.className=next==="completed"?"green":"blue";
b.textContent=caption;

b.onclick=()=>changeStatus(o.orderId,next);

d.append(b);
}

box.append(d);
}

}catch(e){

$("orders").textContent="โหลดออเดอร์ไม่สำเร็จ: "+e.message;

}
}

async function changeStatus(orderId,nextStatus){

if(!confirm("ยืนยันการเปลี่ยนสถานะ "+orderId+" ?")){
return;
}

try{

const r=await api("updateOrderStatus",{
token:adminToken,
orderId,
nextStatus
});

if(r.lineNotification==="failed"){
alert("บันทึกสถานะแล้ว แต่แจ้ง LINE ไม่สำเร็จ");
}

await loadOrders();

}catch(e){
alert("❌ "+e.message);
}
}

menus();
renderCart();

try{
current=JSON.parse(localStorage.getItem("malaLastOrder")||"null");
}catch{}

</script>
</body>
</html>
