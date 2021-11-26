import { pixel } from "../src/PixelObserver.js"

describe("Testando pixelObserver", function () {

    // console.log(p);
    // console.log("it");  
    let pix = new pixel('00', "green");

    it("Deve lançar uma excecao caso um elemento com cor invalido seja criado",()=>{
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
        pix = new pixel("abc","");
        expect(()=>{pix.notify("red")}).to.not.throw();

        $ele.remove();
    });
    it("notify() deve lançar uma execeção se um valor inválido de cor for passado",()=>{
        
        let pix = new pixel("00", "");
        let $ele = document.createElement("div");
        $ele.id = "00";
        document.getElementById("templates").appendChild($ele);

        expect(pix.notify("")).to.throw();
        expect(pix.notify()).to.throw();
        expect(pix.notify("...")).to.throw();
        expect(pix.notify("rgb(0,0)")).to.throw();
    });




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
    describe("Tentando controlDirections", () => {
        it("Deve alterar as direções de forma que o valor de uma posição será igual a anterior e assim por diante")
    })

    describe("Testando moveSnake", () => {

    });
})

describe("Testando elementsGenerator", function () {
    describe("Testando redDotsGenerator",function(){
        it("Deve retornar uma posicao valida da matriz");
        it("Deve nunca deve retornar  uma posicao ocupada pelo player");
    })
}
);
console.log("spec");
