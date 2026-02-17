const canvas = document.getElementById("canvas");
const ctx = canvas.getContext ("2d");

	//Draw a square as the background of the canvas
	ctx.fillStyle = "#F3DAD8"
	ctx.fillRect(0,0,500,500);

	//Draw a circle as the background
	ctx.fillStyle = "#F7EBE8";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(250,250,210,-Math.PI,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	//Draw the hair
	ctx.fillStyle = "#311E10";
	ctx.fillRect(152,100,193,180);

	//Draw a circle as the head
	ctx.fillStyle = "#F1BF98";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(250,180,75,-Math.PI,2*Math.PI);
	ctx.fill();

	//Draw a rectangle as the neck
	ctx.fillStyle = "#F1BF98";
	ctx.fillRect(225,220,50,80);

	//Draw a rectangle as the body
	ctx.fillStyle = "#F1BF98";	
	ctx.fillRect(150,280,200,154);

	//Draw a piece of a circle to fill the body
	ctx.fillStyle = "#114B5F";
	ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
	ctx.arc(250,249,210,11*Math.PI/32,21*Math.PI/32);
	ctx.fill();
	ctx.stroke();

	//Draw the shoulders
	ctx.fillStyle = "#FDCFF3";
	ctx.fillRect(115,280,35,40);

	ctx.fillStyle = "#FDCFF3";
	ctx.fillRect(350,280,35,40);
	
	//Draw the arms
	ctx.fillStyle = "#F1BF98";
        ctx.fillRect(110,280,35,100);
      
	ctx.fillStyle = "#F1BF98";                                         
        ctx.fillRect(355,280,35,100);    
       
	//Draw the bangs (??) 
	ctx.fillStyle = "#311E10";
        ctx.strokeStyle = "#311E10";
        ctx.lineWidth = 1;
        ctx.beginPath();
	ctx.arc(304,118,47,Math.PI/6,27*Math.PI/24);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "#311E10";
        ctx.strokeStyle = "#311E10";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(204,118,47,11*Math.PI/6,5*Math.PI/6);
        ctx.fill();
        ctx.stroke();

	ctx.fillStyle = "#311E10";
	ctx.fillRect(234,100,30,30);
	
	ctx.fillStyle = "#F7EBE8";
	ctx.fillRect(224,80,30,20);

	//Draw the face

	//Nose
	ctx.fillStyle = "#D4AA7D";
	ctx.strokeStyle = "#D4AA7D";
	ctx.beginPath();
	ctx.moveTo(242,215);
	ctx.lineTo(262,215);
	ctx.lineTo(252,195);
	ctx.lineTo(242,215);
	ctx.fill();
	ctx.stroke();

	//Mouth
	ctx.fillStyle = "#D4AA7D";
	ctx.strokeStyle = "#D4AA7D";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(252,227,20,0, -Math.PI,0);
	ctx.fill();
	ctx.stroke();	

	//Eyes
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(220,190,10,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(280,190,10,0, 2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "black";
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.arc(220,194,6,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(280,194,6,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();

	ctx.fillStyle = "#311E10";
	ctx.fillRect(209,172,20,3);

	ctx.fillStyle = "#311E10";
        ctx.fillRect(270,172,20,3);

	//Draw clothes
	ctx.fillStyle = "#D782BA";
	ctx.fillRect(150,280,200,154);

	ctx.fillStyle = "#F1BF98";  
        ctx.strokeStyle = "#F1BF98";      
        ctx.lineWidth = 1;                
        ctx.beginPath();                  
        ctx.arc(250,280,25,0, -Math.PI,0);
        ctx.fill();   
        ctx.stroke();

	ctx.fillStyle = "#2C2C54";
	ctx.fillRect(145,280,50,154);
	
	ctx.fillStyle = "#2C2C54";
	ctx.fillRect(305,280,50,154);

	ctx.fillStyle = "#CACFD6";
	ctx.fillRect(355,350,35,5);
