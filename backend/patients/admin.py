from django.contrib import admin
from .models import Patient
# Register your models here.
class PatientAdmin(admin.ModelAdmin):
    list_display = ("name", "age", "email","password", "created_at")
    search_fields = ("name", "email")
    list_filter = ("created_at",)
    
admin.site.register(Patient, PatientAdmin)
