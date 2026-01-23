from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FormSubmission
from .models import cForm

@api_view(['POST'])
def submit_form(request):
    FormSubmission.objects.create(
        name=request.data['name'],
        email=request.data['email'],
        phone=request.data['phone'],
        service=request.data['service']
    )
    return Response({'status': 'success'})
    
@api_view(['POST'])
def consultation_form(request):
    cForm.objects.create(
        name=request.data['name'],
        email=request.data['email'],
        phone=request.data['phone'],
        inquiryType=request.data['inquiryType'],
        description=request.data['description']
    )
    return Response({'status': 'success'})
