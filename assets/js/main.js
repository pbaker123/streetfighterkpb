// To-Do List:

// get player 2 working well

// add Ready Fight between selecting attack and the images

// once you select an attack stop the buttons 

// add you win or you lose between rounds

// fix graphics might need to make larger and set to align bottom

// make gameOver() screens

// finish last 3 character image sets

// figure out a way to reset firebase if both players leave before the end of the game


var config = {
    apiKey: "AIzaSyBfyB1afkNHDsm0T02dAH0qsQQIOf8ena4",
    authDomain: "streetfighter-a54e1.firebaseapp.com",
    databaseURL: "https://streetfighter-a54e1.firebaseio.com",
    projectId: "streetfighter-a54e1",
    storageBucket: "",
    messagingSenderId: "1078840154369"
};
firebase.initializeApp(config);
var characters = [
	{
		name: "Ryu",
		animatedSrc: "assets/images/characters/ryu.gif",
		selectedSrc: "assets/images/characters/ryu.png",
		portraitSrc: "assets/images/characters/ryu-portrait.png",
		backgroundSrc: "assets/images/backgrounds/ryu-bg.png",
		punchFolder: "assets/images/characters/ryu/punch/",
		kickFolder: "assets/images/characters/ryu/kick/",
		blockFolder: "assets/images/characters/ryu/block/",
		winFolder: "assets/images/characters/ryu/win/",
		lossFolder: "assets/images/characters/ryu/loss/",
		tieFolder: "assets/images/characters/ryu/tie/",
		audioSrc: "assets/audios/ryu.mp3"
	},
	{
		name: "E. Honda",
		animatedSrc: "assets/images/characters/e-honda.gif",
		selectedSrc: "assets/images/characters/e-honda.png",
		portraitSrc: "assets/images/characters/e-honda-portrait.png",
		backgroundSrc: "assets/images/backgrounds/e-honda-bg.png",
		punchFolder: "assets/images/characters/e-honda/punch/",
		kickFolder: "assets/images/characters/e-honda/kick/",
		blockFolder: "assets/images/characters/e-honda/block/",
		winFolder: "assets/images/characters/e-honda/win/",
		lossFolder: "assets/images/characters/e-honda/loss/",
		tieFolder: "assets/images/characters/e-honda/tie/",
		audioSrc: "assets/audios/e-honda.mp3"
	},
	{
		name: "Blanka",
		animatedSrc: "assets/images/characters/blanka.gif",
		selectedSrc: "assets/images/characters/blanka.png",
		portraitSrc: "assets/images/characters/blanka-portrait.png",
		backgroundSrc: "assets/images/backgrounds/blanka-bg.png",
		punchFolder: "assets/images/characters/blanka/punch/",
		kickFolder: "assets/images/characters/blanka/kick/",
		blockFolder: "assets/images/characters/blanka/block/",
		winFolder: "assets/images/characters/blanka/win/",
		lossFolder: "assets/images/characters/blanka/loss/",
		tieFolder: "assets/images/characters/blanka/tie/",
		audioSrc: "assets/audios/blanka.mp3"
	},
	{
		name: "Guile",
		animatedSrc: "assets/images/characters/guile.gif",
		selectedSrc: "assets/images/characters/guile.png",
		portraitSrc: "assets/images/characters/guile-portrait.png",
		backgroundSrc: "assets/images/backgrounds/guile-bg.png",
		punchFolder: "assets/images/characters/guile/punch/",
		kickFolder: "assets/images/characters/guile/kick/",
		blockFolder: "assets/images/characters/guile/block/",
		winFolder: "assets/images/characters/guile/win/",
		lossFolder: "assets/images/characters/guile/loss/",
		tieFolder: "assets/images/characters/guile/tie/",
		audioSrc: "assets/audios/guile.mp3"
	},
	{
		name: "Balrog",
		animatedSrc: "assets/images/characters/balrog.gif",
		selectedSrc: "assets/images/characters/balrog.png",
		portraitSrc: "assets/images/characters/balrog-portrait.png",
		backgroundSrc: "assets/images/backgrounds/balrog-bg.png",
		punchFolder: "assets/images/characters/balrog/punch/",
		kickFolder: "assets/images/characters/balrog/kick/",
		blockFolder: "assets/images/characters/balrog/block/",
		winFolder: "assets/images/characters/balrog/win/",
		lossFolder: "assets/images/characters/balrog/loss/",
		tieFolder: "assets/images/characters/balrog/tie/",
		audioSrc: "assets/audios/balrog.mp3"
	},
	{
		name: "Vega",
		animatedSrc: "assets/images/characters/vega.gif",
		selectedSrc: "assets/images/characters/vega.png",
		portraitSrc: "assets/images/characters/vega-portrait.png",
		backgroundSrc: "assets/images/backgrounds/vega-bg.png",
		punchFolder: "assets/images/characters/vega/punch/",
		kickFolder: "assets/images/characters/vega/kick/",
		blockFolder: "assets/images/characters/vega/block/",
		winFolder: "assets/images/characters/vega/win/",
		lossFolder: "assets/images/characters/vega/loss/",
		tieFolder: "assets/images/characters/vega/tie/",
		audioSrc: "assets/audios/vega.mp3"
	},
	{
		name: "Ken",
		animatedSrc: "assets/images/characters/ken-masters.gif",
		selectedSrc: "assets/images/characters/ken-masters.png",
		portraitSrc: "assets/images/characters/ken-masters-portrait.png",
		backgroundSrc: "assets/images/backgrounds/ken-masters-bg.png",
		punchFolder: "assets/images/characters/ken-masters/punch/",
		kickFolder: "assets/images/characters/ken-masters/kick/",
		blockFolder: "assets/images/characters/ken-masters/block/",
		winFolder: "assets/images/characters/ken-masters/win/",
		lossFolder: "assets/images/characters/ken-masters/loss/",
		tieFolder: "assets/images/characters/ken-masters/tie/",
		audioSrc: "assets/audios/ken-masters.mp3"
	},
	{
		name: "Chun Li",
		animatedSrc: "assets/images/characters/chunli.gif",
		selectedSrc: "assets/images/characters/chunli.png",
		portraitSrc: "assets/images/characters/chunli-portrait.png",
		backgroundSrc: "assets/images/backgrounds/chunli-bg.png",
		punchFolder: "assets/images/characters/chunli/punch/",
		kickFolder: "assets/images/characters/chunli/kick/",
		blockFolder: "assets/images/characters/chunli/block/",
		winFolder: "assets/images/characters/chunli/win/",
		lossFolder: "assets/images/characters/chunli/loss/",
		tieFolder: "assets/images/characters/chunli/tie/",
		audioSrc: "assets/audios/chunli.mp3"
	},
	{
		name: "Zangief",
		animatedSrc: "assets/images/characters/zangief.gif",
		selectedSrc: "assets/images/characters/zangief.png",
		portraitSrc: "assets/images/characters/zangief-portrait.png",
		backgroundSrc: "assets/images/backgrounds/zangief-bg.png",
		punchFolder: "assets/images/characters/zangief/punch/",
		kickFolder: "assets/images/characters/zangief/kick/",
		blockFolder: "assets/images/characters/zangief/block/",
		winFolder: "assets/images/characters/zangief/win/",
		lossFolder: "assets/images/characters/zangief/loss/",
		tieFolder: "assets/images/characters/zangief/tie/",
		audioSrc: "assets/audios/zangief.mp3"
	}
	// {
	// 	name: "Dhalsim",
	// 	animatedSrc: "assets/images/characters/dhalsim.gif",
	// 	selectedSrc: "assets/images/characters/dhalsim.png",
	// 	portraitSrc: "assets/images/characters/dhalsim-portrait.png",
	// 	backgroundSrc: "assets/images/backgrounds/dhalsim-bg.png",
	// 	audioSrc: "assets/audios/dhalsim.mp3"
	// },
	// {
	// 	name: "Sagat",
	// 	animatedSrc: "assets/images/characters/sagat.gif",
	// 	selectedSrc: "assets/images/characters/sagat.png",
	// 	portraitSrc: "assets/images/characters/sagat-portrait.png",
	// 	backgroundSrc: "assets/images/backgrounds/sagat-bg.png",
	// 	audioSrc: "assets/audios/sagat.mp3"
	// },
	// {
	// 	name: "M. Byson",
	// 	animatedSrc: "assets/images/characters/m-bison.gif",
	// 	selectedSrc: "assets/images/characters/m-bison.png",
	// 	portraitSrc: "assets/images/characters/m-bison-portrait.png",
	// 	backgroundSrc: "assets/images/backgrounds/m-bison-bg.png",
	// 	audioSrc: "assets/audio/m-bison.mp3"
	// }
];
var buttonControl = 0;
var count = 0;
var countdown = 10;
var currentAttack = "";
var database = firebase.database();
var index = 0;
var intervalId;
var lastAttack = "";
var levelIndex = 0;
var opponentAttack = "";
var opponentPlayerId = 2;
var opponentResult = "";
var opponentWins = 0;
var player1Index = 0;
var player2Index = 0;
var playerId = 1;
var playerWins = 0;
var result = "";
var showImage;
var totalPlayers = 0;

