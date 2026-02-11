let todoList = [];

function addTodo() {
  const inputElem = document.querySelector('.js-input');

  let inputValue = inputElem.value.trim().toLowerCase();

  if (inputValue === '') {
    return;
  }

  todoList.push(inputValue);

  inputElem.value = '';

  todoListHTML();

  console.log(todoList);
}

function handleKey(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

function todoListHTML() {
  let todoHTML = '';

  for (let i = 0; i < todoList.length; i++){
    let todoInfo = todoList[i];

    todoHTML += `<p>${todoInfo}</p>`;
  }

  const outputELem = document.querySelector('.js-output');

  outputELem.innerHTML = todoHTML;
}
