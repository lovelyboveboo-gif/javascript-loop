// Exercise #5: Concatenate the Alphabets
/* 
สมมุติว่าเรามี Variable ตั้งต้น companyName 
ซึ่งบรรจุตัวอักษรภาษาอังกฤษที่เป็นชื่อบริษัท ดังนี้ "TechUp"
*/
let companyName = "TechUp";

// Start coding here
/* 
ให้เขียนโปรแกรมที่บอกลำดับตัวอักษรภาษาอังกฤษแต่ละตัว 
ว่าเป็นตัวอักษรตัวที่เท่าไหร่ โดยมีรูปแบบการเขียนแบบนี้ 
"Number <ลำดับ> character is <ตัวอักษร>"
*/

for (let i = 0; i < 6; i++){
    console.log("Number " + (i+1) + "character is " + companyName[i]);  
}