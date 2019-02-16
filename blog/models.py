"""
Creates model classes for blog app
"""

from django.db import models

# Posts
class Post(models.Model):
    """Creates a Post model class"""
    title = models.CharField(max_length=100, blank=True, default='')
    body = models.TextField()
    date_created = models.DateField(auto_now_add=True)

    # cover_img
    # tags
    # slug

    class Meta:
        ordering = ('date_created',)










# Topics / Tags
# Projects
