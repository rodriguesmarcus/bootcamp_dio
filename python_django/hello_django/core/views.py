from django.shortcuts import render, HttpResponse

# Create your views here.

def hello(request, nome, idade):
    return HttpResponse(f'<h1>Hello {nome} você tem {idade}</h1>')

# só retorna o valor se o campo http://127.0.0.1:8000/hello/Marcus/