function generateStartScreen() {
	// Clear the #game html
	$("body").html($("<div>").attr("id", "game").html(""))
	// Begin building the character selection screen
	$("#game").append($("<div>").attr("id", "start-screen"))
	// Add the Stree Fighter Title
	$("#start-screen").append($("<img>").attr("src", "assets/images/title.png").attr("id", "main-title"))
	// Add the sub-title
	$("#start-screen").append($("<div>").attr("id", "sub-title").text("Punch Kick Block!"))
	// Add the start button
	$("#start-screen").append($("<div>").attr("id", "start-button"))
	$("#start-button").append($("<span>").attr("id", "start-button-text").text("START GAME"))
	// Add the audio
	$("#game").append($("<audio>").attr("src", "assets/audios/start.mp3").attr("autoplay", "true").attr("loop", "true").attr("id", "start-screen-audio"))
};

function addPlayers() {

	if (totalPlayers == 0) {
		totalPlayers++;
		playerId = totalPlayers;
		opponentPlayerId = 2;
		database.ref("player-count").set({
			totalPlayers: totalPlayers
		})
		generatePlayerSelectionScreen()

	// if total players is == 1, add the player as player 2 and send them to generate player selection
	} 
	else if (totalPlayers == 1) {
		totalPlayers ++
		playerId = totalPlayers
		opponentPlayerId = 1;
		database.ref("player-count").set({
			totalPlayers: totalPlayers
		})
		generatePlayerSelectionScreen()

	// if the total players is => 2, send the player to another screen
	} 
	else {
		alert("to many players")
		totalPlayers ++
		playerId = totalPlayers
		database.ref("player-count").set({
			totalPlayers: totalPlayers
		})
		return;
	};
};

