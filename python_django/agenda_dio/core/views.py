from django.shortcuts import render, redirect
from core.models import Evento
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

# Create your views here.
# Uma maneira de redirecionar a página index para a página desejada:
# def index(request):
#     return redirect('/agenda/')

def login_user(request):
    return render(request, 'login.html')

def logout_user(request):
    logout(request)
    return redirect('/')

def submit_login(request):
    if request.POST:
        username = request.POST.get('username')
        password = request.POST.get('password')
        usuario = authenticate(username=username, password=password)
        if usuario is not None:
            login(request, usuario)
            return redirect('/')
        else:
            messages.error(request, 'Usuário ou senha inválidos.')

    return redirect('/')

@login_required(login_url='/login/') # aqui dizemos que tudo que está abaixo só será exibido
# se houver um usuário logado. O argumento vai redirecionar a pagina para quando
# não houver usuário logado.
def lista_eventos(request):
    # Aqui criamos uma filtragem por usuário, vamos manter o all até
    # começar a trabalhar com autenticação
    usuario = request.user
    evento = Evento.objects.filter(usuario=usuario)
    # evento = Evento.objects.all()
    dados = {'eventos': evento}
    return render(request, 'agenda.html', dados)
