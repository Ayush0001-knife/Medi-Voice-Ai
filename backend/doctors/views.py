from django.shortcuts import render
from .models import Doctors
from .serializer import DoctorsSerializer
from rest_framework import generics


# Create your views here.
class DoctorsListCreateView(generics.ListCreateAPIView):
    queryset = Doctors.objects.all()
    serializer_class = DoctorsSerializer
   
