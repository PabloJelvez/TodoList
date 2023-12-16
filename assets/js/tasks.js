const inputTask = document.getElementById("newTask")
const btnAdd = document.getElementById("btnTask")
const  newtaskTable = document.getElementById("taskTable")
const [totalSpan, doneSpan, unDoneSpan] = document.querySelectorAll(".counters span"
)
const tasks = []

tasks.push({id: 1, Nombre: "Estudiar JavaScript", check: false})
tasks.push({id: 2, Nombre: "Hacer la compra", check: false})
tasks.push({id: 3, Nombre: "Llamar a mamá", check: false})

renderTask()


let counter = {
    total: 0,
    done: 0,
    unDone: 0
  }

btnAdd.addEventListener("click", () =>{
    const newTasks = inputTask.value
    if(newTasks){
    tasks.push({id: Math.floor(Math.random()*1000), Nombre: newTasks, check: false})
    inputTask.value = ""
    renderTask()
    refresh()
    }else alert("Debe escribir la descripción de la tarea")
})




function renderTask(){
    let html = ""
     for (let task of tasks){
        html += `<tr><td>${task.id}</td><td>${task.Nombre}</td><td class="delete">
        <input onchange="changeCheck(${task.id})" 
          ${task.check ? "checked" : ""} type="checkbox" id="checkState${task.id}"/>
        <span onclick="remove(${task.id})">❌</span>
    </td></tr>`
     }
     newtaskTable.innerHTML = html

    }

    const changeCheck = (id) => {
        const task = tasks.find((task) => task.id === id);
        const { check } = task;
        task.check = !check;
        refresh();
      };


    

    function remove(id){
        const decision = confirm("¿Seguro que quieres eliminar la tarea?")
        if (decision) {
        const index = tasks.findIndex((ele) => ele.id === id)
        tasks.splice(index, 1)
        refresh()
        }
    }
    
    const clearTable = () => (newtaskTable.innerHTML = "");

    const calculateCounter = () => {
        const { length: total } = tasks;
        const { length: done } = tasks.filter(({ check }) => check);
        const { length: unDone } = tasks.filter(({ check }) => !check)
        const newCounter = { total, done, unDone }
        counter = { ...newCounter }
      }

      const updateCounter = () => {
        const { total, done, unDone } = counter
        totalSpan.innerHTML = total
        doneSpan.innerHTML = done
        unDoneSpan.innerHTML = unDone
      }


      const refresh = () => {
        clearTable()
        renderTask()
        calculateCounter()
        updateCounter()
      }



