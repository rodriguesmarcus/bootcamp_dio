// O Chai é mais descritivo que simplemente utilizar o assert:
const assert = require("assert");
const Math = require("C:/Users/rodri/OneDrive/Programming/bootcamp_dio/aula_es6/js_avancado_es6/mochaTest/src/math.js");
const expect = require("chai").expect;

let value = 0;

describe("Math class", function () {
  beforeEach(function () {
    value = 0;
  });

  it("Sum two numbers", function (done) {
    const math = new Math();
    this.timeout(3000);

    value = 5;

    math.sum(5, 5, (value) => {
      expect(value).to.equal(10);
      done();
    });
  });

  it("Multiply two numbers", function () {
    const math = new Math();
    expect(math.multiply(value, 5), 25).to.equal(0)
  });

  it.only("Playing with objects", function () {
    const obj = {
      name: "Marcus Vinicius Rodrigues",
    };

    const obj2 = { // se obj2 = obj iria passar no teste, pois obj2 estaria referenciando ao obj 1, ou seja, são o mesmo objeto em duas referências diferentes
        name: 'Marcus Vinicius Rodrigues',
    }

    // expect(obj)
    //     .to.have.property("name")
    //     .equal("Marcus Rodrigues");
    //expect(obj).to.equal(obj2); // embora possuírem os mesmos valores, eles possuem endereçamentos de referência diferentes
    expect(obj).to.deep.equal(obj2); // aqui o teste passa, pois está avaliando os conteúdos daquelas referências
  });
});

// Existem outros hooks - before (antes da execução de todo o código) - after - afterEach
