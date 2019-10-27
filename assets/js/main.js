var btnsControl = [];
var btnsPlayed = [];
var btnIndices = [];
var i = 0;
var score = 0;
var highscore = 0;
var previousInd = 0
var btnAmount = 0

function shuffle() {
    index = Math.round(Math.random() * 35);
    return index;
}

function play() {
    btnAmount = Math.round(score/6+3);
    btnsControl = [];
    i = 0;
    for (amount = 0; amount < btnAmount; amount++) {
        ind = shuffle();
        if (ind == previousInd) {
            i = ind + 2;            
        } else {
            i = ind + 1;  
        }
        previousInd = ind;
        delay = amount*1.5+"s";
        btn = ("#btn"+ i);
        btnsControl[amount] = btn;
        $(btn).css({'animation-name': 'ColorChange', 'animation-duration': '0.75s', 'animation-delay': delay});
    }
    i=0
    btnsPlayed = []
    console.log(btnsControl);
}  

$(document).ready(function() {
    $(".PlayBtn").click(function() {
        play();
    });
    
    $('.GameBtn').on('click', function(event) {
        btnsPlayed[i] = "#" + event.currentTarget.id;
        console.log(btnsPlayed);
        if (btnsPlayed[i] != btnsControl[i]) {
            if (score > highscore) {
                higscore = score;
                document.getElementById("score").innerHTML = "Your score = " + score;
                document.getElementById("highscore").innerHTML = "Highest score:" + highscore;
                swal({
                    title: "Congratulations!!",
                    text: "You improved the highest score!!",
                    icon: "success" ,
                    button: false,
                });
            } else {
                document.getElementById("score").innerHTML = "Your score = " + score;
                swal({
                    title: "Game over!",
                    text: "Your score is " + score,
                    icon: "error" ,
                    button: false,
                });
            }
            score = 0;
            document.getElementById("score").innerHTML = "Your score = " + score;
            i = 0;
            return;
        } else if (i === btnAmount-1) {
            score = score + btnAmount
            if (score > highscore) {
                highscore = score;
                document.getElementById("score").innerHTML = "Your score = " + score;
                document.getElementById("highscore").innerHTML = "Highest score = " + highscore;
                swal({
                    title: "Congratulations!! You Won!",
                    text: "Your score is " + score +" (New highest score!)",
                    icon: "success" ,
                    buttons: ["Stop playing", "Continue"],
                }).then((Continue) => {
                    if (Continue) {
                        play();
                    } else {
                        score = 0;
                        document.getElementById("score").innerHTML = "Your score = " + score;
                        i = 0;
                    }
                });
            } else {
                document.getElementById("score").innerHTML = "Your score = " + score;                
                swal({
                    title: "Congratulations!! You Won!",
                    text: "Your score is " + score,
                    icon: "success" ,
                    buttons: ["Stop playing", "Continue"],
                }).then((Continue) => {
                    if (Continue) {
                        play();
                    } else {
                        score = 0;
                        document.getElementById("score").innerHTML = "Your score = " + score;
                        i = 0;
                    }                   
                });
            }
            i = 0;
            return;
        } else {
            i++;
            return;
        };
    });
});