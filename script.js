(function(){

	var startButton = document.getElementById("startButton");
	var attackButton = document.getElementById("attackButton");
	var userHealthBar = document.getElementById("userHealth");
	var messageEl = document.getElementById("message");
	var user = {
		health: 40
		}

	startButton.onclick = function() {
		var userName = prompt("What do you want to name your character?");
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



});