import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {

      // Navbar
      "หน้าแรก": "Home",
      "เกี่ยวกับเรา": "About Us",
      "บริการของเรา": "Services",
      "บทความ": "Blogs",
      "ิติดต่อเรา": "Contact",

      // Banner
      "Nolimit.co.th (ต้องหาเงินได้ไม่จำกัด)" : "Nolimit.co.th",
      "การสร้าง" : "Create a",
      "สภาพแวดล้อม" : " connected ",
      "ที่เชื่อมโยงและอุดมสมบูรณ์" : "and environment",
      "เข้าใจความสำคัญของความหลากหลายทางเพศและมุ่งหวังที่จะเป็นต้นแบบด้านความเสมอภาคระหว่างเพศในสถานที่ทำงานที่ให้กำลังใจและสนับสนุนทั้งพนักงานชายและพนักงานหญิงให้สามารถเติบโตและศึกษาหาความสำเร็จได้ตามความสามารถของต้นเอง ด้วยความมุ่งหวังที่จะสร้างสภาพแวดล้อมที่เชื่อมโยงความหลากหลายทางเพศเข้ากับกลไกการทำงานอย่างมีความยืดหยุ่นและยุติธรรม"
      : "Understands the importance of gender diversity and aims to be a model for equality Gender section in the workplace that encourages and supports both male and female employees to be able to Grow and study to find success according to your own abilities. With the aim of creating an environment that connects gender diversity with flexible and fair working mechanisms",
      
      // About Us
      "บริษัท": "The",
      "ต้องหาเงินได้ไม่": "Nolimit Company",
      "จำกัด": "",
      "เป้าหมายของเรา": "our goal",
      "เป้าหมายของเราคือการทำเงินอย่างยั่งยืนและสำคัญโดยให้ความสำคัญในการพัฒนาและตลาดสินค้าที่มีคุณภาพ\
      และการให้บริการที่ดีเพื่อตอบสนองความต้องการของลูกค้าที่เปลี่ยนแปลงอย่างรวดเร็ว เราจะสร้างโอกาสให้กับ\
      ผู้คนในทีมของเราให้สามารถพัฒนาและเติบโตตามความสามารถของเขาและสร้างรายได้ที่มั่นคงสำหรับพวกเขาเอง\
      และองค์กรที่เราดำเนินการอยู่ด้วย"
        : "Our goal is to make money sustainably and especially importantly, and the\
        efficient product market and providing good performance demands rapidly changing\
        customers, creating opportunities for people in Our teams are able to develop and\
        grow according to their abilities and create a stable income for themselves and the\
        organizations we work with",

      // Service
      "บริการให้คำปรึกษา บริการ Domain, Cloud Flare, Cloud Hosting": "Consulting services, Domain\
       services, Cloud Flare, Cloud Hosting ",
      "รับกำจัด Malware และอื่น ๆ สำหรับ Wordpress": "Get rid of Malware and more for Wordpress",

      // News
      "ข่าวสาร": "News",
      "อัพเดทข่าวสารของบริษัท": "Update company news",
      "ข่าวสารทั้งหมด": "All News",
      "คู่มือการใช้งาน": "User manual",
      "คู่มือการใช้งานกับทางบริษัท": "User manual with the company",

      // Blogs
      "บทความสาระน่ารู้ ที่เป็นประโยชน์": "Interesting articles useful",
      "บทความทั้งหมด": "All blogs",

      // Work
      "ร่วมงานกับเรา": "Work with Us",
      "มาร่วมเป็นส่วนนึงกับบริษัทเรา": "Join with us",
      "ตำแหน่งทั้งหมด": "All positions",
      "สมัคร": "register",

      // Contact
      "ติดต่อเรา": "Contact Us",
      "ที่อยู่ : เลขที่ 245 หมู่ 4 ตำบลนาหว้า อำเภอนาหว้า จังหวัดนครพนม 48180 ประเทศไทย"
      : "Address: No. 245 Village No. 4, Na Wa Subdistrict, Na Wa District, Nakhon\
       Phanom Province 48180, Thailand",
      "โทร: +66627822874": "Tel: +66627822874",
      "เวลาทำการ": "Open every weekday ",
      "เปิดทุกวันจันทร-ศุกร์, เวลา 9AM - 3P": "until Friday, time 9AM - 3P",
      "เกี่ยวกับเรา": "About Us",
      "นโยบายความเป็นส่วนตัว": "Privacy Policy",
      "ข้อกำหนดและเงื่อนไข": "Terms and Conditions",
      "E-mail ของคุณ" : "Your E-mail Address",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "th",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

