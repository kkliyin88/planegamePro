	//创建子弹，构造函数
	class Bullet{
		constructor(){
			this.ele=null
		}
			
		init(){
			this.ele=document.createElement("div")
			this.ele.className="bullet"
		    gameEngine.ele.appendChild(this.ele)
		    gameEngine.allBullets.push(this)
			    
			   let x=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2
		        let y=myPlane.ele.offsetTop-this.ele.offsetHeight
				this.ele.style.left=x+"px"
				this.ele.style.top=y+"px"
				return this 
			}//init
			
		move(){
				let yspeed=-10
				let that=this
				this.time=setInterval(function(){
				if(that.ele.offsetTop<-18){
					clearInterval(that.time)
					gameEngine.ele.removeChild(that.ele)
					gameEngine.allBullets.splice(gameEngine.allEnarmys.indexOf(that),1)
				}
				that.ele.style.top=that.ele.offsetTop+yspeed+"px"
				},50)
			}
			
			burn(){
					clearInterval(this.timer)
				let imgs=["img/playgame/die1.png","img/playgame/die2.png"]
				this.ele.classsName="bullet-die"
				let that=this;
				let i=0;
			  let dietimer=setInterval(function(){
			  	 
					if(i>=1){
						clearInterval(dietimer);
						gameEngine.ele.removeChild(that.ele)
						
					}else{ that.ele.style.background="url("+imgs[++i]+ ")"
					}
				},300)
				
			}
	} 
