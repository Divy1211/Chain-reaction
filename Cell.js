class Cell {
    constructor(x,y,w,k) {
        this.x = x+w/2;
        this.y = y+w/2;
        this.w = w;
        this.level = 0;
        this.a = 0;
        this.k = k;
        this.corner = false;
        this.side = false;
        this.player = 0;
        if(this.k%i == 0 || this.k%i == i-1 || this.k < i || this.k >= i*(j-1))
            this.side = true;
        if((this.k%i == 0 || this.k%i == i-1) && (this.k < i || this.k >= i*(j-1)))
            this.corner = true;
        this.max = 4;
        if(this.side)
            this.max--;
        if(this.corner)
            this.max--;
        
    }
    show(r,g,b) {
        let color = [244, 66, 66,
                    68, 244, 65,
                    65, 65, 244,
                    238, 255, 53,
                    52, 255, 241,
                    255, 51, 234,
                    255, 173, 50,
                    220, 220, 220];
        push();
        translate(this.x,this.y,0);
        noFill();
        stroke(color[turn*3],color[turn*3+1],color[turn*3+2]);
        box(this.w);
        rotateY(this.a*(this.level-1));
        rotateZ(this.a*(this.level-1));
        rotateX(this.a*(this.level-1));
        this.a+=0.07;
        fill(255);
        ambientMaterial(color[this.player*3],color[this.player*3+1],color[this.player*3+2]);
        noStroke();
        if(this.level == 1)
            sphere(w/4);
        else if(this.level == 2 && !this.corner) {
            push();
            translate(-w/6,0,0);
            sphere(w/4);
            pop();
            push();
            translate(w/6,0,0);
            sphere(w/4);
            pop();
        }
        else if(this.level == 3 && !this.side) {
            push();
            translate(-w/8,-w/8,0);
            sphere(w/4);
            pop();
            push();
            translate(w/8,-w/8,0);
            sphere(w/4);
            pop();
            push();
            translate(w/8,w/8,0);
            sphere(w/4);
            pop();
        }
        else if(this.level >= this.max) {
            this.level-=this.max;
            if(!(this.k%i == i-1)) {
                Cells[this.k+1].player = this.player;
                Cells[this.k+1].level++;
            }
            if(!(this.k%i == 0)) {
                Cells[this.k-1].player = this.player;
                Cells[this.k-1].level++;
            }
            if(!(this.k >= i*(j-1))) {
                Cells[this.k+i].player = this.player;
                Cells[this.k+i].level++;
            }
            if(!(this.k < i)) {
                Cells[this.k-i].player = this.player;
                Cells[this.k-i].level++;
            }
        }
        pop();
    }
    burst() {
    }
}