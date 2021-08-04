let theInput = document.querySelector(".add-task input");
let addButton = document.querySelector(".add-task plus");
let tasksContainer = document.querySelector(".text-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count");
let tasksCompleted = document.querySelector(".tasks-completed");
//focus
window.onload = function(){
    theInput.focus();
}
//adding the task
addButton.onclick = function(){
    //if input is empty
    if(theInput.value === ''){
        console.log("no value");
    }else{
        console.log(theInput.vaue);
    }

//remove no tasks massage
noTasksMsg.remove();
//span
let mainSpan = document.createElemen("span")
//c delet butt
let deleteElement = document.createElement("span")
//c span text
let text = document.createTextNode(theInput.value)
//create the delete
let deletText = document.createTextNode("delete")
mainSpan.appendChild(text);
mainSpan.className = 'task-box';
deleteElement.appendChild(deletText);
deleteElement.className = 'delete';
mainSpan.appendChild(deleteElement);
tasksContainer.appendChild(mainSpan)
theInput.valu = '';
theInput.focus();

}