from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
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


class BookUpdateView(UpdateView):
    model = Book
    fields = ['title', 'author', 'description']


class BookDeleteView(DeleteView):
    model = Book
    success_url = '/'


class BookDetailsView(DetailView):
    model = Book
