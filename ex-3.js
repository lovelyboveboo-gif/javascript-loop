// Exercise #3: Find a Minimum Score
/*
สมมุติว่าเรามี Variable ตั้งต้น studentScores 
ซึ่งบรรจุคะแนนสอบของนักเรียนในห้อง ดังนี้ [100, 20, 3, 100]
*/

let scores = [100, 20, 3, 100];
let minScore = scores[0];

// Start coding here
/*
ให้เขียนโปรแกรมในการหาคะแนนสอบที่น้อยที่สุดของนักเรียนในห้อง
*/

for (let i = 0; i < 4; i++) {
        if (scores[i] < minScore) {
            minScore = scores[i];
    } 
}
console.log(minScore);
