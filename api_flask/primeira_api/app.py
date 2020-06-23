from flask import Flask, jsonify, request
import json

app = Flask(__name__)


@app.route('/<int:id>')
def pessoa(id):
    '''
    A API retorna uma JSON com o nome de pessoas.
    Na URN são passados parâmetros para dentro da função. <id>
    A tipagem é definir o tipo de entrada que queremos no parâmetro. <int:id>
    Quando tipamos nossa entrada, qualquer outro valor retorna erro.
    É possível receber esse argumento e criar manipulações:
        soma = 1 + id
    Dentro do decorador @app.route, passamos o método HTTP.
     '''
    return jsonify({'id': id,
                    'nome': 'Marcus',
                    'profissao': 'agente secreto'})


@app.route('/soma/<int:valor1>/<int:valor2>')
def soma(valor1, valor2):
    '''Essa função receberá dois valores do URI, realizará a operação de soma
    e retornará o resultado em formado JSON

    Args:
        valor1 (integer)
        valor2 (integer)

    Returns:
        [integer]: soma valor1 + valor 2
    '''
    return {'soma': (valor1+valor2)}

@app.route('/soma_post',methods=['POST', 'GET'])
def soma_post():
    '''Essa função recebe através do método POST os dados e retorna a soma
    dos valores

    Returns:
        integer: soma dos valores contidos no JSON
    '''
    if request.method == 'POST':
        dados = json.loads(request.data)
        total = sum(dados['valores'])
    elif request.method == 'GET':
        çtotal = 10

    return {'soma':total}


if __name__ == "__main__":
    app.run()
