from django.contrib import admin
from django.urls import path,include,re_path
from api import views
from rest_framework.documentation import include_docs_urls
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('api.urls')),
    path('docs/', include_docs_urls(title='Api Documentation')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/login/', obtain_auth_token, name='api_token_auth'),
    re_path('login/', views.login),
    re_path('register/', views.register),
    re_path('profile/', views.profile),
    #traer profesionales segun especialidad seleccionada
    path('profesionales/especialidad/<int:especialidad_id>/', views.get_profesionales_por_especialidad, name='profesionales-por-especialidad'),

    # re_path('actualizar_usuario/', views.actualizar_usuario),
    # re_path('actualizar_nombre/', views.actualizar_nombre),
    # re_path('actualizar_apellido/', views.actualizar_apellido),
    # re_path('actualizar_email/', views.actualizar_email),
    # re_path('actualizar_password/', views.actualizar_password),
    re_path('actualizar_completo/', views.actualizar_completo),
    re_path('eliminar_usuario/', views.eliminar_usuario),
    re_path('logout/', views.logout),
]