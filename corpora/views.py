from django.core.paginator import Paginator, EmptyPage
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .manager import load_corpora, load_generated_documents
from .serializers import GeneratedDocumentSerializer, GeneratedDocumentListSerializer, CategorySerializer
from .models import Category

class GetByCategory(APIView):
    def get(self, request, *args, category=None, page=1, **kwargs):
        if category == "all":
            articles = load_generated_documents().order_by('date')
        elif category == "highlights":
            articles = load_generated_documents().order_by('date').values_list('pk', flat=True)[:25]
            articles = load_generated_documents(pk__in=list(articles)).order_by('views') 
        else:
            articles = load_generated_documents(category=category).order_by('date')

        paginator = Paginator(articles, 5)

        try:
            items = GeneratedDocumentListSerializer(paginator.page(page).object_list, many=True).data
        except EmptyPage:
            return Response([], status=status.HTTP_204_NO_CONTENT)
        return Response(items, status=status.HTTP_200_OK)

class GetBySlug(APIView):
    def get(self, request, *args, slug=None, **kwargs):
        article = load_generated_documents(slug=slug).first()
        if article is None:
            return Response("Document Not Found", status=status.HTTP_404_NOT_FOUND)
        article.increment_views()
        return Response(GeneratedDocumentSerializer(article).data, status=status.HTTP_200_OK)

class GetCategories(APIView):
    def get(self, request, *args, **kwargs):
        categories = Category.objects.filter(available=True)
        categories = CategorySerializer(categories, many=True).data
        return Response(categories, status=status.HTTP_200_OK)
