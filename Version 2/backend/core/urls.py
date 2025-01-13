from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('logout/', views.LogoutView.as_view(), name ='logout'),
    path('register/', UserRegistrationAPIView.as_view(), name ='register-user')
]