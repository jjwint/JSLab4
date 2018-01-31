(function(){
	var attackButton = document.getElementById("attackButton");
	var userHealthBar = document.getElementById("userHealth");
	var message El = document.getElementById("message");
	var user = {
		health: 40;
	};

	attackButton.onclick = function() {
		user.health--;
		updateDisplay();
		updateMessage("Ouch!");
	};

	function updateDisplay() {
		userHealthBar.value = user.health;
	}

	function updateMessage(newMessage) {
		messageEl.innerText = newMessage;
	}




});