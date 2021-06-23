const controller = {

    bind_keyboards: function (callBackFunc) {


        let str;
        document.onkeypress = (event) => {
            str = keyPressed(event);
            callBackFunc(str);
        };

    },

    controlDirections: function (direction, actualDirections) {

        actualDirections[0] = direction;
        console.log(actualDirections , direction);
        for (let index = actualDirections.length - 1; index > 0; index--) {
            //A penútima posição será a da anterior e assim seguinte
            let frontPos = actualDirections[index - 1];
            actualDirections[index] = actualDirections[frontPos];

        }
        console.log(actualDirections , direction);


    },

    moveSnake: function (actualPositions, actualDirections) {
        console.log(actualPositions);
        for (let index = 0; index < actualPositions.length; index++) {
            const dir = actualDirections[index];
            console.log(dir);
            switch (dir) {
                case ("up"):
                    actualPositions[index] = moveUp(actualPositions[index]);
                    break;
                case ("dw"):
                    actualPositions[index] = moveDown(actualPositions[index]);
                    break;
                case ("lf"):
                    console.log({"r : " : moveLeft(actualPositions[index])})
                    actualPositions[index] = moveLeft( actualPositions[index]);
                    break;
                case ("rt"):
                    actualPositions[index] = moveRight(actualPositions[index]);
                    break;
                
            }

        }            console.log("Posicoes depois de moverse ",actualPositions);


    }

    
}

function moveUp(position) {
    let x = position[1];
    let y = position[0];
    return [y - 1 ,x];

}
function moveDown(position) {
    let x = position[1];
    let y = position[0];
    return [y + 1,x];
}

function moveLeft(position) {
    console.log({"pos": position});
    let x = position[1];
    let y = position[0];
    console.log({"pos": [y,x - 1]});
    return [y,x - 1];
}
function moveRight(position) {
    let x = position[1];
    let y = position[0];
    return [y, x + 1];
}



function keyPressed(evt) {
    evt = evt || window.event;
    let key = evt.keyCode || evt.wich;
    return String.fromCharCode(key);
}

export { controller };