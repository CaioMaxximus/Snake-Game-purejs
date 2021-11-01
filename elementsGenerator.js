const generator ={

    redDotsGenerator : function (playerPositions , size){

        let positionsStringfied = [];
        playerPositions.forEach(e => { positionsStringfied.push(String(e))})
        console.log(positionsStringfied)
        let freePos = false;
        let tableSize = size;
        console.log(positionsStringfied)
        console.log(tableSize)
        let y = 0;
        let x = 0;
        while(!freePos) {
            y =Math.round(Math.random() * (tableSize ));
            x = Math.round(Math.random() * (tableSize ));
            if(positionsStringfied.indexOf(String([y,x])) === -1 ){
                freePos = true
                return [y ,x]
            }
        }
        
    }
}


export {generator};
