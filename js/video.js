var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	video = document.getElementById("player1")
	video.autoplay = false;
	video.loop = false;

	video.pause()
	video.currentTime = 0;

	const volumeSpan =document.getElementById("volume");
	const slider = document.getElementById("slider");
	const muteButton = document.getElementById("mute")

	video.volume = slider.value / 100;
	volumeSpan.textContent = "";

	document.getElementById("play").addEventListener("click", function(){
		console.log("play video");
		video.play();
		volumeSpan.textContent = Math.round(video.volume * 100) + "%";
	});

	document.getElementById("slower").addEventListener("click", function(){
		video.playbackRate *= 0.9;
		console.log("New speed (slower):", video.playbackRate);
	});

	document.getElementById("skip").addEventListener("click", function(){
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

	document.getElementById("vintage").addEventListener("click", function(){
		video.classList.add("oldSchool");
		console.log("Old school style applied")
	});

	document.getElementById("orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
		console.log("Old school style removed")
	});

	document.getElementById("pause").addEventListener("click", function(){
		console.log("Pause Video");
		video.pause();
	});

	document.getElementById("faster").addEventListener("click", function(){
		video.playbackRate /= 0.9;
		console.log("New speed", video.playbackRate);
	})

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

