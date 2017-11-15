//创建敌机 构造函数,调ini的时候创建出不同的飞机
class Enarmy  extends Base{
	
	constructor(type){
		super();
		this.ele = null;
		this.speed=5;
		this.active=3;
		this.score=1;
		this.dieimgs=[];
		this.type=type;
	}
	
	init(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele)
		gameEngine.allEnarmys.push(this)
		//为什么使用this而不是this.ele
		switch(this.type){
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
	
	move(){
	  
		this.timer=setInterval(()=>{
			 console.log("kk"+this.ele)
			if(this.ele.offsetTop > gameEngine.ele.offsetHeight){
				clearInterval(this.timer);
				gameEngine.ele.removeChild(this.ele);
				gameEngine.allEnarmys.splice(gameEngine.allEnarmys.indexOf(this),1)
			}else{
			this.ele.style.top = this.ele.offsetTop + this.speed*3 + "px";
			}
		},100)
	}
	
	hurt(){
		this.active--;
		if(this.active==0){
		this.burn()
		}
	}
	
	
	burn(){

		let i=0
		let dietimer=setInterval(()=>{
				if(i>=this.dieimgs.length){
			clearInterval(dietimer)
			gameEngine.ele.removeChild(this.ele);
			gameEngine.allEnarmys.splice(gameEngine.allEnarmys.indexOf(this),1)
		}
		else{this.ele.style.background="url("+ this.dieimgs[i++] +")";
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
Enarmy.prototype.Enemy_Score_Small =1;