
const pixel = function pixel(id, color) {
    const myId = id;
    
    // if(!isColor(color)){
    //     throw `Error : Invalid color atribute - ${color}`
    // }
    let myColor = color;

    function isColor(color){
        let $ele = document.createElement("div");
        $ele.style.color =color;
        if($ele.style.color === ''){
            return false;
        }
        return true;
    };

    return {
        notify: (color) => {
            let e = document.getElementById(`${myId}`);
            if(e === null){
                throw `Error : Element id didn't find in DOM - ${myId}`
            }
            // if(!isColor(color)){
            //     throw `Error : Invalid color atribute - ${color}`
            // }
            e.style.backgroundImage = `url(${color})`;
            myColor = color;
            console.log(myId, "mudando..", color);
        },
        getColor: () => {
            return myColor;
        },
        getId: () => {
            return myId;
        }
    }
};

export { pixel };
