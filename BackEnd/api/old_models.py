
from django.db import models
from django.utils import timezone
#from django.core.validators import MinLengthValidator, MaxLengthValidator
# import datetime
# from django.contrib.auth.validators import *
# from django.contrib.auth.models import AbstractUser



# #1
class Especialidad(models.Model):
    especialidad = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=500) #default='descripcion'
    #imagen = models.ImageField(null=False, blank=True)
    #precio = models.IntegerField(default=7000)
    class Meta:
        verbose_name = "Especialidad"
        verbose_name_plural = "Especialidades"
        
# #2
class Estadoturno(models.Model):
    estado_turno = models.CharField(max_length=100)
    class Meta:
        verbose_name = "Estado Turno"
        verbose_name_plural = "Estado Turnos"
        
# #3
class Obra_Social(models.Model):
    nombre_obra = models.CharField(max_length=100)
    descripcion_obra = models.CharField(max_length=100)
    contacto_obra = models.CharField(max_length=100)
    class Meta:
        verbose_name = "Obra Social"
        verbose_name_plural = "Obras Sociales"
        
# #4
class Profesional(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    especialidad = models.ForeignKey(Especialidad, on_delete=models.CASCADE, related_name='profesionales')# Clave foránea
    class Meta:
        verbose_name = "Profesional"
        verbose_name_plural = "Profesionales"
        
# #5
class Paciente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    obra_social = models.ForeignKey(Obra_Social, on_delete=models.CASCADE, related_name='pacientes')
    correo = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    class Meta:
        verbose_name = "Paciente"
        verbose_name_plural = "Pacientes"
        
# #6    
class Turnos(models.Model):
    fecha_turno = models.DateField(null=True)
    hora_turno = models.TimeField(null=True)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, related_name='turnos',null=True)  # Clave foránea a Paciente
    profesional = models.ForeignKey(Profesional, on_delete=models.CASCADE, related_name='turnos',null=True)  # Clave foránea a Profesional
    estado_turno = models.ForeignKey(Estadoturno, on_delete=models.CASCADE, related_name='turnos',null=True)  # Clave foránea a Estadoturno
    class Meta:
        verbose_name = "Turno"
        verbose_name_plural = "Turnos"
        
