from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import scoped_session, sessionmaker, relationship
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:///atividades.db', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False, bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()
# Todo esse trecho é necessário para criar o banco de dados e para que seja
# possível fazer as alterações, consultas e trabalhar com ORM e sessões.

class Pessoas(Base):
    __tablename__='pessoas' # aqui definimos o nome da tabela
    id = Column(Integer, primary_key=True)
    nome = Column(String(40), index=True)
    idade = Column(Integer)

    def __repr__(self):
        '''Essa vai ser a representação da classe. Sempre que mandar imprimir p
        objeto esse return representa o formato que será impresso.
        '''
        return f'<Pessoa {self.nome}>'

    def save(self):
        db_session.add(self)
        db_session.commit()

    def delete(self):
        db_session.delete(self)
        db_session.commit()

class Atividades(Base):
    __tablename__='Atividades'
    id = Column(Integer, primary_key=True)
    nome = Column(String(80))
    # Aqui vamos integrar Atividades com Pessoa
    pessoa_id = Column(Integer, ForeignKey('pessoas.id'))
    pessoa = relationship("Pessoas")
    def __repr__(self):
        '''Essa vai ser a representação da classe. Sempre que mandar imprimir p
        objeto esse return representa o formato que será impresso.
        '''
        return f'<Atividades {self.nome}>'

    def save(self):
        db_session.add(self)
        db_session.commit()

    def delete(self):
        db_session.delete(self)
        db_session.commit()

class Usuarios(Base):
    __tablename__='Usuarios'
    id = Column(Integer, primary_key=True)
    login = Column(String, unique=True)
    senha = Column(String(20))

    def __repr__(self):
        return f'<Usuario {self.login}>'

    def save(self):
        db_session.add(self)
        db_session.commit()

    def delete(self):
        db_session.delete(self)
        db_session.commit()

def init_db():
    '''Aqui criamos um banco de dados para nossa aplicação
    '''
    Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
    init_db()