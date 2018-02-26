from django.core.paginator import Paginator, EmptyPage
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .manager import load_corpora, load_articles
from .serializers import ArticleSerializer, ArticleListSerializer, CategorySerializer
from .models import Category

class GetByCategory(APIView):
    def get(self, request, *args, category=None, page=1, **kwargs):
        if category == "all":
            articles = load_articles().order_by('date')
        elif category == "highlights":
            articles = load_articles().order_by('date').values_list('pk', flat=True)[:25]
            articles = load_articles(pk__in=list(articles)).order_by('views') 
        else:
            articles = load_articles(category=category).order_by('date')

        paginator = Paginator(articles, 5)

        try:
            items = ArticleListSerializer(paginator.page(page).object_list, many=True).data
        except EmptyPage:
            return Response([], status=status.HTTP_204_NO_CONTENT)
        return Response(items, status=status.HTTP_200_OK)

class GetBySlug(APIView):
    def get(self, request, *args, slug=None, **kwargs):
        article = load_articles(slug=slug).first()
        article.views += 1
        article.save()
        if article is None:
            return Response("Document Not Found", status=status.HTTP_404_NOT_FOUND)
        return Response(ArticleSerializer(article).data, status=status.HTTP_200_OK)

class GetCategories(APIView):
    def get(self, request, *args, **kwargs):
        categories = Category.objects.filter(available=True)
        categories = CategorySerializer(categories, many=True).data
        return Response(categories, status=status.HTTP_200_OK)
