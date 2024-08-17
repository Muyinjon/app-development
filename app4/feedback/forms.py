from django import forms
from .models import Feedback

class PostForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['name', 'email','message','rating']
        widgets = {'name': forms.TextInput(attrs={'class': 'nameinput', 'placeholder': 'Name'}),
            'email': forms.EmailInput(attrs={'class': 'emailinput', 'placeholder': 'Email'}),
            'message': forms.Textarea(attrs={'class': 'messageinput', 'placeholder': 'Write your message'}),
            'rating': forms.RadioSelect(attrs={'class': 'star-rating'}, choices=[(1,'1'),(2,'2'),(3,'3'),(4,'4'),(5,'5')]),
            }