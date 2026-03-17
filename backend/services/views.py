from django.shortcuts import render
from django.http import JsonResponse
from .services import services
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ServiceSerializer
from .models import Service
from django.shortcuts import get_object_or_404

def get_routes (request):
	routes = [
		'api/',
		'api/services/',
		'api/services/create',
	]
	return Response(routes)

@api_view(['GET'])
def get_services (request, pk):
	services = Service.objects.all()
	serializer = ServiceSerializer(services, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def get_service(request, pk):
    service = get_object_or_404(Service, _id=pk)

    serializer = ServiceSerializer(product, many=False)
    return Response(serializer.data)