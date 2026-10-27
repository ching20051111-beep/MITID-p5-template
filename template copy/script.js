

function setup(){
    // function that runs only once
    createCanvas(800, 500);


}

function draw(){
    // function that runs repeatedly
    //background(73);

    /*fill("#e0138a");
    circle(mouseX,mouseY,50);*/
    
    for(let i=0; i<10;i=i+1){
        circle(i*20,100,20);
    }
}

function mousePressed(){
    fill("#3273c9")
    circle(mouseX,mouseY,50);
}