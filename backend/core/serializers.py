from .models import CustomUser, TicketReserve, HotelReserve
from rest_framework import serializers

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ("id", "username", "email")

class TicketReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = TicketReserve
        fields = ["User_id", "Ticket_id", "Ticket_type"]

class HotelReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelReserve
        fields = ["User_id", "RoomKey_id", "Room_type", "Start_date", "End_date"]

class UserRegistrationSerializer(serializers.ModelSerializer):
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ("id", "username", "email", "password1", "password2")
        extra_kwargs = {"password": {"write_only": True}}

    def validate(self, attrs):
        if attrs['password1'] != attrs['password2']:
            raise serializers.ValidationError("Passwords do not match!")

        password = attrs.get("password1", "")
        if len(password) < 8:
            raise serializers.ValidationError(
                "Passwords must be at least 8 characters!")

        return attrs

    def create(self, validated_data):
        password = validated_data.pop("password1")
        validated_data.pop("password2")

        return CustomUser.objects.create_user(password=password, **validated_data)