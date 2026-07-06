from django.urls import path
from . import views

urlpatterns = [
    path('patients/',views.PatientListCreateView.as_view(),name='patients_details'),
    path('patient/login/',views.PatientLoginView.as_view(),name='patient_login'),
    path('patient/<str:email>/',views.PatientRetrieveUpdateDestroyView.as_view(),name='patient_details'),
]