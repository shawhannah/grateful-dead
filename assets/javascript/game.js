
// random number 
$(document).ready(function () {
    var random = Math.floor(Math.random() * 102 + 19);

    // show random number
    $('#randomNumber').text(random);

    // random number for bears
    var redBear = Math.floor(Math.random() * 12 + 1);
    var yellowBear = Math.floor(Math.random() * 12 + 1);
    var purpleBear = Math.floor(Math.random() * 12 + 1);
    var greenBear = Math.floor(Math.random() * 12 + 1);

    // wins, losses, and total
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;


    $('#wins').text(wins);
    $('#losses').text(losses);

    // reset 
    function reset() {
        random = Math.floor(Math.random() * 102 + 19);
        console.log(random)
        $('#randomNumber').text(random);
        redBear = Math.floor(Math.random() * 12 + 1);
        yellowBear = Math.floor(Math.random() * 12 + 1);
        purpleBear = Math.floor(Math.random() * 12 + 1);
        greenBear = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;
        $('#yourNum').text(playerTotal);
    }

    // win alert
    function winner() {
        alert("Bear Bonanza Champion! That's you!");
        wins++;
        $('#wins').text(wins);
        reset();
    }
    // loss alert
    function loser() {
        alert("Oh, that sucks! You're a loser!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
    // bears
    $('.red').on('click', function () {
        playerTotal = playerTotal + redBear;
        console.log("New playerTotal= " + playerTotal);
        $('#yourNum').text(playerTotal);
        //Win & lose conditions
        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    })
    $('.yellow').on('click', function () {
        playerTotal = playerTotal + yellowBear;
        console.log("New playerTotal= " + playerTotal);
        $('#yourNum').text(playerTotal);
        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    })
    $('.purple').on('click', function () {
        playerTotal = playerTotal + purpleBear;
        console.log("New playerTotal= " + playerTotal);
        $('#yourNum').text(playerTotal);

        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    })
    $('.green').on('click', function () {
        playerTotal = playerTotal + greenBear;
        console.log("New playerTotal= " + playerTotal);
        $('#yourNum').text(playerTotal);

        if (playerTotal == random) {
            winner();
        }
        else if (playerTotal > random) {
            loser();
        }
    });
}); 