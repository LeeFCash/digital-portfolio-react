var mainContentAboutMeContentText1Letters = document.getElementById("main-content-aboutMeContent-text1-letter1");
var v = "Lee F. Cash";
var split = v.split("");
console.log(split);

for(let i = 0; i < split.length; i++){
    mainContentAboutMeContentText1Letters.innerHTML += "<span class=\"main-content-aboutMeContent-text3-letter"+[i]+"-opacity0\">" + split[i] + "</span>";
}

setTimeout(setTimer, 5000);

function setTimer() {
var letter = 0;
var timer = setInterval(ontick, 150);

function ontick() {
    var letterSlector = mainContentAboutMeContentText1Letters.querySelectorAll('span')[letter];
    letterSlector.style.opacity = "1.5";
    letter++;
    if(letterSlector === split.length){
        clearInterval(timer);
        timer = null;
        return;
    }
}
}
