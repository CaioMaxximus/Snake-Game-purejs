function pixel(id ,color) {
    const myId = id;
    let myColor = color;
    return {
        notify: (color) => {
            let e = document.getElementById(`${myId}`);
            e.style.backgroundColor =  color;
            myColor = color;
            console.log(myId , "mudando..", color);
        },
        getColor : ()=>{
            return myColor;
        },
        getId : ()=>{
            return myId;
        }
    }
};

export { pixel };
