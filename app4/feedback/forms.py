from django import forms
from .models import Feedback

class PostForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['name', 'email','message','rating']
        widgets = {'name': forms.TextInput(attrs={'class': 'nameinput', 'placeholder': 'Name'}),
            'email': forms.EmailInput(attrs={'class': 'emailinput', 'placeholder': 'Email'}),
            'message': forms.Textarea(attrs={'class': 'messageinput', 'placeholder': 'Write your message'}),
            'rating': forms.Select(attrs={'class': 'ratinginput'}),
            }