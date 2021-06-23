import  {render} from './renderScreen.js';
import {controller} from './controler.js';
import {test} from './testControler.js ';

let game_table_data = [];
const keys_enum = {
    'w' : 'up', 
    'a' : 'lf',
    'd' : 'rt',
    's' : 'dw'
};
let actual_direction = "lf";
let player_data = {
    body : [[5,5], [5,4]],  
    bodyDirections : ["lf","lf"]
};

let inGame = true;
const game_size = 10;


window.onload = function (){
    load_game_area();
    console.log("Carregando a tabela inicial do jogo", game_table_data);
    let $play_link = document.getElementById("play-game");
    $play_link.addEventListener("click" , start_game);
    test();
};

function change_direction(key){
    let r = keys_enum[key];
    if(r !== undefined){
        actual_direction = r;
    }
    console.log("chaged" , key);
    
}

function load_game_area(){
    for(var i = 0 ; i <= 10; i++){
        var line = [];
        for (var j = 0 ; j <= 10 ; j ++){
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
            await sleep(500);
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
