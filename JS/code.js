// coding

const TodoInput = document.querySelector('.todo-input')
const TodoBtn = document.querySelector('.todo-btn')
const TodoResult = document.querySelector('.todo-result')


function addTodo(e){
    e.preventDefault();
    console.log(TodoInput.value)

    const todoLi = document.createElement('li')
    todoLi.classList.add('my-2')

    const todoTitle = document.createElement('h4') 
    todoTitle.innerText = TodoInput.value
    todoTitle.classList.add('d-inline-block')
    todoTitle.classList.add('me-5')

    todoLi.appendChild(todoTitle)
    TodoResult.appendChild(todoLi)

}


TodoBtn.addEventListener('click', addTodo)