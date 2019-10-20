function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function play() {
    BtnAmount = 3;
    BtnsControl = [];
    BtnsPlayed = [];
    numbers = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    i = 0;
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

    i = 0;
    $('.GameBtn').on('click', function(event) {
        BtnsPlayed[i] = "#" + event.currentTarget.id;
        console.log(BtnsPlayed);
        if (BtnsPlayed[i] != BtnsControl[i]) {
            alert("Sorry You missed.Your score is...");
            i = 0;
            return;
        } else if (i === BtnAmount-1) {
            alert("Congratulations! You Won!! Your score is...");
            i = 0;
            return;
        } else {
            i++;
            return;
        };
    });

  

    console.log(BtnsPlayed);
}  


$(document).ready(function() {
    $(".PlayBtn").click(function() {
        play();
    });
});