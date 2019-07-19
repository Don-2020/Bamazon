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
            else if (response.menu === "Add to Inventory") {

                restockProduct()
            }
            else if (response.menu === "Add New Product") {
                addProduct();
            }

        })
}
function viewProduct() {
    connection.query("SELECT id, product_name, price, stock_quantity FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log("\n------------------------------------------------------\n")
        managerView()

    })
}

function lowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity <= 5", function (err, res) {
        if (err) throw err;
        console.table(res)
        console.log("\n------------------------------------------------------\n")
        managerView()
    })
}

function restockProduct() {
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
        .then(function (managerRestock) {
            connection.query("SELECT * FROM products WHERE id = " + managerRestock.ID, function(err, res){
                if(err) throw err;
                var updatedStock = managerRestock.units + res[0].stock_quantity;
                // console.log(err)
                // console.log(updatedStock)
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: updatedStock
                        },
                        {
                            id: managerRestock.ID
                        }
                    ], function (err, res) {
                    });
                    console.log("\n------------------------------------\n")
                    managerView()
            })
            })
           
}

// function addInventory(item_id, restockItem) {
//     connection.query("SELECT * FROM products WHERE id = " + item_id, function (err, res) {
//         if (err) throw err;
//         if (restockItem >= 0) {
//             var restock = restockItem + res[0].stock_quantity;
//             console.log("Items have been restock!");
//             connection.query(
//                 "UPDATE products SET ? WHERE ?",
//                 [
//                     {
//                         stock_quantity: restock
//                     },
//                     {
//                         id: item_id
//                     }
//                 ],
//                 function (err, res) {
//                     if (err) throw err;

//                 });
//         }
//         else {
//             if (err) throw err
//             console.log(err)
//             console.log("Error!")
//             console.log(res)
//         }


//     })
// }

function addProduct() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the item",
                name: "name"

            },
            {
                type: "input",
                message: "Which department does the item belong to?",
                name: "category"

            },
            {
                type: "number",
                message: "How much does the item cost?",
                name: "price"

            },
            {
                type: "number",
                message: "How many will we recieve?",
                name: "units"

            }
        ])
        .then(function (inquireRes) {
            var query = connection.query(
                "INSERT INTO products SET ?",
                {
                    product_name: inquireRes.name,
                    department: inquireRes.category,
                    price: inquireRes.price,
                    stock_quantity: inquireRes.units
                },
                function (err, response) {
                    if (err) throw err;
                    console.log(response.affectedRows + " product inserted!\n")
                    console.log("-----------------------\n")
                    managerView()
                }
            );
        })

}