from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .analyser import Analyser

class AddText(APIView):
    def post(self, request, *args, **kwargs):
        Analyser().add_text(
            request.data['text'],
            slug=request.data['slug'],
            content_type=request.data['content_type'],
            category=request.data['category'],
            outlet=request.data['outlet'],
            generated=False
        )
        return Response('Text added Successfully', status=status.HTTP_201_CREATED)
