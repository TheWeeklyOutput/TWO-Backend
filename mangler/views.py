from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import HttpResponseRedirect
from .generator import Generator

class Generate(APIView):
    def get(self, request, *args, category=None,**kwargs):
        generator = Generator(category, "www.cnn.com")
        doc = generator.generate()

        return HttpResponseRedirect("/corpora/get/" + doc.slug)
