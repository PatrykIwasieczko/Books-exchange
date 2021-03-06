from django.shortcuts import render, get_object_or_404
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Book
from django.contrib.auth.models import User

from .serializers import BookSerializer, CreateBookSerializer
from rest_framework import generics
from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView, CreateAPIView


def home(request):
    context = {
        'books': Books.bojects.all()
    }
    return render(request, 'books/home.html', context)


class CreateBookView(LoginRequiredMixin, CreateView):
    model = Book
    fields = ['title', 'author', 'description', 'image']

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)


class BooksListView(ListView):
    model = Book
    template_name = 'books/home.html'
    context_object_name = 'books'
    ordering = ['-date_posted']
    paginate_by = 3


class BookListAPIView(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookDetailsAPIView(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookUpdateAPIView(UpdateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookCreateAPIView(CreateAPIView):
    serializer_class = CreateBookSerializer


class UserBooksListAPIView(ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Book.objects.filter(owner=user)


class BookUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Book
    fields = ['title', 'author', 'description', 'image']

    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)

    def test_func(self):
        book = self.get_object()
        if self.request.user == book.owner:
            return True
        return False


class BookDeleteView(DeleteView):
    model = Book
    success_url = '/'

    def test_func(self):
        book = self.get_object()
        if self.request.user == book.owner:
            return True
        return False


class BookDetailsView(DetailView):
    model = Book


class UserBooksListView(ListView):
    model = Book
    template_name = 'books/user_books.html'
    context_object_name = 'books'

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Book.objects.filter(owner=user).order_by('-date_posted')
