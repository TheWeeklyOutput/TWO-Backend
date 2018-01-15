from django.core.paginator import Paginator
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .corpora import load_corpora

class GetHighlights(APIView):
    def get(self, request, *args, category=None,**kwargs):
        newest = load_corpora(generated=True).order_by('date')
        newest = newest[:24]
        return Response(load_corpora(id__in=newest).order_by('likes')[:5], status=status.HTTP_200_OK)

class GetByCategory(APIView):
    def get(self, request, *args, category=None, page=1, **kwargs):
        articles = load_corpora(category=category, generated=True).order_by('date')
        paginator = Paginator(articles, 5)
        return Response(paginator.page(page).object_list, status=status.HTTP_200_OK)

class GetAll(APIView):
    def get(self, request, *args, page=1, **kwargs):
        articles = load_corpora(generated=True).order_by('date')
        paginator = Paginator(articles, 5)
        return Response(paginator.page(page).object_list, status=status.HTTP_200_OK)
