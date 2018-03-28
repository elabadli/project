var input = $('#cal_field');
$(document).ready(function(){
$('.number').on( "click", function(){
var resultat = input.val(input.val()+$(this).text())
$('#result').on("click",function(){
	input.val(eval(input.val())); 
});
});	
});
function resetCall(){
input.val("");
}
