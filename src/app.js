import { render } from './renderScreen.js';
import { controller } from './controler.js';
import { generator } from './elementsGenerator.js';
import { pixel } from './PixelObserver.js';
import { getTemplates } from './fetch.js';
import { tmplts } from './templates.js'
'use strict';

let game_velocity = 300;
const game_size = 16;
let points = 0;
const points_to_win = 18;
let templates ;
 
const keys_enum = {
    'w': 'up',
    'a': 'lf',
    'd': 'rt',
    's': 'dw'
};
let game_table_data = [];
let actual_direction = "up";
let player_data = {
    body: [[game_size / 2, game_size / 2]],
    bodyDirections: ["lf"]
};
let redDots = [0, 0];
let inGame = true;
let pointed = false;
let startMusic = new Audio("../assets/New_Beginnings.mp3");
let gameMusic = new Audio("../assets/Eric_Skiff_Underclocked_cuted.mp3");
let getItemMusic = new Audio("../assets/8_bit_Coin_Sound_Effect.mp3");
let loseMusic = new Audio("../assets/8_bit_error_Gaming_sound_effect_HD.mp3");
let winMusic = new Audio("../assets/");
let bipMusic = new Audio("../assets/Video Game Beep - Sound Effect (320 kbps).mp3");

window.onload = () => preBoot();


async function  preBoot()
{
    templates= await tmplts()
    boot();
}

function boot() {
    console.log("Carregando a tabela inicial do jogo", game_table_data);
    // getTemplates();
    spawnMenuScreen();
    startMusic.play();
    getTemplates();
}

function resetData() {

    game_velocity = 300;
    points = 0;
    game_table_data = [];
    actual_direction = "up";
    player_data = {
        body: [[game_size / 2, game_size / 2]],
        bodyDirections: ["lf"]
    };
    redDots = [0, 0];
    inGame = true;
    pointed = false;
    startMusic = new Audio("../assets/New_Beginnings.mp3");
    gameMusic = new Audio("../assets/Eric_Skiff_Underclocked_cuted.mp3");
    getItemMusic = new Audio("../assets/8_bit_Coin_Sound_Effect.mp3");
    loseMusic = new Audio("../assets/8_bit_error_Gaming_sound_effect_HD.mp3");
    winMusic = new Audio("../assets/");
    bipMusic = new Audio("../assets/Video Game Beep - Sound Effect (320 kbps).mp3");

}


function changePoints(value) {
    points += value;
    document.getElementById("points").innerHTML = points;
}

function change_direction(key) {

    let r = keys_enum[key.toLowerCase()];

    console.log(r);
    if (r !== undefined) {

        if (r === "lf" && actual_direction !== "rt" ||
            r === "rt" && actual_direction !== "lf" ||
            r === "up" && actual_direction !== "dw" ||
            r === "dw" && actual_direction !== "up") {
            actual_direction = r;
            console.log(actual_direction, "changes actualDirection")

        }
    }
    console.log("changed", key);
}

function spwanLoseScreen() {

    document.getElementById("templates").innerHTML = templates.loseScreen;
    document.getElementById("final-points").innerHTML = points
    document.getElementById("play-again-btn").addEventListener("click" , start_game);
    document.getElementsByClassName("go-menu-btn")[0].addEventListener("click", boot);
    resetData();

}

function spawnMenuScreen() {
    document.getElementById("templates").innerHTML = templates.startScreen;
    let $play_link = document.getElementById("action-play");
    $play_link.addEventListener("click", start_game);

}

function spawnGameScreen() {
    document.getElementById("templates").innerHTML = templates.gameScreen;

}

function spawnWinScreen() {

    document.getElementById("templates").innerHTML = templates.winScreen;
    document.getElementsByClassName("go-menu-btn")[0].addEventListener("click", boot);
    resetData();
}

function load_game_area() {
    for (var i = 0; i < game_size; i++) {
        var line = [];
        for (var j = 0; j < game_size; j++) {
            let pixelP = new pixel(String(i) + "-" + String(j), "");
            line.push(pixelP);
        }
        game_table_data.push(line);
    }
}

async function start_game() {
    console.log("start")
    load_game_area();
    controller.bind_keyboards(change_direction);
    redDots = generator.redDotsGenerator(player_data.body, game_table_data);
    console.log(redDots);
    startMusic.pause();
    spawnGameScreen();
    await spawnTimerScreen();
    render.gameRender(game_table_data, "gameplay");
    gameMusic.play();
    gameCycle();
}

async function spawnTimerScreen(){
    
    let $counter = document.getElementById("counter");
    for (let i = 2; i > 0; i --){
        $counter.innerHTML =  i;
        bipMusic.play();
        // while(!bipMusic.paused){
        // }
        await sleep(1000)
    }

    $counter.style.display = "none"
    
}


function render_frame(oldBody, newBody, game_table_data, redDots) {
    render.notify(oldBody, "none", game_table_data);
    render.notify(newBody, "../snake_body.png", game_table_data);
    render.notify([redDots], "../heartIcon.png", game_table_data);

}

function renderPositions(pos, path){
    render.notify(pos , path, game_table_data);
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function gameCycle() {

    while (true) {
        console.log("game_rule");
        console.log(points
        );
        if (points_to_win === points) {
            gameMusic.pause();
            spawnWinScreen();
            break;
        }
        else if (inGame) {
            await sleep(game_velocity);
            playing();
        }
        else {

            loseMusic.play();
            gameMusic.pause();
            await sleep(1000);
            spwanLoseScreen();
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
                game_velocity -= 15
                getItemMusic.play();
                changePoints(1);


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

    for (let i = 1; i < positions.length; i++) {
        let e = positions[i];
        let x1 = e[1];
        let y1 = e[0];
        if (x1 === x && y1 === y) {
            return "colision";
        }
    }
    return "ok";
}

function addNewBodyPart(player_data_old, player_data) {

    let body = player_data_old.body; // player body before moving
    let directions = player_data_old.bodyDirections; // player directions before moving
    let index = body.length - 1;
    console.log(String((body)));
    console.log(String(player_data.body));
    player_data.body.push(body[index]);
    player_data.bodyDirections.push(directions[index]);

}

function playing() {
    console.log("playing");
    controller.controlDirections(actual_direction, player_data.bodyDirections);
    const playerDataCopy = JSON.parse(JSON.stringify(player_data));
    player_data.body = controller.moveSnake(player_data.body, player_data.bodyDirections);

    gameRule(player_data.body, redDots);
    if (pointed) {
        addNewBodyPart(playerDataCopy, player_data);
        redDots = generator.redDotsGenerator(player_data.body, game_table_data);
        pointed = false;

    }

    
    if (inGame) {
        render_frame(playerDataCopy.body, player_data.body, game_table_data, redDots);
    }
    else{
        if(player_data.body.length > 1){
            renderPositions(playerDataCopy.body, "../skull_icon.png")

        }
    }

    console.log(player_data.bodyDirections);
}


console.log("app")