var video = document.querySelector('#video');
var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var playbackrate = document.querySelector('#playbackrate');
play.addEventListener('click',function(){
	video.play()
},false);
pause.addEventListener('click',function(){
	video.pause()

},false);
playbackrate.addEventListener('click',function(){
	video.playbackRate = 3.0
//j'ai mis playbackRate pour aller plus vite
},false);