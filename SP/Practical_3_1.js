let list = [];

function add_todo(task){
    list.push(String(task));
    console.log("Task Added.");
}
function remove_todo(task){
    const index = list.indexOf(String(task));
    if(index != -1){
        list.slice(index,1);
        console.log("Task Removed.");
    }
    else{
        console.log("Task Not Found.");
    }
}

function list_todo(){
    console.log("\n")
    for(let i in list){
        console.log(list[i]);
    }
    console.log("\n")
};

module.exports={
    add_todo,
    remove_todo,
    list_todo
}
