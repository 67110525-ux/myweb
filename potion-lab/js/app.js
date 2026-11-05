const colorsData = [
  { id:'c1', name:'เขียวมรกต', value:'Emerald Green', hex:'#10b981' },
  { id:'c2', name:'ทอง', value:'Gold', hex:'#fbbf24' },
  { id:'c3', name:'ส้มฮาโลวีน', value:'Halloween Orange', hex:'#f97316' },
  { id:'c4', name:'ม่วงเวทมนตร์', value:'Magical Purple', hex:'#a855f7' },
  { id:'c5', name:'ดำสนิท', value:'Pitch Black', hex:'#1f2937' },
  { id:'c6', name:'แดงเลือด', value:'Blood Red', hex:'#ef4444' },
  { id:'c7', name:'น้ำเงินไซเบอร์', value:'Cyber Blue', hex:'#3b82f6' },
  { id:'c8', name:'ขาววิญญาณ', value:'Spirit White', hex:'#f3f4f6' },
  { id:'c9', name:'ชมพูนีออน', value:'Neon Pink', hex:'#ec4899' },
  { id:'c10', name:'เหลืองสายฟ้า', value:'Lightning Yellow', hex:'#eab308' },
  { id:'c11', name:'ฟ้าใส', value:'Clear Light Blue', hex:'#0ea5e9' },
  { id:'c12', name:'เงินเมทัลลิก', value:'Metallic Silver', hex:'#9ca3af' }
];
const potionsData = [
  { id:'potion1', name:'ยานิทรา', desc:'(หลับลึกและสงบ)', color:'#4a69ff', icon:'🌙', skill:'พักผ่อนผ่อนคลาย • สร้างความสงบ', path:'Health & Wellness Tech', mission:'จดบันทึกสถิติการนอนและความรู้สึกหลังตื่นนอนติดต่อกัน 3 วัน' },
  { id:'potion2', name:'ยาหัวเราะร่า', desc:'(ความสุขไม่รู้จบ)', color:'#ffcc00', icon:'😊', skill:'สื่อสารเชิงบวก • สร้างรอยยิ้ม', path:'Creative Content & Entertainment', mission:'ออกแบบคอนเทนต์สร้างเสียงหัวเราะแล้วลองแชร์ให้เพื่อนดู' },
  { id:'potion3', name:'ยาเริงระบำ', desc:'(สัมผัสจังหวะ)', color:'#ff66b2', icon:'💃', skill:'จับจังหวะ • แสดงออกอย่างมั่นใจ', path:'Sound & Motion Art Design', mission:'ลองออกแบบจังหวะหรือท่าทางสั้นๆ 15 วินาที แล้วซ้อมแสดง' },
  { id:'potion4', name:'ยาเสน่หา', desc:'(รักเปี่ยมล้นเสมอ)', color:'#ff3333', icon:'❤️', skill:'เข้าอกเข้าใจ • เชื่อมโยงผู้คน', path:'User Experience (UX) & Human Relations', mission:'ส่งข้อความชมเชยและขอบคุณเพื่อน 3 คนด้วยความจริงใจ' },
  { id:'potion5', name:'ยาล่องหน', desc:'(หายตัวได้ทุกเมื่อ)', color:'#ffffff', icon:'✨', skill:'สังเกตการณ์ • คิดวิเคราะห์ลึกซึ้ง', path:'Cyber Security & Forensic Data Analysis', mission:'ค้นหาเบาะแสและคำตอบในปริศนา 1 ข้อโดยไม่เปิดดูคำใบ้' },
  { id:'potion6', name:'ยาเยียวยา', desc:'(รักษาบาดแผล)', color:'#33cc33', icon:'🌿', skill:'ฟื้นฟูระบบ • แก้ไขข้อผิดพลาด', path:'Software Maintenance & Health Tech', mission:'หาสาเหตุของปัญหาหรือ Bug ที่เกิดขึ้นแล้วแก้ไข 1 อย่าง' },
  { id:'potion7', name:'ยาความมั่นใจ', desc:'(เชื่อมั่นในตัวเอง)', color:'#9933ff', icon:'👑', skill:'กล้านำเสนอ • การตัดสินใจเด็ดขาด', path:'Digital Leadership & Management', mission:'อาสานำเสนอไอเดียในกลุ่มเป็นคนแรกในการทำงานครั้งถัดไป' },
  { id:'potion8', name:'ยาสมาธิ', desc:'(จิตใจปลอดโปร่ง)', color:'#0066ff', icon:'👁️', skill:'โฟกัสแน่วแน่ • การคิดเชิงตรรกะ', path:'Software Engineering & System Architecture', mission:'เขียนโค้ดหรือโฟกัสงานต่อเนื่อง 25 นาทีโดยไม่แตะโทรศัพท์' },
  { id:'potion9', name:'ยาจอมพลัง', desc:'(พลังงานไร้ขีดจำกัด)', color:'#ff4500', icon:'🔥', skill:'ผลักดันโปรเจกต์ • ลุยงานท้าทาย', path:'Startup Founder & Agile Project Management', mission:'เลือกภารกิจที่ยากที่สุดในรายการงานทำทันทีจนเสร็จ' },
  { id:'potion10', name:'ยาข้ามเวลา', desc:'(อดีตหรืออนาคต)', color:'#3333cc', icon:'⏳', skill:'วางแผนอนาคต • วิเคราะห์แนวโน้ม', path:'Data Analytics & Trend Forecasting', mission:'เขียน Timeline วางแผนเป้าหมายพัฒนาตนเองใน 1 ปีข้างหน้า' },
  { id:'potion11', name:'ยาแห่งปัญญา', desc:'(มองเห็นความจริง)', color:'#00cccc', icon:'📖', skill:'ค้นหาคำตอบ • แก้ปริศนา • เล่าให้เข้าใจ', path:'การพัฒนาโปรแกรม • Data Science / Analytics', mission:'เขียนขั้นตอนสั่งหุ่นยนต์ไปถึงเป้าหมาย 5 ช่อง แล้วลองให้เพื่อนทำตาม' },
  { id:'potion12', name:'ยาโชคดีมหาศาล', desc:'(สิ่งดีๆ กำลังมา)', color:'#cc33ff', icon:'🍀', skill:'เปิดรับสิ่งใหม่ • การบริหารโอกาส', path:'Game Innovation & EdTech Design', mission:'สุ่มลองทำกิจกรรมใหม่ที่ไม่เคยทำมาก่อน 1 อย่างในสัปดาห์นี้' }
];

/* Short-title parts, card tone and mascot motif for each potion */
const LORE = {
  potion1:{ role:'ผู้รักษาความสงบ', realm:'แห่งราตรี', tone:'น้ำเงินไพลิน',
    body:'ผีน้อยตาปรือง่วงงุนน่าเอ็นดู สวมหมวกนอนทรงแม่มดลายพระจันทร์ เรืองแสงสีฟ้าอ่อน', item:'ตะเกียงพระจันทร์เสี้ยวเรืองแสง', fx:'พระจันทร์เสี้ยวดวงจิ๋วและดาวระยิบระยับ' },
  potion2:{ role:'นักสร้างรอยยิ้ม', realm:'แห่งเสียงหัวเราะ', tone:'ทองอำพัน',
    body:'ผีน้อยหัวเราะร่าเริงจนตาหยี สวมหมวกแม่มดเอียงๆ ประดับฟักทองจิ๋ว เรืองแสงสีทองอุ่น', item:'ลูกอมฮาโลวีนห่อกระดาษแวววาว', fx:'ฟองแสงสีทองระยิบ' },
  potion3:{ role:'นักสร้างจังหวะ', realm:'แห่งท่วงทำนอง', tone:'ชมพูบานเย็น',
    body:'ผีน้อยกำลังหมุนตัวเต้นรำ ชายผ้าบานพลิ้วเหมือนกระโปรงบัลเลต์ ติดโบว์ใหญ่สีชมพู เรืองแสงสีชมพู', item:'แทมบูรีนทองประดับริบบิ้น', fx:'ตัวโน้ตดนตรีเรืองแสง' },
  potion4:{ role:'นักเชื่อมใจ', realm:'แห่งมิตรภาพ', tone:'แดงทับทิม',
    body:'ผีน้อยแก้มแดงเขินอาย สวมหมวกแม่มดประดับหัวใจ เรืองแสงสีชมพูอมแดง', item:'ซองจดหมายผนึกตราหัวใจ', fx:'หัวใจดวงเล็กเรืองแสง' },
  potion5:{ role:'นักสืบเงา', realm:'แห่งความลับ', tone:'เงินยวงเรืองแสง',
    body:'ผีน้อยร่างใสกว่าปกติ ครึ่งหายครึ่งปรากฏ สวมหมวกนักสืบ ทำหน้าเจ้าเล่ห์น่ารัก เรืองแสงสีเงิน', item:'แว่นขยายทอง', fx:'หมอกควันโปร่งแสงวนเป็นเกลียว' },
  potion6:{ role:'ผู้ฟื้นฟู', realm:'แห่งการเยียวยา', tone:'เขียวมรกตนีออน',
    body:'ผีน้อยใบหน้าใจดี สวมมงกุฎดอกไม้และใบไม้เรืองแสง เรืองแสงสีเขียวอ่อน', item:'ขวดยาเยียวยาสีเขียวเรืองแสง', fx:'ใบไม้เรืองแสงหมุนวน' },
  potion7:{ role:'ผู้นำ', realm:'แห่งความกล้า', tone:'ม่วงอเมทิสต์',
    body:'ผีน้อยท่าทางมั่นใจ ยืดตัวตรง สวมมงกุฎทองและผ้าคลุมกำมะหยี่สีม่วง เรืองแสงสีม่วงอ่อน', item:'คทาทองหัวคริสตัล', fx:'ดาวทองประกายแสง' },
  potion8:{ role:'สถาปนิก', realm:'แห่งระบบ', tone:'ฟ้าคริสตัล',
    body:'ผีน้อยหลับตาทำสมาธิลอยนิ่งอย่างสงบ สวมหมวกแม่มดประดับอัญมณีสีฟ้า เรืองแสงสีฟ้าคริสตัล', item:'ม้วนพิมพ์เขียวเวทมนตร์', fx:'วงแหวนเวทเรขาคณิตเรืองแสง' },
  potion9:{ role:'นักบุกเบิก', realm:'แห่งเปลวไฟ', tone:'ส้มเปลวเพลิง',
    body:'ผีน้อยฮึกเหิมชูกำปั้นเล็กๆ สวมผ้าโพกหัวลายเปลวไฟ เรืองแสงสีส้มอุ่น', item:'คบเพลิงไฟลุกโชน', fx:'ประกายไฟและถ่านแดงลอยวน' },
  potion10:{ role:'นักพยากรณ์', realm:'แห่งอนาคต', tone:'ครามราตรี',
    body:'ผีน้อยท่าทางลึกลับ สวมหมวกนักพยากรณ์ทรงสูงประดับเฟืองนาฬิกาสีทอง เรืองแสงสีคราม', item:'นาฬิกาทรายทอง', fx:'เฟืองนาฬิกาเรืองแสงลอยหมุน' },
  potion11:{ role:'นักไขปริศนา', realm:'แห่งความรู้', tone:'เขียวอมฟ้าเทอร์ควอยซ์',
    body:'ผีน้อยหัวฉลาด สวมแว่นตากลม หมวกพ่อมดลายดาว และผ้าคลุมมีฮู้ด เรืองแสงสีเขียวอมฟ้า', item:'หนังสือเวทมนตร์โบราณเปิดอยู่', fx:'หน้ากระดาษเรืองแสงปลิวว่อน' },
  potion12:{ role:'นักล่าโอกาส', realm:'แห่งโชคชะตา', tone:'ม่วงแม็กเจนต้า',
    body:'ผีน้อยยิ้มซุกซนขยิบตาหนึ่งข้าง สวมหมวกแม่มดประดับใบโคลเวอร์ เรืองแสงสีม่วงอมชมพู', item:'เหรียญทองนำโชค', fx:'ใบโคลเวอร์สี่แฉกเรืองแสง' }
};
const STAGE = {
  potion1:{ pose:'ลอยเอนหลังกลางอากาศอย่างสบายใจ', scene:'ทุ่งดอกไม้เรืองแสงยามค่ำคืนอันเงียบสงบ มีพระจันทร์เต็มดวงดวงใหญ่และหิ่งห้อยลอยระยิบ', sceneName:'ทุ่งดอกไม้ใต้แสงจันทร์' },
  potion2:{ pose:'ชูแขนสองข้างขึ้นหัวเราะ ตัวเด้งลอยขึ้นอย่างร่าเริง', scene:'งานเทศกาลฮาโลวีนยามค่ำ มีโคมฟักทองห้อยเป็นสาย ธงราวหลากสี และลูกกวาดลอยฟ้า', sceneName:'งานเทศกาลฮาโลวีน' },
  potion3:{ pose:'หมุนตัวเต้นรำ ชูแขนข้างหนึ่งขึ้นสูง ชายผ้าพลิ้วเป็นวง', scene:'ห้องบอลรูมในปราสาทแม่มด มีแชนเดอเลียร์เทียนระยิบและแสงไฟหลากสีบนพื้นหินอ่อนเงาวาว', sceneName:'ห้องบอลรูมปราสาทแม่มด' },
  potion4:{ pose:'ประกบมือไว้ข้างแก้ม เอียงตัวเขินๆ แล้วส่งหัวใจ', scene:'สวนกุหลาบสีม่วงยามค่ำคืน มีซุ้มประตูไม้เลื้อยประดับไฟดวงเล็กและหัวใจเรืองแสงลอย', sceneName:'สวนกุหลาบม่วงยามค่ำ' },
  potion5:{ pose:'แอบโผล่ครึ่งตัวออกมาจากม่านหมอก ทำท่ากระซิบความลับ', scene:'ตรอกหมอกหนาในเมืองเก่า มีตะเกียงริมทางเรืองแสงสลัวและเงาลึกลับของหลังคาแหลม', sceneName:'ตรอกหมอกในเมืองเก่า' },
  potion6:{ pose:'กางแขนสองข้างออก ปล่อยแสงเยียวยาอ่อนโยน', scene:'ป่าเวทมนตร์เรืองแสง มีต้นไม้ยักษ์ เห็ดเรืองแสง และลำธารที่มีประกายระยิบ', sceneName:'ป่าเวทมนตร์เรืองแสง' },
  potion7:{ pose:'ยืดตัวตรงอย่างภาคภูมิ มือข้างหนึ่งเท้าเอว อีกข้างชูขึ้น', scene:'ห้องบัลลังก์ในปราสาทแม่มด มีบันไดหินอ่อน ธงห้อยยาว และเทียนสีทองเรียงราย', sceneName:'ห้องบัลลังก์ปราสาท' },
  potion8:{ pose:'นั่งขัดสมาธิลอยนิ่งกลางอากาศ หลับตาอย่างสงบ', scene:'หอดูดาวบนยอดหอคอย มีกล้องโทรทรรศน์ทองเหลืองและท้องฟ้าเต็มไปด้วยกลุ่มดาวเรืองแสง', sceneName:'หอดูดาวบนยอดหอคอย' },
  potion9:{ pose:'ชูกำปั้นพุ่งไปข้างหน้าอย่างฮึกเหิม ผ้าคลุมสะบัด', scene:'หุบเขาเวทมนตร์ที่มีภูเขาไฟอยู่ไกลๆ ลาวาเรืองแสงส้ม และท้องฟ้าโทนแดงม่วง', sceneName:'หุบเขาภูเขาไฟเวทมนตร์' },
  potion10:{ pose:'ชูของในมือขึ้นสูงพร้อมขยิบตาอย่างรู้ทัน', scene:'ภายในหอนาฬิกาโบราณ มีเฟืองทองยักษ์หมุนอยู่ด้านหลังและพระจันทร์ส่องผ่านหน้าปัดกระจก', sceneName:'หอนาฬิกาโบราณ' },
  potion11:{ pose:'ยกนิ้วชี้ขึ้นเหมือนเพิ่งคิดออก ตาเป็นประกาย', scene:'ห้องสมุดเวทมนตร์ มีชั้นหนังสือสูงจรดเพดาน หนังสือและเทียนลอยอยู่กลางอากาศ', sceneName:'ห้องสมุดเวทมนตร์' },
  potion12:{ pose:'กระโดดลอยตัวขึ้นอย่างดีใจ ขยิบตาหนึ่งข้าง', scene:'สุสานฟักทองแสนน่ารักมีรั้วเหล็กดัด โคมไฟข้างทาง และปราสาทบนเนินใต้พระจันทร์ดวงโต', sceneName:'สุสานฟักทองใต้จันทร์' }
};
function stage(s){ return s.custom ? { pose:'ลอยตัวโบกมือทักทายอย่างร่าเริง', scene:'ท้องฟ้ายามค่ำคืนสีม่วงลึก มีปราสาทแม่มดไกลๆ และพระจันทร์เต็มดวง', sceneName:'ปราสาทใต้แสงจันทร์' } : STAGE[s.id]; }
let cardTheme = 'night';
/* Mixing poses: chosen from the exact 3-potion combination (order matters) */
const MIX_POSES = [
  { name:'เทยาสองขวดผสมกลางอากาศ', text:(a,b,c)=>`ถือขวดยาสี${a}และสี${b}ไว้สองมือ กำลังเทผสมกันกลางอากาศ จนเกิดสายน้ำยาสี${c}วนเป็นเกลียวประกาย` },
  { name:'คนหม้อยาจิ๋วด้วยไม้กายสิทธิ์', text:(a,b,c)=>`ใช้ไม้กายสิทธิ์คนหม้อยาใบจิ๋วตรงหน้า น้ำยาในหม้อไล่สี${a} ${b} และ${c} มีฟองยาลอยขึ้นเป็นรูปหัวใจและดาว` },
  { name:'เสกขวดยาสามขวดลอยวนรอบตัว', text:(a,b,c)=>`ลอยหมุนตัวอย่างสนุก เสกขวดยาสามขวดสี${a} ${b} และ${c} ให้ลอยวนรอบตัวเป็นวงกลมเรืองแสง` },
  { name:'นั่งบนขอบหม้อหยดยาทีละหยด', text:(a,b,c)=>`นั่งบนขอบหม้อยาใบใหญ่ ห้อยชายผ้าลงมา กำลังหยดยาสี${a}ลงไปทีละหยด เกิดควันสี${b}และสี${c}พวยพุ่งเป็นรูปดาว` },
  { name:'ขี่ไม้กวาดโปรยผงประกาย', text:(a,b,c)=>`ขี่ไม้กวาดแม่มดลำจิ๋ว โปรยผงประกายสี${a} ${b} และ${c}ลงหม้อยาด้านล่าง` },
  { name:'กอดขวดยาสามชั้นอย่างภูมิใจ', text:(a,b,c)=>`กอดขวดยาทรงกลมใบใหญ่ที่มีน้ำยาเรียงสามชั้น สี${a} ${b} และ${c} ยิ้มตาปิดอย่างภูมิใจ` },
  { name:'ชูขวดยาที่ผสมเสร็จขึ้นสูง', text:(a,b,c)=>`ชูขวดยาที่ผสมเสร็จขึ้นเหนือหัวเหมือนได้รางวัล ขวดเปล่งแสงสามสี ${a} ${b} และ${c} ประกายดาวกระจายรอบตัว` },
  { name:'เป่าฟองยาวิเศษ', text:(a,b,c)=>`เป่าฟองยาวิเศษจากหลอดแก้ว ฟองแต่ละลูกเป็นสี${a} ${b} และ${c} ลอยฟุ้งเต็มรอบตัว` },
  { name:'เขย่าขวดยาอย่างตื่นเต้น', text:(a,b,c)=>`จับขวดยาเขย่าอย่างตื่นเต้น ตาเป็นประกาย ประกายสี${a} ${b} และ${c}กระเด็นออกมาเป็นดาวดวงเล็ก` },
  { name:'อ่านตำรายาขณะยาเทตัวเอง', text:(a,b,c)=>`ถือตำรายาเล่มเล็กที่เปิดเรืองแสงอยู่ ขณะที่ขวดยาสามขวดสี${a} ${b} และ${c}ลอยเทตัวเองลงหม้ออย่างเป็นระเบียบ` },
  { name:'โยนส่วนผสมลงหม้อแบบเต้นรำ', text:(a,b,c)=>`หมุนตัวเหมือนเต้นรำ โยนส่วนผสมเวทเรืองแสงสี${a} ${b} และ${c}ลงหม้อยาเป็นเส้นโค้งสวยงาม` },
  { name:'ดึงสายน้ำยาเป็นริบบิ้นแสง', text:(a,b,c)=>`ลอยกลับหัวอย่างซุกซน ใช้ไม้กายสิทธิ์ดึงสายน้ำยาสามสี ${a} ${b} และ${c} ออกมาจากหม้อเป็นริบบิ้นแสงพลิ้วไหว` }
];
const DECOR = [
  'ผีน้อยตัวจิ๋วอีกสองสามตัวแอบโผล่หน้าจากมุมกรอบ ยิ้มทักทาย',
  'ค้างคาวน้อยผูกโบว์บินวนรอบริบบิ้นหัวข้อ',
  'ใยแมงมุมสีเงินระยิบที่มุมบน มีแมงมุมจิ๋วหน้ายิ้มห้อยลงมา',
  'ลูกกวาดและลูกอมฮาโลวีนห่อกระดาษแวววาวลอยกระจาย',
  'หมวกแม่มดใบจิ๋ววางเอียงอยู่บนมุมกรอบ',
  'เทียนเรืองแสงสีม่วงมีหยดเทียนไหลอย่างสวยงาม',
  'โคมฟักทองจิ๋วห้อยเป็นสายระหว่างมุมกรอบ',
  'ไม้กวาดแม่มดประดับดาวพาดอยู่ที่มุมกรอบ',
  'ดอกกุหลาบม่วงและดอกลิลลี่เรืองแสงเลื้อยตามขอบกรอบ',
  'หนังสือเวทเล่มจิ๋วเปิดอยู่ มีสัญลักษณ์ดาวและพระจันทร์เรืองแสงลอยออกมา',
  'ผีน้อยตัวจิ๋วถือโคมไฟลอยอยู่ไกลๆ ในพื้นหลัง',
  'ฟองแสงสีพาสเทลและผงดาวทองลอยระยิบทั่วภาพ'
];
function comboSeed(){
  let h = 7;
  selected.forEach((s, i) => { const k = s.custom ? s.name : s.id; for (const ch of k) h = (h * 31 + ch.charCodeAt(0) + i * 17) >>> 0; });
  return h;
}
function mixPose(){
  const t = selected.map(s => lore(s).tone);
  const m = MIX_POSES[comboSeed() % MIX_POSES.length];
  return { name:m.name, text:m.text(t[0], t[1], t[2]) };
}
function decorFor(){
  const h = comboSeed(), pool = DECOR.slice(), out = [];
  let x = h;
  for (let i = 0; i < 2; i++){ x = (x * 1103515245 + 12345) >>> 0; out.push(pool.splice(x % pool.length, 1)[0]); }
  return out;
}
function lore(s){ return s.custom ? { role:'ผู้ครอบครอง', realm:`แห่ง${s.name}`, tone:'ม่วงเวทมนตร์', body:'ผีน้อยยิ้มหวาน สวมหมวกแม่มดปลายแหลม เรืองแสงสีม่วงอ่อน', item:'ไม้กายสิทธิ์ปลายดาว', fx:'ประกายเวทมนตร์ระยิบระยับ' } : LORE[s.id]; }

