# Generated by Django 3.0.3 on 2020-02-21 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_book_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='category',
            field=models.CharField(blank=True, choices=[('action', 'Action and Adventure'), ('crime', 'Crime'), ('fantasy', 'Fantasy'), ('horror', 'Horror'), ('romance', 'Romance'), ('sci-fi', 'Science Fiction'), ('thriller', 'Thriller')], max_length=20, null=True),
        ),
    ]
