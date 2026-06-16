const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let vx = 4;
let y = 0;
let vy = 4;

function animate(){
	ctx.clearRect(0,0,800,800);
	x = x + vx;
	y = y +vy;	

	if(x > 750 || x < 0){
	vx = vx * -1;
	}

	if(y >750 || y<0){
	vy = vy * -1;
	}

	ctx.fillStyle = "#ff006e"
	ctx.fillRect(x,y,50,50)

requestAnimationFrame(animate);
}
animate();
	
