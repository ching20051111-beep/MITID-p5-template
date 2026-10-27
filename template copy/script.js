//variable name                                      id of the botton in html
//
let randomButton=document.querySelector("#randomize");

randomButton.addEventListener("click",function(){
    background(73);
    generateStacks(random(1,50));
});

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();
    background(73);
    generateStacks(random(1,50));

}

function draw(){
    // function that runs repeatedly
    //background(73);

    /*fill("#e0138a");
    circle(mouseX,mouseY,50);*/
    
    /*for(let i=0; i<10;i=i+1){
        circle(i*20,100,20);
    }*/

    //we call the functon
    //stackofCircle(100,200,"#P500E6");
    //stackofCircle(400,300,"#D232F5");

    //creata loop to generate 10 stack
    /*for(let i=0; i<10; i++){
        let randomX=random(0,800);
        let randomY=random(0,500);
        let randomColor=random(0, 255);
        stackofCircle(randomX,randomY, randomColor);
    }*/

}

//we create functon to generate stacks
function generateStacks(stackAmount){
    for(let i=0; i<stackAmount; i++){
        let randomX=random(0,800);
        let randomY=random(0,500);
        let randomColor=random(0, 255);
        stackofCircle(randomX,randomY, randomColor);
    }
    

}
//we create a function to display a stack of stack0fCircle
function stackofCircle(posX,posY,color){
    fill(color);
    for(let i=0; i<10;i=i+1){
        circle(posX,posY+i*10,20);

    }
}


function mousePressed(){
    fill("#3273c9")
    circle(mouseX,mouseY,50);
}