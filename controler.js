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
        for (let index = actualDirections.length - 1; index > 0; index--) {
            //A penútima posição será a da anterior e assim seguinte
            let frontPos = actualDirections[index - 1];
            actualDirections[index] = actualDirections[frontPos];

        }

    },

    moveSnake: function (actualPositions, actualDirections) {
        for (let index = 0; index < actualPositions.length; index++) {
            const dir = actualDirections[index];
            console.log(dir);
            switch (dir) {
                case ("up"):
                    actualPositions[index] = this.moveUp(actualPositions[index]);
                case ("dw"):
                    actualPositions[index] = this.moveDown(actualPositions[index]);
                case ("lf"):
                    actualPositions[index] = this.moveLeft( actualPositions[index]);
                case ("rt"):
                    actualPositions[index] = this.moveRight(actualPositions[index]);

            }

        }

    },

    moveUp: function (position) {
        let x = position[1];
        let y = position[0];
        return [x, y - 1];

    },
    moveDown: function (position) {
        let x = position[1];
        let y = position[0];
        return [x, y + 1];
    },
    moveLeft: function (position) {
        let x = position[1];
        let y = position[0];
        return [x - 1, y];
    },
    moveRight: function (position) {
        let x = position[1];
        let y = position[0];
        return [x + 1, y];
    }

}


function keyPressed(evt) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.wich;
    return String.fromCharCode(key);
}

export { controller };