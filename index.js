//Declaring the variable 
let block = document.getElementsByClassName("box");
let time = document.getElementById("timer");
let colorsel = document.getElementById("ColSel");
let disp= document.getElementById("score");
let sec = 60;
let n=0;

function Start(){
    n=1;
     let col;
     col = colorsel.options[colorsel.selectedIndex].value;
     randomset(col);
     cl();
}



function countdown(){
    if(sec>1 && sec<=60){
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

//Setting the timer and running it 



//Give a random color from the array
let array = ["blue", "green", "yellow", "red", "voilet", "orange"];
function randomset(){
    let colors = array[Math.floor(Math.random()*array.length)]; 
    console.log(colors);
    return colors;
}

//setting every div a random color
function set(sel){
    let div = block[Math.floor(Math.random()*16)];
    div.style.backgroundColor = sel;
    for(let i = 0 ; i< block.length;i++){
        if(block[i]==div)
        {
            
            continue;}
        block[i].style.backgroundColor = randomset();
    }
    
    
}

function cl()
{
    if(n==1)
    {
        countdown();
        set();
        
    }

}
setInterval(cl,1000);
//changing the colors of divs in every 1 sec
