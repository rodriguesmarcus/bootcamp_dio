from flask import Flask, request
from flask_restful import Resource, Api
import json
from habilidades import Habilidades

app = Flask('__name__')
api = Api(app)

devs = [
    {'id': '0', 'nome': 'Marcus', 'habilidades': ['python', 'django']},
     {'id': '1', 'nome': 'Vinicius', 'habilidades': ['python', 'flask']}
]


class Dev(Resource):
    '''Devolve um desenvolvedor pelo ID, também altera e deleta um desenvolvedor

    Args:
        id (integer): valor a ser passado na URI para visualização/alteração/exclusão de um dev

    Returns:
        [JSON]: Retorna um JSON com a informação do desenvolvedor daquele ID
    '''

    def get(self, id):
        try:
            response = devs[id]
        except IndexError:
            mensagem = f'Desenvolvedor de ID {id} não existe'
            response = {'status': 'erro', 'mensagem': mensagem}
        except Exception:
            mensagem = f'Erro desconhecido, procure o administrador da API'
            response = {'status': 'erro', 'mensagem': mensagem}
        return response

    def put(self, id):
        dados = json.loads(request.data)
        devs[id] = dados
        return dados

    def delete(self, id):
        devs.pop(id)
        return {'status': 'sucesso', 'mensagem': 'registro excluído'}


class ListaDevs(Resource):
    '''Lista todos os desenvolvedores e permite registrar um novo dev
    '''

    def get(self):
        return devs

    def post(self):
        dados = json.loads(request.data)
        posicao = len(devs)
        dados['id'] = posicao
        devs.append(dados)
        return devs[posicao]


api.add_resource(Dev, '/dev/<int:id>/')
api.add_resource(ListaDevs, '/dev')
api.add_resource(Habilidades, '/habilidades/')

if __name__=='__main__':
    app.run(debug=True)
