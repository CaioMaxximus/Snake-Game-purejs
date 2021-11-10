import { render } from './renderScreen.js';
import {controller} from './controler.js';
import { generator } from './elementsGenerator.js';
import { pixel } from './PixelObserver.js';

const game_velocity = 300;
const game_size = 10;
let points = 0;

let game_table_data = [];
const keys_enum = {
    'w': 'up',
    'a': 'lf',
    'd': 'rt',
    's': 'dw'
};
let actual_direction = "up";
let player_data = {
    body: [[game_size / 2, game_size / 2], [game_size / 2, game_size / 2 + 1]],
    bodyDirections: ["lf", "lf"]
};
let redDots = [0, 0];

let inGame = true;
let pointed = false;


window.onload = function () {
    load_game_area();
    console.log("Carregando a tabela inicial do jogo", game_table_data);
    let $play_link = document.getElementById("play-game");
    $play_link.addEventListener("click", start_game);
};

function change_direction(key) {
    let r = keys_enum[key];
    if (r !== undefined) {
        if (r === "lf" && actual_direction !== "rt" ||
            r === "rt" && actual_direction !== "lf" ||
            r === "up" && actual_direction !== "dw" ||
            r === "dw" && actual_direction !== "up") {
            actual_direction = r;

        }
    }
    console.log("changed", key);

}

function load_game_area() {
    for (var i = 0; i < game_size; i++) {
        var line = [];
        for (var j = 0; j < game_size; j++) {
            let pixelP = new pixel(String(i) + String(j), "white");
            line.push(pixelP);
        }
        game_table_data.push(line);
    }
}

function start_game() {
    console.log("start")
    controller.bind_keyboards(change_direction);
    redDots = generator.redDotsGenerator(player_data.body, game_size);
    render.gameRender(game_table_data);
    gameCycle();
}


function render_frame(oldBody, newBody, game_table_data) {
    render.notify(oldBody, "white", game_table_data);
    render.notify(newBody, "red", game_table_data);
    render.notify([redDots], "pink", game_table_data);

}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function gameCycle() {
    while (true) {
        console.log("game_rule");
        console.log(points
        );

        if (inGame) {
            await sleep(game_velocity);
            playing();
        }
        else {
            window.alert("VOCE PERDEU....");
            break;

        }
    }
}

function gameRule(newBody, redDots) {
    const result = verifyColision(newBody);

    switch (result) {
        case ("out_of_bounds"):
            inGame = false;
            break;
        case ("colision"):

            inGame = false;
            break;
        case ("ok"):
            if (verifyPointsAquired(newBody, redDots)) {
                pointed = true;
                points += 1;

            }
            break;
    }
}


function verifyPointsAquired(playerBody, redDots) {

    let x = playerBody[0][1];
    let y = playerBody[0][0];


    if (redDots[0] === y && redDots[1] === x) {
        return true;
    }
    return false;
}

function verifyColision(positions) {
    let x = positions[0][1];
    let y = positions[0][0];
    if (x < 0 || x >= game_table_data.length || y < 0 || y >= game_table_data.length) {
        return "out_of_bounds";
    }
    console.log(positions, "positions");
    positions.forEach(e => {
        let x1 = e[1];
        let y1 = e[0];
        if (x1 === x && y1 === y) {
            return "colision";
        }
    });
    return "ok";
}

function addNewBodyPart(player_data_old, player_data) {

    let body = player_data_old.body; // player body before moving
    let directions = player_data_old.bodyDirections; // player directions before moving
    let index = body.length - 1;
    console.log(String((body)));
    console.log(String(player_data.body));
    alert("parou");
    player_data.body.push(body[index]);
    player_data.bodyDirections.push(directions[index]);

}

function playing() {
    console.log("playing");
    controller.controlDirections(actual_direction, player_data.bodyDirections);
    const bodyCopy = JSON.parse(JSON.stringify(player_data.body));
    const playerDataCopy = JSON.parse(JSON.stringify(player_data));
    console.log(String(playerDataCopy.body));
    console.log(String(player_data.body));
    controller.moveSnake(player_data.body, player_data.bodyDirections, game_table_data);
    gameRule(player_data.body, redDots);
    if (pointed) {
        console.log(playerDataCopy === player_data);
        alert("pointed!");
        console.log(String(playerDataCopy.body));
        console.log(String(player_data.body));
        addNewBodyPart(playerDataCopy, player_data);
        redDots = generator.redDotsGenerator(player_data.body, game_size);
        pointed = false;
    } if (inGame) {
        render_frame(bodyCopy, player_data.body, game_table_data, redDots);
    }
    //setGameTable();
    //generator.redDotsGenerator(game_table_data, game_size , player_data.body , player_data.bodyDirections);
    // render.gameRender(game_table_data);
    console.log(player_data.bodyDirections);
}


console.log("app")