"""
Creates views for blog app
"""

from rest_framework import viewsets
from blog.models import Post
from blog.serializers import PostSerializer





class PostViewSet(viewsets.ModelViewSet):
    """
		ModelViewSet supports `list`, `create`, `retrieve`, `update` and `destroy` actions.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer
