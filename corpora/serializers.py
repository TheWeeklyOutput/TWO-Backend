from rest_framework import serializers
from .models import Document, Category, Author


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'slug')

class DocumentListSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    class Meta:
        model = Document
        fields = ('title', 'description', 'image_url', 'date', 'shares', 'author', 'slug')

class DocumentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    class Meta:
        model = Document
        fields = ('title', 'content', 'image_url', 'image_credit', 'date', 'shares', 'author', 'original_url')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'slug')
