from django.contrib import admin
from .models import Especialidad
from .models import Estadoturno
from .models import Obra_Social
from .models import Profesional
from .models import Paciente
from .models import Turnos


admin.site.register(Especialidad)
admin.site.register(Estadoturno)
admin.site.register(Obra_Social)
admin.site.register(Profesional)
admin.site.register(Paciente)
admin.site.register(Turnos)
