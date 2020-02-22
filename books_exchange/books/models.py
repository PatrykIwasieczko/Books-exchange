from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.urls import reverse


class Book(models.Model):
    GENRE_CHOICES = (
        ('action', 'Action and Adventure'),
        ('crime', 'Crime'),
        ('fantasy', 'Fantasy'),
        ('horror', 'Horror'),
        ('romance', 'Romance'),
        ('sci-fi', 'Science Fiction'),
        ('thriller', 'Thriller')
    )

    title = models.CharField(max_length=100)
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.CharField(max_length=100)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, blank=True, null=True)
    category = models.CharField(
        max_length=20, choices=GENRE_CHOICES, blank=True, null=True)
    image = models.ImageField(default='default.jpg', upload_to='books_pics')

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('book-details', kwargs={'pk': self.pk})
