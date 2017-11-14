//创建敌机 构造函数,调ini的时候创建出不同的飞机
function Enarmy(type){
	
	this.speed=5
	this.active=3
	this.score=1
	this.dieimgs=[]
	this.init=function(){
		this.ele=document.createElement("div")
		gameEngine.ele.appendChild(this.ele)
		gameEngine.allEnarmys.push(this)
		//为什么使用this而不是this.ele
		
		
		switch(type){
			case this.Enarmy_Type_Large:
				this.ele.className="enemy-large";
				this.speed=this.Enarmy_Speed_Large;
				this.active=this.Enarmy_Active_Large;
				this.score=this.Enarmy_Score_Large;
				this.dieimgs=["img/playgame/plane3_die1.png","img/playgame/plane3_die2.png","img/playgame/plane3_die3.png","img/playgame/plane3_die4.png","img/playgame/plane3_die5.png","img/playgame/plane3_die6.png"]
				
				break;
			case this.Enarmy_Type_Middle:
				this.ele.className="enemy-middle";
				this.speed=this.Enarmy_Speed_Middle;
				this.active=this.Enarmy_Active_Middle;
				this.score=this.Enarmy_Score_Middle;
				this.dieimgs=["img/playgame/plane2_die1.png","img/playgame/plane2_die2.png","img/playgame/plane2_die3.png","img/playgame/plane2_die4.png"]
				break;
			case this.Enarmy_Type_Small:
				this.ele.className="enemy-small";
				this.speed=this.Enarmy_Speed_Small;
				this.active=this.Enarmy_Active_Small;
				this.score=this.Enarmy_Score_Small;
				this.dieimgs=["img/playgame/plane1_die1.png","img/playgame/plane1_die2.png"]
				break;
		}//switch
		
		this.ele.style.left=parseInt( Math.random()*(gameEngine.ele.offsetWidth-this.ele.offsetWidth))+"px"
		this.ele.style.top=-this.ele.offsetHeight+"px"
		return this 
	}//init
	
	this.move=function(){
		var that=this
		this.timer=setInterval(function(){
			if(that.ele.offsetTop > gameEngine.ele.offsetHeight){
				clearInterval(this.timer);
				gameEngine.ele.removeChild(this.ele);
				gameEngine.allEnarmys.splice(gameEngine.allEnarmys.indexOf(that),1)
			}else{
			that.ele.style.top = that.ele.offsetTop + that.speed*3 + "px";
			}
		},100)
	}
	
	this.hurt=function(){
		this.active--;
		if(this.active==0){
		this.burn()
		}
	}
	
	
	this.burn=function(){
		var that=this
		var i=0
		var dietimer=setInterval(function(){
				if(i>=that.dieimgs.length){
			clearInterval(dietimer)
			gameEngine.allEnarmys.splice(gameEngine.allEnarmys.indexOf(that),1)
		 
			
		}
		else{that.ele.style.background="url("+ that.dieimgs[i++] +")";
		}
		
		},200)
	}
}//func


Enarmy.prototype.Enarmy_Type_Large=3
Enarmy.prototype.Enarmy_Type_Middle=2
Enarmy.prototype.Enarmy_Type_Small=1


Enarmy.prototype.Enarmy_Speed_Large=1
Enarmy.prototype.Enarmy_Speed_Middle=2
Enarmy.prototype.Enarmy_Speed_Small=3


Enarmy.prototype.Enarmy_Active_Large=3
Enarmy.prototype.Enarmy_Active_Middle=2
Enarmy.prototype.Enarmy_Active_Small=1

Enarmy.prototype.Enemy_Score_Large =3; 
Enarmy.prototype.Enemy_Score_Middle =2;
Enarmy.prototype.Enemy_Score_Small =2;