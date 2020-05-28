const todos = ["do the dishes", "do laundry"]

let input = prompt ("What would you like to do?")

while (input !== "quit") {
    if (input === "list") {
        listTodos () 
    } else if (input === "new") {
        addNewTodo ()
    } else if (input === "delete") {
        deleteTodo ()
    }
    input = prompt ("What would you like to do?");
}
console.log ("You quit the app.");

// functions are separated so the while loop looks more organized

function listTodos () {
    console.log ("***********")
        todos.forEach (function(todo, i){
            console.log (i + ": " + todo);
        });
        console.log ("***********")
}

function addNewTodo () {
    const newTodo = prompt ("Enter new todo");
        todos.push (newTodo);
        console.log ("added todo");
}

function deleteTodo () {
    let index = prompt ("Enter index of todo to delete")
        todos.splice (index, 1);
        console.log ("Deleted todo");
}