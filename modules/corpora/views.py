from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .analyser import Analyser
from backend.modules.mangler.models import Document, Token, Entity

class AddCorpus(APIView):
    def post(self, request, *args, **kwargs):
        Analyser().add_text(
            request.data['content'],
            headline=request.data['headline'],
            content_type=request.data['content_type'],
            category=request.data['category'],
            outlet=request.data['outlet'],
            generated=False
        )
        return Response('Text added Successfully', status=status.HTTP_201_CREATED)

class GetCorpus(APIView):
    def get(self, request, *args, slug=None,**kwargs):
        doc = [d for d in Document.objects.all() if d.slug == slug]

        if len(doc) != 1:
            res_str = 'No Articles found for slug: ' + slug
            return Response(res_str, status=status.HTTP_404_NOT_FOUND)

        doc = doc[0]

        content = ''
        tokens = list(Token.objects.filter(document=doc))
        tokens.sort(key=lambda x: x.document_index)
        for t in tokens:
            content += t.text + ' '

        entities = list(Entity.objects.filter(documents=doc))
        entities = [e.toJSON() for e in entities]
        data = {
            'title': doc.headline,
            'text': content,
            'entities': entities
        }
        print(data)

        return Response(data, status=status.HTTP_200_OK)
