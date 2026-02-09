from django.db import models

# Create your models here.

class FormSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    service = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

class cForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    inquiryType = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

class qForm(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    service = models.CharField(max_length=50)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
