var gameEngine={
		
		ele:null,
		allBullets:[],
		allEnarmys:[],
		totalscore:0,
		init:function(){
		this.ele=document.getElementById("main")
			return this
		},
		 
		start:function(){
			console.log("开始游戏")
			this.loading(function(){
				
				myPlane.init().move()
				//监听键盘事件
			    gameEngine.keymove()
			    //添加撞机检测
			    gameEngine.crash()
			    
			    //创建子弹
			    myPlane.fire()
			 //生成敌机
			 gameEngine.createEnarmy();
			})
		},
		//加载游戏
		loading:function(callback){
			//加载 飞机大战标题
			var logo=document.createElement("div")
			main.appendChild(logo)
			logo.className="logo"
			//加载程序
		
			var load=document.createElement("div")
			main.appendChild(load)
			load.className="load"
			var k=0
			var timer=setInterval(function(){
				
				that=this 
				if(k>6){
					clearInterval(timer)
					main.removeChild(logo)
					main.removeChild(load)
					if(callback){callback()}
					}
				else{ load.style.background="url(img/playgame/loading"+ ++k%4 + ".png)" }
				
			},400)
		},//load
			//添加键盘移动事件
	keymove:()=>{
		 var xspeed=0
		 var yspeed=0
		console.log("进入键盘监听事件")
		onkeydown=function(e){
			 e = e||event;
			if(e.keyCode==37){  //zuo
				xspeed=-10
			}else if(e.keyCode==39) { //you
				xspeed=10
			}else if (e.keyCode==38){//shang
				yspeed=-10
			}else if(e.keyCode==40){//xia
				yspeed=10
			}	
	   }//onkeydoan
	   
	   onkeyup = function(e){
			 e = e||event;
			if (e.keyCode==37 || e.keyCode==39) {
				xspeed = 0;
			}
			else if (e.keyCode==38 || e.keyCode==40) {
				yspeed = 0;
			}
		}
	   
	   timer=setInterval(()=>{
		   	var x=myPlane.ele.offsetLeft+xspeed
		   	var y=myPlane.ele.offsetTop+yspeed
		   	if(x<0){x=0;}
		   	if(x>gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth)
		   	{x=gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth;}
		   	myPlane.ele.style.left=x+"px"
		   	myPlane.ele.style.top=y+"px"
		   },30)
	},//keymove func
	
	createEnarmy:function(){
		//创建大型机
		setInterval(function(){
			if(Math.random()>0.7){
			 var  enarmy=new  Enarmy(3)
				enarmy.init().move();}
			
		},6000)
		//创建中型机
		setInterval(()=>{
			if(Math.random()>0.5){
				  var enarmy=new  Enarmy(2)
				enarmy.init().move();}
			
		},6000)
		//创建小型机
		setInterval(()=>{
			if(Math.random()>0.3){
				 var  enarmy=new  Enarmy(1)
				enarmy.init().move();}
		},1000)
	},//createEnarmy
     //添加碰撞事件
      crash:()=>{
      	var timer=setInterval(()=>{
      	for(var i=0;i<gameEngine.allEnarmys.length;i++){
      		for(var j=0;j<gameEngine.allBullets.length;j++){
      			var kk=isCrash(gameEngine.allEnarmys[i].ele,gameEngine.allBullets[j].ele )
      			if( isCrash(gameEngine.allEnarmys[i].ele,gameEngine.allBullets[j].ele) )
      			{ 
      				gameEngine.allEnarmys[i].hurt();
      				gameEngine.allBullets[j].burn();
					gameEngine.allBullets.splice(j,1)
					
					
					
      			}//if
      		}//for
      	}//for
      	},100)
     }
     

  }//obj  
  

