from django.core.management.base import BaseCommand
from faker import Faker
from random import choice, randint, uniform
from doctors.models import Doctors

fake = Faker()

SPECIALTIES = [
    "General Physician",
    "Cardiology",
    "Neurology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "ENT",
    "Pulmonology",
    "Ophthalmology",
    "General Medicine",
]

EMOJIS = {
    "General Physician": "👨‍⚕️",
    "Cardiology": "❤️",
    "Neurology": "🧠",
    "Dermatology": "🧴",
    "Orthopedics": "🦴",
    "Pediatrics": "👶",
    "Psychiatry": "🧠",
    "ENT": "👂",
    "Pulmonology": "🫁",
    "Ophthalmology": "👁️",
    "General Medicine": "🩺",
}

class Command(BaseCommand):
    help = "Generate fake doctors"

    def handle(self, *args, **kwargs):

        for _ in range(20):
            speciality = choice(SPECIALTIES)

            Doctors.objects.create(
                name=f"Dr. {fake.name()}",
                category=speciality,
                rating=round(uniform(4.2, 5.0), 1),
                patient_attended=randint(500, 5000),
                tier=choice([0, 1]),
                emoji=EMOJIS[speciality],
            )

        self.stdout.write(
            self.style.SUCCESS("20 doctors created successfully.")
        )