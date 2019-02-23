"""
Creates model classes for blog app
"""

from django.db import models

class Tag(models.Model):
    """
    Creates a tag model class with many-to-many relationship with Post
    """
    name = models.CharField(max_length=30, blank=False, default='other')

    def __str__(self):
        return self.name


class Post(models.Model):
    """Creates a Post model class"""
    title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField()
    date_created = models.DateField()
    tldr = models.TextField(max_length=300, blank=True, default='')
    tags = models.ManyToManyField(Tag)
    cover = models.ImageField(allow_empty_file=False)

    # cover_img
    # slug

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('date_created',)










# Topics / Tags
# Projects
