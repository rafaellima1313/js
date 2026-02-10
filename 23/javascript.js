let todoList = [];

function addTodoList() {
  let todoHTML = '';
  for (let i = 0; i < todoList.length; i++) {
  let todo = todoList[i];

  todoHTML += `<p>${todo}</p>`
  }

  const outputElem = document.querySelector('.js-output');

  outputElem.innerHTML = todoHTML;
}


function addToList() {
  const toDoElem = document.querySelector('.js-input1');

  let toDoValue = toDoElem.value;

  if (toDoValue === '') {
    return;
  }

  todoList.push(toDoValue);

  toDoElem.value = '';

  console.log(todoList);

  addTodoList();
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    addToList();
  }
}