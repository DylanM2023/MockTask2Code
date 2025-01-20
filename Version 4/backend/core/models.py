from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["username"]

    def __str__(self) -> str:
        return self.email

class TicketReserve(models.Model):
    User_id = models.CharField(max_length=5000)
    Ticket_id = models.CharField(max_length=5000)

