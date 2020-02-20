from django.db import models
from django.utils import timezone


class Book(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date_published = models.DateTimeField()
    date_posted = models.DateTimeField(default=timezone.now)
    author = models.CharField(max_length=100)

    def __str__(self):
        return self.title
