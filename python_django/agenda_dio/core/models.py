from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta
# Criando uma tabela eventos
# por padrão os campos não podem ser deixados em branco ou null


class Evento(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(blank=True, null=True)
    data_evento = models.DateTimeField(verbose_name='Data do Evento')
    data_criacao = models.DateTimeField(auto_now=True)
    # .CASCADE diz que se o usuário for excluido exclui-se todos os eventos dele
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    # como não criamos primary keys, o django cria um campo id autoincrementável.
    # a tabela é criada com o nome do app_evento, para forçar que o nome seja só evento:

    class Meta:
        db_table = 'evento'

    # essa função faz com quem o nome do titulo seja invocado quando for chamado o objeto
    def __str__(self):
        return self.titulo

    def get_data_evento(self):
        '''
        Cria padrão de data Brasileiro
        '''
        return self.data_evento.strftime('%d/%m/%Y %H:%M')

    def get_data_input_evento(self):
        '''
        Cria padrão de data que é interpretado corretamente pelo input do HTML5
        '''
        return self.data_evento.strftime('%Y-%m-%dT%H:%M')

    def get_evento_atrasado(self):
        if self.data_evento < datetime.now():
            return True
        else:
            return False