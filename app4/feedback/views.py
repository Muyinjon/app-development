from django.shortcuts import render
from django.views.generic import ListView, CreateView
#'reverse_lazy' reverses and resolves URLs when its needed
from django.urls import reverse_lazy

from .models import Feedback
from .forms import PostForm

# Create your views here.
class HomePageView(ListView):
    model = Feedback
    template_name = 'index.html'

#view to allow users to upload new images 'form.py'
class CreatePostView(CreateView):
    model = Feedback
    template_name = 'feedback.html'
    form_class = PostForm
    success_url = reverse_lazy('index')