let selected = [];          // potion objects or {custom:true,name,color,icon}
let picks = [];   // colours in the order they were chosen: {name, value, hex, id?}
let finalPowerName = '';
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Witch (inspired by the reference: wide hat with pumpkin & autumn leaves, long dark hair, golden eyes, lantern) ---------- */
function witchSVG(p){
  const leaf = (x,y,s,r,c) => `<path transform="translate(${x} ${y}) rotate(${r}) scale(${s})" fill="${c}" d="M0 -6 L1.6 -2.2 L5.4 -3.4 L3.4 0 L6.4 2 L2.2 2.2 L1.2 6.4 L0 3.2 L-1.2 6.4 L-2.2 2.2 L-6.4 2 L-3.4 0 L-5.4 -3.4 L-1.6 -2.2 Z"/>`;
  const leaves = [[60,330,1.3,20,'#e8742a'],[92,372,1,-30,'#f2a03a'],[196,350,1.2,40,'#e8742a'],[176,300,.9,10,'#f2a03a'],[214,384,1,-15,'#d9621f'],[48,390,1.1,35,'#f2a03a'],[80,260,.8,-20,'#e8742a'],[188,250,.8,25,'#e8742a']].map(a=>leaf(...a)).join('');
  const skirtLeaves = [[96,330,.8,15,'#e8742a'],[86,370,.7,-25,'#f2a03a'],[168,340,.8,30,'#e8742a'],[178,374,.7,-10,'#f2a03a']].map(a=>leaf(...a)).join('');
  return `<div class="witch"><svg viewBox="0 -26 260 446" aria-label="แม่มดประจำโรงปรุงยา"><defs>
  <linearGradient id="${p}cape" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a5ae8"/><stop offset=".5" stop-color="#5a30b0"/><stop offset="1" stop-color="#2a1458"/></linearGradient>
  <linearGradient id="${p}capeIn" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#140a26"/><stop offset=".5" stop-color="#2a1650"/><stop offset="1" stop-color="#140a26"/></linearGradient>
  <linearGradient id="${p}hair" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a2c66"/><stop offset=".4" stop-color="#16102b"/><stop offset="1" stop-color="#07040f"/></linearGradient>
  <linearGradient id="${p}dress" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2e2146"/><stop offset=".5" stop-color="#150d24"/><stop offset="1" stop-color="#0a0612"/></linearGradient>
  <linearGradient id="${p}leg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0b0714"/><stop offset=".45" stop-color="#2d2342"/><stop offset="1" stop-color="#0b0714"/></linearGradient>
  <linearGradient id="${p}hat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3d2d68"/><stop offset=".5" stop-color="#1a1130"/><stop offset="1" stop-color="#080511"/></linearGradient>
  <linearGradient id="${p}gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a3"/><stop offset=".5" stop-color="#e8b24a"/><stop offset="1" stop-color="#a8681c"/></linearGradient>
  <linearGradient id="${p}eye" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8a4a08"/><stop offset=".45" stop-color="#f0a21a"/><stop offset="1" stop-color="#ffe27a"/></linearGradient>
  <radialGradient id="${p}skin" cx=".45" cy=".35" r=".75"><stop offset="0" stop-color="#fff3ea"/><stop offset=".7" stop-color="#f7dccd"/><stop offset="1" stop-color="#e8bfae"/></radialGradient>
  <radialGradient id="${p}glow"><stop offset="0" stop-color="#ffcf6e" stop-opacity=".9"/><stop offset="1" stop-color="#ff8a2a" stop-opacity="0"/></radialGradient>
  <radialGradient id="${p}magic"><stop offset="0" stop-color="#fff" /><stop offset=".35" stop-color="#d9b8ff"/><stop offset="1" stop-color="#9a5cff" stop-opacity="0"/></radialGradient>
  </defs>
  <g class="floaty">
  <!-- purple mist -->
  <g fill="none" stroke="#a46bff" stroke-linecap="round" opacity=".55">
    <path d="M30 408 C60 392 90 414 120 400 S190 392 236 408" stroke-width="5"/>
    <path d="M200 380 c18 -6 30 4 22 14 c-6 8 -18 2 -12 -4" stroke-width="2.5"/>
    <path d="M40 360 c-14 -4 -22 8 -12 14 c8 4 14 -4 8 -8" stroke-width="2"/>
  </g>
  <!-- cape back -->
  <path d="M106 128 C82 170 62 262 34 404 C70 396 100 410 130 402 C160 410 196 396 230 402 C204 262 180 170 154 128 Z" fill="url(#${p}cape)"/>
  <path d="M106 128 C82 170 62 262 34 404 C70 396 100 410 130 402 C160 410 196 396 230 402 C204 262 180 170 154 128" fill="none" stroke="url(#${p}gold)" stroke-width="2.4"/>
  <g fill="none" stroke="#e8b24a" stroke-width="1.2" opacity=".75">
    <path d="M70 300 c10 -20 26 -10 20 4 c-4 10 -16 4 -10 -4 M60 360 c14 -12 30 0 22 12"/>
    <path d="M190 300 c-10 -20 -26 -10 -20 4 c4 10 16 4 10 -4 M200 360 c-14 -12 -30 0 -22 12"/>
    <path d="M44 396 C70 380 90 390 104 380 M216 396 C190 380 170 390 156 380"/>
  </g>
  ${leaves}
  <!-- hair back -->
  <path d="M90 70 C74 120 70 200 68 290 C66 320 58 344 50 360 C72 354 90 338 100 316 L160 316 C170 338 188 354 210 358 C200 340 192 318 192 290 C190 200 186 120 170 70 Z" fill="url(#${p}hair)"/>
  <g stroke="#5a4890" stroke-width="1" fill="none" opacity=".55"><path d="M84 120 C78 190 80 260 74 330"/><path d="M176 120 C182 190 180 260 186 330"/><path d="M92 150 C88 220 92 280 88 320"/><path d="M168 150 C172 220 168 280 172 320"/></g>
  <!-- legs & boots -->
  <path d="M114 262 L112 376 L126 376 L129 262 Z" fill="url(#${p}leg)"/>
  <path d="M131 262 L135 376 L149 376 L147 262 Z" fill="url(#${p}leg)"/>
  <path d="M112 296 q4 4 8 0 q4 4 8 0 M133 296 q4 4 8 0 q4 4 7 0" stroke="#3a2c58" stroke-width="2" fill="none"/>
  <path d="M111 364 L127 364 L127 396 Q122 404 102 404 Q101 397 112 393 Z" fill="#0d0818" stroke="url(#${p}gold)" stroke-width="1.2"/>
  <path d="M133 364 L149 364 L148 393 Q159 397 158 404 Q138 404 133 396 Z" fill="#0d0818" stroke="url(#${p}gold)" stroke-width="1.2"/>
  <!-- long open over-skirt -->
  <path d="M112 186 C96 240 82 320 72 394 Q92 400 106 390 C110 320 116 250 124 200 Z" fill="url(#${p}dress)" stroke="url(#${p}gold)" stroke-width="1.6"/>
  <path d="M148 186 C164 240 178 320 188 394 Q168 400 154 390 C150 320 144 250 136 200 Z" fill="url(#${p}dress)" stroke="url(#${p}gold)" stroke-width="1.6"/>
  ${skirtLeaves}
  <!-- short layered skirt -->
  <path d="M110 184 C104 220 96 246 92 270 Q112 280 130 274 Q148 280 168 270 C164 246 156 220 150 184 Z" fill="#3b2272"/>
  <path d="M112 184 C106 214 100 240 98 262 Q114 270 130 265 Q146 270 162 262 C160 240 154 214 148 184 Z" fill="url(#${p}dress)"/>
  <path d="M98 262 Q114 270 130 265 Q146 270 162 262" stroke="url(#${p}gold)" stroke-width="1.6" fill="none"/>
  <!-- bodice -->
  <path d="M110 134 Q130 126 150 134 L153 160 Q148 176 151 188 Q130 195 109 188 Q112 176 107 160 Z" fill="url(#${p}dress)"/>
  <path d="M112 152 Q121 164 130 156 Q139 164 148 152" stroke="url(#${p}gold)" stroke-width="1.6" fill="none"/>
  <path d="M130 158 L130 186 M125 164 L135 170 M135 164 L125 170 M125 174 L135 180 M135 174 L125 180" stroke="#e8b24a" stroke-width="1"/>
  <path d="M109 188 Q130 195 151 188 L152 194 Q130 202 108 194 Z" fill="url(#${p}gold)"/>
  <circle cx="130" cy="196" r="3.2" fill="#a46bff" stroke="#ffe9a3" stroke-width=".8"/>
  <path d="M110 194 C116 206 124 210 130 206 C136 210 144 206 150 194" stroke="#e8b24a" stroke-width="1" fill="none" opacity=".8"/>
  <!-- neck & collar -->
  <rect x="124" y="108" width="12" height="18" fill="url(#${p}skin)"/>
  <path d="M116 120 L122 112 L130 124 L138 112 L144 120 L146 134 Q130 140 114 134 Z" fill="url(#${p}dress)" stroke="url(#${p}gold)" stroke-width="1.2"/>
  <path d="M124 120 L130 130 L136 120 L130 140 Z" fill="#e8b24a" opacity=".85"/>
  <path d="M130 128 l3.2 4.2 -3.2 4.2 -3.2 -4.2 Z" fill="#a46bff" stroke="#ffe9a3" stroke-width=".7"/>
  <!-- shoulder puffs -->
  <ellipse cx="106" cy="136" rx="10" ry="8" fill="#2a1a46" stroke="#e8b24a" stroke-width="1"/>
  <ellipse cx="154" cy="136" rx="10" ry="8" fill="#2a1a46" stroke="#e8b24a" stroke-width="1"/>
  <!-- casting arm -->
  <g class="arm-wand">
    <path d="M104 140 C86 162 80 196 76 226 C90 216 98 202 102 186 Z" fill="#6c3fc4" opacity=".55"/>
    <path d="M110 136 C98 154 92 180 90 206 L101 208 C103 182 109 160 118 146 Z" fill="#120b20"/>
    <path d="M90 196 L101 198" stroke="url(#${p}gold)" stroke-width="2.4"/>
    <ellipse cx="95.5" cy="213" rx="5.2" ry="7" fill="#120b20"/>
    <circle class="wand-tip" cx="95" cy="228" r="9" fill="url(#${p}magic)"/>
    <path class="wand-tip" d="M95 221 l1.8 5 5 1.8 -5 1.8 -1.8 5 -1.8 -5 -5 -1.8 5 -1.8Z" fill="#fff"/>
  </g>
  <!-- lantern arm -->
  <circle class="lantern-light" cx="180" cy="236" r="42" fill="url(#${p}glow)"/>
  <path d="M156 140 C174 160 180 194 186 224 C174 216 166 202 160 186 Z" fill="#6c3fc4" opacity=".55"/>
  <path d="M150 136 C164 154 172 176 180 198 L170 203 C164 182 156 162 142 146 Z" fill="#120b20"/>
  <path d="M168 192 L178 188" stroke="url(#${p}gold)" stroke-width="2.4"/>
  <ellipse cx="176" cy="205" rx="5.2" ry="6.4" fill="#120b20"/>
  <path d="M177 209 L178 216" stroke="#e8b24a" stroke-width="1.4"/>
  <circle cx="178" cy="215" r="2.4" fill="none" stroke="#e8b24a" stroke-width="1.2"/>
  <path d="M166 224 L190 224 L185 216 L171 216 Z" fill="url(#${p}gold)"/>
  <rect x="167" y="224" width="22" height="30" rx="3" fill="#2b1d12" stroke="url(#${p}gold)" stroke-width="1.6"/>
  <rect class="lantern-light" x="170" y="227" width="16" height="24" rx="2" fill="#ffb347"/>
  <circle cx="178" cy="240" r="6.5" fill="#ff8a2a"/>
  <path d="M175 238 l1.5 -2.5 1.5 2.5Z M179 238 l1.5 -2.5 1.5 2.5Z M174.5 242 q3.5 3 7 0 l-1.5 1.8 -1.2 -1 -1.2 1 -1.2 -1Z" fill="#5a1c00"/>
  <path d="M178 224 L178 254 M167 239 L189 239" stroke="#e8b24a" stroke-width=".8" opacity=".6"/>
  <path d="M168 254 L188 254 L184 260 L172 260 Z" fill="url(#${p}gold)"/>
  <g transform="translate(130 124) scale(1.24) translate(-130 -124)">
  <!-- head -->
  <path d="M107 86 C107 62 153 62 153 86 C153 104 144 116 130 121 C116 116 107 104 107 86 Z" fill="url(#${p}skin)"/>
  <path d="M106 84 C96 120 98 164 104 196 L113 178 C109 150 109 118 113 92 Z" fill="url(#${p}hair)"/>
  <path d="M154 84 C164 120 162 164 156 196 L147 178 C151 150 151 118 147 92 Z" fill="url(#${p}hair)"/>
  <path d="M103 88 C100 56 160 56 157 88 C153 80 149 94 145 82 C141 97 135 84 131 98 C127 84 121 97 117 82 C112 94 108 80 103 88 Z" fill="url(#${p}hair)"/>
  <path d="M118 66 C126 62 138 62 146 68" stroke="#6a58a8" stroke-width="2" fill="none" opacity=".6"/>
  <g class="eyes">
    <path d="M113 96 Q120 88.5 127 94.5 Q122 102.5 114 99 Z" fill="#fff"/>
    <path d="M133 94.5 Q140 88.5 147 96 Q146 99 138 102.5 Q133 100 133 94.5 Z" fill="#fff"/>
    <ellipse cx="120.2" cy="96" rx="4" ry="5" fill="url(#${p}eye)"/>
    <ellipse cx="139.8" cy="96" rx="4" ry="5" fill="url(#${p}eye)"/>
    <ellipse cx="120.2" cy="96" rx="1.5" ry="2.6" fill="#3a1400"/>
    <ellipse cx="139.8" cy="96" rx="1.5" ry="2.6" fill="#3a1400"/>
    <circle cx="119" cy="94.2" r="1.2" fill="#fff"/><circle cx="138.6" cy="94.2" r="1.2" fill="#fff"/>
    <path d="M112.5 95.5 Q120 87.5 127.5 94.5" stroke="#0d0818" stroke-width="2.2" fill="none" stroke-linecap="round"/>
    <path d="M132.5 94.5 Q140 87.5 147.5 95.5" stroke="#0d0818" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  </g>
  <path d="M114 87.5 Q120 85.5 125 87.5 M135 87.5 Q140 85.5 146 87.5" stroke="#2a1d45" stroke-width="1" fill="none"/>
  <path d="M130.5 102 l-.8 3.2 1.4 .3" stroke="#d8a090" stroke-width=".9" fill="none"/>
  <ellipse cx="114" cy="105" rx="5" ry="2.2" fill="#ff9ab8" opacity=".35"/><ellipse cx="146" cy="105" rx="5" ry="2.2" fill="#ff9ab8" opacity=".35"/>
  <path class="mouth-closed" d="M127 110.5 Q130 112 133 110.5" stroke="#b0566a" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  <path class="mouth-open" d="M127 110 Q130 115 133 110 Z" fill="#a8445a"/>
  <!-- hat -->
  <ellipse cx="130" cy="70" rx="80" ry="17" fill="#0a0614" transform="rotate(-7 130 70)"/>
  <ellipse cx="130" cy="67" rx="80" ry="16" fill="url(#${p}hat)" transform="rotate(-7 130 67)"/>
  <path d="M54 76 Q130 92 206 58" stroke="url(#${p}gold)" stroke-width="1.4" fill="none" opacity=".8"/>
  <path d="M100 64 C106 48 112 34 116 20 C119 8 112 -2 96 -8 C110 -10 124 -2 130 10 C138 26 150 44 160 56 Z" fill="url(#${p}hat)"/>
  <path d="M118 12 C126 24 134 40 144 54" stroke="#5a4890" stroke-width="2" fill="none" opacity=".5"/>
  <path d="M100 64 Q128 64 160 56 L161 63 Q128 72 99 71 Z" fill="#2a1650"/>
  <path d="M99 71 Q128 72 161 63 M100 64 Q128 64 160 56" stroke="url(#${p}gold)" stroke-width="1.4" fill="none"/>
  <path d="M106 66 c4 -6 10 -6 12 0 c4 -6 10 -6 12 0 c4 -6 10 -6 12 0 c4 -6 10 -6 12 -2" stroke="#e8b24a" stroke-width=".9" fill="none"/>
  <path d="M116 54 l3 4 -3 4 -3 -4Z M140 50 l2.6 3.6 -2.6 3.6 -2.6 -3.6Z" fill="#a46bff" stroke="#ffe9a3" stroke-width=".6"/>
  <g transform="translate(150 56)"><circle r="9" fill="#ff8a2a"/><ellipse rx="4" ry="9" fill="#ffa040" opacity=".6"/>
    <path d="M-4 -2 l2 -3 2 3Z M2 -2 l2 -3 2 3Z M-5 2 q5 5 10 0 l-2 2.5 -1.5 -1.2 -1.5 1.2 -1.5 -1.2 -1.5 1.2Z" fill="#5a1c00"/>
    <path d="M0 -9 l1.5 -4" stroke="#4d6b2c" stroke-width="2.2" stroke-linecap="round"/></g>
  ${leaf(108,60,1.5,-20,'#e8742a')}${leaf(126,56,1.1,25,'#f2a03a')}${leaf(164,58,1.3,40,'#d9621f')}${leaf(98,66,1,-50,'#f2a03a')}
  <path d="M168 50 l1.6 3.6 3.9 .4 -2.9 2.6 .9 3.8 -3.5-2 -3.5 2 .9-3.8 -2.9-2.6 3.9-.4Z" fill="#ffd36e"/>
  </g>
  </g></svg></div>`;
}

