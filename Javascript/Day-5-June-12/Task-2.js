// // Task 2: Rest Parameter Task Create a function called totalMarks. 
// // 
// Requirements: Accept any number of marks Return total marks Use Rest Parameter Example totalMarks(80, 90, 70, 60);


const totalMarks =(...marks) =>{

let total =0;
for (let i=0;i<marks.length;i++){
    total+=marks[i];
}
return total;
}

console.log("🍄 totalMarks", totalMarks(80, 90, 70, 60));

