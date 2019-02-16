"""
Creates serializers for blog app
"""

from rest_framework import serializers
from blog.models import Post

class PostSerializer(serializers.HyperlinkedModelSerializer):
    """Hyperlinked serializer for Post model"""

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'date_created')
        