/* ---------- Potion bottle ---------- */
function bottleSVG(p, i){
  const id = 'b'+i;
  return `<svg viewBox="0 0 64 82" aria-hidden="true">
    <defs><clipPath id="${id}"><circle cx="32" cy="52" r="22"/></clipPath>
    <radialGradient id="${id}g" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".35" stop-color="${p.color}"/><stop offset="1" stop-color="${p.color}" stop-opacity=".7"/></radialGradient></defs>
    <rect x="25" y="2" width="14" height="10" rx="2" fill="#8b5a2b" stroke="#5c3a18"/>
    <rect x="26" y="12" width="12" height="16" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.45)"/>
    <path d="M24 20 q8 4 16 0" stroke="#c9a46a" stroke-width="2" fill="none"/>
    <circle cx="32" cy="52" r="22" fill="rgba(255,255,255,.06)"/>
    <g clip-path="url(#${id})"><rect x="8" y="38" width="48" height="40" fill="url(#${id}g)" opacity=".92"/>
      <path d="M8 40 q6 -4 12 0 t12 0 t12 0 t12 0 V44 H8Z" fill="#fff" opacity=".25"/></g>
    <circle cx="32" cy="52" r="22" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2"/>
    <ellipse cx="23" cy="42" rx="5" ry="3" fill="#fff" opacity=".6" transform="rotate(-40 23 42)"/>
    <text x="32" y="60" text-anchor="middle" font-size="16">${p.icon}</text>
  </svg>`;
}

/* ---------- Render shelf ---------- */
function renderShelf(){
  const shelf = $('shelf'); shelf.innerHTML = '';
  selected.filter(s => s.custom).forEach(s => {
    const b = document.createElement('button');
    b.className = 'bottle on custom-chip'; b.style.setProperty('--c', s.color);
    b.innerHTML = `<span class="tick">✓</span><span class="scroll">${esc(s.icon)} ${esc(s.name)}</span><span class="ds" style="margin-top:6px">แตะเพื่อนำออก</span>`;
    b.onclick = () => { selected = selected.filter(x => x !== s); update(); };
    shelf.appendChild(b);
  });
  potionsData.forEach((p, i) => {
    const on = selected.includes(p);
    const b = document.createElement('button');
    b.className = 'bottle' + (on ? ' on' : ''); b.style.setProperty('--c', p.color); b.dataset.pid = p.id;
    b.setAttribute('aria-pressed', on);
    b.innerHTML = `<span class="tick">✓</span>${bottleSVG(p, i)}<span class="nm">${p.name}</span><span class="ds">${p.desc}</span>`;
    b.onclick = () => { if (justDragged) return; togglePotion(p); };
    shelf.appendChild(b);
  });
}

function togglePotion(p){
  if (selected.includes(p)) { selected = selected.filter(x => x !== p); Snd.play('pop'); }
  else {
    if (selected.length >= 3) return toast('หม้อใส่ได้พอดี 3 ขวด นำขวดเดิมออกก่อนนะ');
    selected.push(p); dropInto(p.color);
  }
  update();
}

function addCustomIngredient(){
  const inp = $('custom-ing'); const v = inp.value.trim();
  if (!v) return;
  if (selected.length >= 3) return toast('หม้อเต็มแล้ว นำขวดเดิมออกก่อนนะ');
  if (selected.some(s => s.custom && s.name === v)) return;
  const hues = ['#c3a8ff','#ffd36e','#7fe0c4','#ff9ad5'];
  const s = { custom:true, name:v, icon:'📜', color:hues[selected.length % hues.length] };
  selected.push(s); inp.value=''; dropInto(s.color); update();
}

/* ---------- Stage ---------- */
function renderSlots(el){
  el.innerHTML = '';
  for (let i=0;i<3;i++){
    const s = selected[i]; const d = document.createElement('div');
    d.className = 'slot' + (s ? ' full' : '');
    if (s){ d.style.setProperty('--c', s.color); d.textContent = s.icon; d.title = s.name; }
    el.appendChild(d);
  }
}
let witchShown = false;
const OMENS = ['หม้อยังเงียบสงบ รอวัตถุดิบชิ้นแรก…','ไอน้ำเริ่มลอยขึ้น หม้อรับรู้ถึงพลังแรกแล้ว','น้ำยาเริ่มหมุนวน อีกเพียงขวดเดียวเท่านั้น','พลังทั้งสามพร้อมหลอมรวม กด <em>ปรุงยา</em> ได้เลย'];
function renderRecipe(){
  const r = $('recipe'); if (!r) return;
  r.innerHTML = [0,1,2].map(i => {
    const s = selected[i], role = ['ชุดและหน้าตา','ท่าทางและของในมือ','ฉากและเวทรอบตัว'][i];
    if (!s) return `<li><span class="ic">${i+1}</span><div><b style="color:var(--muted)">หน้ากระดาษยังว่าง</b><small>ขวดที่ ${i+1} กำหนด${role}บนการ์ด</small></div></li>`;
    const sub = s.custom ? 'วัตถุดิบพิเศษที่คุณเขียนเอง' : `${s.desc.replace(/[()]/g,'')} • ${s.skill.split(' • ')[0]}`;
    return `<li class="full" style="--c:${s.color}"><span class="ic">${esc(s.icon)}</span><div><b>${esc(s.name)}</b><small>${esc(sub)}</small></div><span class="step">${role}</span></li>`;
  }).join('');
  $('omen').innerHTML = OMENS[Math.min(selected.length,3)];
  const sp = $('sparks'); sp.innerHTML = '';
  if (!reduce) {
    const cols = selected.length ? selected.map(s => s.color) : ['#c3a8ff'];
    const n = 6 + selected.length * 4;
    for (let i=0;i<n;i++){
      const e = document.createElement('span'); e.className = 'spark';
      e.style.cssText = `left:${15 + Math.random()*70}%; --sc:${cols[i % cols.length]}; --t:${2.4 + Math.random()*2}s; --d:${-Math.random()*4}s; --dx:${(Math.random()*60-30).toFixed(0)}px`;
      sp.appendChild(e);
    }
  }
}
function update(){
  renderRecipe();
  renderShelf(); renderSlots($('slots')); renderSlots($('tray-slots'));
  const n = selected.length;
  $('count').textContent = n === 0 ? 'ยังว่างอยู่ เลือกยาขวดแรกได้เลย' : n < 3 ? `ใส่แล้ว ${n} จาก 3 ขวด` : 'ครบ 3 ขวดแล้ว';
  const cols = selected.map(s => s.color);
  const base = ['#6a4bc4','#8b6ae0','#6a4bc4'];
  const c = n === 0 ? base : [cols[0], cols[1] || cols[0], cols[2] || cols[1] || cols[0]];
  $('l1').setAttribute('stop-color', c[0]); $('l2').setAttribute('stop-color', c[1]); $('l3').setAttribute('stop-color', c[2]);
  ['brew','tray-brew'].forEach(id => $(id).classList.toggle('ready', n === 3));
  if (n === 3 && !witchShown) showWitch();
  if (n < 3 && witchShown) hideWitch();
}
function showWitch(){
  witchShown = true;
  const spot = $('witch-spot');
  if (!spot.querySelector('.witch')) spot.insertAdjacentHTML('beforeend', witchSVG('w1'));
  spot.classList.remove('show'); void spot.offsetWidth; spot.classList.add('show');
  say('ครบ 3 ขวดแล้ว! กด “ปรุงยา” ให้ฉันร่ายมนตร์ได้เลย');
  if (matchMedia('(max-width:900px)').matches) setTimeout(() => document.querySelector('.stage-panel').scrollIntoView({behavior:'smooth', block:'center'}), 250);
}
function hideWitch(){ witchShown = false; $('witch-spot').classList.remove('show'); $('bubble').classList.remove('show'); }
let sayTimer;
function say(t){ const b = $('bubble'); b.textContent = t; b.classList.add('show'); clearTimeout(sayTimer); sayTimer = setTimeout(()=>b.classList.remove('show'), 5000); }

function dropInto(color){
  const st = document.querySelector('.stage'); const caul = $('cauldron');
  const d = document.createElement('div'); d.className = 'drop';
  d.style.background = color; d.style.color = color;
  d.style.left = (caul.offsetLeft + caul.offsetWidth/2 - 8) + 'px';
  d.style.top = (caul.offsetTop + caul.offsetWidth*0.32) + 'px';
  st.appendChild(d); setTimeout(()=>d.remove(), 800);
  caul.classList.remove('bump'); void caul.offsetWidth; caul.classList.add('bump');
  setTimeout(() => { splashAt(color); Snd.play('splash'); }, reduce ? 0 : 450);
}

/* ---------- Brewing & ritual ---------- */
function powerName(){
  const L = legendOf(); if (L) return L.title;
  // Short title, like a class name: role of potion 1 + realm of potion 2
  return `${lore(selected[0]).role}${lore(selected[1]).realm}`;
}
const PATH_INFO = {
  'Health & Wellness Tech':'ออกแบบแอปและอุปกรณ์ที่ช่วยดูแลสุขภาพ เช่น แอปติดตามการนอน นาฬิกาวัดชีพจร',
  'Creative Content & Entertainment':'สร้างคอนเทนต์ วิดีโอ เกม หรือสื่อบันเทิงที่ทำให้คนดูมีความสุข',
  'Sound & Motion Art Design':'ออกแบบเสียง ดนตรี และภาพเคลื่อนไหว สำหรับเกม แอนิเมชัน หรือโฆษณา',
  'User Experience (UX) & Human Relations':'ออกแบบแอปและเว็บให้ใช้ง่าย โดยเข้าใจความรู้สึกและความต้องการของผู้ใช้',
  'Cyber Security & Forensic Data Analysis':'ปกป้องระบบจากแฮกเกอร์ และสืบหาร่องรอยหลักฐานจากข้อมูลดิจิทัล',
  'Software Maintenance & Health Tech':'ดูแล ซ่อม และปรับปรุงโปรแกรมให้ทำงานได้ดี รวมถึงระบบเทคโนโลยีด้านสุขภาพ',
  'Digital Leadership & Management':'นำทีมและบริหารโปรเจกต์ด้านเทคโนโลยีให้สำเร็จตามเป้าหมาย',
  'Software Engineering & System Architecture':'เขียนโปรแกรมและวางโครงสร้างระบบขนาดใหญ่ให้มั่นคงและขยายต่อได้',
  'Startup Founder & Agile Project Management':'เริ่มธุรกิจของตัวเอง และบริหารงานแบบคล่องตัว ลองเร็ว เรียนรู้เร็ว ปรับเร็ว',
  'Data Analytics & Trend Forecasting':'วิเคราะห์ข้อมูลเพื่อหาคำตอบ และคาดการณ์แนวโน้มที่จะเกิดขึ้นในอนาคต',
  'การพัฒนาโปรแกรม':'เขียนโค้ดเพื่อสร้างแอป เว็บไซต์ เกม หรือเครื่องมือที่ช่วยแก้ปัญหา',
  'Data Science / Analytics':'ใช้ข้อมูลและสถิติไขปริศนา ค้นหาคำตอบที่ซ่อนอยู่ในตัวเลข',
  'Game Innovation & EdTech Design':'ออกแบบเกมและสื่อการเรียนรู้แบบใหม่ ที่ทำให้การเรียนสนุกขึ้น'
};
function pathInfo(p){ return PATH_INFO[p] || `ลองนำเรื่อง${p.replace(/^วิชาประยุกต์/,'')}ไปต่อยอดกับเทคโนโลยีและความคิดสร้างสรรค์`; }
const CHALLENGES = {
  present:{ name:'กล้าแสดงออก & Present', icon:'🎤', potions:['potion7','potion3','potion9','potion2'], list:[
    'เป็นไม้แรกของกลุ่ม: อาสาขึ้นพรีเซนต์งานหรือพูดรายงานเป็นคนแรกของกลุ่มในรอบถัดไป',
    'ชงเองตอบเอง: ตั้งคำถามในคลาสเรียนอย่างน้อย 1 คำถาม และพยายามเสนอแนวคิดของตัวเองควบคู่ไปด้วย',
    'เปิดกล้องยืนหนึ่ง: ถ้าเรียนหรือประชุมออนไลน์ ให้เปิดกล้องและนั่งแถวหน้าสุดของจอ พร้อมส่งรีแอคชั่นให้ผู้สอนตลอดคลาส',
    'ขอบคุณแบบตะโกน: กล่าวขอบคุณอาจารย์หรือวิทยากรตอนท้ายคาบด้วยเสียงที่มั่นใจและเป็นตัวแทนของห้อง' ] },
  creative:{ name:'Creative & Networking', icon:'🤝', potions:['potion4','potion12','potion2','potion3','potion11'], list:[
    'ทักทายคนแปลกหน้า: เข้าไปทำความรู้จักหรือชวนเพื่อนต่างเซกชันหรือต่างห้องคุยเรื่องงานโปรเจกต์อย่างน้อย 1 คน',
    'ระดมสมองนอกกรอบ: เสนอไอเดียทำรายงานหรือกิจกรรมคณะที่แปลกใหม่ที่สุดในที่ประชุมกลุ่ม แม้ไอเดียนั้นจะดูหลุดโลกก็ตาม',
    'ผู้นำความบันเทิง: อาสาคิดเกมหรือกิจกรรมละลายพฤติกรรมสั้นๆ 3 นาทีให้เพื่อนในกลุ่มก่อนเริ่มทำงาน',
    'เปลี่ยนมู้ดห้องเรียน: ลองเสนอไอเดียปรับรูปแบบการจัดโต๊ะทำงานกลุ่มให้ดูแปลกตาเพื่อเปลี่ยนบรรยากาศการเรียนรู้' ] },
  lifestyle:{ name:'Lifestyle & Mindset', icon:'🌈', potions:['potion1','potion5','potion6','potion8','potion10','potion12'], list:[
    'แต่งตัวคุมโทน: นัดกับเพื่อนในกลุ่มแต่งตัวธีมสีเดียวกันมาเรียน (เช่น All Black หรือโทนพาสเทล) โดยนัดล่วงหน้าแค่ 1 วัน',
    'ช็อปปิ้งแบบสุ่ม: ไปกินข้าวที่โรงอาหารแล้วสั่งเมนูที่ไม่เคยคิดจะกินมาก่อนในชีวิต 1 เมนู',
    'นักบันทึกไอเดีย: พกสมุดเล่มเล็กหรือเปิดโน้ตในมือถือ แล้วจดไอเดียเจ๋งๆ ที่แวบเข้ามาในหัวให้ครบ 5 ไอเดียภายในวันเดียว',
    'Content Creator ฝึกหัด: ถ่ายรูปหรือคลิปสั้นบรรยากาศการทำงานกลุ่มแบบสโลว์ไลฟ์หรือแนวตลกๆ แล้วส่งอวดเพื่อน' ] }
};
let curMission = null;
function missionPool(){
  const ids = selected.filter(s => !s.custom).map(s => s.id), pool = [];
  selected.forEach(s => pool.push({ text: s.custom ? `ลองสร้างสรรค์ผลงานด้วยพลัง${s.name}` : s.mission, icon:'🧪', cat:'ภารกิจจากยาที่ผสม' }));
  Object.values(CHALLENGES).forEach(C => {
    if (!ids.length || C.potions.some(p => ids.includes(p))) C.list.forEach(t => pool.push({ text:t, icon:C.icon, cat:C.name }));
  });
  return pool;
}
function rollMission(){
  const pool = missionPool(), prev = curMission && curMission.text;
  const choices = pool.length > 1 ? pool.filter(m => m.text !== prev) : pool;
  curMission = choices[Math.floor(Math.random() * choices.length)];
  return curMission;
}
function renderMission(){
  const el = $('r-mission'); if (!el || !curMission) return;
  el.innerHTML = `<span class="mcat">${curMission.icon} ${esc(curMission.cat)}</span>${esc(curMission.text)}`;
}
function details(){
  const skills=[], paths=[], missions=[];
  selected.forEach(s => {
    if (!s.custom){ skills.push(s.skill.split(' • ')[0]); paths.push(s.path); missions.push(s.mission); }
    else { skills.push(`พลังแห่ง${s.name}`); paths.push(`วิชาประยุกต์${s.name}`); missions.push(`ลองสร้างสรรค์ผลงานด้วยพลัง${s.name}`); }
  });
  const pathItems = paths.join(' • ').split(' • ').slice(0,2);
  return { skill: skills.slice(0,3).join(' • '), path: pathItems.join(' • '), pathItems, mission: curMission ? curMission.text : missions[0] };
}

let ritualTimers = [];
function brew(){
  if (selected.length !== 3) return toast('ต้องเลือกยาให้ครบ 3 ขวดพอดีก่อนปรุง');
  const caul = $('cauldron'); caul.classList.add('stir');
  const w = document.querySelector('#witch-spot .witch'); if (w) w.classList.add('cast');
  say('อับรา… คาดาบรา…'); Snd.play('laugh');
  ['brew','tray-brew'].forEach(id => { $(id).disabled = true; $(id).textContent = 'กำลังหลอมรวมพลัง…'; });
  setTimeout(() => { caul.classList.remove('stir'); if (w) w.classList.remove('cast'); openRitual(); }, reduce ? 50 : 1300);
}

function openRitual(){
  finalPowerName = powerName();
  const d = details();
  $('r-name').textContent = finalPowerName;
  $('r-skill').textContent = d.skill; $('r-path').innerHTML = d.pathItems.map(p => `<span class="pi"><strong>${esc(p)}</strong><small>${esc(pathInfo(p))}</small></span>`).join(''); rollMission(); renderMission();
  applyRarity();
  $('r-ings').innerHTML = selected.map(s => `<span class="ing" style="--c:${s.color}">${esc(s.icon)} ${esc(s.name)}</span>`).join('');

  const r = $('ritual'); const altar = $('altar');
  $('altar-witch').innerHTML = witchSVG('w2');
  altar.querySelectorAll('.orb').forEach(o => o.remove());
  $('reveal').classList.remove('show');
  $('skip').style.display = '';
  const bub = $('ritual-bubble'); bub.style.opacity = 1; bub.textContent = 'ยาสามขวดนี้…';
  r.classList.add('open'); r.scrollTop = 0; document.body.style.overflow = 'hidden';
  const witch = altar.querySelector('.witch');

  if (reduce) return finishRitual();
  const pos = [['8%','88%'],['48%','98%'],['84%','84%']];
  const T = (fn, ms) => ritualTimers.push(setTimeout(fn, ms));
  T(() => { witch.classList.add('cast'); r.classList.add('casting'); Snd.play('whoosh'); }, 500);
  selected.forEach((s, i) => T(() => {
    const o = document.createElement('div'); o.className = 'orb';
    const tip = witch.querySelector('.wand-tip').getBoundingClientRect(), ar = altar.getBoundingClientRect();
    const tx = ((tip.left + tip.width/2 - ar.left - 23) / ar.width * 100).toFixed(1) + '%';
    const ty = ((tip.top + tip.height/2 - ar.top - 23) / ar.height * 100).toFixed(1) + '%';
    o.style.cssText = `--c:${s.color}; --x:${pos[i][0]}; --y:${pos[i][1]}; --d:0s; --tx:${tx}; --ty:${ty}`;
    o.textContent = s.icon; altar.appendChild(o); Snd.play('clink');
    bub.textContent = ['ยาสามขวดนี้…','ผสานรวมเป็นหนึ่ง…','จงเผยพลังที่ซ่อนอยู่!'][i];
  }, 700 + i*650));
  T(finishRitual, 700 + 3*650 + 1100);
}
function finishRitual(){
  ritualTimers.forEach(clearTimeout); ritualTimers = [];
  const r = $('ritual'); r.classList.remove('casting');
  const w = $('altar').querySelector('.witch'); if (w) w.classList.add('cast');
  $('altar').querySelectorAll('.orb').forEach(o => o.remove());
  const f = $('flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go');
  $('ritual-bubble').textContent = 'นี่คือพลังของเธอ!'; ritualFinale();
  $('skip').style.display = 'none';
  $('reveal').classList.add('show');
  setTimeout(() => { $('reveal').scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block:'center'}); $('accept').focus({preventScroll:true}); }, 300);
}
function closeRitual(){ $('ritual').classList.remove('open', 'legend', 'rare'); document.body.style.overflow = ''; resetBrewButtons(); }
function resetBrewButtons(){ ['brew','tray-brew'].forEach(id => { $(id).disabled = false; $(id).textContent = 'ปรุงยา'; }); }

