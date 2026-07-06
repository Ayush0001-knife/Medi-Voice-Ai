from django.contrib import admin
from .models import Doctors

# Register your models here.
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'rating', 'patient_attended', 'tier')

admin.site.register(Doctors, DoctorAdmin)
