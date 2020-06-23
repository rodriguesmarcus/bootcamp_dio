from models import Pessoas, Usuarios

def insere():
    '''Insere dados na tabela pessoa
    '''
    pessoa = Pessoas(nome='mariane', idade='27')
    pessoa.save()

def consulta():
    '''Realiza consulta na tabela pessoa
    '''
    pessoa = Pessoas.query.all()
    # pessoa = Pessoas.query.filter_by(nome='marcus').first()
    print(pessoa)

def altera():
    '''Altera dados na tabela pessoa
    '''
    pessoa = Pessoas.query.filter_by(nome='mariane').first()
    pessoa.nome = 'roberto'
    pessoa.save()

def exclui():
    '''Apaga dados na tabela pessoa
    '''
    pessoa = Pessoas.query.filter_by(nome='marcus').first()
    pessoa.delete()

def insere_usuario(login, senha):
    usuario = Usuarios(login=login, senha=senha)
    usuario.save()

def consulta_todos_usuarios():
    usuarios = Usuarios.query.all()
    print(usuarios)

if __name__ == "__main__":
    # insere()
    # altera()
    # exclui()
    # consulta()
    insere_usuario('marcus', '1234')
    insere_usuario('rodrigues', '4321')
    consulta_todos_usuarios()