$('skip').onclick = finishRitual;
$('accept').onclick = () => {
  closeRitual();
  $('power-name').textContent = finalPowerName; updatePreview(); updateStageNote();
  $('step2').classList.add('show');
  say('พลังพร้อมแล้ว ไปตั้งชื่อและเลือกสีการ์ดกันเลย');
  setTimeout(() => $('step2').scrollIntoView({behavior:'smooth', block:'start'}), 80);
};
$('again').onclick = () => {
  closeRitual(); selected = []; update();
  $('step2').classList.remove('show'); $('step3').classList.remove('show');
  document.querySelector('.lab').scrollIntoView({behavior:'smooth'});
};

/* ---------- Step 2: colours ---------- */
const THAI_HEX = [['บานเย็น','#e11d8f'],['ทับทิม','#dc2626'],['ไพลิน','#1d4ed8'],['มรกต','#10b981'],['คราม','#3730a3'],['น้ำเงิน','#3b5bff'],['น้ำตาล','#92400e'],
  ['ชมพู','#ff6fb5'],['ม่วง','#a855f7'],['ฟ้า','#38bdf8'],['เขียว','#22c55e'],['เหลือง','#facc15'],['ทอง','#fbbf24'],['ส้ม','#f97316'],['แดง','#ef4444'],
  ['ดำ','#2a2238'],['ขาว','#f3f4f6'],['เงิน','#c0c7d4'],['เทา','#9ca3af']];
function guessHex(t){
  let best = null, at = Infinity;
  THAI_HEX.forEach(([k,h]) => { const p = t.indexOf(k); if (p > -1 && p < at){ at = p; best = h; } });
  return best || '#c3a8ff';
}
const ROLE = ['สีหลัก','สีรอง','สีแต้ม'];
function totalColors(){ return picks.length; }
function renderColors(){
  const g = $('swatches'); g.innerHTML = '';
  colorsData.forEach(c => {
    const k = picks.findIndex(p => p.id === c.id), on = k > -1;
    const b = document.createElement('button');
    b.className = 'sw' + (on ? ' on' : ''); b.style.setProperty('--c', c.hex);
    b.setAttribute('aria-label', c.name); b.setAttribute('aria-pressed', on);
    b.innerHTML = `${on ? `<span class="rk">${ROLE[k]}</span>` : ''}<span class="gem"></span><span class="nm">${c.name}</span>`;
    b.onclick = () => {
      Snd.play(on ? 'pop' : 'clink');
      if (on) picks = picks.filter(p => p.id !== c.id);
      else { if (picks.length >= 3) return toast('เลือกสีได้สูงสุด 3 สี เอาสีเดิมออกก่อนนะ'); picks.push({ id:c.id, name:c.name, hex:c.hex }); }
      renderColors();
    };
    g.appendChild(b);
  });
  const t = $('tags'); t.innerHTML = '';
  picks.filter(p => !p.id).forEach(p => {
    const s = document.createElement('span'); s.className = 'tag'; s.style.setProperty('--c', p.hex);
    s.innerHTML = `<i></i>${esc(p.name)}<button aria-label="ลบสี ${esc(p.name)}">✕</button>`;
    s.querySelector('button').onclick = () => { picks = picks.filter(x => x !== p); renderColors(); };
    t.appendChild(s);
  });
  $('roles').innerHTML = ROLE.map((r, i) => {
    const p = picks[i];
    return `<div class="role${p ? ' full' : ''}" ${p ? `style="--c:${p.hex}"` : ''}><span class="dot"></span><div style="min-width:0"><b>${r}</b><span>${p ? esc(p.name) : 'ยังไม่เลือก'}</span></div></div>`;
  }).join('');
  $('color-count').textContent = `${picks.length}/3`;
  updatePreview();
}
function updatePreview(){
  const pv = $('preview'); if (!pv) return;
  const first = selected.find(s => !s.custom);
  const main = picks[0] ? picks[0].hex : (first ? first.color : '#a855f7');
  const orangey = /^#f[0-9a-f]{1}[4-9a-f]/i.test(main) && main.toLowerCase() !== '#f3f4f6';
  pv.style.setProperty('--p1', main);
  pv.style.setProperty('--p2', picks[1] ? picks[1].hex : (orangey ? '#a855f7' : '#ff8a2a'));
  pv.style.setProperty('--p3', picks[2] ? picks[2].hex : '#ffd36e');
  const n = $('holder').value.trim();
  $('pv-name').textContent = `การ์ดพลังของ ${n || '…'}`;
  $('pv-power').textContent = finalPowerName || 'ชื่อพลังของคุณ';
}
$('holder').addEventListener('input', updatePreview);
document.querySelectorAll('.theme').forEach(b => b.onclick = () => {
  cardTheme = b.dataset.themeKey;
  document.querySelectorAll('.theme').forEach(x => { const on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-checked', on); });
});
function updateStageNote(){
  if (selected.length < 3) return;
  const B = stage(selected[1]), C = stage(selected[2]);
  $('stage-note').textContent = `ฉากบนการ์ดของคุณ: ${C.sceneName} • ท่าผสมยาของผีน้อย: ${mixPose().name}`;
}
$('add-color').onclick = () => {
  const v = $('custom-color').value.trim(); if (!v) return;
  if (picks.length >= 3) return toast('เลือกสีได้สูงสุด 3 สี เอาสีเดิมออกก่อนนะ');
  if (!picks.some(p => p.name === v)) { picks.push({ name:v, hex:guessHex(v) }); $('custom-color').value=''; renderColors(); }
};

/* ---------- Step 3: prompt ---------- */
$('make-prompt').onclick = () => {
  const name = $('holder').value.trim();
  if (!name){ toast('กรอกชื่อผู้ถือครองพลังก่อนนะ'); $('holder').focus(); return; }
  const clean = c => c.replace(/^สี\s*/, '');
  const all = picks.map(p => p.name).map(clean);
  const [A, B, C] = selected.map(lore);
  const main = all[0] || A.tone;
  const accent = all[1] || (main.includes('ส้ม') ? 'ม่วงเวทมนตร์' : 'ส้มฟักทอง');
  const extra = all[2] ? ` และแต้มสี${all[2]}เล็กน้อย` : '';
  const d = details();
  const [SA, SB, SC] = selected.map(stage);
  const mix = mixPose(), decor = decorFor();
  const tones = selected.map(s => lore(s).tone);
  const gold = cardTheme === 'gold';
  const intro = gold
    ? `สร้างภาพ: การ์ดพลังเวทมนตร์ธีมฮาโลวีนแบบแสงทองวิเศษ แนวตั้ง สัดส่วน 2:3 สไตล์การ์ดเกมแฟนตาซีกึ่ง 3D ระดับไฮเอนด์ สีสดอิ่มฉ่ำ แสงทองระยิบระยับทั่วทั้งภาพ มีประกายแสงวิบวับ รายละเอียดคมชัดอลังการ ดูขลังและน่ารักในเวลาเดียวกัน`
    : `สร้างภาพ: การ์ดพลังเวทมนตร์ธีมฮาโลวีน แนวตั้ง สัดส่วน 2:3 สไตล์การ์ดเกมแฟนตาซีกึ่ง 3D ระดับพรีเมียม ภาพเงาวาว แสงเรืองแบบเวทมนตร์ ดูขลัง ลึกลับ แต่ยังน่ารัก รายละเอียดคมชัดสวยงาม`;
  const look = gold ? `【บรรยากาศและสี】
- พื้นหลังเป็นฉาก${SC.scene} โทนม่วงน้ำเงินยามค่ำคืน สว่างสดใสด้วยแสงเวทมนตร์ มีค้างคาวตัวเล็ก หมอกม่วงชมพูลอยฟุ้ง และละอองดาวสีทองระยิบทั่วฟ้า
- สีหลักคือสี${main}แบบเรืองแสงสว่างใส ตัดกับสี${accent}และสีทองอร่ามเปล่งประกาย${extra}
- กรอบการ์ดเป็นลวดลายทองวิจิตรแบบบาโรกที่เรืองแสงทั้งเส้น มีคริสตัลสี${main}เจียระไนเปล่งแสงประดับทั้งสี่มุม พันด้วยเถาวัลย์และใบเมเปิ้ลสีส้มแดง ที่มุมล่างทั้งสองข้างมีฟักทองแกะหน้าเรืองแสงส้มสว่าง
- ริบบิ้นหัวข้อทุกอันเป็นผ้าซาตินสี${main}เงาวาว ขอบทองหนาเรืองแสง ปลายริบบิ้นพลิ้วม้วน มีดาวทองสี่แฉกเปล่งแสงอยู่สองข้าง ตัวหนังสือสีขาวตัวหนามีขอบเรืองแสง
- กล่องข้อความทุกกล่องเป็นกรอบทองเรืองแสง พื้นด้านในสีม่วงเข้มโปร่งแสง มีประกายดาวเล็กๆ ตามขอบ ตัวหนังสือสีขาว
- มีสายพลังเวทสีชมพูม่วงหมุนวนเป็นเกลียวรอบตัวมาสคอต`
  : `【บรรยากาศและสี】
- พื้นหลังเป็นฉาก${SC.scene} โทนม่วงดำลึกยามค่ำคืน มีค้างคาวตัวเล็ก หมอกม่วงลอยต่ำ และละอองดาวระยิบ ให้พื้นหลังมืดเรียบพอที่ตัวหนังสืออ่านง่าย
- สีหลักคือสี${main}แบบเรืองแสงนีออนเวทมนตร์ ตัดกับสี${accent}และสีทองอร่าม${extra}
- กรอบการ์ดเป็นลวดลายทองแกะสลักแบบโกธิก มีเถาวัลย์ ใบเมเปิ้ลสีส้ม อัญมณีสี${main}ที่มุมบน และฟักทองแกะหน้าเรืองแสงที่มุมล่างทั้งสองข้าง
- ริบบิ้นหัวข้อทุกอันเป็นผ้ากำมะหยี่สี${main}เข้ม ขอบทอง ตัวหนังสือสีขาวตัวหนามีแสงเรืองจางๆ
- กล่องข้อความทุกกล่องเป็นกระจกมืดโปร่งแสง ขอบทองเรืองแสง ตัวหนังสือสีขาว`;
  const win = gold ? 'หน้าต่างกระจกเวทเรืองแสงสีฟ้าใส ขอบทอง' : 'หน้าต่างกระจกเวทโปร่งแสงขอบทอง';
  const circle = gold ? `วงเวทกลมลายรูนที่เรืองแสงสว่างจ้าสี${main}และฟ้าใส` : `วงเวทกลมสลักลายดาวที่หมุนวนเรืองแสงสี${main}`;
  $('prompt').value = `${intro} (ถ้าแนบรูปตัวอย่างมา ให้ยึดแค่การจัดวางเลย์เอาต์ ส่วนสี ธีม ฉาก และตัวละครให้ทำตามคำสั่งนี้)

${look}

${rarityPrompt()}

【ของตกแต่งการ์ด ธีมเวทมนตร์ ผี และความน่ารัก】
- ขวดยาจิ๋วสามขวดสี${tones[0]} ${tones[1]} และ${tones[2]} ห้อยประดับอยู่ตามกรอบการ์ด เป็นตัวแทนยาที่ผสม
${decor.map(x => '- ' + x).join('\n')}
- ตกแต่งพอประมาณ ไม่รก เว้นพื้นที่ให้ผีน้อยและตัวหนังสือเด่นชัด ทุกอย่างดูน่ารัก ขลัง ไม่น่ากลัว

【องค์ประกอบ เรียงจากบนลงล่าง】
1. ริบบิ้นเล็กบนสุด เขียนว่า “การ์ดพลังของ ${name}”
2. ริบบิ้นโค้งใหญ่ เป็นหัวข้อหลักที่ตัวใหญ่ที่สุด เขียนว่า “${finalPowerName}”
3. กลางการ์ด (ใหญ่ประมาณหนึ่งในสามของการ์ด): มาสคอตหลักเป็นผีน้อยตัวเด่นตรงกลาง: ${A.body} ท่าทางการผสมยา: ${mix.text} ข้างตัวมี${B.item}ลอยอยู่ และมี${C.fx}ลอยวนรอบตัว ตัวผีเป็นผ้าสีขาวนวลโปร่งแสงเล็กน้อย ตัวกลมนุ่มฟู ชายผ้าด้านล่างพลิ้วเป็นคลื่น ลอยเหนือพื้นเล็กน้อย ตาโตกลมเป็นประกาย แก้มชมพู ยิ้มหวาน น่ารักมาก ไม่น่ากลัว เป็นโมเดล 3D เงาวาวนุ่มเหมือนของเล่น มีแสงขอบสี${main} ลอยอยู่เหนือ${circle} มีควันสี${accent}ลอยต่ำรอบตัว
   - ซ้ายบนของมาสคอต: ${win} เอียงเล็กน้อย หัวหน้าต่างเขียนว่า “ขั้นตอนการคิด” ข้างในเป็นผังงานไอคอน (เฟือง หลอดไฟ จิ๊กซอว์ กล่อง) ต่อกันด้วยลูกศรเรืองแสง ไม่มีตัวหนังสือ
   - ขวาบนของมาสคอต: ${win} หัวหน้าต่างเขียนว่า “การสร้างผลลัพธ์” ข้างในเป็นหุ่นยนต์ตัวจิ๋วเดินบนตารางกริดตามลูกศรไปยังธงเป้าหมาย
4. กล่องแคปซูลขอบมน 3 กล่องเรียงลงมา แต่ละกล่องมีแถบป้ายสี${main}อยู่ด้านบน
   - ป้าย “ความชอบที่ฉันเลือก” ในกล่องเขียนว่า “${d.skill}”
   - ป้าย “เส้นทางที่น่าลองสำรวจ” ในกล่องเขียนว่า “${d.path}”
   - ป้าย “ภารกิจทดลอง” ในกล่องเขียนว่า “${d.mission}”
5. แถบริบบิ้นยาวสี${main} ขอบทอง มีดาวทองประกายสองข้าง เขียนว่า “พลังเติบโตได้ ผ่านการลองสิ่งใหม่” ใต้แถบมีแคปซูลเล็กเขียนว่า “เพื่อสำรวจความสนใจ ไม่ใช่ผลทดสอบความถนัด”
6. ส่วนท้าย: ตราสัญลักษณ์สีทอง “ITAI ⚜ DPU” และบรรทัดเล็กใต้ตราเขียนว่า “Potential Kingdom: The Magic Within”

【กฎเรื่องตัวอักษร】
- เขียนข้อความทุกคำตามที่อยู่ในเครื่องหมายคำพูดให้ตรงทุกตัวอักษร สะกดถูก สระและวรรณยุกต์ครบ ใช้ฟอนต์ไทยแบบไม่มีหัว ตัวหนา ใหญ่ อ่านง่าย
- ไม่ต้องแสดงเครื่องหมายคำพูดในภาพ
- ห้ามเพิ่มคำ ตัวเลข อีโมจิ วงเล็บ หรือข้อความอื่นที่ไม่ได้สั่ง

【สิ่งที่ไม่ต้องการ】
พื้นหลังสีครีมหรือสีขาว, ภาพแบน 2D, ลายเส้นการ์ตูนหนา, ตัวละครที่เป็นคน, มาสคอตหลักที่เป็นสัตว์หรือตัวละครอื่นที่ไม่ใช่ผี, ตัวหนังสือแปลกๆ ในของตกแต่ง, ผีหน้าตาน่ากลัว, ภาพน่ากลัวหรือมีเลือด, ตัวหนังสือเพี้ยนหรือภาษาอื่นปน`;
  postWall(name);
  $('step3').classList.add('show');
  setTimeout(() => $('step3').scrollIntoView({behavior:'smooth', block:'start'}), 80);
};
$('copy').onclick = async () => {
  const ta = $('prompt'); let ok = false;
  try { await navigator.clipboard.writeText(ta.value); ok = true; }
  catch(e){ try { ta.select(); ok = document.execCommand('copy'); } catch(_){} }
  const b = $('copy');
  if (ok){ b.textContent = 'คัดลอกแล้ว'; setTimeout(() => b.textContent = 'คัดลอกคำสั่ง', 2000); }
  else { ta.select(); toast('คัดลอกอัตโนมัติไม่ได้ ข้อความถูกเลือกไว้แล้ว กดคัดลอกเองได้เลย'); }
};

/* ---------- misc ---------- */
let toastT;
function toast(m){ const t = $('toast'); t.textContent = m; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(()=>t.classList.remove('show'), 2800); }
$('add-ing').onclick = addCustomIngredient;
$('custom-ing').addEventListener('keydown', e => { if (e.key === 'Enter') addCustomIngredient(); });
$('custom-color').addEventListener('keydown', e => { if (e.key === 'Enter') $('add-color').click(); });
$('brew').onclick = brew; $('tray-brew').onclick = brew;
document.addEventListener('keydown', e => { if (e.key === 'Escape' && $('ritual').classList.contains('open') && !$('reveal').classList.contains('show')) finishRitual(); });

(function fireflies(){
  if (reduce) return;
  const box = $('flies'), cols = ['#7ff3ea','#b48cff','#ffe29a','#9fd8ff'];
  for (let i=0;i<28;i++){
    const f = document.createElement('span'); f.className = 'fly';
    const r = (a,b) => a + Math.random()*(b-a);
    f.style.cssText = `left:${r(0,100)}%; top:${r(15,100)}%; --s:${r(2,4.5)}px; --fc:${cols[i%4]}; --t:${r(7,14)}s; --d:${r(-14,0)}s; --dx:${r(-60,60)}px; --dy:${r(-80,-20)}px`;
    box.appendChild(f);
  }
})();
/* ===================== SOUND (synthesised, no files) ===================== */
const Snd = (() => {
  let ctx = null, master = null, music = null, on = true, timer = null, nextT = 0, step = 0, track = null, musicVol = .6;
  try { const v = parseFloat(localStorage.getItem('potion-music-vol')); if (!isNaN(v)) musicVol = Math.min(1, Math.max(0, v)); } catch(e){}
  try { on = localStorage.getItem('potion-sound') !== 'off'; } catch(e){}
  const mf = m => 440 * Math.pow(2, (m - 69) / 12);
  function init(){
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
    ctx = new AC(); master = ctx.createGain(); master.gain.value = on ? 1 : 0; master.connect(ctx.destination);
    music = ctx.createGain(); music.gain.value = .15 * musicVol; music.connect(master);
    return ctx;
  }
  function tone(f, t, dur, type, vol, dest, glide){
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
    if (glide) o.frequency.exponentialRampToValueAtTime(glide, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .012); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(dest || master); o.start(t); o.stop(t + dur + .05);
  }
  function noise(t, dur, vol, freq, q){
    const n = Math.floor(ctx.sampleRate * dur), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q || 1;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(master); s.start(t);
  }
  const fx = {
    clink(){ const t = ctx.currentTime; tone(2100, t, .14, 'sine', .1); tone(3150, t + .035, .12, 'sine', .06); },
    pop(){ const t = ctx.currentTime; tone(520, t, .1, 'triangle', .12, master, 880); },
    splash(){ const t = ctx.currentTime; noise(t, .4, .22, 1100, .8); tone(460, t, .28, 'sine', .22, master, 110); tone(330, t + .14, .22, 'sine', .14, master, 95); },
    bloop(){ tone(150 + Math.random() * 120, ctx.currentTime, .2, 'sine', .07, master, 300 + Math.random() * 260); },
    laugh(){
      const t = ctx.currentTime;
      [940, 880, 830, 780, 740, 690, 640].forEach((f, i) => {
        const st = t + i * .12, o = ctx.createOscillator(), g = ctx.createGain(), bp = ctx.createBiquadFilter();
        o.type = 'sawtooth'; o.frequency.setValueAtTime(f * 1.06, st); o.frequency.exponentialRampToValueAtTime(f * .82, st + .1);
        bp.type = 'bandpass'; bp.frequency.value = 1300; bp.Q.value = 2.5;
        g.gain.setValueAtTime(.0001, st); g.gain.exponentialRampToValueAtTime(.16, st + .015); g.gain.exponentialRampToValueAtTime(.0001, st + .1);
        o.connect(bp); bp.connect(g); g.connect(master); o.start(st); o.stop(st + .12);
      });
    },
    whoosh(){ const t = ctx.currentTime; noise(t, .7, .18, 600, .6); noise(t + .15, .6, .12, 1800, .8); },
    chime(){ const t = ctx.currentTime; [72, 76, 79, 84, 88].forEach((m, i) => { tone(mf(m), t + i * .09, 1.1, 'sine', .12); tone(mf(m + 12), t + i * .09, .6, 'triangle', .03); }); },
    legend(){
      const t = ctx.currentTime;
      [60, 64, 67, 72].forEach(m => tone(mf(m), t, 2.2, 'triangle', .07));
      [72, 76, 79, 84, 88, 91, 96].forEach((m, i) => tone(mf(m), t + .1 + i * .08, 1.4, 'sine', .11));
      noise(t, 1.2, .06, 6000, .5);
    },
    rare(){ const t = ctx.currentTime; [74, 78, 81, 86].forEach((m, i) => tone(mf(m), t + i * .1, 1, 'sine', .12)); }
  };
  /* ---------- built-in songs (original compositions) ---------- */
  function voice(f, t, dur, type, vol, attack, detune){
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (detune) o.detune.value = detune;
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + (attack || .006)); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    o.connect(g); g.connect(music); o.start(t); o.stop(t + dur + .05);
  }
  const INST = {
    box(e, t){ const f = mf(e.m), v = e.v || .3, len = Math.max(.7, e.dur * 1.6);       // music box / celesta
      voice(f, t, len, 'sine', v); voice(f * 2.005, t, len * .5, 'sine', v * .28); voice(f * 3.01, t, len * .25, 'sine', v * .1); voice(f, t, .05, 'triangle', v * .4, .002, 8); },
    pluck(e, t){ voice(mf(e.m), t, .32, 'triangle', e.v || .35); },                     // pizzicato
    bass(e, t){ voice(mf(e.m), t, .55, 'triangle', e.v || .5); voice(mf(e.m) / 2, t, .4, 'sine', (e.v || .5) * .5); },
    tick(e, t){ const n = Math.floor(ctx.sampleRate * .04), b = ctx.createBuffer(1, n, ctx.sampleRate), d = b.getChannelData(0);
      for (let k = 0; k < n; k++) d[k] = (Math.random() * 2 - 1) * Math.pow(1 - k / n, 4);
      const s = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = b; bp.type = 'bandpass'; bp.frequency.value = e.m; bp.Q.value = 6; g.gain.value = e.v || .5;
      s.connect(bp); bp.connect(g); g.connect(music); s.start(t); },
    pad(e, t){ e.ch.forEach(m => { const o = ctx.createOscillator(), lp = ctx.createBiquadFilter(), g = ctx.createGain();
      o.type = 'triangle'; o.frequency.value = mf(m); lp.type = 'lowpass'; lp.frequency.value = 900;
      g.gain.setValueAtTime(.0001, t); g.gain.linearRampToValueAtTime(e.v || .05, t + .6); g.gain.setValueAtTime(e.v || .05, t + e.dur - .6); g.gain.linearRampToValueAtTime(.0001, t + e.dur);
      o.connect(lp); lp.connect(g); g.connect(music); o.start(t); o.stop(t + e.dur + .05); }); },
    theremin(e, t){ const o = ctx.createOscillator(), lfo = ctx.createOscillator(), lg = ctx.createGain(), g = ctx.createGain(), f0 = mf(e.m), f1 = mf(e.to);
      o.type = 'sine'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + e.dur * .7);
      lfo.frequency.value = 5.5; lg.gain.value = f0 * .018; lfo.connect(lg); lg.connect(o.frequency);
      g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(e.v || .12, t + .45); g.gain.setValueAtTime(e.v || .12, t + e.dur * .7); g.gain.exponentialRampToValueAtTime(.0001, t + e.dur);
      o.connect(g); g.connect(music); o.start(t); lfo.start(t); o.stop(t + e.dur + .05); lfo.stop(t + e.dur + .05); },
    sine(e, t){ voice(mf(e.m), t, e.dur * .95, 'sine', e.v || .32); voice(mf(e.m + 12), t, Math.min(.4, e.dur * .6), 'sine', .06); }
  };
  function seq(list, i, u0, v){ const out = []; let u = u0; list.forEach(([m, d]) => { if (m) out.push({ u, m, d, i, v }); u += d; }); return out; }
  // Song 1: "กล่องดนตรีผีน้อย" — E minor music box, pizzicato, clock ticks, theremin swoops (8th-note grid)
  const ghostbox = (() => {
    const A = [[83,1],[79,1],[76,1],[79,1],[83,2],[84,1],[83,1], [82,1],[83,1],[79,2],[76,2],[null,2],
               [83,1],[79,1],[76,1],[79,1],[83,2],[88,1],[87,1], [88,2],[83,2],[79,2],[null,2],
               [84,1],[83,1],[81,1],[79,1],[78,2],[79,1],[81,1], [83,2],[76,2],[78,2],[75,2],
               [76,1],[79,1],[83,1],[88,1],[87,1],[84,1],[81,1],[78,1], [76,4],[null,4]];
    const B = [[81,1],[84,1],[88,2],[87,1],[86,1],[85,1],[84,1], [83,4],[80,2],[null,2],
               [81,1],[84,1],[88,2],[89,1],[88,1],[87,1],[88,1], [83,6],[null,2],
               [79,1],[83,1],[86,2],[84,1],[83,1],[82,1],[83,1], [88,3],[87,1],[84,2],[81,2],
               [78,1],[81,1],[84,1],[87,1],[90,1],[87,1],[84,1],[81,1], [83,4],[null,4]];
    const ev = [...seq(A, 'box', 0, .3), ...seq(B, 'box', 64, .3)];
    const chords = [[40,'m'],[40,'m'],[40,'m'],[40,'m'],[45,'m'],[40,'m'],[47,'7'],[40,'m'], [45,'m'],[40,'M'],[45,'m'],[47,'7'],[43,'M'],[48,'M'],[47,'7'],[40,'m']];
    chords.forEach(([r, q], bar) => {
      const u = bar * 8;
      ev.push({ u, m:r, i:'bass', v:.42 }, { u:u + 2, m:r + 7, i:'pluck', v:.16 }, { u:u + 4, m:r + 12, i:'pluck', v:.2 }, { u:u + 6, m:r + 7, i:'pluck', v:.14 });
      ev.push({ u:u + 2, m:2600, i:'tick', v:.32 }, { u:u + 6, m:1700, i:'tick', v:.32 });
      const ch = q === 'm' ? [0,3,7] : q === 'M' ? [0,4,7] : [0,4,10];
      if (bar % 2 === 0) ev.push({ u, i:'pad', ch:ch.map(x => r + 12 + x), d:16, v:.035 });
    });
    ev.push({ u:60, m:71, to:83, d:7, i:'theremin', v:.1 }, { u:124, m:83, to:76, d:7, i:'theremin', v:.1 });
    return { name:'กล่องดนตรีผีน้อย', unit:.25, len:128, ev };
  })();
  // Song 2: the original waltz (3/4, one unit = one beat)
  const waltz = (() => {
    const MEL = [[74,1],[77,1],[81,1],[80,2],[77,1],[76,1],[79,1],[82,1],[81,3],[86,1],[84,1],[82,1],[81,1],[79,1],[77,1],[76,1],[73,1],[76,1],[74,3]];
    const ev = seq(MEL, 'sine', 0, .32);
    [38, 40, 43, 45, 46, 41, 45, 38].forEach((r, bar) => { const u = bar * 3; ev.push({ u, m:r, i:'bass', v:.45 }, { u:u + 1, m:r + 15, i:'pluck', v:.14 }, { u:u + 2, m:r + 19, i:'pluck', v:.14 }); });
    return { name:'วอลทซ์ฮาโลวีน', unit:.46, len:24, ev };
  })();
  const SONGS = { ghostbox, waltz };
  let song = 'ghostbox'; try { const sv = localStorage.getItem('potion-song'); if (SONGS[sv]) song = sv; } catch(e){}
  let t0 = 0, ei = 0, li = 0;
  function schedule(){
    if (!ctx || !on) return;
    const S = SONGS[song], evs = S.sorted || (S.sorted = S.ev.slice().sort((a, b) => a.u - b.u));
    for (let guard = 0; guard < 400; guard++){
      const e = evs[ei], t = t0 + (li * S.len + e.u) * S.unit;
      if (t > ctx.currentTime + .6) break;
      if (t >= ctx.currentTime - .05){ try { INST[e.i]({ ...e, dur:(e.d || 1) * S.unit }, t); } catch(err){} }
      if (++ei >= evs.length){ ei = 0; li++; }
    }
  }
  function startMusic(){ if (track){ track.volume = musicVol; if (on) track.play().catch(() => {}); return; } if (!ctx || timer) return; t0 = ctx.currentTime + .15; ei = 0; li = 0; timer = setInterval(schedule, 120); }
  function stopMusic(){ clearInterval(timer); timer = null; if (track) track.pause(); }
  return {
    get on(){ return on; },
    resume(){ if (!init()) return; if (ctx.state === 'suspended') ctx.resume(); if (on) startMusic(); },
    play(n){ if (!on || !init()) return; if (ctx.state === 'suspended') ctx.resume(); try { fx[n](); } catch(e){} },
    set(v){ on = v; try { localStorage.setItem('potion-sound', v ? 'on' : 'off'); } catch(e){}
      if (init()){ master.gain.setTargetAtTime(v ? 1 : 0, ctx.currentTime, .05); if (v){ ctx.resume(); startMusic(); } else stopMusic(); } },
    ready(){ return !!ctx; },
    get vol(){ return musicVol; },
    setVol(v){ musicVol = Math.min(1, Math.max(0, v)); try { localStorage.setItem('potion-music-vol', musicVol); } catch(e){}
      if (music) music.gain.setTargetAtTime(.15 * musicVol, ctx.currentTime, .05); if (track) track.volume = musicVol; },
    setTrack(src){ clearInterval(timer); timer = null; if (track) track.pause(); track = new Audio(src); track.loop = true; track.volume = musicVol;
      if (on && ctx) track.play().catch(() => {}); },
    clearTrack(){ if (track){ track.pause(); track = null; } if (on && ctx) startMusic(); },
    get custom(){ return !!track; },
    get song(){ return song; }, songs(){ return Object.entries(SONGS).map(([k, v]) => ({ key:k, name:v.name })); },
    setSong(k){ if (!SONGS[k]) return; song = k; try { localStorage.setItem('potion-song', k); } catch(e){}
      if (track){ track.pause(); track = null; } clearInterval(timer); timer = null; if (on && ctx) startMusic(); }
  };
})();
document.addEventListener('pointerdown', () => Snd.resume());
document.addEventListener('keydown', () => Snd.resume());
setInterval(() => { if (Snd.on && Snd.ready() && selected.length && Math.random() < .55) Snd.play('bloop'); }, 1300);

