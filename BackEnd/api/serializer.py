from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Especialidad
from .models import Estadoturno
from .models import Obra_Social
from .models import Profesional
from .models import Paciente
from .models import Turnos

# #0
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id',
                  'username',
                  'first_name',
                  'last_name',
                  'email',
                  'password']
# #1
class EspecialidadSerializer(serializers.ModelSerializer):
    class Meta:
        model=Especialidad
        fields='__all__'#Para que tome todos los campos
# #2
class EstadoturnoSerializer(serializers.ModelSerializer):
     class Meta:
         model = Estadoturno
         fields='__all__'
# #3
class ObraSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model= Obra_Social
        fields='__all__'#Para que tome todos los campos
    
class ProfesionalSerializer(serializers.ModelSerializer):
    class Meta:
        model= Profesional
        fields='__all__'        
#5
class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Paciente
        fields='__all__'#Para que tome todos los campos  
# #6
class TurnosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turnos
        fields='__all__'#Para que tome todos los campos     