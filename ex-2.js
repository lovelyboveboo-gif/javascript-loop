// Exercise #2: Sum the Numbers
/*สมมุติว่าเรามี Variable ตั้งต้น productPrices 
ซึ่งบรรจุราคาสินค้าแต่ละชิ้นในตะกร้าสินค้า ดังนี้ [10, 20, 30, 40, 50]*/
let numbers = [10, 20, 30, 40, 50];
let total = 0;

// Start coding here
/* 
ให้เขียนโปรแกรมในการหายอดรวมของราคาสินค้าทุกชิ้นที่อยู่ในตะกร้าสินค้า
*/
for (let i = 0; i < 5; i++) {
    total = total + numbers[i];
    
}


console.log(total);
