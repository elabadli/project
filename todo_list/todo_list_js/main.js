function getAllLocal() {
  let keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    keys[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  }

  return keys;
}

(function listing(){
  var datas = getAllLocal();
  for (var variable in datas) {
    if (datas.hasOwnProperty(variable)) {
      document.getElementById("listing").innerHTML += '<li class="list-group-item"><label>'+datas[variable]+'</label>' +
          '<input type="button" onclick="deleteAction('+variable+')" name="name" class="btn delete btn-danger pull-right" value="Remove"><input type="button" onclick="editAction('+variable+')" name="name" class="btn editAction btn-primary pull-right" value="Edit"></li>';
    }
  }
})();

document.getElementById("checkAll").onsubmit = function(e){
  e.stopPropagation();
  e.preventDefault();
  var newTodo = document.getElementById("todo").value;
  if (document.getElementById("key").value) {
    localStorage.setItem(document.getElementById("key").value, newTodo);
  } else {
    localStorage.setItem(new Date().valueOf(), newTodo);
  }
  
  document.getElementById("todo").value = null;
  window.location.reload();
};

function deleteAction(idTodo){
  localStorage.removeItem(idTodo);
  window.location.reload()
}

function editAction(idTodo){
  let todo = localStorage.getItem(idTodo);
  document.getElementById("todo").value = todo;
  document.getElementById("key").value = idTodo;
}