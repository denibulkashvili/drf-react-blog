"""
Creates serializers for blog app
"""

from rest_framework import serializers
from blog.models import Post, Tag

class TagSerializer(serializers.ModelSerializer):
    """Serializer class for Tag model"""
    class Meta:
        model = Tag
        fields = ("id", "name")

class PostSerializer(serializers.ModelSerializer):
    """Serializer class for Post model"""
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'date_created', 'tags', 'cover', 'slug')
        lookup_field = 'slug'
