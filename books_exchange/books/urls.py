from django.urls import path
from .views import BooksListView, BookDetailsView, CreateBookView, BookUpdateView, BookDeleteView
from . import views

urlpatterns = [
    path('', BooksListView.as_view(), name='books-home'),
    path('book/<int:pk>/', BookDetailsView.as_view(), name="book-details"),
    path('book/<int:pk>/update/', BookUpdateView.as_view(), name="book-update"),
    path('book/<int:pk>/delete/', BookDeleteView.as_view(), name="book-delete"),
    path('book/create/', CreateBookView.as_view(), name="book-create"),
]
