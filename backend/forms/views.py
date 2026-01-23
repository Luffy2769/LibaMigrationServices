from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FormSubmission

@api_view(['POST'])
def submit_form(request):
    FormSubmission.objects.create(
        name=request.data['name'],
        email=request.data['email'],
        phone=request.data['phone'],
        service=request.data['service']
    )
    return Response({'status': 'success'})