function generatePlayerSelectionScreen() {
	// Clear the body html
	var player = "player" + playerId;
	$("#game").html("")
	// Begin building the character selection screen
	$("#game").append($("<div>").attr("id", "character-selection-screen"))
	// Add the timer area
	$("#game").append($("<div>").attr("id", "countdownTimer"))
	// Add the character portrait container
	$("#character-selection-screen").append($("<div>").attr("id", "character-portraits-container"))
	// Loop to add each character portrait to the container
	for (var i = 0 ; i < characters.length ; i++) {
		var newImg = $("<img>");
		newImg.attr("src", characters[i].portraitSrc).attr("alt", characters[i].name).attr("title", characters[i].name).addClass("character-portraits")
		$("#character-portraits-container").append(newImg)
	}
	// Add the page title
	$("#character-selection-screen").append($("<div>").attr("id", "page-title").text("SELECT YOUR CHARACTER"))
	// Add the audio
	$("#game").append($("<audio>").attr("src", "assets/audios/select.mp3").attr("autoplay", "true").attr("loop", "true").attr("id", "player-selection-audio"))
	// Show the chatbox
	chatbox()
	// Initialize Player 1 and Player 2 - character name player 1 - ryu, player 2 - vega; wins = 0
	database.ref(player).update({
		character: "Ryu",
		connected: 1,
		wins: 0
	})
	// set a value to trigger Selected Characters to run in case the other player has already selected
	database.ref("player1").update({
		update: "false",
	})
	database.ref("player1").update({
		update: "true",
	})
	database.ref("player2").update({
		update: "false",
	})
	database.ref("player2").update({
		update: "true",
	})
};

function generateSelectedCharacters() {	
	var characterDiv = $("#player-" + playerNumber + "-character");
	$("#character-selection-screen").append($("<div>").attr("id", "player-" + playerNumber + "-character"))
	// Add the character image
	characterDiv.html($("<img>").attr("src", characters[index].selectedSrc).attr("alt", characters[index].name).attr("title", characters[index].name))
	characterDiv.prepend($("<div>").addClass("player-label").text("PLAYER " + playerNumber))
	characterDiv.append($("<div>").addClass("player-character").html(characters[index].name.toUpperCase() + "<br>"))
};

