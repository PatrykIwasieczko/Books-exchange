from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField()

    class Meta:
        model = Book
        fields = '__all__'


class CreateBookSerializer(serializers.ModelSerializer):
    owner = 'patryk'

    class Meta:
        model = Book
        fields = '__all__'
