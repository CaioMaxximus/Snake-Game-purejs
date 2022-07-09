
const pixel = function pixel(id, path) {
    // function isImageValid(path){
    //     console.log(path)
    //     let $ele = document.createElement("div");
    //     $ele.style.backgroundImage =`url(${path})`;
    //     if($ele.style.backgroundImage === ''){
    //         return false;
    //     }
    //     return true;
    // };
    console.log(path)

    // if(!isImageValid(path)){
    //      throw `Error : Invalid path atribute - ${path}`
    // }
    const myId = id;
    let myPath = path;



    return {
        notify: (path) => {
            let e = document.getElementById(`${myId}`);
            if(e === null){
                throw `Error : Element id didn't find in DOM - ${myId}`
            }
            // if(!isImageValid(path)){
            //     throw `Error : Invalid path image atribute - ${path}`
            // }
            e.style.backgroundImage = `url(${path})`;
            myPath = path;
            console.log(myId, "mudando..", path);
        },
        getPath: () => {
            return myPath;
        },
        getId: () => {
            return myId;
        }
    }
};

window.pixel = pixel

export { pixel };
