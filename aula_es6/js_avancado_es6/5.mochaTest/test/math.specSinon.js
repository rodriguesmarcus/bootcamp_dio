// O Sinon trabalha melhor quando estamos lidando com requests, substituições de métodos, API:
const assert = require("assert");
const Math = require("C:/Users/rodri/OneDrive/Programming/bootcamp_dio/aula_es6/js_avancado_es6/mochaTest/src/math.js");
const expect = require("chai").expect;
const sinon = require("sinon");

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
    expect(math.multiply(value, 5), 25).to.equal(0);
  });

  it("Playing with objects", function () {
    const obj = {
      name: "Marcus Vinicius Rodrigues",
    };

    const obj2 = {
      name: "Marcus Vinicius Rodrigues",
    };

    // expect(obj)
    //     .to.have.property("name")
    //     .equal("Marcus Rodrigues");
    //expect(obj).to.equal(obj2);
    expect(obj).to.deep.equal(obj2);
  });

  it("Calls res with sum and index values", function () {
    const req = {};
    const res = {
      load: sinon.spy(), // criou uma função espiã, que consegue verificar se ela foi invocada da maneira correta.
    };
    const math = new Math();

    math.printSum(req, res, 5, 5);

    // expect(res.load.calledOnce).to.be.true; // verificamos se ela ocorre da forma esperada,
    // expect(res.load.args[0][0]).to.equal('index'); // verifica se o primeiro argumento enviado pela função é index
    expect(res.load.args[0][1]).to.equal(10);
  });

  // podemos utilizar o spy em funções já construídas
  it.only("Calls res with sum and index values", function () {
    const req = {};
    const res = {
      load: function load() {
        console.log('called!')
      }, // criou uma função espiã, que consegue verificar se ela foi invocada da maneira correta.
    };

    // sinon.spy(res, 'load');
    sinon.stub(res, 'load'); //  conseguimos substituir um método e inserir um return customizado,
    // nisso podemos pegar libs e substituir seus métodos e observar a maneira com que estão sendo manipulados
    // res.restore(); // retorna o método ao normal

    const math = new Math();

    math.printSum(req, res, 5, 5);

    // expect(res.load.calledOnce).to.be.true; // verificamos se ela ocorre da forma esperada,
    // expect(res.load.args[0][0]).to.equal('index'); // verifica se o primeiro argumento enviado pela função é index
    expect(res.load.args[0][0]).to.equal('index');

    // podemos utilizar o spy em funções já construídas
  });
});

// O sinon permite criar mocks de servidores, garante que as chamadas http tenham um retorno específico, permitindo
// criar diversos tipos de cenário. A utilização das 3 ferramentas garantimos o TDD, qualidade e produtividade de código.