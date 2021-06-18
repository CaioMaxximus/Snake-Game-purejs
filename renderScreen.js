const render = {initialRender : function(game_table_data){
        let gradeGame = ""
        for(var i = 0 ; i <= 10; i++){
            var line = ""
            for (var j = 0 ; j <= 10 ; j ++){
                line +=  `<div id = 'pixel-game' style ='backgorund-color : ${game_table_data[i][j]}'>A</div> `;
            }
            gradeGame+= `<div id = 'line-game'>${line}</div>`;
        }
    
        // let template_game = hmtl_templates.getElementById("game_area");
        // template_game.getElementById("in-game").innerHtml = gradeGame;
        // documents.getElementById("templates").innerHtml = template_game;
        document.getElementById("templates").innerHTML = gradeGame;
        console.log(gradeGame);
    }

    // onchangeRender:  function(){

    // }
}
export {render};