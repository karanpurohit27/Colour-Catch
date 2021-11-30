//Declaring the variable 
let block = document.getElementsByClassName("box");
let time = document.getElementById("timer");
let colorsel = document.getElementById("ColSel");
let sec = 60;

function Start(){
     let col;
     col = colorsel.options[colorsel.selectedIndex].value;
     randomset(col);
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
        time.innerHTML = "1:00";
    }
    return sec;
}

//Setting the timer and running it 
setInterval(countdown,1000);


//Give a random color from the array
let array = ["blue", "green", "yellow", "red", "voilet", "orange"];
function randomset(){
    let colors = array[Math.floor(Math.random()*array.length)]; 
    return colors;
}

//setting every div a random color
function set(sel){
    let div = block[Math.floor(Math.random()*16)];
    div.style.backgroundColor = sel;
    for(let i = 0 ; i< block.length;i++){
        if(block[i]==div)
            continue;
        block[i].style.backgroundColor = randomset();
    }
}

//changing the colors of divs in every 1 sec
setInterval(set, 1000);
