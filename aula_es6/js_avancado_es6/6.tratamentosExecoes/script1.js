// Identificando erros

// console.log(name);
// const name = 'marcus rodrigues'; // const e let não permitem hoisting

// console.log(name);

// A forma mais comum de lidar com os erros é atravé dos blocos try, catch:

// try{
//     console.log(name);
//     const name = 'marcus rodrigues';
// } catch (err) {
//     console.log(`Error: ${err}`); // visualizamos o tipo de erro e o código continua executando
// }

// console.log('keep going...');

// Ao capturar o erro, podemos tratá-lo e seguir com a execução, caso quiséssemos executar um comando independente do erro, adicionamos um finally

// try {
//   console.log(name);
//   const name = "marcus rodrigues";
// } catch (err) {
//   console.log(`Error: ${err}`);
// } finally {
//   console.log("keep going...");
// }

// erros no JS são uma classe, podemos instanciá-lo para criar personalizações

// try {
//   const name = "marcus rodrigues";

//   const myError = new Error("erro customizado");

//   throw myError;

// } catch (err) {
//   console.log(`Error: ${err}`);
// } finally {
//   console.log("keep going...");
// }

// Podemos não só passar strings na classe de erro, como podemos também estendê-las

class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

// try {
//   const name = "marcus rodrigues";

//   const myError = new CustomError({ 
//       message: "erro customizado no erro customiszdo",
//       data: {
//           type: 'Server error'
//       }
//     });
//   throw myError;
// } catch (err) {
//   console.log(`Error: ${err}`);
//   console.log(err.data)
// } finally {
//   console.log("keep going...");
// }

// podemos também criar laços de controle de erros, já que possuímos uma customização maior de erros

try {
    const name = "marcus rodrigues";
  
    const myError = new CustomError({ 
        message: "erro customizado no erro customiszdo",
        data: {
            type: 'Server error'
        }
      });
    throw myError;
  } catch (err) {
    if (err.data.type === 'Server error') {
        console.log('ixi');
    }else{
        console.log('not ixi');
    }
  } finally {
    console.log("keep going...");
  }
  