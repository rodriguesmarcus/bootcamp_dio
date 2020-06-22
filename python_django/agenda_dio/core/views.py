from django.shortcuts import render, redirect
from core.models import Evento


# Create your views here.
# Uma maneira de redirecionar a página index para a página desejada:
# def index(request):
#     return redirect('/agenda/')

def lista_eventos(request):
    # Aqui criamos uma filtragem por usuário, vamos manter o all até
    # começar a trabalhar com autenticação
    #usuario = request.user
    #evento = Evento.objects.filter(usuario=usuario)
    evento = Evento.objects.all()
    dados = {'eventos': evento}
    return render(request, 'agenda.html', dados)
