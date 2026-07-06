from django.db import models

# Create your models here.
class Patient(models.Model):
        name = models.CharField(max_length=255)
        age = models.IntegerField()
        email = models.EmailField(unique=True,blank=False,null=False)
        password = models.CharField(max_length=255,blank=False,null=False)
        created_at = models.DateTimeField(auto_now_add=True)

        def __str__(self):
            return self.name 
        
        class Meta:
            db_table = "patient"
            verbose_name = "Patient"
            verbose_name_plural = "Patients"


    
