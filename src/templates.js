

export const templates = { startScreen :
`<style>
:root {
    --BlueViolet: #8A2BE2;
    --DarkOrchid: #9932CC;
    --Purple: #800080;
    --Yellow: #ffff19;
    --animation-time: 1s;
}



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
        box-shadow: 0px -5px 25px 3px purple;
    }

    15% {
        box-shadow: 5px -12px 25px 5px purple;
    }

    50% {
        box-shadow: 10px -17px 25px 5px purple;

    }

    65%{
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
        background-color: var(--Purple);
    }

    50% {
        background-color: var(--BlueViolet);
    }

    100% {
        background-color: var(--Purple);

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
    animation: changeColorDois var(--animation-time) 0s 13 backwards,
        fadeAppearMenu 10s 0s normal;
    /* animation: changeColorDois;
    animation-duration: var(--animation-time);
    animation-fill-mode: backwards;
    animation-iteration-count: infinite; */
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

}

#actions button {
    border: none;
    color: rgb(157, 233, 15);
    font-size: larger;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 3em;
    background: none;

}


#banner {
    position: relative;
    display: flex;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 4em;
    animation: changeColorBanner 1.5s 13s 6 backwards,
        changeColorBanner 1s 9s infinite backwards;


    border-color: #12253c;
}

#banner h1 {
    margin-bottom: 0px;
    margin-top: 0px;
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
    animation: boxShadownMove 0.3s;
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

loseScreen : `<!DOCTYPE html>
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
winScreen : `

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
`
}