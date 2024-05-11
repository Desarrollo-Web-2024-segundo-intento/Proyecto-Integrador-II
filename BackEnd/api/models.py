from django.db import models
from django.utils import timezone
import datetime

# #1
# class Especialidad(models.Model):
#     especialidad = models.CharField(max_length=100)
# #2
class Estadoturno(models.Model):
   estado_turno = models.CharField(max_length=100)
# #3
class Obra_Social(models.Model):
     nombre_obra = models.CharField(max_length=100)
     descripcion_obra = models.CharField(max_length=100)
     contacto_obra = models.CharField(max_length=100)
# #4   
# class Profesional(models.Model):
#     nombre = models.CharField(max_length=100)
#     apellido = models.CharField(max_length=100)
#     # especialidad_id = models.CharField(max_length=100)
#     especialidad = models.ForeignKey(Especialidad, on_delete=models.CASCADE, related_name='profesionales')  # Clave foránea
#5
class Paciente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.PositiveIntegerField()
    fecha_nacimiento = models.DateField()
    obra_social = models.ForeignKey(Obra_Social, on_delete=models.CASCADE, related_name='pacientes')
    correo = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
# #6    
# class Turnos(models.Model):
#     fecha_turno = models.DateField(null=True)
#     hora_turno = models.TimeField(null=True)
#     paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, related_name='turnos',null=True, default='00:00')  # Clave foránea a Paciente
#     profesional = models.ForeignKey(Profesional, on_delete=models.CASCADE, related_name='turnos',null=True)  # Clave foránea a Profesional
#     estado_turno = models.ForeignKey(Estadoturno, on_delete=models.CASCADE, related_name='turnos',null=True)  # Clave foránea a Estadoturno


