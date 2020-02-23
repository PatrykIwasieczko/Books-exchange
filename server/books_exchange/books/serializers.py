from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    owner = serializers.StringRelatedField()

    class Meta:
        model = Book
        fields = ('title', 'description', 'date_posted',
                  'author', 'owner', 'category', 'image')
