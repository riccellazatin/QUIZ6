from django.urls import path
from .views import *

urlpatterns = [
	path('', get_routes),
    path('services/<str:pk>/', get_services),
]