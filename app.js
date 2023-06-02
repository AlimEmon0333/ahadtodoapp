var todo = document.getElementById("todo");
var list = document.getElementById("list");
function addTodo() {
  var li = document.createElement("li");
  var liText = document.createTextNode(todo.value);
  li.appendChild(liText);

  var delbtn = document.createElement("button");
  var delText = document.createTextNode("Delete");
  delbtn.setAttribute("onclick", "deleteItem(this)");

  var editbtn = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editbtn.setAttribute("onclick", "editItem(this)");

  delbtn.appendChild(delText);
  editbtn.appendChild(editText);
  li.appendChild(delbtn);
  li.appendChild(editbtn);
  list.appendChild(li);
  todo.value = "";
}
function deleteItem(e) {
  e.parentNode.remove();
}
function delAll() {
  list.innerHTML = "";
}
function editItem(e) {
  var val = e.parentNode.firstChild.nodeValue;
  var editvalue = prompt("Enter Edit Value", val);
  e.parentNode.firstChild.nodeValue = editvalue;
  console.log(e.parentNode.firstChild);
}
