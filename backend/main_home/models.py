from django.db import models
from patients.models import Patient
from django.db import models
from patients.models import Patient
from doctors.models import Doctor

# Create your models here.
class Stats(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    icon = models.CharField(max_length=10, default="")
    label = models.CharField(max_length=100,choices=[("consultation","Consultations"),("avg_doc_rating","Avg Doc Rating"),("pending_reviews","Pending Reviews"),("prescriptions","Prescriptions")])
    val = models.CharField(max_length=50)
    delta = models.CharField(max_length=100)
    up = models.BooleanField(default=True)
    color = models.CharField(max_length=10,choices=[("g","green"),("r","red")])


class Consultation(models.Model):
    STATUS_CHOICES = [
        ("upcoming", "Upcoming"),
        ("completed", "Completed"),
        ("recent", "Recent"),
    ]
    patient = models.ForeignKey(
        Patient,
        on_delete=models.CASCADE,
        related_name="consultations"
    )
    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.CASCADE,
        related_name="consultations"
    )
    scheduled_date = models.DateField()
    scheduled_time = models.TimeField()
    duration = models.PositiveIntegerField(
        help_text="Duration in minutes",
        default=30
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="upcoming"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["scheduled_date", "scheduled_time"]

    def __str__(self):
        return f"{self.patient.name} - {self.doctor.name}"
