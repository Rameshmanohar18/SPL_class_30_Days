import students from "./student";
import totalMarks from "./util";
import util from "./util";


const displayAll = ()=>{
    students.map((item)=>{
  console.log(`Name:${item.name}`);
    })

}

displayAll()
console.log(totalMarks(20,30,40,50,60))