function characterSelectionTimer() {
	$("#game").append($("<div>").attr("id", "#countdownTimer"))
	countdown = 10;
	intervalId = setInterval(decrement, 1000)
};

function decrement() {
	countdown--;
	$("#countdownTimer").text(countdown)
	if (countdown === 0) {
		clearInterval(intervalId)
		buttonControl = 2;
		generateGamePlayScreen()
	};
};

function generateGamePlayScreen() {
	levelIndex = Math.floor(Math.random() * characters.length);
	console.log("levelIndex: " + levelIndex)
	$("#game").html("")
	// Create the screen
	gameScreen()
	// Display healthbars
	playerHealth()
	// Display the player's buttons
	playerButtons()
	// Display instruction box and timer
	$("#game").append($("<div>").attr("id", "attack-reminder").html("<h1>Press a button to plan your next attack</h1><p>P = Punch</p><p>K = Kick</p><p>B = Block</p><p>Failure to act will cause a random action</p><p><span id='attackCountdown'></span><br><br>seconds remain to make your choice</p>"))
	attackTimer()
};

function gameScreen() {
	currentAttack = "";
	$("#game").append($("<div>").attr("id", "game-play").attr("style", "width: 1280px; height: 720px; margin: auto; background-image: url('" + characters[levelIndex].backgroundSrc + "')"))
	$("#game").append($("<audio>").attr("src", characters[levelIndex].audioSrc).attr("autoplay", "true").attr("loop", "true").attr("id", "game-play-audio"))
	$("#game").append($("<div>").attr("id", "player-1-battle-character").append($("<img>").attr("src", characters[player1Index].animatedSrc).addClass("player-1-character")))
	$("#game").append($("<div>").attr("id", "player-2-battle-character").append($("<img>").attr("src", characters[player2Index].animatedSrc).addClass("player-2-character")))
	$("#game").append($("<div>").attr("id", "player-1-label").html(characters[player1Index].name.toUpperCase()))
	$("#game").append($("<div>").attr("id", "player-2-label").html(characters[player2Index].name.toUpperCase()))
	$("#game").append($("<div>").attr("id", "ko").text("KO"))
};

function playerHealth() {
	if (playerWins == 0 && opponentWins == 0) {
		$("#game").append($("<img>").attr("src", "assets/images/full-health.png").attr("id", "player-1-health"))
		$("#game").append($("<img>").attr("src", "assets/images/full-health.png").attr("id", "player-2-health"))
	} else if (playerWins == 1 && opponentWins == 0) {
		if (playerId == 1) {
			$("#game").append($("<img>").attr("src", "assets/images/full-health.png").attr("id", "player-1-health"))
			$("#game").append($("<img>").attr("src", "assets/images/half-health.png").attr("id", "player-2-health"))
		} else if (playerId ==2 ) {
			$("#game").append($("<img>").attr("src", "assets/images/half-health.png").attr("id", "player-1-health"))
			$("#game").append($("<img>").attr("src", "assets/images/full-health.png").attr("id", "player-2-health"))
		};
	} else if (playerWins == 0 && opponentWins == 1) {
		if (playerId == 1) {
			$("#game").append($("<img>").attr("src", "assets/images/half-health.png").attr("id", "player-1-health"))
			$("#game").append($("<img>").attr("src", "assets/images/full-health.png").attr("id", "player-2-health"))
		} else if (playerId == 2) {
			$("#game").append($("<img>").attr("src", "assets/images/full-health.png").attr("id", "player-1-health"))
			$("#game").append($("<img>").attr("src", "assets/images/half-health.png").attr("id", "player-2-health"))
		};
	} else if (playerWins == 1 && opponentWins == 1) {
		$("#game").append($("<img>").attr("src", "assets/images/half-health.png").attr("id", "player-1-health"))
		$("#game").append($("<img>").attr("src", "assets/images/half-health.png").attr("id", "player-2-health"))
	};
};

