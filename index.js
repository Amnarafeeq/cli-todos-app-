import inquirer from "inquirer";
console.log(" ****** Welcome To Todos ****** ");
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an option",
            choices: ["Add", "Update", "View", "Delete", "Exit"],
        },
    ]);
    if (ans.select === "Add") {
        let addTodos = await inquirer.prompt({
            name: "addTask",
            type: "input",
            message: "Add task in your todos list:",
        });
        todos.push(addTodos.addTask);
        console.log(todos);
    }
    if (ans.select === "Update") {
        let updateTodos = await inquirer.prompt({
            name: "updateList",
            message: "Update your task/items in your todos:",
            type: "list",
            choices: todos.map(item => item)
        });
        let addTodos = await inquirer.prompt({
            name: "addTask",
            type: "input",
            message: "Replace this task/items in your todos list wih:",
        });
        let newTodos = todos.filter(val => val !== updateTodos.updateList);
        todos = [...newTodos, addTodos.addTask];
        console.log(todos);
    }
    if (ans.select === "View") {
        console.log("***** TO-DOS-VIEW ***** ");
        console.log(todos);
    }
    if (ans.select === "Delete") {
        let deleteTodos = await inquirer.prompt({
            name: "deleteList",
            message: "select task/items to delete  in your todos:",
            type: "list",
            choices: todos.map(item => item)
        });
        let newTodos = todos.filter(val => val !== deleteTodos.deleteList);
        todos = [...newTodos];
        console.log(todos);
    }
    if (ans.select === "Exit") {
        console.log("Exiting Todos");
        condition = false;
    }
}
console.log(" ****** Thanks For Using It ****** ");
