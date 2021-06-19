import  {render} from './renderScreen.js';
import {controller} from './controler.js';

let game_table_data = [];
const keys_enum = {
    'w' : 'up', 
    'a' : 'lf',
    'd' : 'rt',
    's' : 'dw'
};
let actual_direction = "lf";
let player_data = {
    body : [[5,5]],  
    bodyDirections : ["lf"]
};

let inGame = true;
const game_size = 10;


window.onload = function (){
    console.log("oi");
    load_game_area();
    console.log(game_table_data);
    let $play_link = document.getElementById("play-game");
    console.log($play_link.type);
    $play_link.addEventListener("click" , start_game);
    
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

    for (let index = 0; index < game_size; index++) {
        for (let j = 0; j < game_size; j++) {
            game_table_data[index][j] = "white";
        }
    }
    const player_body =  player_data.body;
    for (let index = 0; index < player_body.length; index++) {
        var x = player_body[index][0];
        var y = player_body[index][1];
        game_table_data[x][y] = "red";
        
    }

}

async function gameRule(){
    while(true){
        console.log("game_rule");
        if(inGame){
            await sleep(2000);
            playing();
        }
    }


async function playing(){
    controller.controlDirections(actual_direction, player_data.bodyDirections);
    controller.moveSnake(player_data.body , player_data.bodyDirections);
    setGameTable();
    console.log(game_table_data);
    render.gameRender(game_table_data);
    console.log(player_data.bodyDirections);
}
