from django.db import models

# Create your models here.

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField(max_length=500)
    rating =  models.PositiveSmallIntegerField(
        choices=[(1,'1'),(2,'2'),(3,'3'),(4,'4'),(5,'5')]
    )
    def __str__(self):
        return self.name    