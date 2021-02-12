let Hello = document.getElementById("Hello");
let DoYouKnow = document.getElementById("Do_You_Know");
let TellMeMore = document.getElementById("Tell_Me_More");
let PlayGame = document.getElementById("PlayGame");

TellMeMore.onmouseover = function() {
    TellMeMore.style.opacity = "0.5";
    TellMeMore.innerHTML = "Click the link below to learn more";
    TellMeMore.style.fontSize = "32px";
    TellMeMore.style.fontWeight = "bold";
}

TellMeMore.onmouseout = function() {
    TellMeMore.style.opacity = ".7";
    TellMeMore.innerHTML = "No, Please tell me more";
    TellMeMore.style.fontSize = "32px";
    TellMeMore.style.fontWeight = "bold";
}

PlayGame.onmouseover = function() {
    PlayGame.style.opacity = "0.5";
    PlayGame.innerHTML = "Click the link below to play a game";
    PlayGame.style.fontSize = "32px";
    PlayGame.style.fontWeight = "bold";
}

PlayGame.onmouseout = function() {
    PlayGame.style.opacity = ".7";
    PlayGame.innerHTML = "Nah, I'd rather play a game";
    PlayGame.style.fontSize = "32px";
    PlayGame.style.fontWeight = "bold";
}


// TellMeMore[0].onclick = function() {
//     //<a href="#Bio">Take me to Bio</a>
// }