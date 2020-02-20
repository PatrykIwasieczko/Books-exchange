from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Book


def home(request):
    context = {
        'books': Books.bojects.all()
    }
    return render(request, 'books/home.html', context)

# Create your views here.


class BooksListView(ListView):
    model = Book
    template_name = 'books/home.html'
    context_object_name = 'books'
    ordering = ['-date_posted']


class BookDetailsView(DetailView):
    model = Book
