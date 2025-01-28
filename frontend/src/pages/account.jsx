import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

const Account = () => {
    
    const [tickets, setTickets] = useState({
        User_id:'',
        Ticket_type: '',
        Ticket_id: '',
    })
    
    useEffect(()=>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.get(`http://localhost:8000/Tickets`).then(response => {
            console.log(response.data);
            setTickets(response.data)
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
            <div className="border-2 w-60">
                <li>Username:</li>
                <li>Email:</li>
                <li>Password:</li>
            </div>
            <h1 className="font-bold text-3xl my-10">Tickets</h1>
            <div className="border-2 w-60">
                <li>Ticket Type:</li>
                <li>Ticket ID:</li>
            </div>
            <h1 className="font-bold text-3xl my-10">Hotels</h1>
            <div className="border-2 w-60">
                <li>Room Type:</li>
                <li>RoomKey ID:</li>
                <li>StartDate:</li>
                <li>EndDate:</li>
            </div>
        </div>
        </>
    );
}

export default Account;