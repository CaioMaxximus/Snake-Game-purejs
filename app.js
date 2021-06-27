import  {render} from './renderScreen.js';
import {controller} from './controler.js';
import {test} from './testControler.js ';

const game_velocity = 500;
const game_size = 10;

let game_table_data = [];
const keys_enum = {
    'w' : 'up', 
    'a' : 'lf',
    'd' : 'rt',
    's' : 'dw'
};
let actual_direction = "up";
let player_data = {
    body : [[game_size/2,game_size/2], [game_size/2,game_size/2 + 1]],  
    bodyDirections : ["lf","lf"]
};

let inGame = true;


window.onload = function (){
    load_game_area();
    console.log("Carregando a tabela inicial do jogo", game_table_data);
    let $play_link = document.getElementById("play-game");
    $play_link.addEventListener("click" , start_game);
};

function change_direction(key){
    let r = keys_enum[key];
    if(r !== undefined){
        if(r === "lf" && actual_direction !== "rt" || 
        r === "rt" && actual_direction !== "lf" ||
        r === "up" && actual_direction !== "dw" ||
        r === "dw" && actual_direction !== "up"){
            actual_direction = r;

        }
    }
    console.log("changed" , key);
    
}

function load_game_area(){
    for(var i = 0 ; i < game_size; i++){
        var line = [];
        for (var j = 0 ; j < game_size ; j ++){
            line.push("white");
        }
        game_table_data.push(line);
    }
}

function start_game(){
    console.log("start")
    controller.bind_keyboards(change_direction);
    gameRule();
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
 }

function setGameTable(){

    for (var index = 0; index < game_size; index++) {
        for (let j = 0; j < game_size; j++) {
            game_table_data[index][j] = "white";
        }
    }
    const player_body =  player_data.body;
    for (var index = 0; index < player_body.length; index++) {
        var x = player_body[index][0];
        var y = player_body[index][1];
        game_table_data[x][y] = "red";
        
    }

}

async function gameRule(){
    while(true){
        console.log("game_rule");
        
        if(inGame){
            await sleep(game_velocity);
            playing();
        }
    }
}

async function playing(){
    console.log("playing");
    controller.controlDirections(actual_direction, player_data.bodyDirections);
    controller.moveSnake(player_data.body , player_data.bodyDirections);
    setGameTable();
    render.gameRender(game_table_data);
    console.log(player_data.bodyDirections);
}
