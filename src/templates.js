

export const templates = { startScreen :
`<style>
    :root {
        --color1: #120907;
        --color2: #12253c;
        --color3: #145d8b;
        --color4: #209fd9;
        --color5: #20dad8;
        --color6: #e6e626;
        --animation-time : 1s;
    }


    
    @keyframes move {
        from {
            transform: translateX(1000px);
        }

        to {
            transform: translateX(-1000px);
        }
    }       

    @keyframes changeColor {
        
        0% ,  100%{
            color: rgba(238, 2, 2, 0.904);
        }40%{
            color:rgba(238, 214, 2, 0.904);
        }
        
    }

    @keyframes changeColorDois {
        
        0%  {
            background-color: rgba(238, 195, 2, 0.904);;
        }50%{
            background-color: rgba(238, 2, 2, 0.904);
        }100%{
            background-color: rgba(238, 195, 2, 0.904);;

        }

    }


    @keyframes esmaecer {
        from{
            background-color:rgba(238, 2, 2, 0.904); ;
        }
        100%{
            background-color:none ;
        }
    }
    #welcome-area {

        margin: 0 auto;
        display: flex;
        align-items: center;
        width: 100%;
        /* background: rgb(20, 93, 139);
        background: linear-gradient(0deg, rgba(20, 93, 139, 1) 16%, rgba(32, 159, 217, 1) 95%); */
        animation: changeColorDois var(--animation-time)  0s infinite backwards, esmaecer 1s 4s forwards ; 
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
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    #actions button{
        border: none;
        color: rgb(157, 233, 15);
        font-size: larger;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background: none;
        
    }


    #banner {
        position: relative;
        display: flex;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        animation: changeColor;
        animation-duration: var(--animation-time);
        animation-fill-mode: backwards;
        animation-iteration-count: infinite;

        border-color: #12253c;
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

    #action-play:hover{
        cursor: pointer;
    }

</style>
<div id="welcome-area">
    <div id="central-area">
        <div id="banner">
            <h1> SNAKE GAME</h1>
            <div id="snake-image">-</div>
        </div>
        <div id="actions">
            <button id="action-play"> play!</button>
        </div>
    </div>

</div>`,

loseScreen : `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
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

</style>
<body>
    <div id = lose-screen>
        <h1>YOU LOSE!</h1>
        <h3 id = points> <span id = final-points></span> POINTS</h3>

    </div>
</body>
</html>
`,
winScreen : `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
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