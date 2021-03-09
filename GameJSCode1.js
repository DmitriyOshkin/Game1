let point = 0;
let playerName;
let wasHit = false;  //ДЛЯ ДВИЖЕНИЯ
document.querySelector(".game").style.display = "none";
function next(){
    document.querySelector(".sign_in").style.display = "none";
    document.querySelector(".game").style.display = "block";
    document.getElementById("out").innerHTML = `You score: ${point} points`;
    playerName = document.getElementById("name").value;
}
function back(){
    point = 0;
    document.getElementById("name").value = "";
    document.getElementById("out").innerHTML = "Waiting...";
}
function hit(){
    let block = document.getElementById('myAnim');
    let width = height = getRandomRange(50, 200);
    //let height = Math.floor(Math.random()*200)+1;
    let top = Math.floor(Math.random()*90)+1;
    let left = Math.floor(Math.random()*90)+1;
    block.style.width = width + 'px';
    block.style.height = height + 'px';
    block.style.top = top + '%';
    block.style.left = left + '%';
    
    /*let har = document.querySelector('hit');
        hit = document.querySelector('.hit');
        r = Math.floor(Math.random() * (256));
        g = Math.floor(Math.random() * (256));
        b = Math.floor(Math.random() * (256));
        color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    har.style.background = color;
    hei.innerText = color;*/

    document.getElementById("out").innerHTML = `You score: ${point++} points`;
    
    let moveSpeed;  //ДЛЯ ДВИЖЕНИЯ
    if (!wasHit) {
        wasHit = true;
        moveSpeed = setInterval(frame, 10);
    }
    posit = getRandomRange(1, 900);
    console.log (posit);
}
function getRandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function frame() {  //ДЛЯ ДВИЖЕНИЯ
    let elem = document.getElementById("myAnim");
    if (posit == 0) {
        clearInterval(moveSpeed);
        wasHit = false;
    } else {
        posit++;
        elem.style.top = posit + "px";
        //elem.style.left = posit + "px";
        //elem.style.right = posit + "px";
        //elem.style.bottom = posit + "px";

    }
}
function signInBack(){
    document.querySelector(".sign_in").style.display = "block";
    document.querySelector(".game").style.display = "none";
}
