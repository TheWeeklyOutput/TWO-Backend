from django.conf.urls import url, include
from .views import AddText

urlpatterns = [
    url(r'^add/', AddText.as_view())
]