// class Math {
//     sum = function sum(a, b){
//         return a + b
//     };
// }

// Agora que o teste passou, refatoramos:

// class Math {
//     sum(a, b) {
//         return a + b
//     };
// }

// E se o método fosse assíncrono?

class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 500 ); // o limite do timeout utilizando o mocha é de 2000ms
    }
    multiply(a, b) {
        return a * b;
    }
    printSum(req, res, a, b) { // (request, response, a, b)
        res.load('index', a + b)
    }
}

module.exports = Math;