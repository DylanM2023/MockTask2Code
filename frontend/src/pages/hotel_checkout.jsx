import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import axios from "axios";
import {jwtDecode} from "jwt-decode"

const Hotels = () => {
    
    const [start_date, setStart_Date] = useState()
    const [end_date, setEnd_Date] = useState()

    useEffect(()=>{
        if (localStorage.getItem("access_token") === null){
            window.location.href = "/login"
        }
    }, [])
    
    const submit = () => { 
            
        const token = localStorage.getItem('access_token');
        const decoded = jwtDecode(token);

        const reservation = {
                User_id : decoded.user_id,
                Room_type: 'Single',
                Start_date:start_date,
                End_date:end_date,
        };
        
        axios.post('http://localhost:8000/Hotel', reservation, {headers: {'Content-Type':'application/json'}}, {withCredentials: true});
        };

    return ( 
    <>

    <div>
        <NavBar/>
        <div className="">
            <h1 className="text-5xl font-bold my-5 text-center">Hotels</h1>
            <div className="place-items-center">
                <div className="bg-single_room w-96 m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/5 desktop:h-96"></div>
                <div className="border-2 border-black w-96 h-22">
                    <h2 className="text-2xl font-bold">Single</h2>
                    <p className="p-1.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, deleniti?</p>
                </div>
            <div className="border-2 border-black w-58 my-1">
                <button className="font-bold px-1">Single</button>
                <button className="font-bold px-1">Double</button>
                <button className="font-bold px-1">Family</button>
                <button className="font-bold px-1">Suite</button>
            </div>
            <div className="">
                <h3>Date of stay</h3>
                <input type="date" min={new Date().toJSON().slice(0,10)} onChange={(e) => {setStart_Date(e.target.value)}}/>
                <input type="date" onChange={(e) => {setEnd_Date(e.target.value)}}/>
            </div>
            <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h1 className="font-bold text-3xl">Price:£00.00 <button className="border-4 rounded-xl p-1.5 border-black" onClick={submit}>Checkout</button></h1>
                    <a href="/ticket-checkout" className="text-2xl font-bold">RESET</a>
                </div>
            </div>
        </div>
    </div>

    </> );
}
 
export default Hotels;