// Exercise #6: Reverse the String
/* 
ข้อนี้เป็นโจทย์เสริม สำหรับคนที่อยากฝึกฝนเพิ่มเติม
สมมุติว่าเรามี Variable ตั้งต้น companyName 
ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp Thailand"
*/
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
/* 
ให้เขียนโปรแกรมในการเรียงตัวอักษรกลับด้าน
เช่น "abcd" จะกลายเป็น "dcba"
*/

for (let i = 0; i < 15; i++) {
    reversedCompanyName = companyName[i] + reversedCompanyName;
    
}

console.log(reversedCompanyName);
