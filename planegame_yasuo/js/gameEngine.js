"use strict";
var  gameEngine = {
	ele: null,
	allBullets: [],
	allEnarmys: [],
	totalscore: 0,
	init: function() {
		return this.ele = document.getElementById("main"), this
	},
	start: function() {
		console.log("开始游戏"), this.loading(function() {
			myPlane.init().move(), gameEngine.keymove(), gameEngine.crash(), myPlane.fire(), gameEngine.createEnarmy()
		})
	},
	loading: function(e) {
		var n = document.createElement("div");
		main.appendChild(n), n.className = "logo";
		var a = document.createElement("div");
		main.appendChild(a), a.className = "load";
		var l = 0,
			t = setInterval(function() {
				 l > 6 ? (clearInterval(t), main.removeChild(n), main.removeChild(a), e && e()) : a.style.background = "url(img/playgame/loading" + ++l % 4 + ".png)"
			}, 400)
	},
	keymove: function() {
		var e = 0,
			n = 0;
		console.log("进入键盘监听事件"), onkeydown = function(a) {
			37 == (a = a || event).keyCode ? e = -10 : 39 == a.keyCode ? e = 10 : 38 == a.keyCode ? n = -10 : 40 == a.keyCode && (n = 10)
		}, onkeyup = function(a) {
			37 == (a = a || event).keyCode || 39 == a.keyCode ? e = 0 : 38 != a.keyCode && 40 != a.keyCode || (n = 0)
		}, setInterval(function() {
			var a = myPlane.ele.offsetLeft + e,
				l = myPlane.ele.offsetTop + n;
			a < 0 && (a = 0), a > gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth && (a = gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth), myPlane.ele.style.left = a + "px", myPlane.ele.style.top = l + "px"
		}, 30)
	},
	createEnarmy: function() {
		setInterval(function() {
			if(Math.random() > .7) {
				new Enarmy(3).init().move()
			}
		}, 6e3), setInterval(function() {
			if(Math.random() > .5) {
				new Enarmy(2).init().move()
			}
		}, 6e3), setInterval(function() {
			if(Math.random() > .3) {
				new Enarmy(1).init().move()
			}
		}, 1e3)
	},
	crash: function() {
		setInterval(function() {
			for(var e = 0; e < gameEngine.allEnarmys.length; e++)
				for(var n = 0; n < gameEngine.allBullets.length; n++) {
					isCrash(gameEngine.allEnarmys[e].ele, gameEngine.allBullets[n].ele);
					isCrash(gameEngine.allEnarmys[e].ele, gameEngine.allBullets[n].ele) && (gameEngine.allEnarmys[e].hurt(), gameEngine.allBullets[n].burn(), gameEngine.allBullets.splice(n, 1))
				}
		}, 100)
	}
};