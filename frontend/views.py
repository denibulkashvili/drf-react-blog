"""
Creates views for frontend app
"""
from django.shortcuts import render

# Create your views here.
def index(request):
    """
    Creates index view
    """
    return render(request, 'frontend/index.html')
    