from django.urls import path
from .views import HomePageView, CreatePostView

urlpatterns = [
    path('',HomePageView.as_view(), name='index'),
    path('feedback', CreatePostView.as_view(), name='feedback'),
]