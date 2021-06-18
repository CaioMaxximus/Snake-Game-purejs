import  {render} from './renderScreen.js';
let game_table_data = []


window.onload = function (){
    console.log("oi");
    load_game_area();
    console.log(game_table_data);
    let $play_link = document.getElementById("play-game");
    console.log($play_link.type);
    $play_link.addEventListener("click" , start_game);
    
};

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
    render.initialRender(game_table_data);
}
console.log("oi");
