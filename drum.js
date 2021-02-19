let keys = document.querySelectorAll(".key");
let audios = document.querySelectorAll("audio");
 


window.addEventListener('keydown', function (event) {
	if (event.repeat) {
		return false
	}
	
	audios.forEach(function (audio){
		if (event.keyCode == audio.getAttribute("data-key")) {
			audio.play()
		}
	})
	keys.forEach(function(key){
		if (event.keyCode == key.getAttribute("data-key")) {
			key.classList.add('playing', "sound")
		}
	})
})

window.addEventListener('keyup', function (event) {
	
	audios.forEach(function (audio){
		if (event.keyCode == audio.getAttribute("data-key")) {
			audio.pause()
			audio.currentTime = 0
		}
	})
	keys.forEach(function(key){
		if (event.keyCode == key.getAttribute("data-key")) {
			key.classList.remove('playing', "sound")
		}
	})
})
// for (let index = 0; index < clap.length; index++) {

// 	let sound=clap[index].getAttribute("data-key");

// 	window.addEventListener("keydown", function(){
// 		if(sound==event.keyCode){
// 			clap[index].play()
// 		}
// 	})
// }