from django.shortcuts import render
from .models import Patient
from .serializer import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken



# Create your views here.
from rest_framework import generics
from .models import Patient
from .serializer import PatientSerializer


class PatientListCreateView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer


class PatientLoginView(APIView):

    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        try:
            patient = Patient.objects.get(email=email)
        except Patient.DoesNotExist:
            return Response(
                {"message": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        if patient.password != password:
            return Response(
                {"message": "Invalid password"},
                status=status.HTTP_401_UNAUTHORIZED
            )
        return Response({
               "message": "Login Successful",
               "patient": {
                   "id": patient.id,
                   "name": patient.name,
                   "email": patient.email,
    }
})

class PatientRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    lookup_field = "id,email"