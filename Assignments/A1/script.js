var i = 0;
const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

function newTodo() {
  /*Add Logic for creating a new Todo Item. */
  i++;
  let li = document.createElement("li");
  li.textContent = "New Item";
  list.appendChild(li);
  /*Below lines can be used to updated the data on frontend */
  //list.innerHTML= list.children[i].innerHTML
  itemCountSpan.innerHTML = i;
  uncheckedCountSpan.innerHTML = i;
}

function removeTodo() {
  /*Add Logic for removing an existing TODO Item */
  if (i != 0) {
    i--;
    list.removeChild(list.children[i]);
    
  }

  /*Below lines can be used to updated the data on frontend */
  //list.innerHTML = " ";
  itemCountSpan.innerHTML = i;
  uncheckedCountSpan.innerHTML = i;
}
