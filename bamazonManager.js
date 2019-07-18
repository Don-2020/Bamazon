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
    managerView();

});

function managerView() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Select option to complete",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"],
                name: "menu"

            }
        ])
        .then(function (response) {
            if (response.menu === "View Products for Sale") {
                viewProduct();
            }

            else if (response.menu === "View Low Inventory") {
                lowInventory();
            }
                    else if(response.menu === "Add to Inventory"){
             restockProduct()
                    }
            //         else if(response.menu === "Add New Product"){
            // function addProduct();
            //         }

        })
}
function viewProduct() {
    connection.query("SELECT id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
    })
}

function lowInventory(){
    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function (err, res){
        if(err) throw err;
        console.table(res)
    })
}

function restockProduct(){
    inquirer
    .prompt([
        {
            type: "number",
            message: "Select item's ID that you wish to restock.",
            name: "ID"

        },
        {
            type: "number",
            message: "How much will be restock?",
            name: "units"

        }
    ])
}