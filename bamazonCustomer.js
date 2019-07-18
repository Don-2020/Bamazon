var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Alwaysforward18",
    database: "Bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    readProducts();
    
});

function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        // for(var i = 0; i < res.length; i++){
        //     console.table(res[i].id + res[i].name + res[i].price);
        // }
        console.table(res)
        promptSell(res);
        
    });
}

function promptSell(res) {
    inquirer
        .prompt([
            {
                type: "number",
                message: "What the ID of the product you would like to buy?",
                name: "buy"

            },
            {
                type: "number",
                message: "How many units would you like to buy?",
                name: "units"
            }
        ])
        .then(function (response) {
             var orderQuantity = response.units;
             var orderID = response.buy;
             purchaseOrder(orderQuantity,orderID)
        })
}

function purchaseOrder(orderQuantity,orderID){
    connection.query("SELECT * FROM products WHERE id = " + orderID, function (err, res) {
        if (err) throw err;
        if(orderQuantity <= res[0].stock_quantity){
            var totalCost = res[0].price * orderQuantity;
            console.log("Good news your order went through")
            console.log("Your total cost for " + orderQuantity + " "+ res[0].product_name+ " is "  + totalCost + " Thank you!")
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + orderQuantity + "WHERE id = " + orderID)
        }
        else{
            console.log("Insufiecnet")
        }

readProducts() 

    });
}

//  readProducts() 
