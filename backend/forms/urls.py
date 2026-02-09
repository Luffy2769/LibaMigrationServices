from django.urls import path
from . import views

urlpatterns = [
    path('submit/', views.submit_form),
    path('consultationForm/', views.consultation_form),
    path('quoteForm/', views.quote_form)
]
