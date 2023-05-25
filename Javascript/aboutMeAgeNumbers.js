var mainContentAboutMeContentText2Number1 = document.getElementById("main-content-aboutMeContent-text2-number1");
var v = "18";
var split = v.split("");
console.log(split);

for(let i = 0; i < split.length; i++){
    mainContentAboutMeContentText2Number1.innerHTML += "<span class=\"main-content-aboutMeContent-text3-letter"+[i]+"-opacity0\">" + split[i] + "</span>";
}

setTimeout(setTimer, 5000);

function setTimer() {
var letter = 0;
var timer = setInterval(ontick, 500);

function ontick() {
    var letterSlector = mainContentAboutMeContentText2Number1.querySelectorAll('span')[letter];
    letterSlector.style.opacity = "1.5";
    letter++;
    if(letterSlector === split.length){
        clearInterval(timer);
        timer = null;
        return;
    }
}
}
