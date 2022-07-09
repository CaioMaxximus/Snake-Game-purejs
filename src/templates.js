


async function fetchTemplate(url){
    let req = new XMLHttpRequest();
    req.open("GET" , url);
    let res = await new Promise((resolve,reject) =>{
        req.onload = resolve;
        req.send();
    })
    return req.responseText;
}


export const tmplts =
 
    (async function (){
        let baseUrl = "http://localhost:5501/src/";
        let startScreen = await fetchTemplate(baseUrl + "startScreen.html");
        let loseScreen = await fetchTemplate(baseUrl + "loseScreen.html");
        let winScreen = await fetchTemplate(baseUrl + "winScreen.html");
        let gameScreen = await fetchTemplate(baseUrl + "gameScreen.html");
        return {
            startScreen ,
            loseScreen ,
            winScreen ,
            gameScreen
        }
    })