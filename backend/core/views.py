from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status

class LogoutView(APIView):
    permission_classes = (IsAuthenticated,)
    def post(self, request):
        
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
class UserRegistrationAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserRegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh":str(token), "access": str(token.access_token)}
        return Response(data, status= status.HTTP_201_CREATED)
    

class AccountAPIView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomUserSerializer
    
    def get(self, request):
        user = request.user.id 
        user_info = [{"username": user_info.username, "email": user_info.email} for user_info in CustomUser.objects.filter(id=user)]
        return Response(user_info)
    
class TicketReservationView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = TicketReservationSerializer
    
    def get(self, request):
        user_id = request.user.id
        ticket_id = [{"User_id":ticket_id.User_id, "Ticket_id": ticket_id.Ticket_id, "Ticket_type": ticket_id.Ticket_type} for ticket_id in TicketReserve.objects.filter(User_id=user_id)]
        return Response(ticket_id)

    def post(self, request):
        serializer = TicketReservationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

class HotelReservationView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = HotelReservationSerializer

    def get(self, request):
        user_id = request.user.id
        hotel_id = [ {"User_id": hotel_id.User_id, "RoomKey_id": hotel_id.RoomKey_id, "Room_type": hotel_id.Room_type, "Start_date":hotel_id.Start_date, "End_date":hotel_id.End_date} for hotel_id in HotelReserve.objects.filter(User_id = user_id)]
        return Response(hotel_id)

    def post(self, request):
        serializer = HotelReservationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