function syncDock(){
  const s = $('dk-sound'); s.setAttribute('aria-pressed', Snd.on); s.querySelector('.ic').textContent = Snd.on ? '🔊' : '🔇';
  $('dk-booth').setAttribute('aria-pressed', booth);
}
$('dk-sound').onclick = () => { Snd.set(!Snd.on); syncDock(); toast(Snd.on ? 'เปิดเสียงแล้ว' : 'ปิดเสียงแล้ว'); };

/* ===================== DRAG & DROP ===================== */
let drag = null, justDragged = false;
function dropTargets(){
  const t = [$('cauldron').getBoundingClientRect()];
  const tray = $('tray'); if (getComputedStyle(tray).display !== 'none') t.push(tray.getBoundingClientRect());
  return t;
}
function overTarget(x, y){ return dropTargets().some(r => r.width && x > r.left - 30 && x < r.right + 30 && y > r.top - 40 && y < r.bottom + 20); }
function startDrag(x, y){
  drag.active = true;
  const g = document.createElement('div'); g.className = 'drag-ghost'; g.style.setProperty('--c', drag.p.color);
  g.appendChild(drag.b.querySelector('svg').cloneNode(true)); document.body.appendChild(g); drag.g = g;
  drag.b.classList.add('lifting'); $('cauldron').classList.add('target'); document.querySelector('.stage').classList.add('dragging'); $('tray').classList.add('target');
  Snd.play('clink'); moveGhost(x, y);
}
function moveGhost(x, y){
  drag.g.style.transform = `translate(${x - 42}px, ${y - 60}px)`;
  const hot = overTarget(x, y); $('cauldron').classList.toggle('hot', hot); drag.hot = hot;
}
function clearDragUI(){
  $('cauldron').classList.remove('target', 'hot'); document.querySelector('.stage').classList.remove('dragging'); $('tray').classList.remove('target');
  if (drag && drag.b) drag.b.classList.remove('lifting');
}
$('shelf').addEventListener('pointerdown', e => {
  const b = e.target.closest('.bottle[data-pid]'); if (!b || e.button > 0) return;
  const p = potionsData.find(x => x.id === b.dataset.pid);
  drag = { b, p, x0:e.clientX, y0:e.clientY, id:e.pointerId, active:false, touch:e.pointerType !== 'mouse' };
  drag.ready = !drag.touch;
  if (drag.touch){ const ex = e.clientX, ey = e.clientY; drag.hold = setTimeout(() => { if (drag && !drag.active){ drag.ready = true; startDrag(ex, ey); } }, 230); }
});
window.addEventListener('pointermove', e => {
  if (!drag || e.pointerId !== drag.id) return;
  const dist = Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0);
  if (!drag.active){
    if (!drag.ready){ if (dist > 10){ clearTimeout(drag.hold); drag = null; } return; }
    if (dist > 6) startDrag(e.clientX, e.clientY); else return;
  }
  moveGhost(e.clientX, e.clientY);
});
function endDrag(e){
  if (!drag || (e && e.pointerId !== drag.id)) return;
  clearTimeout(drag.hold);
  const d = drag; drag = null;
  if (!d.active) return;
  justDragged = true; setTimeout(() => justDragged = false, 80);
  d.b.classList.remove('lifting'); clearDragUI();
  const g = d.g;
  if (d.hot){
    const already = selected.includes(d.p);
    if (already){ toast('ขวดนี้อยู่ในหม้อแล้ว ลองขวดอื่นนะ'); }
    else if (selected.length >= 3){ toast('หม้อเต็มแล้ว แตะขวดในหม้อเพื่อนำออกก่อนนะ'); }
    else { g.classList.add('pour'); setTimeout(() => togglePotion(d.p), 200); }
    const r = $('cauldron').getBoundingClientRect();
    setTimeout(() => { g.classList.add('gone'); g.style.transform = `translate(${r.left + r.width/2 - 42}px, ${r.top + r.height*.2}px) scale(.3)`; }, 180);
    setTimeout(() => g.remove(), 600);
  } else {
    const r = d.b.getBoundingClientRect();
    g.classList.add('gone'); g.style.transform = `translate(${r.left + r.width/2 - 42}px, ${r.top}px) scale(.6)`;
    setTimeout(() => g.remove(), 400);
  }
}
window.addEventListener('pointerup', endDrag);
window.addEventListener('pointercancel', e => { if (drag && drag.active) endDrag(e); else if (drag){ clearTimeout(drag.hold); drag = null; } });
document.addEventListener('touchmove', e => { if (drag && drag.active) e.preventDefault(); }, { passive:false });
$('shelf').addEventListener('contextmenu', e => { if (e.target.closest('.bottle[data-pid]')) e.preventDefault(); });

function splashAt(color){
  const st = document.querySelector('.stage'), c = $('cauldron');
  const cx = c.offsetLeft + c.offsetWidth / 2, cy = c.offsetTop + c.offsetWidth * .38;
  const rp = document.createElement('div'); rp.className = 'ripple'; rp.style.color = color;
  rp.style.left = (cx - c.offsetWidth * .35) + 'px'; rp.style.width = (c.offsetWidth * .7) + 'px'; rp.style.top = (cy - 11) + 'px';
  st.appendChild(rp); setTimeout(() => rp.remove(), 900);
  if (reduce) return;
  for (let i = 0; i < 10; i++){
    const s = document.createElement('span'); s.className = 'splash'; s.style.background = color; s.style.color = color;
    const a = -Math.PI * (0.1 + Math.random() * 0.8), v = 40 + Math.random() * 60;
    s.style.left = (cx - 4 + (Math.random() * 40 - 20)) + 'px'; s.style.top = (cy - 6) + 'px';
    s.style.setProperty('--dx', (Math.cos(a) * v * 1.4).toFixed(0) + 'px'); s.style.setProperty('--dy', (Math.sin(a) * v).toFixed(0) + 'px');
    st.appendChild(s); setTimeout(() => s.remove(), 750);
  }
}

