from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView
from .models import Book


def home(request):
    context = {
        'books': Books.bojects.all()
    }
    return render(request, 'books/home.html', context)


class CreateBookView(CreateView):
    model = Book
    fields = ['title', 'author', 'description', ]


class BooksListView(ListView):
    model = Book
    template_name = 'books/home.html'
    context_object_name = 'books'
    ordering = ['-date_posted']


class BookDetailsView(DetailView):
    model = Book
