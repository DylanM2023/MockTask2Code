import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";
import {jwtDecode} from "jwt-decode"

const Tickets = () => {
    
    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [teen, setTeen] = useState(0)
    const [infant, setInfant] = useState(0)
    const [price, setPrice] = useState(0)

    useEffect(()=>{
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        if(localStorage.getItem("access_token") === null){
            window.location.href = '/login'
        }
    }, []);

    const submit = () => { 

        for (let i = 0; i < adult; i++ ){
            
        const token = localStorage.getItem('access_token');
        const decoded = jwtDecode(token);

        const reservation = {
                User_id : decoded.user_id,
                Ticket_type: 'Adult',
        };
        
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.post('http://localhost:8000/Tickets', reservation, {headers: {'Content-Type':'application/json'}}, {withCredentials: true})};

        for (let i = 0; i < child; i++ ){
            
            const token = localStorage.getItem('access_token');
            const decoded = jwtDecode(token);
    
            const reservation = {
                    User_id : decoded.user_id,
                    Ticket_type: 'Child',
            };
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
            axios.post('http://localhost:8000/Tickets', reservation, {headers: {'Content-Type':'application/json'}}, {withCredentials: true})};
    
        for (let i = 0; i < teen; i++ ){
            
            const token = localStorage.getItem('access_token');
            const decoded = jwtDecode(token);
        
            const reservation = {
                    User_id : decoded.user_id,
                    Ticket_type: 'Teen',
            };
                
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
            axios.post('http://localhost:8000/Tickets', reservation, {headers: {'Content-Type':'application/json'}}, {withCredentials: true})};

        for (let i = 0; i < infant; i++ ){
            
            const token = localStorage.getItem('access_token');
            const decoded = jwtDecode(token);
            
            const reservation = {
                    User_id : decoded.user_id,
                    Ticket_type: 'Infant',
            };
                    
                    
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
            axios.post('http://localhost:8000/Tickets', reservation, {headers: {'Content-Type':'application/json'}}, {withCredentials: true})};
            window.location.href = '/account'
        };
    
    return ( <>
            <NavBar/>
            <div className="desktop:place-items-center">
                <h1 className="text-5xl font-bold p-1.5 my-12 text-center">Tickets</h1>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h2 className="font-bold text-3xl">Adult</h2>
                    <p className="text-xl">18 and Over Price: £16.00  <button className='border-2 border-black w-10 rounded-2xl' onClick={()=> {setAdult(adult + 1), setPrice(price + 16)}}>{adult}</button> </p>
                </div>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h2 className="font-bold text-3xl">Child</h2>
                    <p p className="text-xl">13 and Under Price: £8.00  <button className='border-2 border-black w-10 rounded-2xl' onClick={()=>{setChild(child+1), setPrice(price + 8)}}>{child}</button> </p>
                </div>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h2 className="font-bold text-3xl">Teen</h2>
                    <p p className="text-xl">14 and Over Price: £12.00  <button className='border-2 border-black w-10 rounded-2xl' onClick={()=>{setTeen(teen + 1), setPrice(price + 12)}}>{teen}</button> </p>
                </div>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h2 className="font-bold text-3xl">Infant</h2>
                    <p p className="text-xl">2 and Under Price: £00.00  <button className='border-2 border-black w-10 rounded-2xl' onClick={()=>{setInfant(infant + 1)}}>{infant}</button> </p>
                </div>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h1 className="font-bold text-3xl">Price:£{price}.00 <button className="border-4 rounded-xl p-1.5 border-black" onClick={submit}>Checkout</button></h1>
                    <a href="/ticket-checkout" className="text-2xl font-bold">RESET</a>
                </div>
            </div>
            </> );
}

export default Tickets;