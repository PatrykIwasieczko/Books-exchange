from django.urls import path
from .views import BooksListView, BookDetailsView, CreateBookView
from . import views

urlpatterns = [
    path('', BooksListView.as_view(), name='books-home'),
    path('book/<int:pk>/', BookDetailsView.as_view(), name="book-details"),
    path('book/create/', CreateBookView.as_view(), name="book-create"),
]
