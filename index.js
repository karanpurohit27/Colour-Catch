let block = document.getElementsByClassName("box");

function randomset(){
    let array = ["blue", "green", "yellow", "red", "voilet", "orange"];
    let color = array[Math.floor(Math.random()*array.length)];
    return color;
}

function set(){
    let i = 0;
    for(i = 0 ; i< block.length;i++){
        block[i].style.backgroundColor = randomset();
    }
}

setInterval(set, 2000);