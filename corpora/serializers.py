from rest_framework import serializers
from .models import Article, Category, Author, Paragraph


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('name', 'slug')

class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = ('content', 'index')

class ArticleListSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    class Meta:
        model = Article
        fields = ('title', 'description', 'image_url', 'date', 'views', 'author', 'slug')

class ArticleSerializer(serializers.ModelSerializer):
    author = AuthorSerializer()
    paragraphs = ParagraphSerializer(many=True)

    class Meta:
        model = Article
        fields = ('title', 'paragraphs', 'image_url', 'image_credit', 'date', 'views', 'author', 'slug')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'slug')
