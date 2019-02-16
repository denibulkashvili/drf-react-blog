"""
Maps urls for frontend app
"""
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
]
