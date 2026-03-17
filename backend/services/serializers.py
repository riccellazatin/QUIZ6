from rest_framework import serializers

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        from .models import Service
        model = Service
        fields = '__all__'