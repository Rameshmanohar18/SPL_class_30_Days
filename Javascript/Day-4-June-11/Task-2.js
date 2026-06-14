// Task 2: Find a User by ID (find()) 
// Task: Find the user whose id is 2. Display user details. Interview Focus: find()



const users = [ 
    { id: 1, name: "Sudhan" },
     { id: 2, name: "Kumar" },
      { id: 3, name: "Ravi" } 
    ]; 

    const findUsers = users.find(user => user.id ===2)
    console.log(findUsers)