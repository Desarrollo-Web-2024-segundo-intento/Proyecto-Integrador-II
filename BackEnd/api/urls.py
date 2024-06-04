from django.urls import path,include
from rest_framework import routers
from api import views
# from .views import LoginView, LogoutView





router = routers.DefaultRouter()
# #1
router.register('especialidad', views.EspecialidadViewSet)
# #2
router.register('estado_turno', views.EstadoturnoViewSet)
# #3
router.register('obra_social', views.ObraSocialViewSet)

router.register('profesionales', views.ProfesionalViewSet)
#5
router.register('paciente', views.PacienteViewSet)
#6
router.register('turnos_todos', views.TurnosViewSet)


# urlpatterns = [
#     path('',include('')),
# ]
# from django.urls import path
# from .views import LoginView, LogoutView

urlpatterns = [
    path('',include(router.urls)),
    # path('auth/login/', LoginView.as_view(), name='login'),
    # path('auth/logout/', LogoutView.as_view(), name='logout'),
]