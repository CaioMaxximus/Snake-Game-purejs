const render = {gameRender : function(game_table_data){
        let gradeGame = ""
        const size = game_table_data.length;
        for(var i = 0 ; i < size; i++){
            var line = ""
            for (var j = 0 ; j < size ; j ++){
                line +=  `<div class = 'pixel-game' id = ${game_table_data[i][j].getId()} style ='background-color : ${game_table_data[i][j].getColor()}'></div> `;
            }
            gradeGame+= `<div class = 'line-game'>${line}</div>`;
        }
    
        // let template_game = hmtl_templates.getElementById("game_area");
        // template_game.getElementById("in-game").innerHtml = gradeGame;
        // documents.getElementById("templates").innerHtml = template_game;
        document.getElementById("templates").innerHTML = gradeGame;
    },
     notify: function (list , color, game_table_data) {
        console.log(list);
        list.forEach(element => {
            let x = element[1];
            let y = element[0];
            game_table_data[y][x].notify(color) ;
        });
    }

    // onchangeRender:  function(){

    // }
}
export  {render};