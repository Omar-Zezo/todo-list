let box = document.querySelector(".box");
let btn = document.querySelector(".btn")
let tasks = document.querySelector(".tasks")

window.onload = function(){
    box.focus()
    tasks.innerHTML = window.localStorage.getItem("tasks")
}

btn.onclick = function(){
    let task = document.createElement("div")
    task.className = "task"
    let text = document.createTextNode(box.value)
    if(text.textContent != ""){
        task.appendChild(text)
        tasks.appendChild(task)
        let btn = document.createElement("input")
        btn.setAttribute("type","button")
        btn.setAttribute("value","Remove")
        btn.className = "remove"
        task.appendChild(btn)
        box.value = ""
        box.focus()
        window.localStorage.setItem("tasks",tasks.innerHTML)
    }
}

document.addEventListener("click", function (e){
    if(e.target.className === "remove"){
        e.target.parentElement.remove()
    }
    window.localStorage.setItem("tasks",tasks.innerHTML)
})

