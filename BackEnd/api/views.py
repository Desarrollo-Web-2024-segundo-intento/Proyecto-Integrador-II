from rest_framework import viewsets
from .serializer import EspecialidadSerializer
from .serializer import EstadoturnoSerializer
from .serializer import ObraSocialSerializer
from .serializer import ProfesionalSerializer
from .serializer import PacienteSerializer
from .serializer import TurnosSerializer

from .models import Especialidad
from .models import Estadoturno
from .models import Obra_Social
from .models import Profesional
from .models import Paciente
from .models import Turnos




class EspecialidadViewSet(viewsets.ModelViewSet):
    queryset = Especialidad.objects.all()
    serializer_class = EspecialidadSerializer
    
class EstadoturnoViewSet(viewsets.ModelViewSet):
    queryset = Estadoturno.objects.all()
    serializer_class = EstadoturnoSerializer
    
class ObraSocialViewSet(viewsets.ModelViewSet):
    queryset = Obra_Social.objects.all()
    serializer_class = ObraSocialSerializer
    
class ProfesionalViewSet(viewsets.ModelViewSet):
    queryset = Profesional.objects.all()
    serializer_class = ProfesionalSerializer 
    
class PacienteViewSet(viewsets.ModelViewSet):
    queryset = Paciente.objects.all()
    serializer_class = PacienteSerializer
    
class TurnosViewSet(viewsets.ModelViewSet):
    queryset = Turnos.objects.all()
    serializer_class = TurnosSerializer  
