const render = {gameRender : function(game_table_data){
        let gradeGame = ""
        const size = game_table_data.length;
        for(var i = 0 ; i < size; i++){
            var line = ""
            for (var j = 0 ; j < size ; j ++){
                line +=  `<div id = 'pixel-game' style ='background-color : ${game_table_data[i][j]}'></div> `;
            }
            gradeGame+= `<div id = 'line-game'>${line}</div>`;
        }
    
        // let template_game = hmtl_templates.getElementById("game_area");
        // template_game.getElementById("in-game").innerHtml = gradeGame;
        // documents.getElementById("templates").innerHtml = template_game;
        document.getElementById("templates").innerHTML = gradeGame;
    }

    // onchangeRender:  function(){

    // }
}
export {render};