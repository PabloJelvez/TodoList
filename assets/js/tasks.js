const inputTask = document.getElementById("newTask")
const btnAdd = document.getElementById("btnTask")
const  newtaskTable = document.getElementById("taskTable")
const taskCounterTotal = document.getElementById("taskCounter")
const tasks = []

btnAdd.addEventListener("click", () =>{
    const newTasks = inputTask.value
    tasks.push({id: Math.floor(Math.random()*1000), Nombre: newTasks, state: false})
    console.log(tasks)
    inputTask.value = ""
    renderTask()
})

function renderTask(){
    let html = ""
     for (let task of tasks){
        html += `<tr><td>${task.id}</td><td>${task.Nombre}</td><td><input type="checkbox" id="checkState"><button onclick="remove(${task.id})">X</button></td></tr>`
     }
     newtaskTable.innerHTML = html
     taskCounterTotal.innerHTML = counter()
    }

function counter(){
return tasks.length
}

function remove(id){
    const index = tasks.findIndex((ele) => ele.id === id)
    tasks.splice(index, 1)
    renderTask()

}