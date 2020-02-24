from rest_framework import serializers

from .models import User


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'username')
        extra_kwargs = {
            'email': {'required': True},
            'password': {'write_only': True},
            'username': {'required': True}
        }
