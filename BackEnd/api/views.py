from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken

from .serializer import EspecialidadSerializer
from .serializer import EstadoturnoSerializer
from .serializer import ObraSocialSerializer
from .serializer import ProfesionalSerializer 
from .serializer import PacienteSerializer
from .serializer import TurnosSerializer
from .serializer import UserSerializer

from .models import Especialidad
from .models import Estadoturno
from .models import Obra_Social
from .models import Profesional
from .models import Paciente
from .models import Turnos


# username: (String) Campo que almacena el nombre de usuario. Debe ser único.
# first_name: (String) Campo opcional que almacena el primer nombre del usuario.
# last_name: (String) Campo opcional que almacena el apellido del usuario.
# email: (String) Campo opcional que almacena la dirección de correo electrónico del usuario.
# password: (String) Campo que almacena la contraseña del usuario en formato cifrado.

@api_view(['POST'])
def login(request):
    user = get_object_or_404(User,username=request.data['username'])
    if not user.check_password(request.data["password"]):
        return Response({"error": "Password incorrecto"}, status.HTTP_400_BAD_REQUEST)
    
    token, created = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(instance=user)
    
    
    
    return Response({"token": token.key, "user": serializer.data}, status=status.HTTP_200_OK)

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=serializer.data['username'])
        user.set_password(serializer.data["password"])
        user.save()
        
        token = Token.objects.create(user=user)
        return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED )
    
    # print(request.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@authentication_classes([JWTAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def logout(request):
    try:
        if request.user.auth_token:
            request.user.auth_token.delete()  # Eliminar token de autenticación por token estándar de Django

        if 'HTTP_AUTHORIZATION' in request.headers:
            refresh_token = request.headers['HTTP_AUTHORIZATION'].split(' ')[1]
            token = RefreshToken(refresh_token)
            token.blacklist()  # Invalidar token de autenticación JWT

        return Response({"message": "Logout exitoso."}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile(request):
    print(request.user)
    
    
    
    return Response({})

@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def actualizar_usuario(request):
    user = request.user  # Obtener el usuario autenticado
    data = request.data
    
    if 'username' not in data:
        return Response({"error": "El campo 'username' es requerido."}, status=status.HTTP_400_BAD_REQUEST)
    
    user.username = data['username']
    user.save()
    
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['PUT'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def actualizar_completo(request):
    user = request.user 
    data = request.data
    print(request.data)

    # # if 'username' not in data:
        # return Response({"error": "El campo 'username' es requerido."}, status=status.HTTP_400_BAD_REQUEST)
    
    if 'first_name' not in data:
        return Response({"error": "El campo 'first_name' es requerido."}, status=status.HTTP_400_BAD_REQUEST)
    
    if 'last_name' not in data:
        return Response({"error": "El campo 'last_name' es requerido."}, status=status.HTTP_400_BAD_REQUEST)
    
    if 'email' not in data:
        return Response({"error": "El campo 'email' es requerido."}, status=status.HTTP_400_BAD_REQUEST)
    
    if 'password' not in data:
        return Response({"error": "El campo 'password' es requerido."}, status=status.HTTP_400_BAD_REQUEST)
    
    # user.username = data['username']
    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']
    user.password = data['password']
    user.save()
    
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['DELETE'])
@authentication_classes([JWTAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def eliminar_usuario(request):
    user = request.user  # Obtener el usuario autenticado
    user.delete()
    return Response({"message": "Usuario eliminado exitosamente."}, status=status.HTTP_204_NO_CONTENT)

# traer profesionales segun especialidad seleccionada
@api_view(['GET'])
def get_profesionales_por_especialidad(request, especialidad_id):
    try:
        # Filtra los profesionales por el ID de la especialidad
        profesionales = Profesional.objects.filter(especialidad_id=especialidad_id)
        serializer = ProfesionalSerializer(profesionales, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Profesional.DoesNotExist:
        return Response({"error": "No se encontraron profesionales para la especialidad especificada."}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

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