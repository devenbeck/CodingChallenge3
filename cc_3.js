// Product Price Management Scenario : 
// Online store you are managing a product pricing system
let prices = [50, 55, 25, 75, 100] //prices array
prices.push(10); //add/push a new price to the end of array
prices.shift(); // removes the first price from array
console.log("Updated Price List: ", prices); //print new array

// Task 2: Modifying Customer Orders Scenario: Order List
// you are processing customer orders and need to update 
//order quantities
let orders = [100, 200, 350, 270, 650]; //orders array
orders [2] += 5; //increase the 3rd order by 5 
//do [2] for 3rd order bc array is 0,1,2 
let TotalOrders = orders.reduce((total, orders) => total + orders, 0); //calculate total of all orders
console.log("Updated Orders: ",orders); //print updated array of orders
console.log("Total order count: ", TotalOrders); //print total of all orders

//Task 3: Employee Performance Tracking Scenario: HR System You are 
//Tracking Employee Performance Data
let employee = {
    name: "Alyssa",
    role: "HR representive",
    performanceScore: 95,
    isActive: true
}; // employee object declared
employee.performanceScore = 100; // update performanceScore property
employee.promotionEligible = true; // new property called promotionEligible added
console.log("Updated Employee Record: ", employee); //print updated employee object
