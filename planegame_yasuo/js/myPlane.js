"use strict";
var myPlane = {
	ele: null,
	init: function() {
		console.log("开始初始化飞机"), myPlane.ele = document.createElement("div"), gameEngine.ele.appendChild(this.ele), this.ele.className = "myplane";
		var e = +(gameEngine.ele.offsetWidth - myPlane.ele.offsetWidth) / 2,
			n = gameEngine.ele.offsetHeight - myPlane.ele.offsetHeight;
		return this.ele.style.left = e + "px", this.ele.style.top = n + "px", this
	},
	move: function() {
		myPlane.ele.onmousedown = function(e) {
			var n = (e = e || event).offsetX,
				t = e.offsetY;
			document.onmousemove = function(e) {
				var l = (e = e || event).pageX - gameEngine.ele.offsetLeft - n,
					o = e.pageY - gameEngine.ele.offsetTop - t;
				l < 0 && (l = 0), l > gameEngine.offsetWidth - myPlane.ele.offsetWidth && (l = gameEngine.offsetWidth - myPlane.ele.offsetWidth), myPlane.ele.style.left = l + "px", myPlane.ele.style.top = o + "px"
			}, document.onmouseup = function() {
				document.onmousemove = document.onmouseup = null
			}
		}
	},
	fire: function() {
		setInterval(function() {
			(new Bullet).init().move(), console.log("子弹的数量:" + gameEngine.allBullets.length), console.log("敌机的数量:" + gameEngine.allEnarmys.length)
		}, 300)
	}
};