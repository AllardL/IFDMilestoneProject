function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function play() {
    var amount;
    var BtnAmount = 3;
    var i;
    var index;
    var btn;
    var delay;
    var BtnsControl = [];
    var BtnPlayed
    var BtnsPlayed = [];
    var numbers = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (amount = 0; amount < BtnAmount; amount++) {
        numbers = shuffle(numbers);
        ind = numbers.indexOf(1);
        i = 1 + ind;
        delay = amount+"s";
        btn = ("#btn"+ i);
        BtnsControl[amount] = btn;
        $(btn).css({'animation-name': 'ColorChange', 'animation-duration': '0.5s', 'animation-delay': delay});
    }
    console.log(BtnsControl);
    amount = 0
  
    /* if */
    
    $('.GameBtn').on('click', function(event) {
        BtnPlayed = event.currentTarget.id;
        BtnsPlayed[amount] = BtnPlayed;
        amount++
    })
       

    console.log(BtnsPlayed);
}  


$(document).ready(function() {
    $(".PlayBtn").click(function() {
        play();
    });
});