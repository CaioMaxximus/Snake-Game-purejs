

export const templates = {
    startScreen:
        `
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/8bit-wonder" type="text/css"/>
        <style>
            :root {
                --BlueViolet: #8A2BE2;
                --DarkOrchid: #9932CC;
                --Purple: #800080;
                --Yellow: #ffff19;
                --animation-time: 1s;
                --background : #5647b4
            }
        
        
            /* @font-face {
                font-family: bitWonder;
                src: url("../assets/8-BIT/WONDER.TTF");
            } */
        
        
        
        
            @keyframes move {
                from {
                    transform: translateX(1000px);
                }
        
                to {
                    transform: translateX(-1000px);
                }
            }
        
        
            @keyframes boxShadownMove {
        
                0% {
                    box-shadow: 0.1em -0.1em 5px purple;
                }
        
                15% {
                    box-shadow: 0.30em -0.15em 25px purple;
                }
        
                50% {
                    box-shadow: 0.35em -0.6em 45px purple;
        
                }
        
                65% {
                    box-shadow: 0px 0px 0px 0px purple;
        
                }
        
                100% {
                    background-color: purple;
                    border-radius: 8px;
        
                }
            }
        
            @keyframes showBtn {
                from {
                    opacity: 0;
                    background-color: rgb(49, 204, 2);
                    box-shadow: 0px 0px 30px 30px purple;
        
                }
        
                to {
                    opacity: 1;
                    align-items: center;
                }
            }
        
            @keyframes changeColorBanner {
        
                0% {
                    color: var(--BlueViolet);
                }
        
                20% {
                    color: var(--DarkOrchid);
                }
        
                40%,
                100% {
                    color: var(--Yellow);
                }
        
            }
        
            @keyframes changeColorDois {
        
                0% {
                    background-color: var(--BlueViolet);
                }
        
                50% {
                    background-color: var(--Purple);
        
                }
        
                100% {
                    background-color: var(--BlueViolet);
        
                }
        
        
            }
        
            @keyframes fadeAppearMenu {
                from {
                    opacity: 0;
                    box-shadow: 10em 10em 10em 10em black;
        
                }
        
                to {
                    opacity: 1;
                    box-shadow: none;
        
                }
            }
        
        
            @keyframes esmaecer {
                from {
                    background-color: rgba(238, 2, 2, 0.904);
        
                }
        
                100% {
                    background-color: none;
                }
            }
        
            #welcome-area {
        
                margin: 0 auto;
                display: flex;
                align-items: center;
                width: 100%;
                height: 100%;
                /* background: rgb(20, 93, 139);
                background: linear-gradient(0deg, rgba(20, 93, 139, 1) 16%, rgba(32, 159, 217, 1) 95%); */
        
                animation: changeColorDois var(--animation-time) 0s 13 forwards,
                    fadeAppearMenu 10s 0s normal; 
        
           
                border-radius: 5px;
            }
        
            /* #welcome-area{
                animation : esmaecer;
                animation-duration: 3s;
                animation-delay:6s;
            } */
        
            #central-area {
                display: grid;
                width: 100%;
                grid-template-rows: 3fr 1fr;
                align-items: center;
                justify-content: center;
            }
        
            #actions {
                opacity: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: showBtn 1s;
                animation-delay: 13s;
                animation-fill-mode: forwards;
            }
        
            #actions-play {
                font-size: 30rem;
                margin-top: 3em;
                
        
            }
        
            #actions button {
                border: none;
                color: rgb(157, 233, 15);
                font-size: larger;
                background: none;
                font-family: '8BITWONDERNominal';
                font-size: 3em;
        
            }
        
        
            #banner {
                position: relative;
                display: flex;
                /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
                font-family: bitWonder;
                font-size: 4em;
                animation: changeColorBanner 1.5s 13s 6 backwards,
                    changeColorBanner 1s 9s infinite backwards;
            
            
                border-color: #12253c;
            }
        
        
            #banner h1 {
                margin-bottom: 0px;
                margin-top: 0px ;
                font-family: '8BITWONDERNominal';
                font-size: 0.9em;
                text-align : center;
                font-weight: normal;
                font-style: normal;
        
            }
        
            #snake-image {
                background-color: var(--color1);
                position: absolute;
                animation: move;
                width: 80%;
                animation-duration: 4s;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }
        
        
            #action-play:hover {
                cursor: pointer;
                animation: boxShadownMove 0.4s;
                animation-fill-mode: forwards;
            }
        </style>
        <div id="welcome-area">
            <div id="central-area">
                <div id="banner">
                    <h1> SNAKE GAME</h1>
                    <div id="snake-image">-</div>
                </div>
                <div id="actions">
                    <button id="action-play"> PLAY</button>
                </div>
            </div>
        
        </div>`,

    loseScreen: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>

:root{
    --btn-background: rgb(167, 0, 125);
    --btn-color : rgb(123, 199, 0);
}

@keyframes change-background-color {
    0%{
        background-color: #9603bb;
    }
    40%{
        background-color: #2e003b;
    }
    100%{
        background-color: #9603bb;
    }
}

#lose-screen{
    margin: 10%  auto;
    display: flex;
    width: 70%;
    border-radius: 10px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    animation: change-background-color 1s forwards infinite ;
    color: yellow;
}

.btn-zone{
    display: flex;
    flex-direction: column;
    column-gap: 3em;
    align-items: center;
    justify-content: center;
}

.btn-zone button{
    width: 50%;
    max-width: 10em;
    min-height: 4em;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    color: var(--btn-color);
    background-color: var(--btn-background);
}

.btn-zone button:hover{
    border: solid 2px black;
    color: var(--btn-background);
    background-color: var(--btn-color);
}

</style>
<body>
    <div id = lose-screen>
        <h1>YOU LOSE!</h1>
        <h3 id = points> <span id = final-points></span> POINTS</h3>
        <div class = "btn-zone">
            <button id="play-again-btn" onclick="">
                PLAY AGAIN
            </button>
            <button id = "go-menu-btn">
                MENU
            </button>
        </div>
    </div>
</body>
</html>`,
    winScreen: `

<style>

@keyframes change-background-color {
    0%{
        background-color: blueviolet;
    }
    40%{
        background-color: red;
    }
    100%{
        background-color: blueviolet;
    }
}

#win-screen{
    margin: 10%  auto;
    display: flex;
    width: 70%;
    border-radius: 10px;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    animation: change-background-color 1s forwards infinite ;
    color: yellow;
}



</style>
<body>
    <div id = win-screen>
        <h1>CONGRATULATIONS!</h1> 
        <h2>You Win!</h2> 
    </div>
</body>
</html>
`,
    gameScreen : `<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/8bit-wonder" type="text/css" />
    <style>
        @font-face {
            font-family: "bitWonder";
            src: url("../assets/8-BITWONDER.TTF");
        }
    
        #game-area-total {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: row;
        }
    
        #game-area-gameplay {
            display: flex;
            width: 60%;
            height: 100%;
    
        }
    
        #gameplay {
            display: flex;
            height: 100%;
            width: 100%;
            flex-direction: column;
        }
    
        #game-area-points {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: solid 0.2em black;
            background-color: rgb(248, 166, 230);
            color: rgb(4, 182, 4);
            font-family: bitWonder;
            font-size: 1em;
        }
    
    
        #game-area-points span {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    </style>
    
    <div id="game-area-total">
        <div id="game-area-gameplay">
            <div id="gameplay"> </div>
            <div id="counter"></div>
        </div>
        <div id="game-area-points">
            <span>
                <h1 id="points">0</h1> points
            </span>
        </div>
    </div>
    </div>`    
}