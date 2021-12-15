const generator ={

    redDotsGenerator : function (playerPositions , gameTable){

        let positionsStringfied = [];
        playerPositions.forEach(e => { positionsStringfied.push(String(e))})
        console.log(positionsStringfied)
        let freePos = false;
        console.log(gameTable);
        let tableSizeX = gameTable[0][0].length;
        let tableSizeY = gameTable[0].length;
        console.log(positionsStringfied)
        let y = 0;
        let x = 0;
        while(!freePos) {
            y =Math.round(Math.random() * (tableSizeY ));
            x = Math.round(Math.random() * (tableSizeX ));
            if(positionsStringfied.indexOf(String([y,x])) === -1 ){
                freePos = true
                return [y ,x]
            }
        }
        
    }
}


export {generator};
