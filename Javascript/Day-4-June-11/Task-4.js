// Task 4: Calculate Total Cart Amount (reduce()) 
// Task: Calculate the total cart value. Display the final amount. Interview Focus: reduce()

const cart = [ 
    { product: "Laptop", price: 50000 }, 
    { product: "Mouse", price: 500 },
     { product: "Keyboard", price: 1500 }
     ];
     

     const total = cart.reduce((acc,num)=> acc+num.price,0)
     console.log("🍅 total", total);

     