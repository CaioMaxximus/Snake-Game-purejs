import { pixel } from "../src/PixelObserver.js"
import { render } from "../src/renderScreen.js"
import {generator} from "../src/elementsGenerator.js"


function generateTable(base, altura, cor) {
    let table = []
    for (let i = 0; i < altura; i++) {
        let linha = [];
        for (let j = 0; j < base; j++) {
            linha.push(new pixel(String(j) + String(i), cor));
        }
        table.push(linha);
    }
    return table;
}

describe("Testando pixelObserver", function () {

    // console.log(p);
    // console.log("it");  
    let pix = new pixel('00', "green");

    it("Deve lançar uma excecao caso um elemento com cor invalido seja criado", () => {
        expect(() => new pixel("id", "")).to.throw();
        expect(() => new pixel("id", "---")).to.throw();
        expect(() => new pixel("id", "#00000000000")).to.throw();
        expect(() => new pixel("id", "rgb(0,x)")).to.throw();
        expect(() => new pixel("id", "rgb(0,1)")).to.throw();


    });
    it("Deve criar um objeto valido que retorna os atributos nos getters", () => {
        expect(pix.getId()).to.be.equal('00');
        expect(pix.getColor()).to.be.equal("green");
    });

    it("notify() deve mudar a cor de um elemento do elemento no DOM ", () => {
        let $newDiv = document.createElement("div");
        $newDiv.id = "00";
        document.getElementById("templates").appendChild($newDiv);
        pix.notify("rgb(255, 192, 203)");
        let $color = getComputedStyle(document.getElementById("00")).backgroundColor;

        expect($color).to.be.equal("rgb(255, 192, 203)");

        pix.notify("rgb(100,100,100)");
        $color = getComputedStyle(document.getElementById("00")).backgroundColor;

        expect($color).to.be.equal("rgb(100, 100, 100)");

        $newDiv.remove();

    });
    it("notify() deve lancar uma excecao caso o elemento possua um id invalido", () => {
        let pix = new pixel("ab", "blue");
        expect(() => { pix.notify("rgb(0,0,0)") }).to.throw();

        let $ele = document.createElement("div");
        $ele.id = "abc";
        document.getElementById("templates").appendChild($ele);
        pix = new pixel("abc", "");
        expect(() => { pix.notify("red") }).to.not.throw();

        $ele.remove();
    });
    it("notify() deve lançar uma execeção se um valor inválido de cor for passado", () => {

        let pix = new pixel("00", "");
        let $ele = document.createElement("div");
        $ele.id = "00";
        document.getElementById("templates").appendChild($ele);

        expect(()=> pix.notify("")).to.throw();
        expect(()=> pix.notify()).to.throw();
        expect(()=> pix.notify("...")).to.throw();
        expect(()=> pix.notify("rgb(0,0)")).to.throw();
    });




});


describe("Testando renderScreen", function () {
    
    afterEach(()=>{
       
        document.getElementById("templates").innerHTML = ""
        console.log("afterEach");
        
    })
   
    console.log(generateTable(2, 2, "blue"));
    describe("gameRender() deve gerar um numero de elementos iguas a base * altura da tabela passada como argumento", () => {
        it("base e altura diferentes devem ser valores validos", () => {
            let base = 4;
            let altura = 1;
            let table = generateTable(base, altura, "rgb(121,121,121)");
            render.gameRender(table);
            console.log()
            let $base = document.getElementsByClassName("pixel-game").length;
            let $altura = document.getElementsByClassName("line-game").length;
            expect($base * $altura).to.be.equal(base * altura);
        })
        it("base e/ou altura negativos não devem gerar nada", () => {
            let base = -4;
            let altura = 1;
            let table = generateTable(base, altura, "rgb(121,121,121)");
            render.gameRender(table);
            console.log()
            let $base = document.getElementsByClassName("pixel-game").length;
            let $altura = document.getElementsByClassName("line-game").length;
            expect($base * $altura).to.be.equal(0);
        })
    });
    it("gameRender() deve gerar elementos no DOM com as proriedade cor dos objetos contidos na tabela passada como argumento", () => {
        let base = 2;
        let altura = 2;
        let color = "red";
        let table = generateTable(base, altura, color);
        render.gameRender(table);
        console.log()
        let $ele1 = document.getElementById("00");
        let $ele2 = document.getElementById("11");
        expect($ele1.style.backgroundColor).to.be.equal(color);
        expect($ele2.style.backgroundColor).to.be.equal(color);
    })
});

describe("Testando controller ", function () {
    describe("Testando bind_keyboards", () => {
        it("Deve chamar a função   de calback ao uma tecla ser pressionada ")
    });
    describe("Tentando controlDirections", () => {
        it("Deve alterar as direções de forma que o valor de uma posição será igual a anterior e assim por diante")
    })

    describe("Testando moveSnake", () => {

    });
})

describe("Testando elementsGenerator", function () {

    function validatePositions(y , x ,pos){

        for(let i = 0; i < pos.length; i++){
            let e = pos[i];
            let localY = e[0];
            let localX = e[1];
            if(!(localX >= 0  && localX < x && localY >= 0 && localY < y)){
                return false;
            }
        }
        return true;

    }

    describe("Testando redDotsGenerator", function () {
        it("Deve retornar uma posicao valida da matriz", ()=>{
            let table = generateTable(10, 10, "white");
            let playerPos = [[0,0], [1,0],[2,0]];
            let posList = []
            for (let i  =0 ; i < 300; i++){
                let pos =generator.redDotsGenerator(playerPos,table);
                posList.push(pos);
            }
            console.log("posss",pos.indexOf(10));       
            expect(validatePositions( 10 ,10,posList)).to.be.equal(true);
        });
        it("Deve nunca retornar uma posicao ocupada pelo player");
    })
}
);
console.log("spec");
