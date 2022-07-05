var score = 0;
var count = 0;
var flag = 0;
var colors = [];
var tiles = document.querySelectorAll(".thumbnail");
var scoreDisplay = document.querySelector("#score");
var finScore = document.querySelector("#final");
var selectedBorderStyle = "1px solid black"

tiles.forEach(function (i) {
	i.style.background = "black";
});

driver();

function driver() {
	colors = generateRandColors(8);
	// colorPool = ["rgb(6,187,44)","rgb(6,15,187)","rgb(84,7,32)","rgb(255,20,147)","rgb(255,0,0)","rgb(105,105,105)","rgb(235,88,9)","rgb(178,9,235)","rgb(6,187,44)","rgb(6,15,187)","rgb(84,7,32)","rgb(255,20,147)","rgb(255,0,0)","rgb(105,105,105)","rgb(235,88,9)","rgb(178,9,235)"];
	// colors = _.shuffle(colorPool);
	// console.log(colors);
	// colors1 = generateRandColors(8);
	// console.log(colors1);
	score = 0;
	scoreDisplay.textContent = "000";
	count1 = 0;
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].addEventListener("click", function () {
			var clickedcolor = this.style.background;
			if (this.style.border === "") {
				this.style.border = selectedBorderStyle;
			}
			if (clickedcolor === "black") {
				count += 1;
				this.style.background = col();
				if (count == 2) {
					var i = ind();
					var j = ind();
					setTimeout(function () {
						if (tiles[i].style.background === tiles[j].style.background) {
							tiles[i].style.background = "rgba(255, 255, 255, 0)";
							tiles[j].style.background = "rgba(255, 255, 255, 0)";
							tiles[i].style.border = "1px solid rgba(255, 255, 255, 0)";
							tiles[j].style.border = "1px solid rgba(255, 255, 255, 0)";
							tiles[i].blur = "";
							tiles[i].style.zIndex = "";
							tiles[j].blur = "";
							tiles[j].style.zIndex = "";
							score = score + 30;
							count1++;
						}
						else {
							tiles[i].style.background = "black";
							tiles[j].style.background = "black";
							tiles[i].blur = "";
							tiles[i].style.zIndex = "";
							tiles[j].blur = "";
							tiles[j].style.zIndex = "";
							tiles[i].style.border = ""
							tiles[j].style.border = "";
							score = score - 10;
						}
						scoreDisplay.textContent = score;
						if (count1 === 8) {
							// console.log("win");
							finScore.textContent = score;
							// console.log(score);
							$("#congrat").modal();
						}
					}, 250);
					count = 0;
				}
			}
		});
	}

}

function ind() {
	for (i = 0; i < 16; i++) {
		if (tiles[i].style.border === selectedBorderStyle & tiles[i].blur != "2") {
			tiles[i].blur = "2";
			return i;
		}
	}
}

function col() {
	for (var i = 0; i < 16; i++) {
		if (tiles[i].style.border === selectedBorderStyle && tiles[i].style.zIndex != "1") {
			tiles[i].style.zIndex = "1";
			return colors[i];
		}
	}
	return "black";
}

function win() {
	flag = 0;
	for (i = 0; i < 16; i++) {
		if (tiles[i].style.background != "rgba(255, 255, 255, 0)") {
			flag = 1;
		}
	}
	return flag;
}

// make array of random colors
function generateRandColors(num) {
	var colorPool = ["rgb(6,187,44)","rgb(6,15,187)","rgb(84,7,32)","rgb(255,20,147)","rgb(255,0,0)","rgb(105,105,105)","rgb(235,88,9)","rgb(178,9,235)","rgb(255,153,153)","rgb(102,51,0)"];

	//make an array
	var arr = [];
	//repeat num times
	// for (var i = 0; i < num; i++) {
		//get random numbers and push it in array
		// arr.push(randomColor());
		// var randomNumber = Math.floor(Math.random()*colorPool.length);
		// console.log(randomNumber);
		// arr.push(colorPool[randomNumber]);
	// }
	// console.log(arr);

	var uniques = chance.unique(chance.natural, 8, { min: 0, max: 7 });
	for (var i=0; i<num; i++) {
		arr.push(colorPool[uniques[i]]);
		arr.push(colorPool[uniques[i]]);
	}
	// console.log(uniques);
	// for (i = 0; i < 8; i++) {
	// 	arr.push(arr[uniques[i]]);
	// }
	// console.log(arr);
	//return that array
	// var as = [];
	// var uniques = chance.unique(chance.natural, 16, { min: 0, max: 15 });
	// console.log(uniques);
	// for (var i = 0; i < 16; i++) {
	// 	as.push(arr[uniques[i]]);

	// }
	// console.log(as);
	var shuffled = shuffleArray(arr);

	console.log(shuffled);
	return shuffled;
}

//function to shuffle array
function shuffleArray(array) {
	let curId = array.length;
	// There remain elements to shuffle
	while (0 !== curId) {
	  // Pick a remaining element
	  let randId = Math.floor(Math.random() * curId);
	  curId -= 1;
	  // Swap it with the current element.
	  let tmp = array[curId];
	  array[curId] = array[randId];
	  array[randId] = tmp;
	}
	return array;
  }

//function to generate random color
// function randomColor() {
// 	//pick r, g, b from 0 - 255
// 	var r = Math.floor(Math.random() * 256);
// 	var g = Math.floor(Math.random() * 256);
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }

// init function
function init() {
	score = 0;
	count = 0;
	count1 = 0;
	for (i = 0; i < 16; i++) {
		tiles[i].style.background = "black";
		tiles[i].style.cssText = "background: black;";
		// tiles[i].style.backgroundColor = "black";
		tiles[i].style.border = "";

	}
	driver();
}
