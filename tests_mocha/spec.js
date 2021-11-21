import { pixel } from "../src/PixelObserver.js"

describe("Testando pixelObserver", function () {

    // console.log(p);
    // console.log("it");  
    let pix = new pixel('00', "green");


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

    });
    it("notify() deve lancar uma excecao caso o elemento possua um id invalido", () => {
        pix = new pixel("ab", "blue");
        expect(()=>{pix.notify("rgb(0,0,0)")}).to.throw();
    });
    it("notify() deve lançar uma execeção se um valor inválido de cor for passado", () => {

    })




});


describe("Testando renderScreen", function () {
    it("gameRender() deve gerar um numero de elementos iguas a base * altura da tabela passada como argumento", () => {

    });
    it("gameRender() deve gerar elementos no DOM com as proriedade cor dos objetos contidos na tabela passada como argumento", () => {

    })
});

describe("Testando controller ", function () {
    describe("Testando bind_keyboards", () => {
        it("Deve chamar a função   de calback ao uma tecla ser pressionada ")
    });
    describe("Tentando controlDirections",()=>{
        it("Deve alterar as direções de forma que o valor de uma posição será igual a anterior e assim por diante")
    })

    describe("Testando moveSnake", ()=>{

    });
})

console.log("spec");
