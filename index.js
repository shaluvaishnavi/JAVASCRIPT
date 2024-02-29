function AddTask() {
    var input = document.getElementById('input').value
    var element = document.getElementById('task-container')
    console.log(element)
    var newElement = document.createElement('div')
    newElement.setAttribute('id','ind-task')
    newElement.innerHTML = `<P>${input}</P><button onclick="DeleteTask(event)">DELETE</button>`
    element.append(newElement)
}
function DeleteTask(event){
    event.target.parentElement.remove()


}