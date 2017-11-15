myPlane={
	ele:null,
	init:function(){
		console.log("开始初始化飞机")
		myPlane.ele=document.createElement("div")
		gameEngine.ele.appendChild(this.ele)
		this.ele.className="myplane"
		var x=+(gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth)/2
		var y=gameEngine.ele.offsetHeight-myPlane.ele.offsetHeight
		this.ele.style.left=x+"px"
		this.ele.style.top=y+"px"
		return this
	},
	move:function(){
	   	    myPlane.ele.onmousedown=function(e){
		   		e=e||event
		   		var disx=e.offsetX
		   		var disy=e.offsetY
		   		document.onmousemove=function(e){
			   		e=e||event
			   		var x=e.pageX-gameEngine.ele.offsetLeft-disx
			   		var y=e.pageY-gameEngine.ele.offsetTop-disy
			   		if(x<0){ x=0;}
			   		
			   		if(x>gameEngine.offsetWidth-myPlane.ele.offsetWidth)
			   		{x=gameEngine.offsetWidth-myPlane.ele.offsetWidth;}
			   		
			   		myPlane.ele.style.left=x+"px"
			   		myPlane.ele.style.top=y+"px"
	   		    }//move
	   		    document.onmouseup=function()
	   		    {document.onmousemove=document.onmouseup=null;}//mouseup
   	       }//mousedown
   	  },//func move    
   	  
   	       fire:function(){
     	var timer=setInterval(function(){
			 	 var bullet=new Bullet()
			    bullet.init().move()
			    console.log("子弹的数量:"+gameEngine.allBullets.length)
      			console.log("敌机的数量:"+gameEngine.allEnarmys.length)
      			
			   },300)
     }//fire

	

 }//obj
