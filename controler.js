const controller= {

    controlDirections : function(direction,actualDirections){

        actualDirections[0] = direction;
        for (let index = actualDirections.length - 1; index> 0; index--) {
            //A penútima posição será a da anterior e assim seguinte
            let frontPos = actualDirections[index - 1];
            actualDirections[index] = actualDirections[frontPos];

        }
        
    },

    moveSnake : function(actualPositions , actualDirections){
        for (let index = 0; index < actualPositions.length; index++) {
            const dir = actualDirections[index];
            switch(dir){
                case("up"):
                    this.moveUp(actualPositions[index]);
                case("dw"):
                    this.moveDown(actualPositions[index]);
                case("lf"):
                    this.moveLeft(actualPositions[index]);
                case("rt"):
                    this.moveRight(actualPositions[index]);

            }
            
        }

    },

    moveUp : function(position){

    },
    moveDown : function(position){

    },
    moveLeft : function(position){

    },
    moveRight : function(position){

    }

}

export {controller};