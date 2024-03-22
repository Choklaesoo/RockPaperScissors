var player_choice = null;
var bot_choice = null;

let player_score = 0;
let bot_score = 0;

// //rock = 0, paper = 1, scissors = 2
function battle(player_choice) {
    let bot_choice = Math.floor(Math.random() * 3);

    switch (bot_choice) {
        case (0):
            document.getElementById("bot_picked_img").src = "img/rock.png";
            break;
        case (1):
            document.getElementById("bot_picked_img").src = "img/paper.png";
            break;
        case (2):
            document.getElementById("bot_picked_img").src = "img/scissors.png";
            break;
    }

    console.log("player: " + player_choice);
    console.log("enemy: " + bot_choice);
    //console.log(String(player_choice)+String(bot_choice))
    switch (String(player_choice) + String(bot_choice)) {
        case ("00"):
            battle_result_annouce("TIE");
            break;
        case ("01"):
            bot_score += 1;
            battle_result_annouce("DEFEAT");
            break;
        case ("02"):
            player_score += 1;
            battle_result_annouce("VICTORY");
            break;
        case ("10"):
            player_score += 1;
            battle_result_annouce("VICTORY");
            break;
        case ("11"):
            battle_result_annouce("TIE");
            break;
        case ("12"):
            bot_score += 1;
            battle_result_annouce("DEFEAT");
            break;
        case ("20"):
            bot_score += 1;
            battle_result_annouce("DEFEAT");
            break;
        case ("21"):
            player_score += 1;
            battle_result_annouce("VICTORY");
            break;
        case ("22"):
            battle_result_annouce("TIE");
            break;
    }

    show_score();
    setTimeout(() => {
        document.getElementById('result_txt').style = "color: black;";
        document.getElementById('result_txt').innerHTML = "Click a choice to figth";
    }, 1000)

    if (player_score >= 3 || bot_score >= 3) {
        setTimeout(game_result, 100);
    }
}

function game_result() {
    if (player_score >= 3) {
        show_score();
        if (confirm("You Win!\nDo you wanna rematch?")) {
            document.getElementById("bot_picked_img").src = "img/question2.png";
            document.getElementById("player_picked_img").src = "img/question2.png";
            document.getElementById('result_txt').innerHTML = "Click a choice to begin";
        } else {
            window.location.assign('index.html');
            //window.location.replace('index.html');
        }
    }
    else if (bot_score >= 3) {
        if (confirm("You Lose!\nDo you wanna rematch?")) {
            document.getElementById("bot_picked_img").src = "img/question2.png";
            document.getElementById("player_picked_img").src = "img/question2.png";
            document.getElementById('result_txt').innerHTML = "Click a choice to begin";
        } else {
            window.location.assign('index.html');
            // window.location.replace('index.html');
        }
    }
    player_score = 0; 
    bot_score = 0;
    show_score();
}

function battle_result_annouce(result) {
    if (result == "TIE") {
        document.getElementById('result_txt').style = "color: blue;";
        document.getElementById('result_txt').innerHTML = result;
    }
    else if (result == "VICTORY") {
        document.getElementById('result_txt').style = "color: green;";
        document.getElementById('result_txt').innerHTML = result;
    }
    else if (result == "DEFEAT") {
        document.getElementById('result_txt').style = "color: crimson;";
        document.getElementById('result_txt').innerHTML = result;
    }
}

function show_score() {
    document.getElementById('bot_score').innerHTML = bot_score;
    document.getElementById('player_score').innerHTML = player_score;
}

document.getElementById('rock').addEventListener("click", () => {
    document.getElementById("player_picked_img").src = "img/rock.png";
    battle(0);
});
document.getElementById("paper").addEventListener("click", () => {
    document.getElementById("player_picked_img").src = "img/paper.png";
    battle(1);
});
document.getElementById("scissors").addEventListener("click", () => {
    document.getElementById("player_picked_img").src = "img/scissors.png";
    battle(2);
});