function playerButtons() {
	if (playerId == 1) {
		$("#game").append($("<div>").attr("id", "player-1-buttons"))
		$("#player-1-buttons").append($("<div>").attr("id", "punch-1").attr("data-attack", "punch").text("P").addClass("player-attack"))
		$("#player-1-buttons").append($("<div>").attr("id", "kick-1").attr("data-attack", "kick").text("K").addClass("player-attack"))
		$("#player-1-buttons").append($("<div>").attr("id", "block-1").attr("data-attack", "block").text("B").addClass("player-attack"))
	} else if (playerId == 2) {
		$("#game").append($("<div>").attr("id", "player-2-buttons"))
		$("#player-2-buttons").append($("<div>").attr("id", "punch-2").attr("data-attack", "punch").text("P").addClass("player-attack"))
		$("#player-2-buttons").append($("<div>").attr("id", "kick-2").text("K").attr("data-attack", "kick").addClass("player-attack"))
		$("#player-2-buttons").append($("<div>").attr("id", "block-2").attr("data-attack", "block").text("B").addClass("player-attack"))
	};
};

function randomAttack() {
	var attackArr = ["punch", "kick", "block"];
	if (currentAttack == "") {
		currentAttack = attackArr[Math.floor(Math.random() * attackArr.length)];
		console.log(currentAttack)
		database.ref("player" + playerId).update({
			currentAttack: currentAttack
		})
		gameLogic()
		playerAttackAnimation()
		resultAnimation()
	} else {
		gameLogic()
		playerAttackSlideShow()
	};
};

function attackTimer() {
	countdown = 10;
	intervalId = setInterval(decrement2, 1000)
};

function decrement2() {
	countdown--;
	$("#attackCountdown").text(countdown)
	if (countdown === 0) {
		clearInterval(intervalId)
		randomAttack()
	};

};

// run logic to determine winner set currentAttack to ""
function gameLogic() {
	lastAttack = currentAttack;
	currentAttack = "";
	console.log("Game Logic opponent Attack: " + opponentAttack)
	// when that finishes increase win counter by 1 for winner, display half health for loser.
	if(lastAttack == opponentAttack) {
		result = "tie";
		opponentResult = "tie";
	} else if ((lastAttack == 'punch' && opponentAttack == 'kick') || (lastAttack == 'kick' && opponentAttack == 'block') || (lastAttack == 'block' && opponentAttack == 'punch')) {
		result = "loss";
		opponentResult = "win";
		opponentWins++
	} else if ((lastAttack == 'punch' && opponentAttack == 'block') || (lastAttack == 'kick' && opponentAttack == 'punch') || (lastAttack == 'block' && opponentAttack == 'kick')) {
		result = "win";
		opponentResult = "loss";
		playerWins++;
	};
};

// hide the current character and display the proper attack plus result graphics in a timed slide show.
function playerAttackSlideShow() {
	$("#attack-reminder").remove()
	showImage = setInterval(playerAttackImage, 400)
};

function playerResultSlideShow() {
	showImage = setInterval(playerResultImage, 400)

};

function playerAttackImage() {
	count++;
	var imageFolder = characters[player1Index][lastAttack + "Folder"];
	var opponentImageFolder = characters[player2Index][opponentAttack + "Folder"];
	var image = imageFolder + count + ".png";
	var opponentImage = opponentImageFolder + count + ".png";
		
	if (count === 8) {
		clearInterval(showImage)
		count = 0;
		playerResultSlideShow()
	} else {
		if (playerId === 1) {
			$("#player-1-battle-character").html($("<img>").attr("src", image).addClass("player-1-character"))
			$("#player-2-battle-character").html($("<img>").attr("src", opponentImage).addClass("player-2-character"))
		} else {
			$("#player-1-battle-character").html($("<img>").attr("src", opponentImage).addClass("player-1-character"))
			$("#player-2-battle-character").html($("<img>").attr("src", image).addClass("player-2-character"))
		};
	};
};

function playerResultImage() {
	count++;
	var imageFolder = characters[player1Index][result + "Folder"];
	var opponentImageFolder = characters[player2Index][opponentResult + "Folder"];
	var image = imageFolder + count + ".png";
	var opponentImage = opponentImageFolder + count + ".png";
	
	if (count === 6) {
		clearInterval(showImage)
		count = 0;
		// repeat for best of 3
		if (playerWins === 2 || opponentWins === 2) {
			gameOver()
		} else {
			generateGamePlayScreen()
		};
	} else {
		if (playerId === 1) {
			$("#player-1-battle-character").html($("<img>").attr("src", image).addClass("player-1-character"))
			$("#player-2-battle-character").html($("<img>").attr("src", opponentImage).addClass("player-2-character"))
		} else {
			$("#player-1-battle-character").html($("<img>").attr("src", opponentImage).addClass("player-1-character"))
			$("#player-2-battle-character").html($("<img>").attr("src", image).addClass("player-2-character"))
		};
	};
};

