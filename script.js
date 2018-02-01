(function(){

	var startButton = document.getElementById("startButton");
	var attackButton = document.getElementById("attackButton");
	var userHealthBar = document.getElementById("userHealth");
	var messageEl = document.getElementById("message");
	var user = {
		health: 40
		}
	var mainGame = document.getElementById("mainGame");

	startButton.onclick = function() {
		var userName = prompt("What do you want to name your character?");
		startButton.classList.add("hideStart");
		mainGame.classList.remove("hidden");
	}

	attackButton.onclick = function() {
		user.health--;
		updateDisplay();
		updateMessage("Ouch!");
	}

	function updateDisplay() {
		userHealthBar.value = user.health;
	}

	function updateMessage(newMessage) {
		messageEl.innerText = newMessage;
	}

})();