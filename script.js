(function(){

	var character = {
		name: null,
		health: 40,
		healsRemaining: 2,
		wins: 0,
		generateAttackDamage: function() {
			return Math.floor(Math.random() * 3) + 1;
		},
		heal: function() {
			this.health += Math.floor(Math.random() * 10) + 1;
			this.healsRemaining --;
		}
	};

	var grant = {
		name: null,
		health: 10,
		generateAttackDamage: function() {
			return Math.floor(Math.random() * 5) + 1;
		}
	};

	var startButton = document.getElementById("startButton");
	var attackButton = document.getElementById("attackButton");
	var userHealthBar = document.getElementById("characterHealth");
	var grantHealthBar = document.getElementById("grantHealth");
	var messageEl = document.getElementById("message");
	var mainGame = document.getElementById("mainGame");

	startButton.onclick = function() {
		var userName = prompt("What do you want to name your character?");
		startButton.classList.add("hideStart");
		mainGame.classList.remove("hidden");
	};

	attackButton.onclick = function() {
		character.health -= grant.generateAttackDamage();
		grant.health -= character.generateAttackDamage();
		updateDisplay();
		updateMessage("Ouch!");
	};

	healButton.onclick = function() {
		if (character.healsRemaining > 0) {
			character.heal();
		}
	};

	function updateDisplay() {
		userHealthBar.value = character.health;
		grantHealthBar.value = grant.health;
		if (grant.health <= 0) {
			grant.health = 10;
		}
		userHealthBar.value += character.heal();
	};

	function updateMessage(newMessage) {
		messageEl.innerText = newMessage;
	};

})();