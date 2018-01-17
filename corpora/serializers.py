from rest_framework import serializers
from .models import Document, Category

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('headline', 'content', 'image_url', 'date', 'shares')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'slug')
