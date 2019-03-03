"""
Maps urls to blog app views
"""
from django.urls import path
from blog import views



urlpatterns = [
    path('', views.PostListView.as_view(), name='post-list'),
    path('<int:pk>/', views.PostDetailView.as_view(), name='post-detail'),
    path('<slug>/', views.PostDetailView.as_view(), name='post-detail-slug'),
]
