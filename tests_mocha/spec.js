import {pixel} from "../src/PixelObserver.js"

describe("Testando pixelObserver" , function(){


    let pix = new pixel('00', "green");
    // console.log(p);
    // console.log("it");  

    it("Testando getters", function (){
        expect(pix.getId()).to.be.equal('00');
        console.log("pass")
        expect(pix.getColor()).to.be.equal("green");
    });
   



});

console.log("spec");
