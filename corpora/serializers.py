from rest_framework import serializers
from .models import Category, Author, Outlet, GeneratedDocument

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'slug')

class OutletSerializers(serializers.ModelSerializer):
    class Meta:
        model = Outlet
        fields = ('name', 'slug', 'website')

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'slug', 'outlets')

class GeneratedDocumentListSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    class Meta:
        model = GeneratedDocument
        fields = ('title', 'slug', 'description', 'image_url', 'date', 'views', 'author')

class GeneratedDocumentSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()

    class Meta:
        model = GeneratedDocument
        fields = ('title', 'slug', 'html_content', 'image_url', 'image_credit', 'date', 'views', 'author')
    