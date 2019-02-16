"""
Maps urls to blog app views
"""
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog import views

router = DefaultRouter()
router.register(r'posts', views.PostViewSet)


urlpatterns = [
    path('', include(router.urls)),
]


