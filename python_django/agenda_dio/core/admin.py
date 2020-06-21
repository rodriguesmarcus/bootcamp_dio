from django.contrib import admin
from core.models import Evento
# Register your models here.

# para exibir outras informações dentro do nosso BD que por enquanto só exibe o nome
# do evento
class EventoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'data_evento', 'data_criacao')
    list_filter = ('titulo','usuario')

admin.site.register(Evento, EventoAdmin)