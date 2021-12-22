let block = document.getElementsByClassName("box");
let time = document.getElementById("timer");
let colorsel = document.getElementById("ColSel")
let col = colorsel.options[colorsel.selectedIndex].value;
let sec = 60;
let start=document.getElementById("start btn-outline-success btn")
let n=0;
function Start(){
    n=1

     

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

function randomset(){
    const array2 = color_eleminate();
    let colors = array2[Math.floor(Math.random()*array.length)]; 
    return colors;
}

//setting every div a random color
color_eleminate();
function set(){
    let div = block[Math.floor(Math.random()*16)];
    div.style.backgroundColor = col;
    for(let i = 0 ; i< block.length;i++){
        if(block[i]==div)
            continue;
        block[i].style.backgroundColor = randomset();
    }
}

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
        sec=60;
        time.innerHTML = "1:00";
    }
    return sec;
}

//changing the colors of divs in every 1 sec
function Begin(){
if(n==1){
    set(col);
    countdown();
}
}
setInterval(Begin,1000);
