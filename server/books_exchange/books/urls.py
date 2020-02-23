from django.urls import path
from .views import BooksListView, BookDetailsView, CreateBookView, BookUpdateView, BookDeleteView, UserBooksListView, BookListAPIView, BookDetailsAPIView, UserBooksListAPIView
from . import views


urlpatterns = [
    path('api/books/', views.BookListAPIView.as_view()),
    path('api/book/<int:pk>/', views.BookDetailsAPIView.as_view()),
    path('api/user/<str:username>/', views.UserBooksListAPIView.as_view()),
    path('', BooksListView.as_view(), name='books-home'),
    path('user/<str:username>/', UserBooksListView.as_view(), name="user-books"),
    path('book/<int:pk>/', BookDetailsView.as_view(), name="book-details"),
    path('book/<int:pk>/update/', BookUpdateView.as_view(), name="book-update"),
    path('book/<int:pk>/delete/', BookDeleteView.as_view(), name="book-delete"),
    path('book/create/', CreateBookView.as_view(), name="book-create"),
]