function chatbox() {
	$("body").append($("<div>").attr("id", "chat"))
	$("#chat").append($("<div>").attr("id", "messages"))
	$("#chat").append($("<div>").attr("id", "submitmessage").html("<input id='message' type='text'><button id='message-button'>Send</button>"))
};

function gameOver() {
	// display winner / loser screen and reset firebase and play victory song
	// reset firebase and global variables
	alert("Game Over")
	resetFirebase()
	generateStartScreen()
	//timer to return to the start screen
};

function resetFirebase() {
	database.ref("player1").update({
		character: "Ryu",
		connected: 0,
		wins: 0
	});
	database.ref("player2").update({
		character: "Vega",
		connected: 0,
		wins: 0
	});
	database.ref("player1-message").update({
		message: ""
	});
	database.ref("player2-message").update({
		message: ""
	});
	database.ref("player-count").update({
		totalPlayers: 0
	});
	database.ref().update({
		countdownstart: 0
	});
};

// Player 1 selection
database.ref("player1").on("value", function(snapshot){
	index = characters.findIndex(x => x.name == snapshot.val().character);
	player1Index = index;
	playerNumber = 1;
	generateSelectedCharacters()
}); 

// Player 2 selection
database.ref("player2").on("value", function(snapshot){
	index = characters.findIndex(x => x.name == snapshot.val().character);
	player2Index = index;
	playerNumber = 2;
	generateSelectedCharacters()
});

database.ref().on("value", function(snapshot) {
	player1Connection = snapshot.val().player1.connected;
	player2Connection = snapshot.val().player2.connected;
	countdownStarted = snapshot.val().countdownstart;
 	if (player1Connection == 1 && player2Connection == 1 && countdownStarted == 0) {
 		//timer starts when both players are at the player selection screen.  Can only be started once.
 		database.ref().update({
 			countdownstart: 1
 		})
 		characterSelectionTimer()
 	};
});

database.ref("player" + opponentPlayerId).on("value", function(snapshot){
	opponentAttack = snapshot.val().currentAttack;
});

// these divs flex reverse so prepend to add to the bottom so its always scrolled
database.ref("player1-message").on("value", function(snapshot){
	var newMessage = snapshot.val().message
	if (newMessage === "") {
		return;
	} else {
		$("#messages").prepend("<p>Player 1: " + newMessage + "</p>")
	};
}); 

database.ref("player2-message").on("value", function(snapshot){
	var newMessage = snapshot.val().message
	if (newMessage === "") {
		return;
	} else {
		$("#messages").prepend("<p>Player 2: " + newMessage + "</p>")
	};
});

$("body").on("click", $("#start-button"), function() {
	if (buttonControl === 0) {
		buttonControl = 1;
		database.ref("player-count").once("value", function(snapshot) {
		totalPlayers = snapshot.val().totalPlayers;
		})
		
		setTimeout(function() {
	   		addPlayers()
		}, 500);
	} else {
		return;
	};
});

$("body").on("click", ".character-portraits", function(event) {
	var selected = $(event.target).attr("alt");
	if (buttonControl === 1) {	
		if (playerId == 1) { 
			// Add selected character name to firebase
			database.ref("player1").update({
				character: selected
			});
		} else if (playerId == 2) {
			// Add selected character name to firebase
			database.ref("player2").update({
				character: selected
			});
		};
	} else {
		return;
	};
});

$("body").on("click", $(".player-attack"), function(event) {
	if (buttonControl === 2) {
		if (currentAttack == "") {
			currentAttack = $(event.target).attr("data-attack");
			console.log(currentAttack)
			database.ref("player" + playerId).update({
				currentAttack: currentAttack
			})
		} else {
			return;
		};
	} else {
		return;
	};
});

$("body").on("click", $("#message-button"), function(event) {
  if (buttonControl === 1 || buttonControl === 2) {
  	var message = $("#message").val()
  	$("#message").val("")
		if (playerId == 1) { 
			event.preventDefault();
			// Add selected character name to firebase
			database.ref("player1-message").update({
				message: message
			});
		} else if (playerId == 2) {
			// Add selected character name to firebase
			database.ref("player2-message").update({
				message: message
			});
		};
	} else {
		event.preventDefault();
		return;
	}  
});


resetFirebase()
generateStartScreen()


