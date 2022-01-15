//Declaration of Variables
let block = document.getElementsByClassName("box");//Grid block
let time = document.getElementById("timer");//timer div
let colorsel = document.getElementById("ColSel")//Selected color div
let col = colorsel.options[colorsel.selectedIndex].value;//value of selected color
let start=document.getElementById("start")//Start button
let score = document.getElementById("score")//Score div
let n=0;//for start stop condition
let increase = 0;//For score increment
let sec = 60;//for timer of 60 sec

//Start the game 
function Start(){
    //Initialize the score
    increase =0;
    score.innerHTML = 0;

    n=1;//condition to start and end 
    Begin();
}


//Setting the timer and running it 
//Give a random color from the array
let array = ["blue", "green", "yellow", "red", "voilet", "orange"];


function color_eleminate(){
    for(let index = 0; index<6;index++){
        if(array[index]===col){
            array.splice(index,1);

        }
    }
    console.log(array);
    return array;
}



//Random color return  
function randomset(){
    const array2 = color_eleminate();//Eleminated the selected color from array
    let colors = array2[Math.floor(Math.random()*array.length)]; 
    return colors;//returning random color
}




//setting every div a random color
function set(){
    let div = block[Math.floor(Math.random()*16)];//Random block
    div.style.backgroundColor = col;//Assigning color

    //Assigning other blocks random colors
    for(let i = 0 ; i< block.length;i++){
        if(block[i]==div)
            continue;
        block[i].style.backgroundColor = randomset();
    }
}

//Countdown for 1 min
function countdown(){

    if(sec>0 && sec<=60){
        sec--;
        if(sec<10){
            time.innerHTML = "0:0" + sec;
        }
        else{
        time.innerHTML = "0:" + sec;

        }
    }
    else{
        n=0;
        increase = 0;
        sec=60;
        alert("Game Over");
        time.innerHTML = "1:00";
    }
    return sec;
}

//Check whether clicked block is correct or not
function checked(index){
    if(n==1){
        let div = block[index].style.backgroundColor;//Assigning the color of block clicked
        if(div==col){
            increase++;//Incrementing the score if right
            score.innerHTML = increase;//Displaying the score
        }
    }
}

function Begin(){
if(n==1){
    set();//changing the colors of grid blocks
    countdown();    
}
}
setInterval(Begin,1000);//interval of function in every 1 sec
