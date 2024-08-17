from django.shortcuts import render
from django.views.generic import ListView, CreateView
from django.urls import reverse_lazy
from django.db.models import Avg

from .models import Feedback
from .forms import PostForm

# Create your views here.
class HomePageView(ListView):
    model = Feedback
    template_name = 'index.html'
    context_object_name = 'object_list'

    # Override the get_context_data method to add the average rating
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['average_rating'] = Feedback.objects.aggregate(Avg('rating'))['rating__avg']
        return context

class CreatePostView(CreateView):
    model = Feedback
    template_name = 'feedback.html'
    form_class = PostForm
    success_url = reverse_lazy('index')
