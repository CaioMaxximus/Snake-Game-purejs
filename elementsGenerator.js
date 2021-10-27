const generator ={

    redDotsGenerator : function (gameTableData){

        let freePos = false;
        let y = 0;
        let x = 0
        let tableSize = gameTableData.length;
        console.log(gameTableData)
        console.log(tableSize)
        while(!freePos) {
            let y =Math.floor(Math.random() * (tableSize ));
            let x = Math.floor(Math.random() * (tableSize ));
            console.log(y, x);
            if(gameTableData[y][x].getColor() == "white"){
                freePos = true
                return [y ,x]
            }
        }
        
    }
}


export {generator};
