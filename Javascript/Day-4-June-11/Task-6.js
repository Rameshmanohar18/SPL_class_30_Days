// Bonus Company-Level Task 
// Tasks: Display all orders (map) 
// Display completed orders (filter) 
// Find order id = 3 (find)
//  Calculate total revenue (reduce)

const orders = [ 
    { id: 1, customer: "John", amount: 5000, status: "Completed" }, 
    { id: 2, customer: "David", amount: 3000, status: "Pending" },
     { id: 3, customer: "Sam", amount: 7000, status: "Completed" }, 
     { id: 4, customer: "Peter", amount: 2000, status: "Pending" } 
    ]; 



  const Display = orders.map((order)=>{
    console.log("Customer -", order.customer,"Amount", order.amount,"Status -", order.status)
  })  

  console.log("Completed orders");

  const completedOrder = orders.filter((order)=> order.status === "Completed")
    completedOrder.forEach((order)=> {
            console.log("Customer - ",order.customer, "Amount - ", order.amount, "Status - ", order.status);

    })

  
const findId = orders.find((order)=> order.id ===3)
console.log("🥑 findId", findId);



const totalRevenue = orders.reduce((acc,num)=> acc+num.amount,0)
    console.log("🌭 totalRevenue", totalRevenue);
    