/* ===================== SECRET RECIPES & RARITY ===================== */
const LEGENDS = [
  { ids:['potion5','potion10','potion11'], title:'ปราชญ์เงาแห่งกาลเวลา', icon:'⏳', aura:'มีนาฬิกาทรายทองคำและหนังสือโบราณลอยเป็นวงรอบตัว',
    hint:'ได้ยินว่าเงาล่องหน นาฬิกาทราย และหนังสือแห่งปัญญา เคยรวมพลังกันครั้งหนึ่ง…' },
  { ids:['potion1','potion10','potion8'], title:'ผู้ท่องฝันข้ามรัตติกาล', icon:'🌙', aura:'มีพระจันทร์เสี้ยวสีทองเป็นรัศมีด้านหลังและเส้นทางดวงดาวพาดผ่านท้องฟ้า',
    hint:'พระจันทร์ นาฬิกาทราย และดวงตาแห่งสมาธิ ชอบออกเดินทางในความฝันด้วยกัน…' },
  { ids:['potion2','potion3','potion4'], title:'ราชาแห่งงานเลี้ยงผีน้อย', icon:'🎉', aura:'มีพลุสีทองและสายรุ้งริบบิ้นพลิ้วรอบตัว เหมือนงานเลี้ยงที่ไม่มีวันจบ',
    hint:'เสียงหัวเราะ จังหวะเต้นรำ และหัวใจ คือสูตรของงานเลี้ยงที่ไม่มีวันจบ…' },
  { ids:['potion9','potion7','potion12'], title:'จอมเวทผู้พลิกโชคชะตา', icon:'🍀', aura:'มีเปลวไฟสีทองและใบโคลเวอร์ทองคำหมุนวนรอบมงกุฎ',
    hint:'เปลวไฟ มงกุฎ และใบโคลเวอร์ เมื่ออยู่ด้วยกันจะพลิกโชคชะตาได้…' },
  { ids:['potion6','potion4','potion1'], title:'ผู้พิทักษ์หัวใจใต้แสงจันทร์', icon:'💖', aura:'มีหัวใจทองคำเรืองแสงและใบไม้ทองโปรยปรายรอบตัว',
    hint:'ใบไม้เยียวยา หัวใจ และแสงจันทร์ ปกป้องทุกคนในยามหลับใหล…' },
  { ids:['potion8','potion11','potion9'], title:'สถาปนิกโลกดิจิทัลในตำนาน', icon:'💠', aura:'มีเส้นวงจรทองคำและคริสตัลลอยเรียงเป็นเมืองเวทมนตร์จิ๋วด้านหลัง',
    hint:'ดวงตาแห่งสมาธิ หนังสือแห่งปัญญา และเปลวไฟ สร้างโลกใหม่ได้ทั้งใบ…' }
];
const RARITY_TXT = { common:'★☆☆ ระดับธรรมดา', rare:'★★☆ ระดับหายาก', legend:'★★★ ระดับตำนาน' };
let curRarity = 'common', curLegend = null, nearL = null, wallPosted = false;
let found = []; try { found = JSON.parse(localStorage.getItem('potion-legends') || '[]'); } catch(e){}
function idsNow(){ return selected.filter(s => !s.custom).map(s => s.id); }
function legendOf(){ const ids = idsNow(); return ids.length === 3 ? LEGENDS.find(L => L.ids.every(i => ids.includes(i))) || null : null; }
function nearLegendOf(){ const ids = idsNow(); return LEGENDS.find(L => ids.includes(L.ids[0]) && ids.includes(L.ids[1])) || null; }
function applyRarity(){
  curLegend = legendOf(); nearL = curLegend ? null : nearLegendOf();
  curRarity = curLegend ? 'legend' : nearL ? 'rare' : 'common'; wallPosted = false;
  const r = $('ritual'); r.classList.remove('legend', 'rare'); if (curRarity !== 'common') r.classList.add(curRarity);
  const el = $('r-rarity'); el.className = 'rarity ' + curRarity; el.textContent = RARITY_TXT[curRarity];
  const n = $('r-legend');
  if (curLegend){ const k = LEGENDS.indexOf(curLegend); if (!found.includes(k)){ found.push(k); try { localStorage.setItem('potion-legends', JSON.stringify(found)); } catch(e){} }
    n.innerHTML = `✦ คุณค้นพบ<em>สูตรลับในตำนาน</em>แล้ว (${found.length}/${LEGENDS.length}) ✦`; }
  else if (nearL) n.innerHTML = `เกือบแล้ว! สูตรนี้มีพลังของ<em>สูตรในตำนาน</em>ซ่อนอยู่ ลองเปลี่ยนขวดสุดท้ายดูสิ`;
  else n.textContent = 'ลองผสมสูตรใหม่ อาจเจอการ์ดหายากหรือสูตรลับในตำนาน!';
  renderSeals();
}
function ritualFinale(){
  if (curRarity === 'legend'){
    Snd.play('legend'); $('ritual-bubble').textContent = 'ไม่น่าเชื่อ! สูตรลับในตำนาน!';
    if (!reduce){
      const rain = document.createElement('div'); rain.className = 'goldrain';
      for (let i = 0; i < 46; i++){ const s = document.createElement('i'); s.textContent = ['✦','★','✧','⭐'][i % 4];
        s.style.cssText = `left:${Math.random()*100}%; font-size:${10 + Math.random()*16}px; --t:${2.2 + Math.random()*2}s; --d:${Math.random()*1.2}s`; rain.appendChild(s); }
      document.body.appendChild(rain); setTimeout(() => rain.remove(), 4800);
    }
  } else if (curRarity === 'rare'){ Snd.play('rare'); $('ritual-bubble').textContent = 'โอ้โห! การ์ดหายากเลยนะ!'; }
  else Snd.play('chime');
}
function rarityPrompt(){
  if (curRarity === 'legend') return `【ระดับการ์ด: ตำนาน】\n- กรอบทองคำแท้ที่วิจิตรกว่าปกติ ประดับอัญมณีมากขึ้น มีดาวทองสามดวงและมงกุฎทองเล็กๆ อยู่เหนือริบบิ้นหัวข้อ\n- ผีน้อยมีออร่าสีทองและวงรัศมีเปล่งประกายด้านหลัง ${curLegend.aura}`;
  if (curRarity === 'rare') return `【ระดับการ์ด: หายาก】\n- มีดาวสีเงินประกายสองดวงอยู่เหนือริบบิ้นหัวข้อ และขอบกรอบประดับคริสตัลสีเงินอมฟ้าเพิ่มขึ้น`;
  return `【ระดับการ์ด: ธรรมดา】\n- มีดาวทองดวงเล็กหนึ่งดวงอยู่เหนือริบบิ้นหัวข้อ`;
}
function renderSeals(){
  const box = $('seals'); if (!box) return;
  box.innerHTML = '';
  LEGENDS.forEach((L, i) => {
    const f = found.includes(i), b = document.createElement('button');
    b.className = 'seal' + (f ? ' found' : ''); b.textContent = f ? L.icon : '?';
    b.setAttribute('aria-label', f ? L.title : 'สูตรลับที่ยังไม่ค้นพบ');
    b.onclick = () => { Snd.play('pop'); if (f){ say(`สูตร “${L.title}” คุณค้นพบแล้ว!`); } else { say(L.hint); } };
    box.appendChild(b);
  });
  $('lg-count').textContent = `${found.length}/${LEGENDS.length}`;
}
let hintI = 0;
function rotateHint(){
  const h = $('hint'); if (!h) return;
  const pool = LEGENDS.filter((L, i) => !found.includes(i));
  h.classList.add('fade');
  setTimeout(() => {
    h.textContent = pool.length ? '🔮 คำใบ้: ' + pool[hintI++ % pool.length].hint : '👑 คุณค้นพบสูตรลับครบทุกสูตรแล้ว สุดยอดนักปรุงยา!';
    h.classList.remove('fade');
  }, 500);
}
setInterval(rotateHint, 9000);

/* ===================== QUIZ MODE ===================== */
const QUIZ = [
  { q:'ถ้ามีวันว่าง 1 วัน อยากทำอะไรที่สุด?', o:[
    { em:'🎮', t:'เล่นเกม หรือสร้างอะไรสนุกๆ', p:['potion12','potion2','potion9'] },
    { em:'📚', t:'อ่านหรือค้นหาเรื่องที่สงสัย', p:['potion11','potion8','potion10'] },
    { em:'🎨', t:'วาดรูป ทำคลิป เต้น ร้องเพลง', p:['potion3','potion2','potion4'] },
    { em:'🛌', t:'พักผ่อนและดูแลตัวเอง', p:['potion1','potion6','potion5'] } ] },
  { q:'เวลาทำงานกลุ่ม เพื่อนๆ มักให้เราทำหน้าที่อะไร?', o:[
    { em:'👑', t:'นำทีมและแบ่งงาน', p:['potion7','potion9','potion12'] },
    { em:'🔍', t:'หาข้อมูลและตรวจความถูกต้อง', p:['potion5','potion11','potion8'] },
    { em:'💬', t:'ประสานใจ ทำให้ทีมยิ้มได้', p:['potion4','potion2','potion3'] },
    { em:'🛠️', t:'แก้ปัญหาตอนงานพัง', p:['potion6','potion8','potion9'] } ] },
  { q:'ถ้าได้พลังวิเศษ 1 อย่าง อยากได้อะไร?', o:[
    { em:'⏳', t:'ย้อนเวลาหรือข้ามไปอนาคต', p:['potion10','potion1','potion11'] },
    { em:'👻', t:'ล่องหนไปสำรวจที่ลึกลับ', p:['potion5','potion8','potion1'] },
    { em:'✨', t:'เสกสิ่งใหม่จากความคิด', p:['potion12','potion3','potion11'] },
    { em:'💖', t:'ทำให้ทุกคนรอบตัวมีความสุข', p:['potion4','potion6','potion2'] } ] }
];
let qStep = 0, qScore = {}, qPick = [];
function openQuiz(){
  qStep = 0; qScore = {}; qPick = [];
  $('quiz-witch').innerHTML = witchSVG('w4');
  $('quiz').classList.add('open'); document.body.style.overflow = 'hidden'; renderQuiz(); Snd.play('whoosh');
}
function closeQuiz(){ $('quiz').classList.remove('open'); document.body.style.overflow = ''; }
function renderQuiz(){
  const body = $('quiz-body');
  $('quiz-dots').innerHTML = [0,1,2].map(i => `<i class="${i <= qStep && qStep < 3 || qStep >= 3 ? 'on' : ''}"></i>`).join('');
  if (qStep < 3){
    const Q = QUIZ[qStep];
    body.innerHTML = `<h3>${Q.q}</h3><p class="msub">คำถามที่ ${qStep + 1} จาก 3 เลือกข้อที่ใช่ที่สุด</p><div class="q-opts">${Q.o.map((o, i) =>
      `<button class="q-opt" data-i="${i}"><span class="em">${o.em}</span><span>${o.t}</span></button>`).join('')}</div>`;
    body.querySelectorAll('.q-opt').forEach(b => b.onclick = () => {
      const o = Q.o[+b.dataset.i]; b.classList.add('picked'); Snd.play('pop');
      o.p.forEach((id, k) => qScore[id] = (qScore[id] || 0) + (3 - k) + Math.random() * .3);
      setTimeout(() => { qStep++; renderQuiz(); }, 280);
    });
    const f = body.querySelector('.q-opt'); if (f) f.focus({ preventScroll:true });
  } else {
    qPick = Object.entries(qScore).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([id]) => potionsData.find(p => p.id === id));
    Snd.play('chime');
    body.innerHTML = `<h3>แม่มดมองเห็นแล้ว…</h3><p class="msub">ยา 3 ขวดนี้เข้ากับตัวคุณที่สุด ลองปรุงดูไหม?</p>
      <div class="q-result">${qPick.map((p, i) => `<div class="q-pot" style="--c:${p.color}">${bottleSVG(p, 'q' + i)}<b>${p.name}</b><small>${p.skill.split(' • ')[0]}</small></div>`).join('')}</div>
      <div class="m-actions"><button class="btn btn-ghost" id="quiz-self">ขอเลือกเอง</button><button class="btn btn-gold" id="quiz-apply">ใส่ยาลงหม้อเลย</button></div>`;
    $('quiz-self').onclick = closeQuiz;
    $('quiz-apply').onclick = () => {
      closeQuiz(); selected = []; update();
      const target = matchMedia('(max-width:900px)').matches ? document.querySelector('.stage-panel') : document.querySelector('.lab');
      target.scrollIntoView({ behavior:'smooth', block:'start' });
      qPick.forEach((p, i) => setTimeout(() => { if (!selected.includes(p) && selected.length < 3) togglePotion(p); }, 600 + i * 650));
    };
  }
}
$('quiz-open').onclick = openQuiz;
$('quiz-close').onclick = closeQuiz;

/* ===================== WALL OF POWER (shared db) ===================== */
let wallDb = null, wallRows = [];
const todayKey = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
function renderWall(){
  const sub = $('wall-sub');
  if (!wallDb){ sub.textContent = 'ค่าพลังของวันนี้จะแสดงผลเมื่อเปิดหน้านี้ผ่านลิงก์ของ Claude และเข้าสู่ระบบอยู่'; return; }
  const today = wallRows.filter(r => r.day === todayKey());
  sub.textContent = today.length ? 'พลังของทุกคนที่มาปรุงยาที่บูธวันนี้ อัปเดตทันทีเมื่อมีคนสร้างการ์ด' : 'ยังไม่มีใครปรุงยาวันนี้ มาเป็นคนแรกกันเถอะ!';
  $('w-total').textContent = today.length;
  $('w-legend').textContent = today.filter(r => r.rarity === 'legend').length;
  $('w-rare').textContent = today.filter(r => r.rarity === 'rare').length;
  const roles = {}; today.forEach(r => { if (r.role) roles[r.role] = (roles[r.role] || 0) + 1; });
  const chips = $('w-roles'); chips.innerHTML = '';
  Object.entries(roles).sort((a, b) => b[1] - a[1]).slice(0, 8).forEach(([k, v]) => {
    const c = document.createElement('span'); c.className = 'rchip'; c.textContent = k; const b = document.createElement('b'); b.textContent = `${v} คน`; c.appendChild(b); chips.appendChild(c);
  });
  const cards = $('w-cards'); cards.innerHTML = '';
  if (!today.length){ const p = document.createElement('p'); p.className = 'wall-empty'; p.textContent = 'การ์ดของนักปรุงยาจะมาปรากฏที่นี่ ✨'; cards.appendChild(p); return; }
  today.slice(0, 60).forEach(r => {
    const d = document.createElement('div'); d.className = 'wcard ' + (r.rarity || 'common');
    const s = document.createElement('span'); s.className = 'ws'; s.textContent = { common:'★', rare:'★★', legend:'★★★' }[r.rarity] || '★';
    const n = document.createElement('div'); n.className = 'wn'; n.textContent = r.name || 'นักปรุงยา';
    const p = document.createElement('div'); p.className = 'wp'; p.textContent = r.power || '';
    const i = document.createElement('div'); i.className = 'wi'; i.textContent = r.icons || '';
    const del = document.createElement('button'); del.className = 'wdel'; del.textContent = '✕'; del.setAttribute('aria-label', `ลบการ์ดของ ${r.name || 'นักปรุงยา'}`);
    del.onclick = () => {
      if (!del.classList.contains('confirm')){ del.classList.add('confirm'); del.textContent = 'ลบเลย?'; clearTimeout(del._t); del._t = setTimeout(() => { del.classList.remove('confirm'); del.textContent = '✕'; }, 3000); return; }
      d.classList.add('removing');
      wallDb.collection('wall').doc(r._id).delete().then(() => toast('ลบการ์ดแล้ว')).catch(() => { d.classList.remove('removing'); toast('ลบไม่สำเร็จ บัญชีนี้อาจไม่มีสิทธิ์ลบ'); });
    };
    d.append(s, n, p, i, del); cards.appendChild(d);
  });
}
async function initWall(){
  try {
    if (!window.claude || typeof window.claude.use !== 'function') return renderWall();
    wallDb = await window.claude.use('db');
    if (!wallDb) return renderWall();
    let gotData = false; const to = setTimeout(() => { if (!gotData) renderWall(); }, 10000);
    wallDb.collection('wall').orderBy('t', 'desc').limit(400).onSnapshot(snap => {
      gotData = true; clearTimeout(to); wallRows = snap.docs.map(d => ({ ...(d.data() || {}), _id:d.id })); renderWall();
    }, () => { clearTimeout(to); wallDb = null; renderWall(); });
  } catch(e){ wallDb = null; renderWall(); }
}
function postWall(name){
  if (!wallDb || wallPosted) return;
  wallPosted = true;
  wallDb.collection('wall').add({ name:name.slice(0, 40), power:finalPowerName, role:lore(selected[0]).role, rarity:curRarity,
    icons:selected.map(s => s.icon).join(''), t:Date.now(), day:todayKey() }).catch(() => { wallPosted = false; });
}
function applyHash(){
  const on = location.hash === '#wall';
  document.body.classList.toggle('wall-mode', on);
  if (on) window.scrollTo({ top:0 });
}
window.addEventListener('hashchange', applyHash);
$('dk-wall').onclick = () => { location.hash = 'wall'; };
$('wall-big').onclick = () => { location.hash = 'wall'; };
$('wall-close').onclick = () => { location.hash = ''; };
$('wall-clear').onclick = async () => {
  const b = $('wall-clear');
  if (!wallDb){ toast('ยังเชื่อมต่อค่าพลังไม่ได้'); return; }
  const today = wallRows.filter(r => r.day === todayKey() && r._id);
  if (!today.length){ toast('วันนี้ยังไม่มีการ์ดให้ลบ'); return; }
  if (!b.classList.contains('confirm')){
    b.classList.add('confirm'); b.textContent = `กดอีกครั้งเพื่อลบ ${today.length} ใบ`;
    clearTimeout(b._t); b._t = setTimeout(() => { b.classList.remove('confirm'); b.textContent = '🗑️ ล้างการ์ดของวันนี้ทั้งหมด'; }, 4000);
    return;
  }
  clearTimeout(b._t); b.disabled = true; b.textContent = 'กำลังลบ…';
  let fail = 0;
  for (const r of today){ try { await wallDb.collection('wall').doc(r._id).delete(); } catch(e){ fail++; } }
  b.disabled = false; b.classList.remove('confirm'); b.textContent = '🗑️ ล้างการ์ดของวันนี้ทั้งหมด';
  toast(fail ? `ลบไม่สำเร็จ ${fail} ใบ บัญชีนี้อาจไม่มีสิทธิ์ลบ` : 'ล้างการ์ดของวันนี้เรียบร้อยแล้ว');
};

/* ===================== BOOTH MODE ===================== */
let booth = false, idleT = null; try { booth = localStorage.getItem('potion-booth') === 'on'; } catch(e){}
function poke(){
  clearTimeout(idleT);
  if (booth && !document.body.classList.contains('wall-mode') && !$('attract').classList.contains('open')) idleT = setTimeout(boothReset, 60000);
}
['pointerdown','keydown','wheel','touchstart'].forEach(ev => document.addEventListener(ev, poke, { passive:true }));
function boothReset(){
  ritualTimers.forEach(clearTimeout); ritualTimers = [];
  closeRitual(); closeQuiz(); $('cardmodal').classList.remove('open'); document.body.style.overflow = '';
  selected = []; picks = []; finalPowerName = ''; $('holder').value = ''; $('custom-ing').value = '';
  $('step2').classList.remove('show'); $('step3').classList.remove('show');
  update(); renderColors(); window.scrollTo({ top:0 });
  $('attract-witch').innerHTML = witchSVG('w5');
  $('attract').classList.add('open');
  const lines = ['มาปรุงยากันไหม~ ✨','ผีน้อยรอเธออยู่นะ~ 👻','อยากรู้พลังที่ซ่อนอยู่ในตัวไหม? 🔮'];
  $('attract-bub').textContent = lines[Math.floor(Math.random() * lines.length)];
}
$('attract').onclick = () => { $('attract').classList.remove('open'); Snd.resume(); Snd.play('pop'); poke(); };
$('dk-booth').onclick = () => {
  booth = !booth; try { localStorage.setItem('potion-booth', booth ? 'on' : 'off'); } catch(e){}
  syncDock(); poke(); toast(booth ? 'เปิดโหมดบูธแล้ว ถ้าไม่มีคนแตะจอ 1 นาที เว็บจะเริ่มใหม่เอง' : 'ปิดโหมดบูธแล้ว');
};

