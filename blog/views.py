"""
Creates views for blog app
"""

from rest_framework import generics 
from blog.models import Post
from blog.serializers import PostSerializer


class PostListView(generics.ListAPIView):
    """
	PostListView class to get the list of posts
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(generics.RetrieveAPIView):
    """
    RetrieveAPIView class to get single post
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer