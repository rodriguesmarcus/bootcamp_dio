import requests

def consulta():
    response = requests.get('')
    print(response.status_code)
    print(response.json())
    for pessoa in response.json():
        print(pessoa['id'], pessoa['nome'], pessoa['idade'])

def insere():
    nome = 'Nome'
    idade = 33
    pessoa = {'nome': nome, 'idade': idade}
    response = requests.post('url', json = pessoa)
    print(response.status_code)
    print(response.json())

#consulta()
#insere()