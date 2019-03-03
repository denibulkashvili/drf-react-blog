"""
Creates model classes for blog app
"""
from django.db import models
from django.template.defaultfilters import slugify

class Tag(models.Model):
    """
    Creates a tag model class with many-to-many relationship with Post
    """
    name = models.CharField(max_length=30, blank=False, default='other')

    def __str__(self):
        return self.name


class Post(models.Model):
    """Creates a Post model class"""
    title = models.CharField(max_length=150, blank=True, default='')
    body = models.TextField()
    date_created = models.DateField()
    tldr = models.TextField(max_length=300, blank=True, default='')
    tags = models.ManyToManyField(Tag)
    cover = models.ImageField(default="")
    slug = models.SlugField()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Post, self).save(*args, **kwargs)

    class Meta:
        ordering = ('date_created',)










# Topics / Tags
# Projects
