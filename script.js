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
	var healButton = document.getElementById("healButton");
	var quitButton = document.getElementById("quitButton");
	var userHealthBar = document.getElementById("characterHealth");
	var healCountBar = document.getElementById("healCount");
	var userWinsBar = document.getElementById("userWins");
	var grantHealthBar = document.getElementById("grantHealth");
	var messageEl = document.getElementById("message");
	var mainGame = document.getElementById("mainGame");
	var getUserName = document.getElementById("userName");

	
	
	startButton.onclick = function() {
		var userName = prompt("What do you want to name your character?");
		startButton.classList.add("hideStart");
		mainGame.classList.remove("hidden");

	};

	attackButton.onclick = function() {
		character.health -= grant.generateAttackDamage();
		grant.health -= character.generateAttackDamage();
		updateDisplay();
		updateMessage("That's gotta hurt!");
		if (grant.health <= 0) {
			character.wins++;
			userWinsBar.value++;
			grant.health = 10;
			updateDisplay();
		}
	};

	healButton.onclick = function() {
		if (character.healsRemaining > 0) {
			character.heal();
			updateMessage("You have been healed");
			updateDisplay();
		} else if (character.healsRemaining <= 0) {
			updateMessage("You have no more heals remaining");
		}
	};

	quitButton.onclick = function() {
		mainGame.classList.add("hidden");
	}

	function updateDisplay() {
		userHealthBar.value = character.health;
		grantHealthBar.value = grant.health;
		healCountBar.value = character.healsRemaining;
		userWinsBar.value = character.wins;
	};

	function updateMessage(newMessage) {
		messageEl.innerText = newMessage;
	};

	if (character.health <= 0) {
		updateMessage("The Almighty Grant is the winner!");
	} else if (grant.health <= 0 && user.wins >= 5) {
		updateMessage(userName + " is the winner!");
	}

})();