/* ===================== DOWNLOADABLE CARD ===================== */
function hexA(h, a){ const n = parseInt(h.slice(1), 16); return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`; }
function shade(h, k){ const n = parseInt(h.slice(1), 16); const f = c => Math.max(0, Math.min(255, Math.round(c * k))); return `rgb(${f(n >> 16 & 255)},${f(n >> 8 & 255)},${f(n & 255)})`; }
function rr(c, x, y, w, h, r){ c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath(); }
function wrapThai(c, text, maxW){
  const parts = (window.Intl && Intl.Segmenter) ? [...new Intl.Segmenter('th', { granularity:'word' }).segment(text)].map(s => s.segment) : [...text];
  const lines = []; let line = '';
  parts.forEach(p => { const t = line + p; if (c.measureText(t).width > maxW && line){ lines.push(line.trim()); line = p; } else line = t; });
  if (line.trim()) lines.push(line.trim()); return lines;
}
async function makeCard(){
  const W = 1080, H = 1620, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const c = cv.getContext('2d');
  const F = '"Bai Jamjuree", "Leelawadee UI", "Thonburi", sans-serif', SERIF = 'Georgia, "Times New Roman", serif';
  try { await Promise.all([document.fonts.load(`700 40px "Bai Jamjuree"`), document.fonts.load(`500 30px "Bai Jamjuree"`)]); } catch(e){}
  const lum = h => { const n = parseInt(h.slice(1), 16); return (.299 * (n >> 16 & 255) + .587 * (n >> 8 & 255) + .114 * (n & 255)) / 255; };
  const usable = h => h && /^#[0-9a-f]{6}$/i.test(h) && lum(h) < .78 && lum(h) > .12;
  const cand = [...picks.map(p => p.hex), ...selected.map(s => s.color)].filter(usable);
  const main = cand[0] || '#8b5cf6', acc = '#ff8a2a';
  const d = details(), name = $('holder').value.trim() || 'นักปรุงยา';
  const goldG = (y0, y1) => { const g = c.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, '#fff3c4'); g.addColorStop(.35, '#f5c55a'); g.addColorStop(.7, '#c98a24'); g.addColorStop(1, '#ffe08a'); return g; };
  const glow = (col, b) => { c.shadowColor = col; c.shadowBlur = b; };
  const noGlow = () => { c.shadowBlur = 0; c.shadowColor = 'transparent'; };

  /* ---------- background: the site's graveyard scene ---------- */
  const bgUrl = (getComputedStyle(document.querySelector('.scene')).backgroundImage.match(/url\("?(.*?)"?\)$/) || [])[1];
  if (bgUrl){
    const img = await new Promise(r => { const i = new Image(); i.onload = () => r(i); i.onerror = () => r(null); i.src = bgUrl; });
    if (img){ const s = W / img.width, h = img.height * s; c.drawImage(img, 0, -Math.min(h - H, h * .04), W, h); }
  } else { c.fillStyle = '#1a0d40'; c.fillRect(0, 0, W, H); }
  let g = c.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, 'rgba(18,8,48,.35)'); g.addColorStop(.45, 'rgba(18,8,48,.15)'); g.addColorStop(.62, 'rgba(14,6,36,.55)'); g.addColorStop(1, 'rgba(10,4,26,.8)');
  c.fillStyle = g; c.fillRect(0, 0, W, H);
  g = c.createRadialGradient(540, 640, 30, 540, 640, 560); g.addColorStop(0, hexA(main, .38)); g.addColorStop(1, hexA(main, 0)); c.fillStyle = g; c.fillRect(0, 0, W, H);
  // twinkles
  for (let i = 0; i < 70; i++){ c.fillStyle = `rgba(255,${235 + Math.random()*20|0},210,${.35 + Math.random()*.6})`; c.beginPath(); c.arc(60 + Math.random()*960, 60 + Math.random()*760, Math.random()*2.2 + .4, 0, 7); c.fill(); }

  /* ---------- helpers ---------- */
  function star4(x, y, r, col){ c.save(); glow(col, r * 1.2); c.fillStyle = col; c.beginPath();
    c.moveTo(x, y - r); c.quadraticCurveTo(x + r*.18, y - r*.18, x + r, y); c.quadraticCurveTo(x + r*.18, y + r*.18, x, y + r);
    c.quadraticCurveTo(x - r*.18, y + r*.18, x - r, y); c.quadraticCurveTo(x - r*.18, y - r*.18, x, y - r); c.fill(); c.restore(); }
  function leaf(x, y, s, rot, col){ c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s); c.fillStyle = col; c.beginPath();
    const pts = [[0,-12],[3,-5],[10,-8],[7,-1],[13,3],[5,4],[3,12],[0,7],[-3,12],[-5,4],[-13,3],[-7,-1],[-10,-8],[-3,-5]];
    pts.forEach(([a, b], i) => i ? c.lineTo(a, b) : c.moveTo(a, b)); c.closePath(); c.fill();
    c.strokeStyle = 'rgba(90,30,0,.5)'; c.lineWidth = .8; c.beginPath(); c.moveTo(0, 12); c.lineTo(0, -8); c.stroke(); c.restore(); }
  function flower(x, y, r){ c.save(); glow('#c084fc', 10); c.fillStyle = '#a855f7';
    for (let i = 0; i < 5; i++){ const a = i * Math.PI * .4; c.beginPath(); c.ellipse(x + Math.cos(a) * r * .55, y + Math.sin(a) * r * .55, r * .5, r * .32, a, 0, 7); c.fill(); }
    noGlow(); c.fillStyle = '#ffe9a3'; c.beginPath(); c.arc(x, y, r * .22, 0, 7); c.fill(); c.restore(); }
  function bat(x, y, s){ c.save(); c.translate(x, y); c.scale(s, s); c.fillStyle = 'rgba(20,8,40,.9)'; c.beginPath();
    c.moveTo(0, 0); c.quadraticCurveTo(-8, -10, -22, -6); c.quadraticCurveTo(-16, -2, -18, 4); c.quadraticCurveTo(-10, 0, -6, 6); c.quadraticCurveTo(-2, 2, 0, 6);
    c.quadraticCurveTo(2, 2, 6, 6); c.quadraticCurveTo(10, 0, 18, 4); c.quadraticCurveTo(16, -2, 22, -6); c.quadraticCurveTo(8, -10, 0, 0); c.fill(); c.restore(); }
  function pumpkin(x, y, s){ c.save(); c.translate(x, y); c.scale(s, s);
    glow('rgba(255,140,30,.9)', 40); const pg = c.createRadialGradient(-12, -14, 6, 0, 0, 60); pg.addColorStop(0, '#ffb04a'); pg.addColorStop(.7, '#f06a12'); pg.addColorStop(1, '#a8420a');
    c.fillStyle = pg; [[-26,0,30,40],[26,0,30,40],[-12,0,30,44],[12,0,30,44],[0,0,28,46]].forEach(([a, b, rx, ry]) => { c.beginPath(); c.ellipse(a, b, rx, ry, 0, 0, 7); c.fill(); });
    noGlow(); c.fillStyle = '#4d6b2c'; c.fillRect(-5, -54, 10, 14);
    glow('#ffdd55', 18); c.fillStyle = '#ffe066';
    c.beginPath(); c.moveTo(-26, -10); c.lineTo(-10, -12); c.lineTo(-18, 4); c.fill(); c.beginPath(); c.moveTo(26, -10); c.lineTo(10, -12); c.lineTo(18, 4); c.fill();
    c.beginPath(); c.moveTo(-30, 12); c.quadraticCurveTo(0, 40, 30, 12); c.lineTo(20, 16); c.lineTo(14, 24); c.lineTo(6, 18); c.lineTo(-2, 26); c.lineTo(-10, 18); c.lineTo(-18, 24); c.lineTo(-22, 16); c.closePath(); c.fill();
    c.restore(); }
  function flask(x, y, s, col, icon){ c.save(); c.translate(x, y); c.scale(s, s);
    glow(col, 30); c.fillStyle = hexA(col, .85); c.beginPath(); c.arc(0, 10, 26, 0, 7); c.fill(); noGlow();
    c.fillStyle = 'rgba(255,255,255,.18)'; c.fillRect(-8, -26, 16, 18); c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = 2; c.strokeRect(-8, -26, 16, 18);
    c.beginPath(); c.arc(0, 10, 26, 0, 7); c.stroke(); c.fillStyle = '#8b5a2b'; c.fillRect(-7, -34, 14, 9);
    c.fillStyle = 'rgba(255,255,255,.6)'; c.beginPath(); c.ellipse(-10, 0, 6, 4, -.7, 0, 7); c.fill();
    c.font = `22px ${F}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#fff'; c.fillText(icon, 0, 13); c.restore(); }
  function ribbon(x, y, w, h, curve, col){
    const dark = shade(col, .35);
    // tails
    [[-1, x], [1, x + w]].forEach(([dir, ex]) => {
      c.fillStyle = dark; c.beginPath();
      c.moveTo(ex - dir * 10, y + h * .25 + curve * .2); c.lineTo(ex + dir * 70, y + h * .3 + curve * .2); c.lineTo(ex + dir * 44, y + h * .72 + curve * .2);
      c.lineTo(ex + dir * 70, y + h * 1.15 + curve * .2); c.lineTo(ex - dir * 10, y + h * 1.05 + curve * .2); c.closePath(); c.fill();
      c.strokeStyle = goldG(y, y + h); c.lineWidth = 3; c.stroke();
    });
    const bg = c.createLinearGradient(0, y - curve, 0, y + h); bg.addColorStop(0, shade(col, 1.15)); bg.addColorStop(.5, shade(col, .8)); bg.addColorStop(1, shade(col, .45));
    c.beginPath(); c.moveTo(x, y + curve); c.quadraticCurveTo(x + w/2, y - curve, x + w, y + curve); c.lineTo(x + w, y + h + curve); c.quadraticCurveTo(x + w/2, y + h - curve, x, y + h + curve); c.closePath();
    glow(hexA(col, .8), 26); c.fillStyle = bg; c.fill(); noGlow();
    c.lineWidth = 5; c.strokeStyle = goldG(y - curve, y + h + curve); c.stroke();
    c.lineWidth = 1.5; c.strokeStyle = 'rgba(255,240,190,.6)';
    c.beginPath(); c.moveTo(x + 10, y + curve + 9); c.quadraticCurveTo(x + w/2, y - curve + 9, x + w - 10, y + curve + 9); c.stroke();
    c.beginPath(); c.moveTo(x + 10, y + h + curve - 9); c.quadraticCurveTo(x + w/2, y + h - curve - 9, x + w - 10, y + h + curve - 9); c.stroke();
  }
  function fitText(t, maxW, size, weight){ let fs = size; c.font = `${weight} ${fs}px ${F}`; while (c.measureText(t).width > maxW && fs > 24){ fs -= 2; c.font = `${weight} ${fs}px ${F}`; } return fs; }
  function windowPanel(x, y, w, h, rot, title, draw){
    c.save(); c.translate(x + w/2, y + h/2); c.rotate(rot); c.translate(-w/2, -h/2);
    glow('rgba(110,220,255,.7)', 24);
    const pg = c.createLinearGradient(0, 0, 0, h); pg.addColorStop(0, 'rgba(70,140,230,.55)'); pg.addColorStop(1, 'rgba(40,30,120,.55)');
    c.fillStyle = pg; rr(c, 0, 0, w, h, 14); c.fill(); noGlow();
    c.lineWidth = 4; c.strokeStyle = goldG(0, h); c.stroke();
    c.fillStyle = 'rgba(20,20,70,.65)'; rr(c, 6, 6, w - 12, 40, 9); c.fill();
    c.font = `700 24px ${F}`; c.fillStyle = '#fff'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText(title, 18, 27);
    c.fillStyle = '#9ff6ee'; [w - 52, w - 36, w - 20].forEach(px => { c.beginPath(); c.arc(px, 26, 4, 0, 7); c.fill(); });
    c.strokeStyle = '#9ff6ee'; c.fillStyle = '#9ff6ee'; c.lineWidth = 3; glow('#7ff3ea', 10); draw(w, h); noGlow(); c.restore();
  }

  /* ---------- frame ---------- */
  c.lineJoin = 'round';
  glow('rgba(255,200,80,.85)', 30); c.lineWidth = 14; c.strokeStyle = goldG(0, H); rr(c, 22, 22, W - 44, H - 44, 30); c.stroke(); noGlow();
  c.lineWidth = 3; c.strokeStyle = '#fff1c2'; rr(c, 22, 22, W - 44, H - 44, 30); c.stroke();
  c.lineWidth = 3; c.strokeStyle = goldG(0, H); rr(c, 46, 46, W - 92, H - 92, 20); c.stroke();
  c.lineWidth = 1.5; c.strokeStyle = hexA(main, .9); rr(c, 56, 56, W - 112, H - 112, 16); c.stroke();
  // side filigree + vines
  c.strokeStyle = goldG(0, H); c.lineWidth = 3;
  [[46, 1], [W - 46, -1]].forEach(([sx, dir]) => {
    for (let k = 0; k < 6; k++){ const yy = 330 + k * 190; c.beginPath(); c.moveTo(sx, yy); c.bezierCurveTo(sx + dir * 30, yy - 20, sx + dir * 34, yy + 30, sx + dir * 14, yy + 34); c.stroke(); }
  });
  [[48, 1], [W - 48, -1]].forEach(([sx, dir]) => {
    c.strokeStyle = 'rgba(70,110,50,.9)'; c.lineWidth = 3; c.beginPath(); c.moveTo(sx, 120);
    for (let yy = 120; yy < H - 200; yy += 60) c.quadraticCurveTo(sx + dir * 22, yy + 30, sx + dir * 4, yy + 60); c.stroke();
    for (let yy = 150; yy < H - 220; yy += 120) leaf(sx + dir * 18, yy, 1.4, dir * .6 + yy * .01, yy % 240 < 120 ? '#e8742a' : '#d9521f');
    for (let yy = 210; yy < H - 260; yy += 240) flower(sx + dir * 16, yy, 13);
  });
  // corner medallions
  [[60, 60], [W - 60, 60], [60, H - 60], [W - 60, H - 60]].forEach(([x, y], i) => {
    c.save(); c.translate(x, y);
    c.fillStyle = goldG(-40, 40); glow('rgba(255,200,80,.9)', 20); c.beginPath(); c.arc(0, 0, 36, 0, 7); c.fill(); noGlow();
    c.strokeStyle = '#fff1c2'; c.lineWidth = 2; c.beginPath(); c.arc(0, 0, 29, 0, 7); c.stroke();
    const cg = c.createLinearGradient(-20, -24, 20, 24); cg.addColorStop(0, '#fff'); cg.addColorStop(.35, shade(main, 1.3)); cg.addColorStop(1, shade(main, .5));
    glow(main, 26); c.fillStyle = cg; c.beginPath(); c.moveTo(0, -24); c.lineTo(18, -4); c.lineTo(0, 26); c.lineTo(-18, -4); c.closePath(); c.fill(); noGlow();
    c.strokeStyle = 'rgba(255,255,255,.7)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(-18, -4); c.lineTo(18, -4); c.moveTo(0, -24); c.lineTo(-7, -4); c.lineTo(0, 26); c.lineTo(7, -4); c.closePath(); c.stroke();
    c.restore();
    if (i < 2){ leaf(x + (i ? -54 : 54), y + 18, 1.6, i ? .8 : -.8, '#e8742a'); leaf(x + (i ? -24 : 24), y + 52, 1.4, i ? 2 : -2, '#f2a03a'); }
  });

  c.textAlign = 'center'; c.textBaseline = 'middle';
  /* ---------- top ribbon ---------- */
  let fs = fitText(`การ์ดพลังของ ${name}`, 520, 40, 700);
  const sw = Math.min(640, c.measureText(`การ์ดพลังของ ${name}`).width + 120);
  ribbon(540 - sw/2, 74, sw, 74, 6, main);
  c.font = `700 ${fs}px ${F}`; c.fillStyle = '#fff'; glow('rgba(0,0,0,.6)', 6); c.fillText(`การ์ดพลังของ ${name}`, 540, 112); noGlow();
  /* ---------- rarity stars ---------- */
  const nStar = { common:1, rare:2, legend:3 }[curRarity] || 1, sc = curRarity === 'rare' ? '#d6eeff' : '#ffd36e';
  for (let i = 0; i < nStar; i++) star4(540 + (i - (nStar - 1) / 2) * 50, 186, 18, sc);
  if (curRarity === 'legend'){ c.save(); c.translate(540, 186); c.fillStyle = goldG(-40, 0); glow('#ffd36e', 20);
    c.beginPath(); c.moveTo(-60, 0); c.lineTo(-70, -32); c.lineTo(-36, -12); c.lineTo(0, -40); c.lineTo(36, -12); c.lineTo(70, -32); c.lineTo(60, 0); c.closePath(); c.globalAlpha = .0; c.fill(); c.restore(); }
  /* ---------- title ribbon ---------- */
  ribbon(130, 222, W - 260, 118, 22, main);
  fs = fitText(finalPowerName, 760, 66, 800);
  c.fillStyle = '#fff'; glow(hexA(main, 1), 18); c.fillText(finalPowerName, 540, 276, 780); noGlow();
  star4(178, 284, 20, '#ffe08a'); star4(W - 178, 284, 20, '#ffe08a');

  /* ---------- scene: bats, windows ---------- */
  bat(330, 410, 1.6); bat(400, 380, 1.1); bat(760, 395, 1.3);
  windowPanel(84, 400, 270, 190, -.05, 'ขั้นตอนการคิด', (w, h) => {
    const y0 = 110, xs = [40, 98, 156, 214];
    // gear
    c.beginPath(); c.arc(xs[0], y0, 14, 0, 7); c.stroke(); for (let k = 0; k < 8; k++){ const a = k * Math.PI / 4; c.beginPath(); c.moveTo(xs[0] + Math.cos(a) * 14, y0 + Math.sin(a) * 14); c.lineTo(xs[0] + Math.cos(a) * 21, y0 + Math.sin(a) * 21); c.stroke(); }
    // bulb
    c.fillStyle = '#ffe066'; glow('#ffe066', 14); c.beginPath(); c.arc(xs[1], y0 - 4, 14, 0, 7); c.fill(); c.fillRect(xs[1] - 7, y0 + 8, 14, 10); c.fillStyle = '#9ff6ee'; glow('#7ff3ea', 10);
    // puzzle
    c.fillStyle = '#7ab8ff'; c.fillRect(xs[2] - 14, y0 - 14, 28, 28); c.beginPath(); c.arc(xs[2] + 14, y0, 7, 0, 7); c.fill(); c.beginPath(); c.arc(xs[2], y0 - 14, 7, 0, 7); c.fill();
    // cube
    c.strokeStyle = '#9ff6ee'; c.beginPath(); c.moveTo(xs[3] - 14, y0 - 6); c.lineTo(xs[3], y0 - 14); c.lineTo(xs[3] + 14, y0 - 6); c.lineTo(xs[3] + 14, y0 + 12); c.lineTo(xs[3], y0 + 20); c.lineTo(xs[3] - 14, y0 + 12); c.closePath(); c.stroke();
    c.beginPath(); c.moveTo(xs[3] - 14, y0 - 6); c.lineTo(xs[3], y0 + 2); c.lineTo(xs[3] + 14, y0 - 6); c.moveTo(xs[3], y0 + 2); c.lineTo(xs[3], y0 + 20); c.stroke();
    // arrows
    c.fillStyle = '#ff9a3c'; [69, 127, 185].forEach(ax => { c.beginPath(); c.moveTo(ax - 5, y0 - 6); c.lineTo(ax + 6, y0); c.lineTo(ax - 5, y0 + 6); c.fill(); });
  });
  windowPanel(726, 410, 270, 190, .05, 'การสร้างผลลัพธ์', (w, h) => {
    c.lineWidth = 1.5; c.strokeStyle = 'rgba(159,246,238,.8)';
    for (let k = 0; k <= 4; k++){ c.beginPath(); c.moveTo(40 + k * 12, 168); c.lineTo(70 + k * 40, 70 + 0 * k); c.stroke(); }
    for (let k = 0; k < 4; k++){ const yy = 168 - k * 24, sx = 40 + k * 7.5, ex = 200 + k * 5; c.beginPath(); c.moveTo(sx, yy); c.lineTo(ex, yy); c.stroke(); }
    // robot
    c.fillStyle = '#eef6ff'; glow('#9ff6ee', 10); rr(c, 60, 92, 40, 32, 10); c.fill(); rr(c, 66, 126, 28, 26, 8); c.fill();
    c.fillStyle = '#1b2a6b'; c.beginPath(); c.arc(73, 108, 4, 0, 7); c.arc(87, 108, 4, 0, 7); c.fill();
    c.strokeStyle = '#eef6ff'; c.lineWidth = 2; c.beginPath(); c.moveTo(80, 92); c.lineTo(80, 82); c.stroke(); c.fillStyle = '#ff9a3c'; c.beginPath(); c.arc(80, 80, 4, 0, 7); c.fill();
    // arrow + flag
    c.fillStyle = '#ff9a3c'; c.beginPath(); c.moveTo(112, 128); c.lineTo(160, 128); c.lineTo(160, 120); c.lineTo(178, 132); c.lineTo(160, 144); c.lineTo(160, 136); c.lineTo(112, 136); c.fill();
    c.strokeStyle = '#fff'; c.lineWidth = 3; c.beginPath(); c.moveTo(205, 160); c.lineTo(205, 92); c.stroke();
    for (let r = 0; r < 3; r++) for (let q = 0; q < 3; q++){ c.fillStyle = (r + q) % 2 ? '#1b1b40' : '#fff'; c.fillRect(207 + q * 10, 92 + r * 9, 10, 9); }
  });

  /* ---------- magic circle + swirls ---------- */
  c.save(); c.translate(540, 820); c.scale(1, .3);
  glow(main, 40); c.strokeStyle = shade(main, 1.4); c.lineWidth = 7; c.beginPath(); c.arc(0, 0, 250, 0, 7); c.stroke();
  c.strokeStyle = '#9ff6ee'; c.lineWidth = 3; glow('#7ff3ea', 24); c.beginPath(); c.arc(0, 0, 215, 0, 7); c.stroke(); c.beginPath(); c.arc(0, 0, 140, 0, 7); c.stroke();
  c.beginPath(); for (let i = 0; i <= 5; i++){ const a = -Math.PI/2 + i * Math.PI * 4 / 5; c.lineTo(Math.cos(a) * 210, Math.sin(a) * 210); } c.stroke();
  for (let i = 0; i < 24; i++){ const a = i * Math.PI / 12; c.fillStyle = '#ffe9a3'; c.beginPath(); c.arc(Math.cos(a) * 232, Math.sin(a) * 232, 4, 0, 7); c.fill(); }
  c.restore(); noGlow();
  // pink swirl rings
  c.save(); c.lineCap = 'round';
  [[300, 70, -.12, '#ff7ad9', 6], [270, 54, .1, '#c084fc', 4], [330, 90, -.05, '#ffb3ec', 3]].forEach(([rx, ry, rot, col, lw], k) => {
    c.save(); c.translate(540, 690 + k * 20); c.rotate(rot); glow(col, 22); c.strokeStyle = col; c.lineWidth = lw;
    c.beginPath(); c.ellipse(0, 0, rx, ry, 0, Math.PI * .95, Math.PI * 2.35); c.stroke(); c.restore();
  });
  c.restore(); noGlow();
  // orange mist under circle
  g = c.createRadialGradient(540, 840, 20, 540, 840, 300); g.addColorStop(0, 'rgba(255,150,60,.35)'); g.addColorStop(1, 'rgba(255,150,60,0)'); c.fillStyle = g; c.fillRect(200, 740, 680, 200);

  /* ---------- ghost ---------- */
  const firstId = (selected[0] && selected[0].id) || '';
  c.save(); c.translate(540, 630); c.scale(3.5, 3.5); c.translate(-50, -60);
  glow(shade(main, 1.3), 55);
  const bodyG = c.createLinearGradient(20, 20, 80, 100); bodyG.addColorStop(0, '#ffffff'); bodyG.addColorStop(.6, '#f1e9ff'); bodyG.addColorStop(1, '#d6c6ff');
  c.fillStyle = bodyG; c.beginPath(); c.moveTo(50, 22); c.bezierCurveTo(24, 22, 14, 42, 14, 62); c.lineTo(14, 96);
  c.quadraticCurveTo(22, 86, 30, 98); c.quadraticCurveTo(40, 86, 50, 99); c.quadraticCurveTo(60, 86, 70, 98); c.quadraticCurveTo(78, 86, 86, 96); c.lineTo(86, 62); c.bezierCurveTo(86, 42, 76, 22, 50, 22); c.fill();
  noGlow();
  // arms
  c.fillStyle = '#f6f0ff'; c.beginPath(); c.ellipse(12, 70, 8, 5, -.6, 0, 7); c.fill(); c.beginPath(); c.ellipse(88, 66, 8, 5, .7, 0, 7); c.fill();
  c.fillStyle = 'rgba(255,255,255,.85)'; c.beginPath(); c.ellipse(34, 36, 8, 4, -.6, 0, 7); c.fill();
  // face
  c.fillStyle = '#2a1a4a'; [[39,60],[61,60]].forEach(([x, y]) => { c.beginPath(); c.ellipse(x, y, 5.5, 7, 0, 0, 7); c.fill(); });
  c.fillStyle = '#fff'; [[37.5,57],[59.5,57]].forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 2.2, 0, 7); c.fill(); }); [[41,63],[63,63]].forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 1, 0, 7); c.fill(); });
  c.fillStyle = 'rgba(255,140,180,.6)'; [[30,71],[70,71]].forEach(([x, y]) => { c.beginPath(); c.ellipse(x, y, 6, 3, 0, 0, 7); c.fill(); });
  c.fillStyle = '#7a2a4a'; c.beginPath(); c.moveTo(44, 70); c.quadraticCurveTo(50, 79, 56, 70); c.closePath(); c.fill();
  // accessory
  if (firstId === 'potion7'){ c.fillStyle = goldG(0, 30); glow('#ffd36e', 14); c.beginPath(); c.moveTo(32, 30); c.lineTo(30, 10); c.lineTo(40, 20); c.lineTo(50, 4); c.lineTo(60, 20); c.lineTo(70, 10); c.lineTo(68, 30); c.closePath(); c.fill(); noGlow();
    c.fillStyle = main; [[40,24],[50,22],[60,24]].forEach(([x, y]) => { c.beginPath(); c.arc(x, y, 2.4, 0, 7); c.fill(); }); }
  else if (firstId === 'potion6'){ [['#ff9ad5',30,28],['#ffe066',40,22],['#c084fc',50,20],['#9ff6ee',60,22],['#ff9ad5',70,28]].forEach(([col, x, y]) => { glow(col, 8); c.fillStyle = col; c.beginPath(); c.arc(x, y, 5, 0, 7); c.fill(); }); noGlow();
    [[35,26],[45,21],[55,21],[65,26]].forEach(([x, y]) => leaf(x, y, .35, 0, '#5f8b4a')); }
  else {
    const hg = c.createLinearGradient(30, -10, 70, 30); hg.addColorStop(0, shade(main, .9)); hg.addColorStop(1, shade(main, .35));
    c.fillStyle = hg; c.beginPath(); c.moveTo(27, 28); c.lineTo(48, -10); c.quadraticCurveTo(56, -16, 62, -8); c.quadraticCurveTo(66, 0, 74, 2); c.quadraticCurveTo(66, 6, 70, 28); c.closePath(); c.fill();
    c.fillStyle = shade(main, .3); c.beginPath(); c.ellipse(50, 28, 34, 7, 0, 0, 7); c.fill();
    c.fillStyle = goldG(20, 30); c.beginPath(); c.moveTo(30, 22); c.quadraticCurveTo(50, 27, 69, 22); c.lineTo(70, 27); c.quadraticCurveTo(50, 32, 29, 27); c.closePath(); c.fill();
    star4(57, 8, 4, '#ffe08a'); c.fillStyle = '#ffe08a'; c.beginPath(); c.arc(42, 12, 4, Math.PI * .4, Math.PI * 1.6, true); c.fill();
  }
  c.restore();

  /* ---------- floating potions & sparkles ---------- */
  [[220, 700, 1.6], [860, 700, 1.6], [820, 360, 1.1]].forEach(([x, y, s], i) => { const p = selected[i]; if (p) flask(x, y, s, p.color, p.icon); });
  [[300,620,10],[780,600,12],[420,520,7],[660,500,9],[250,820,8],[840,820,8],[540,450,8]].forEach(([x, y, r]) => star4(x, y, r, '#fff3c4'));
  leaf(330, 760, 1.4, .6, '#e8742a'); leaf(750, 520, 1.2, -.5, '#f2a03a');

  /* ---------- info boxes ---------- */
  const boxes = [['ความชอบที่ฉันเลือก', d.skill], ['เส้นทางที่น่าลองสำรวจ', d.path], ['ภารกิจทดลอง', d.mission]];
  let y = 876;
  boxes.forEach(([lbl, txt]) => {
    const isM = lbl === 'ภารกิจทดลอง', fz = isM ? 25 : 28, lh = isM ? 30 : 34;
    c.font = `600 ${fz}px ${F}`; const lines = wrapThai(c, txt, isM ? 770 : 830).slice(0, isM ? 3 : 2); const h = 52 + lines.length * lh;
    glow(hexA(main, .7), 20); c.fillStyle = 'rgba(22,10,50,.86)'; rr(c, 92, y, W - 184, h, 34); c.fill(); noGlow();
    c.lineWidth = 4; c.strokeStyle = goldG(y, y + h); c.stroke();
    c.lineWidth = 1.2; c.strokeStyle = hexA(main, .9); rr(c, 102, y + 8, W - 204, h - 16, 28); c.stroke();
    star4(124, y + h/2, 8, '#ffe08a'); star4(W - 124, y + h/2, 8, '#ffe08a');
    c.font = `800 30px ${F}`; const lw = c.measureText(lbl).width + 70;
    const tg = c.createLinearGradient(0, y - 26, 0, y + 26); tg.addColorStop(0, shade(main, 1.1)); tg.addColorStop(1, shade(main, .45));
    glow(hexA(main, .8), 14); c.fillStyle = tg; rr(c, 540 - lw/2, y - 26, lw, 52, 16); c.fill(); noGlow(); c.lineWidth = 3; c.strokeStyle = goldG(y - 26, y + 26); c.stroke();
    c.fillStyle = '#fff'; c.fillText(lbl, 540, y + 1);
    c.font = `600 ${fz}px ${F}`; c.fillStyle = '#fff'; lines.forEach((l, k) => c.fillText(l, 540, y + 50 + k * lh, isM ? 790 : 830));
    y += h + 30;
  });

  /* ---------- slogan + footer ---------- */
  y = Math.min(Math.max(y - 4, 1290), 1310);
  ribbon(120, y, W - 240, 80, 6, main);
  fs = fitText('พลังเติบโตได้ ผ่านการลองสิ่งใหม่', 720, 44, 800);
  c.fillStyle = '#fff'; glow('rgba(0,0,0,.5)', 6); c.fillText('พลังเติบโตได้ ผ่านการลองสิ่งใหม่', 540, y + 46); noGlow();
  star4(170, y + 46, 18, '#ffe08a'); star4(W - 170, y + 46, 18, '#ffe08a');
  const capY = y + 96, capW = 600;
  const cg2 = c.createLinearGradient(0, capY, 0, capY + 46); cg2.addColorStop(0, '#f6efff'); cg2.addColorStop(1, '#d9c9ff');
  c.fillStyle = cg2; rr(c, 540 - capW/2, capY, capW, 46, 23); c.fill(); c.lineWidth = 3; c.strokeStyle = goldG(capY, capY + 46); c.stroke();
  c.font = `700 24px ${F}`; c.fillStyle = shade(main, .4); c.fillText('เพื่อสำรวจความสนใจ ไม่ใช่ผลทดสอบความถนัด', 540, capY + 24);
  pumpkin(150, H - 140, 1.25); pumpkin(W - 150, H - 140, 1.25); pumpkin(250, H - 105, .7); pumpkin(W - 250, H - 105, .7);
  leaf(90, H - 200, 1.8, .5, '#e8742a'); leaf(W - 90, H - 200, 1.8, -.5, '#d9521f');
  c.font = `700 52px ${SERIF}`; c.fillStyle = goldG(H - 150, H - 100); glow('rgba(255,200,80,.8)', 16); c.fillText('ITAI ⚜ DPU', 540, H - 108); noGlow();
  c.font = `500 26px ${SERIF}`; c.fillStyle = '#f3e3b0'; c.fillText('Potential Kingdom: The Magic Within', 540, H - 66);
  return new Promise(res => cv.toBlob(res, 'image/png'));
}

