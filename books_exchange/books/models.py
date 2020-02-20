from django.db import models
from django.utils import timezone
from django.urls import reverse


class Book(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('book-details', kwargs={'pk': self.pk})
