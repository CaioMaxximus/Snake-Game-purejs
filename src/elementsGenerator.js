const generator ={

    redDotsGenerator : function (playerPositions , gameTable){

        let positionsStringfied = [];
        playerPositions.forEach(e => { positionsStringfied.push(String(e))})
        let freePos = false;
        let tableSizeX = gameTable[0].length;
        let tableSizeY = gameTable.length;
        let y = 0;
        let x = 0;
        while(!freePos) {
            y =Math.round(Math.random() * (tableSizeY - 2 ));
            x = Math.round(Math.random() * (tableSizeX - 2));
            if(positionsStringfied.indexOf(String([y,x])) === -1 ){
                freePos = true
                return [y ,x]
            }
            if(y == 10 || x == 10){
                window.alert("10");
            }
        }
        
    }
}


export {generator};
