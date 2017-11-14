	//创建子弹，构造函数
	function Bullet(){
			this.ele=document.createElement("div")
			this.init=function(){
			this.ele.className="bullet"
		    gameEngine.ele.appendChild(this.ele)
		    gameEngine.allBullets.push(this)
			    
			    var x=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2
		        var y=myPlane.ele.offsetTop-this.ele.offsetHeight
				this.ele.style.left=x+"px"
				this.ele.style.top=y+"px"
				return this 
			}//init
			
			this.move=function(){
				var yspeed=-10
				var that=this
				this.time=setInterval(function(){
				if(that.ele.offsetTop<-18){
					clearInterval(that.time)
					gameEngine.ele.removeChild(that.ele)
					gameEngine.allBullets.splice(gameEngine.allEnarmys.indexOf(that),1)
				}
				that.ele.style.top=that.ele.offsetTop+yspeed+"px"
				},50)
			}
			
			this.burn=function(){
					clearInterval(this.timer)
				var imgs=["img/playgame/die1.png","img/playgame/die2.png"]
				this.ele.classsName="bullet-die"
				var that=this;
				var i=0;
			  var dietimer=setInterval(function(){
					if(i>=1){
						clearInterval(dietimer);
						gameEngine.ele.removeChild(that.ele)
						console.log("子弹消失")
					}else{ that.ele.style.background="url("+imgs[++i]+ ")"
                       console.log("子弹爆炸")
                       console.log("url("+imgs[++i]+ ")")
					}
				},300)
				
			}
	} 
