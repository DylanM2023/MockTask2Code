from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD="email"
    REQUIRED_FIELDS=["username"]

    def __str__(self) -> str:
        return self.email

class TicketReserve(models.Model):
    User_id = models.CharField(max_length=5000)
    Ticket_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Ticket_type = models.CharField(max_length=15)

class HotelReserve(models.Model):
    User_id = models.CharField(max_length=5000)
    RoomKey_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    Room_type = models.CharField(max_length=100)
    Start_date = models.DateField(auto_now=False)
    End_date = models.DateField(auto_now=False)

