const render = {gameRender : function(game_table_data, domContainer =  "templates"){
        let gradeGame = ""
        const size = game_table_data.length;
        for(var i = 0 ; i < size; i++){
            var line = ""
            for (var j = 0 ; j < size ; j ++){
                line +=  `<div class = 'pixel-game' id = ${game_table_data[i][j].getId()} 
                style ='background-image : url(../heart_icon.png);
                 background-color : none'></div> `;
            }
            gradeGame+= `<div class = 'line-game'>${line}</div>`;
        }
        document.getElementById(domContainer).innerHTML = gradeGame;
    },
     notify: function (list , color, game_table_data) {
        console.log(list);  
        list.forEach(element => {
            let x = element[1];
            let y = element[0];
            console.log(game_table_data[x][y]);
            game_table_data[y][x].notify(color) ;
        });
    }

    // onchangeRender:  function(){

    // }
}
export  {render};