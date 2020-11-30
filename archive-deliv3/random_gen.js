randomNum = Math.round(Math.random()+1)
window.onload = function(){
    if (randomNum == 1) {
        document.getElementById("case1").style.display="inline";
    } else {
        document.getElementById("case2").style.display="inline";
    }
}