from flask import Flask, jsonify, request
import json

app = Flask(__name__)

devs = [
    {'id':'0','nome': 'Marcus', 'habilidades':['python', 'django']},
     {'id':'1','nome': 'Vinicius', 'habilidades':['python', 'flask']}
]

@app.route('/dev/<int:id>/', methods=['GET', 'PUT','DELETE'])
def dev(id):
    '''Devolve um desenvolvedor pelo ID, também altera e deleta um desenvolvedor

    Args:
        id (integer): valor a ser passado na URI para visualização/alteração/exclusão de um dev

    Returns:
        [JSON]: Retorna um JSON com a informação do desenvolvedor daquele ID
    '''
    if request.method == 'GET':
        try:
            response = devs[id]
        except IndexError:
            mensagem = f'Desenvolvedor de ID {id} não existe'
            response = {'status':'erro', 'mensagem':mensagem}
        except Exception:
            mensagem = f'Erro desconhecido, procure o administrador da API'
            response = {'status':'erro', 'mensagem':mensagem}
        return response
    elif request.method == 'PUT':
        dados = json.loads(request.data)
        devs[id] = dados
        return dados
    elif request.method == 'DELETE':
        devs.pop(id)
        return {'status':'sucesso', 'mensagem':'registro excluído'}

@app.route('/dev/', methods=['POST', 'GET'])
def lista_devs():
    '''Lista todos os desenvolvedores e permite registrar um novo dev
    '''
    if request.method == 'POST':
        dados = json.loads(request.data)
        posicao = len(devs)
        dados['id'] = posicao
        devs.append(dados)
        return {'status':'sucess', 'mensagem':'Registro inserido'}
    elif request.method == 'GET':
        return jsonify(devs)

if __name__=='__main__':
    app.run()