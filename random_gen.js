randomNum = Math.random()
window.onload = function(){
    document.getElementById("loading").style.display="none";
    if (randomNum < 0.5) {
        document.getElementById("case1").style.display="inline";
    } else {
        document.getElementById("case2").style.display="inline";
    }
}