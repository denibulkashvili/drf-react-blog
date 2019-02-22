"""
Register models in Django admin
"""
from django.contrib import admin
from blog.models  import Post, Tag

# Register your models here.
admin.site.register(Post)
admin.site.register(Tag)
