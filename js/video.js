var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = this.document.getElementById("player1")
	video.autoplay = false;
	video.loop = false;

	video.pause()
	video.currentTime = 0;

	const volumeSpan = this.document.getElementById("volume");
	const slider = this.document.getElementById("slider");
	const muteButton = this.document.getElementById("mute")

	video.volume = slider.value / 100;
	volumeSpan.textContent = slider.value + "%";

	this.document.getElementById("play").addEventListener("click", function(){
		console.log("play video");
		video.play();
		volumeSpan.textContent = Math.round(video.volume * 100) + "%";
	});

	this.document.getElementById("slower").addEventListener("click", function(){
		video.playbackRate *= 0.9;
		console.log("New speed (slower):", video.playbackRate);
	});

	this.document.getElementById("skip").addEventListener("click", function(){
		console.log("Current location:", video.currentTime);
		if(video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
			console.log("Reached and, going back to start");
		}
		else {
			video.currentTime +=10;
			console.log("New location", video.currentTime);
		}
	});

	muteButton.addEventListener("click", function(){
		video.muted = !video.muted;
		muteButton.textContent = video.muted ? "Unmute" : "Mute";
		console.log("Muted: ", video.muted);
	});
	
	slider.addEventListener("input", function(){
		video.volume = slider.value / 100;
		volumeSpan.textContent = slider.value + "%";
		console.log("Volume:", video.volume);
	})

	this.document.getElementById("vintage").addEventListener("click", function(){
		video.classList.add("oldschool");
		console.log("Old school style applied")
	});

	this.document.getElementById("orig").addEventListener("click", function(){
		video.classList.remove("oldschool");
		console.log("Old school style removed")
	});

	this.document.getElementById("pause").addEventListener("click", function(){
		console.log("Pause Video");
		video.pause();
	});

	this.document.getElementById("faster").addEventListener("click", function(){
		video.playbackRate /= 0.9;
		console.log("New speed", video.playbackRate);
	})

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