let cardBlob = null, cardUrl = null;
async function openCard(){
  const btn = $('dl-card'); btn.disabled = true; btn.textContent = 'กำลังเสกการ์ด…';
  try {
    cardBlob = await makeCard(); if (cardUrl) URL.revokeObjectURL(cardUrl); cardUrl = URL.createObjectURL(cardBlob);
    $('card-img').src = cardUrl; $('cardmodal').classList.add('open'); document.body.style.overflow = 'hidden'; Snd.play('chime');
    let dl = null; try { dl = window.claude && window.claude.use ? await window.claude.use('downloads') : null; } catch(e){}
    $('card-save').style.display = dl ? '' : 'none';
    $('card-note').textContent = dl ? 'กดปุ่มด้านล่างเพื่อบันทึกการ์ดลงเครื่อง' : 'กดค้างที่รูป (มือถือ) หรือคลิกขวา (คอม) แล้วเลือกบันทึกรูปภาพ';
    $('card-save').onclick = async () => {
      try { await dl.save({ filename:`การ์ดพลัง-${($('holder').value.trim() || 'potion').replace(/[\\/:*?"<>|]/g,'')}.png`, data:cardBlob }); toast('บันทึกการ์ดแล้ว'); }
      catch(e){ if (e && e.code !== 'declined') toast('บันทึกไม่สำเร็จ ลองกดค้างที่รูปเพื่อบันทึกแทนนะ'); }
    };
  } catch(e){ toast('สร้างรูปการ์ดไม่สำเร็จ ลองอีกครั้งนะ'); }
  btn.disabled = false; btn.textContent = 'ดาวน์โหลดการ์ดพลัง';
}
$('dl-card').onclick = openCard;
$('card-close').onclick = () => { $('cardmodal').classList.remove('open'); document.body.style.overflow = ''; };

/* ===================== boot ===================== */
syncDock(); renderSeals(); rotateHint(); initWall(); applyHash(); poke();

const LORES = [
  '<b>รู้หรือไม่?</b> ลำดับของขวดยามีผล ขวดแรกกำหนดชุดของผีน้อย ขวดที่สองกำหนดท่าทาง ขวดที่สามกำหนดฉาก',
  '<b>รู้หรือไม่?</b> สูตรเดียวกันแต่สลับลำดับขวด อาจได้ท่าผสมยาคนละแบบ',
  '<b>เคล็ดลับแม่มด:</b> ถ้าได้การ์ดหายาก แปลว่าเกือบเจอสูตรลับในตำนานแล้ว!',
  '<b>รู้หรือไม่?</b> มีสูตรลับในตำนานซ่อนอยู่ 6 สูตร ใครเจอครบคือสุดยอดนักปรุงยา',
  '<b>เคล็ดลับแม่มด:</b> ลองพิมพ์วัตถุดิบของตัวเองลงหม้อ เช่น พลังแห่งมิตรภาพ',
  '<b>แมวดำกระซิบ:</b> ถ้าเลือกไม่ถูก กดให้แม่มดช่วยทายใจได้นะ เหมียว~'
];
let loreI = 0;
function rotateLore(){ const l = $('lore'); if (!l) return; l.classList.add('fade'); setTimeout(() => { l.innerHTML = LORES[loreI++ % LORES.length]; l.classList.remove('fade'); }, 450); }
rotateLore(); setInterval(rotateLore, 8000);
function syncClear(){ $('clear-pot').disabled = selected.length === 0; }
const _update = update;
update = function(){ _update(); syncClear(); };
$('clear-pot').onclick = () => {
  if (!selected.length) return;
  const st = document.querySelector('.stage'), c = $('cauldron');
  c.classList.remove('drain'); void c.offsetWidth; c.classList.add('drain');
  Snd.play('whoosh');
  if (!reduce) for (let i = 0; i < 4; i++){
    const p = document.createElement('span'); p.className = 'puff';
    p.style.left = (c.offsetLeft + c.offsetWidth * (.25 + i * .17) - 30) + 'px'; p.style.top = (c.offsetTop + c.offsetWidth * .2) + 'px';
    p.style.setProperty('--dx', ((i - 1.5) * 24) + 'px'); p.style.animationDelay = (i * .08) + 's';
    st.appendChild(p); setTimeout(() => p.remove(), 1300);
  }
  setTimeout(() => { selected = []; update(); resetBrewButtons(); say('หม้อสะอาดเอี่ยมแล้ว เริ่มสูตรใหม่ได้เลย~'); }, reduce ? 0 : 450);
};
/* ===== music volume + custom track ===== */
const idb = (() => {
  const open = () => new Promise((res, rej) => { const r = indexedDB.open('potion-music', 1); r.onupgradeneeded = () => r.result.createObjectStore('t'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); });
  return {
    async get(k){ try { const db = await open(); return await new Promise(res => { const q = db.transaction('t').objectStore('t').get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(null); }); } catch(e){ return null; } },
    async set(k, v){ try { const db = await open(); await new Promise(res => { const t = db.transaction('t', 'readwrite'); t.objectStore('t').put(v, k); t.oncomplete = res; t.onerror = res; }); } catch(e){} },
    async del(k){ try { const db = await open(); await new Promise(res => { const t = db.transaction('t', 'readwrite'); t.objectStore('t').delete(k); t.oncomplete = res; t.onerror = res; }); } catch(e){} }
  };
})();
function syncVol(){ const v = Math.round(Snd.vol * 100); $('vol').value = v; $('vol-num').textContent = v + '%'; }
function setVol(v){ Snd.setVol(v / 100); syncVol(); }
$('vol').oninput = e => setVol(+e.target.value);
$('vol-down').onclick = () => { setVol(Math.round(Snd.vol * 100) - 10); Snd.play('pop'); };
$('vol-up').onclick = () => { setVol(Math.round(Snd.vol * 100) + 10); Snd.play('pop'); };
$('dk-music').onclick = e => { e.stopPropagation(); const p = $('music-pop'), o = !p.classList.contains('open'); p.classList.toggle('open', o); $('dk-music').setAttribute('aria-expanded', o); };
document.addEventListener('pointerdown', e => { const p = $('music-pop'); if (p.classList.contains('open') && !p.contains(e.target) && !e.target.closest('#dk-music')){ p.classList.remove('open'); $('dk-music').setAttribute('aria-expanded', false); } });
const fileToDataURL = f => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(f); });
const SONG_ICON = { ghostbox:'👻', waltz:'🎃' };
let customName = '';
function songName(){ return (Snd.songs().find(x => x.key === Snd.song) || {}).name; }
function renderSongs(){
  $('songs').innerHTML = Snd.songs().map(x => `<button class="song${!customName && x.key === Snd.song ? ' on' : ''}" data-k="${x.key}" role="radio" aria-checked="${!customName && x.key === Snd.song}"><i>${SONG_ICON[x.key] || '🎵'}</i>${x.name}</button>`).join('');
  $('songs').querySelectorAll('.song').forEach(b => b.onclick = async () => {
    Snd.resume(); Snd.setSong(b.dataset.k); if (customName){ customName = ''; await idb.del('track'); }
    if (!Snd.on){ Snd.set(true); syncDock(); } showTrack('');
  });
}
function showTrack(name){ customName = name || ''; $('track-name').textContent = name || songName(); $('track-reset').style.display = name ? '' : 'none'; renderSongs(); }
$('track-pick').onclick = () => $('track-file').click();
$('track-file').onchange = async e => {
  const f = e.target.files && e.target.files[0]; if (!f) return;
  try {
    const url = await fileToDataURL(f); Snd.resume(); Snd.setTrack(url); showTrack(f.name);
    if (!Snd.on){ Snd.set(true); syncDock(); }
    await idb.set('track', { blob:f, name:f.name }); toast('เปลี่ยนเพลงแล้ว 🎶');
  } catch(err){ toast('เปิดไฟล์เพลงนี้ไม่ได้ ลองไฟล์ mp3 ดูนะ'); }
  e.target.value = '';
};
$('track-reset').onclick = async () => { Snd.clearTrack(); showTrack(''); await idb.del('track'); toast('กลับมาใช้เพลงของเว็บแล้ว'); };
showTrack('');
(async () => { const t = await idb.get('track'); if (t && t.blob){ try { Snd.setTrack(await fileToDataURL(t.blob)); showTrack(t.name); } catch(e){} } })();
syncVol();
$('reroll').onclick = () => { rollMission(); renderMission(); Snd.play('pop'); const b = $('reroll'); b.classList.remove('spin'); void b.offsetWidth; b.classList.add('spin'); };
update(); renderColors();
