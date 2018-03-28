function getAllLocal() {
  var keys = new Array;
  for (var i = 0; i < localStorage.length; i++) {
    keys[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
  }

  return keys;
}

(function listing(){
  var datas = getAllLocal();
  for (var variable in datas) {
    if (datas.hasOwnProperty(variable)) {
      $('.listing').append('<li class="list-group-item"><label>'+datas[variable]+'</label>' +
          '<input type="button" data-id="'+variable+'" name="name" class="btn delete btn-danger pull-right" value="Remove"></li>');
    }
  }
})();

$('#checkAll').submit(function(e) {
  e.stopPropagation();
  e.preventDefault();
  var newTodo = $('.add-todo').val();
  localStorage.setItem(new Date().valueOf(), newTodo);
  $('.add-todo').val('');
  window.location.reload();
});

$('.delete').click( function(){
  var idTodo = $(this).attr('data-id');
  localStorage.removeItem(idTodo);
  $(".listing").find("[data-id='" + idTodo + "']").parent('li').remove();
});