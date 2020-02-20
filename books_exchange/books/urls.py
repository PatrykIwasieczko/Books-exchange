from django.urls import path
from .views import BooksListView, BookDetailsView
from . import views

urlpatterns = [
    path('', BooksListView.as_view(), name='books-home'),
    path('book/<int:pk>/', BookDetailsView.as_view(), name="book-details")
]
