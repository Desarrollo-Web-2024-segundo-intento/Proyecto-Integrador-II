from django.urls import path,include
from rest_framework import routers
from api import views




router=routers.DefaultRouter()
# #1
# router.register('especialidad', views.EspecialidadViewSet)
# #2
router.register('estado_turno', views.EstadoturnoViewSet)
# #3
# router.register('obra_social', views.ObraSocialViewSet)

router.register('profesionales', views.ProfesionalViewSet)
#5
router.register('paciente', views.PacienteViewSet)
#6
router.register('turnos_todos', views.TurnosViewSet)

urlpatterns = [
    path('', include(router.urls))
]
