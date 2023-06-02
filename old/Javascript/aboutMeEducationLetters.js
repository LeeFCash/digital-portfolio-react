var mainContentAboutMeContentText3Letters = document.getElementById("main-content-aboutMeContent-text3-letters");
var v = "graduated";
var split = v.split("");
console.log(split);

for(let i = 0; i < split.length; i++){
    mainContentAboutMeContentText3Letters.innerHTML += "<span class=\"main-content-aboutMeContent-text3-letter"+[i]+"-opacity0\">" + split[i] + "</span>";
}

setTimeout(setTimer, 5000);

function setTimer() {
var letter = 0;
var timer = setInterval(ontick, 150);

function ontick() {
    var letterSlector = mainContentAboutMeContentText3Letters.querySelectorAll('span')[letter];
    letterSlector.style.opacity = "1.5";
    letter++;
    if(letterSlector === split.length){
        clearInterval(timer);
        timer = null;
        return;
    }
}
}
