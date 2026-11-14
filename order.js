const products = {'หมูสามชั้น':15,'ไก่หมัก':10,'ลูกชิ้นหมู':10,'ไส้กรอกชีส':15,'เห็ดเข็มทอง':10,'ปูอัด':10};
const spices = ['ไม่เผ็ด','เผ็ดน้อย','เผ็ดกลาง','เผ็ดมาก'];
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return {statusCode:405,body:JSON.stringify({error:'Method not allowed'})};
  try {
    if ((event.body||'').length>12000) throw Error('ข้อมูลยาวเกินไป');
    const b=JSON.parse(event.body||'{}');
    if(typeof b.customer!=='string'||!b.customer.trim()||b.customer.length>100||!Array.isArray(b.items)||!b.items.length||b.items.length>20||!spices.includes(b.spice)) throw Error('ข้อมูลคำสั่งซื้อไม่ถูกต้อง');
    let total=0;
    const lines=b.items.map(item=>{
      if(!Object.hasOwn(products,item.name)||!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>100) throw Error('รายการสินค้าไม่ถูกต้อง');
      const cost=products[item.name]*item.quantity;total+=cost;
      return `${item.name} ${item.quantity} ไม้ — ${cost} บาท`;
    });
    const phone=String(b.phone||'').slice(0,30),notes=String(b.notes||'').slice(0,500);
    const orderId=Date.now().toString(36).toUpperCase();
    const msg=`🌶️ ออเดอร์ใหม่ หม่าล่าสามสหาย\nเลขออเดอร์: ${orderId}\nลูกค้า: ${b.customer.trim()}\nโทร: ${phone||'-'}\n${lines.join('\n')}\nระดับเผ็ด: ${b.spice}\nหมายเหตุ: ${notes||'-'}\nยอดรวม: ${total} บาท`;
    const token=process.env.LINE_CHANNEL_ACCESS_TOKEN;
    const to=process.env.LINE_SHOP_USER_ID;
    if(!token||!to) return {statusCode:503,body:JSON.stringify({error:'ร้านยังตั้งค่าระบบแจ้งเตือนไม่ครบ'})};
    const r=await fetch('https://api.line.me/v2/bot/message/push',{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify({to,messages:[{type:'text',text:msg}]})});
    if(!r.ok){console.error('LINE push failed',r.status,(await r.text()).slice(0,500));return {statusCode:502,body:JSON.stringify({error:'LINE ยังไม่รับคำสั่งซื้อ กรุณาติดต่อร้าน'})}}
    return {statusCode:200,headers:{'Content-Type':'application/json'},body:JSON.stringify({ok:true,orderId})};
  }catch(e){return {statusCode:400,headers:{'Content-Type':'application/json'},body:JSON.stringify({error:e.message||'ข้อมูลไม่ถูกต้อง'})}}
};
