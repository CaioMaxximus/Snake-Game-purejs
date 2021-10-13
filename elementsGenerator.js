const generator ={

    redDotsGenerator : function (gameTableData, tableSize,actualPositions, actualDirections){

        let freePos = false;
        while(!freePos) {
            let y =Math.floor(Math.random() * (tableSize - 1 + 1));
            let x = Math.floor(Math.random() * (tableSize - 1 + 1));
            if(gameTableData[y][x] == "white"){
                freePos = true
            }
            gameTableData[y][x] = "green"
        }
    }
}


export {generator};
