from django.urls import path
from .views import BooksListView
from . import views

urlpatterns = [
    path('', BooksListView.as_view(), name='books-home')
]
