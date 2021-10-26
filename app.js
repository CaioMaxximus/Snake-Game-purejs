import { render } from './renderScreen.js';
import { controller } from './controler.js';
import { test } from './testControler.js ';

import { pixel } from './PixelObserver.js';

const game_velocity = 300;
const game_size = 10;
let time = 0;

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

let inGame = true;


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
    render.gameRender(game_table_data);
    gameCycle();
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// function verifyStatus(player_position) {
//     const y = player_position[0][0];
//     const x = player_position[0][1];

//     console.log( "verify_status",y, x);

//     if (x < 0 || x >= game_size || y < 0 || y >= game_size) {
//         console.log("perdeu", y, x);
//         return false;

//     }
//     return true;
// }


async function gameCycle() {
    while (true) {
        console.log("game_rule");
        console.log(time);

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

function gameRule(oldBody, newBody) {
    const result = verifyPositions(newBody);

    switch (result) {
        case ("out_of_bounds"):
            inGame = false;
            break;
        case ("colision"):
            render.notify(oldBody, "white", game_table_data);
            render.notify(newBody, "red", game_table_data);
            inGame = false;
            break;
        case ("ok"):
            time += 1;
            render.notify(oldBody, "white", game_table_data);
            render.notify(newBody, "red", game_table_data);
            break;
        }
}

function verifyPositions(positions) {
    let x = positions[0][1];
    let y = positions[0][0];
    if (x < 0 || x >= game_table_data.length || y < 0 || y >= game_table_data.length) {
        return "out_of_bounds";
    }
    console.log(positions , "positions");
    positions.forEach(e => {
        let x1 = e[1];
        let y1 = e[0];
        if (x1 === x && y1 === y) {
            return "colision";
        }
    });
    return "ok";
}

function playing() {
    console.log("playing");
    controller.controlDirections(actual_direction, player_data.bodyDirections);
    const bodyCopy = [];
    Object.assign(bodyCopy, player_data.body);
    console.log(bodyCopy, "bodyCopy");
    controller.moveSnake(player_data.body, player_data.bodyDirections, game_table_data);
    gameRule(bodyCopy, player_data.body);
    //setGameTable();
    //generator.redDotsGenerator(game_table_data, game_size , player_data.body , player_data.bodyDirections);
    // render.gameRender(game_table_data);
    console.log(player_data.bodyDirections);
}
