let Cells = [];
let rx,ry,w,i,j,turn = 0,max = 8,chance = 0;
let s = [];
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	let k = 0;
	i = 6;
	j = 9;
	w = floor((height-50)/j);
	rx = i*w,ry = j*w;
	for(let y = -ry/2; y < ry/2;) {
		for(let x = -rx/2; x < rx/2;) {
			Cells.push(new Cell(x,y,w,k));
			x+=w;
			k++;
		}
		y+=w;
	}
}
function draw() {
	directionalLight(255,255,255,-0.59,0.61,-0.51);
	ambientLight(75);
	background(0);
	for(let cell of Cells) {
		cell.show();
	}
	let c = 0;
	for(let i = 0; chance > 8 && i < Cells.length; i++) {
		if(Cells[i].player == turn)
			c++;
	}
	if(chance > 8 && c == 0) {
		s.push(turn);
		turn++;
		turn = turn%max; 
	}
}
//5x8
//10x16
function mousePressed() {
	let mx = mouseX-width/2;
	let my = mouseY-height/2;
	for(let cell of Cells) {
		if(dist(cell.x,cell.y,mx,my) <= w/2) {
			if(cell.level == 0 || cell.player == turn) {
				cell.level++;
				cell.player = turn;
				turn++;
				chance++;
			}
		}
	}


	while(s.indexOf(turn)!==-1 && s.length!== max-1)
		turn++;
	turn = turn%max;
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
