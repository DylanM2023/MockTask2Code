import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import {QRCodeSVG} from 'qrcode.react'

const Account = () => {
    
    const [tickets, setTickets] = useState({
        User_id:'',
        Ticket_type: '',
        Ticket_id: '',
    })
    const [hotels, setHotels] = useState({
        User_id: '',
        RoomKey_id: '',
        Room_type: '',
        Start_date: '',
        End_date: '',
    })

    const [accounts, setAccounts] = useState({
        username: '',
        email: '',
    })

    useEffect(()=>{
        if (localStorage.getItem("access_token") === null){
            window.location.href = '/login'
        }

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.get(`http://localhost:8000/Tickets`).then(response => {
            setTickets(response.data)
        })
        .catch(error => {
            console.error(error);
        });
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.get(`http://localhost:8000/Hotel`).then(response => {
            setHotels(response.data)
        })
        .catch(error => {
            console.error(error);
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.get(`http://localhost:8000/Accounts`).then(response => {
            setAccounts(response.data)
        })
        .catch(error => {
            console.error(error);
        });
        
    }, [])

    return ( 
        <>
        <NavBar/>
        <div className="flex-col place-items-center">
            <h1 className="font-bold text-3xl my-10">User Details</h1>
            <ul>{accounts.length > 0 ? (accounts.map((info, index)=>(
                <li key={index}>
                    <strong>Username:</strong> {info.username} <br />
                    <strong>Email:</strong> {info.email}
                </li>
            ))):<p>No Account</p>}</ul>
            <h1 className="font-bold text-3xl my-10">Tickets</h1> 
            <ul>{tickets.length > 0 ? (tickets.map((ticket, index)=>(
                <li key={index}>
                    <strong>Type:</strong>{ticket.Ticket_type} <br />
                    <div>
                        <QRCodeSVG value = {ticket.Ticket_id} size = {128} level='H'/>
                    </div>
                </li>
            ))):(<p>No Tickets</p>)}</ul> 
            <h1 className="font-bold text-3xl my-10">Hotels</h1> 
            <ul>{hotels.length > 0 ? (hotels.map((hotel, index)=>(
                <li key={index}>
                    <strong>Type:</strong>{hotel.Room_type} <br />
                    <QRCodeSVG value = {hotel.RoomKey_id} size = {128} level='H'/>
                    <strong>StartDate:</strong> {hotel.Start_date} <br />
                    <strong>EndDate:</strong> {hotel.End_date} <br />
                </li>
            ))):(<p>No Hotels</p>)}</ul> 
        </div>      
        </>
    );
}

export default Account;