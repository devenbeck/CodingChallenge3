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
