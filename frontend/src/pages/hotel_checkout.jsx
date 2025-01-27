import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import axios from "axios";
import {jwtDecode} from "jwt-decode"

const Hotels = () => {
    
    const [start_date, setStart_Date] = useState(new Date().toJSON().slice(0,10))
    const [end_date, setEnd_Date] = useState()
    const [room_type, setRoom_Type] = useState()
    const [price, setPrice] = useState(0)

    var date = new Date(start_date)
    date.setDate(date.getDate() + 2)
    const new_date = date.toJSON().slice(0,10)

    useEffect(()=>{
        if (localStorage.getItem("access_token") === null){
            window.location.href = "/login"
        }
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        setRoom_Type('single')
    }, [])
    
    const submit = () => { 
            
        const token = localStorage.getItem('access_token');
        const decoded = jwtDecode(token);

        const reservation = {
                User_id : decoded.user_id,
                Room_type: room_type,
                Start_date:start_date,
                End_date:end_date,
        };
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access_token")}`;
        axios.post('http://localhost:8000/Hotel', reservation, {headers: {'Content-Type':'application/json'}}, {withCredentials: true});
        };

    return ( 
    <>

    <div>
        <NavBar/>
        <div className="">
            <h1 className="text-5xl font-bold my-5 text-center">Hotels</h1>
            <div className="place-items-center">
            {room_type == 'single' && (
                <>
                <div className="bg-single_room w-96 m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/5 desktop:h-96"></div>
                <div className="border-2 border-black w-96 h-22">
                    <h2 className="text-2xl font-bold">Single</h2>
                    <p className="p-1.5">This room has one single bed. This room is recommended for a single person.</p>
                </div>
                </>
            )}
            {room_type == 'double' && (
                <>
                <div className="bg-double_room w-96 m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/5 desktop:h-96"></div>
                <div className="border-2 border-black w-96 h-22">
                    <h2 className="text-2xl font-bold">Double</h2>
                    <p className="p-1.5">This room has one double bed. This room is recommended for two people</p>
                </div>
                </>
            )}
            {room_type == 'family' && (
                <>
                <div className="bg-single_room w-96 m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/5 desktop:h-96"></div>
                <div className="border-2 border-black w-96 h-22">
                    <h2 className="text-2xl font-bold">Family</h2>
                    <p className="p-1.5">This room has a two single beds and one double bed. Recommended for families of four.</p>
                </div>
                </>
            )}
            {room_type == 'suite' && (
                <>
                <div className="bg-single_room w-96 m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/5 desktop:h-96"></div>
                <div className="border-2 border-black w-96 h-22">
                    <h2 className="text-2xl font-bold">Suite</h2>
                    <p className="p-1.5">The suite has a double bed and a sofa bed. This room features a living room and desk area. This room is recommended for two to four people.</p>
                </div>
                </>
            )}
            <div className="w-58 my-1">
                <button className="font-bold px-2 border-2 border-black hover:bg-slate-100" onClick={()=>{setRoom_Type('single'), setPrice(100)}}>Single</button>
                <button className="font-bold px-2 border-2 border-black hover:bg-slate-100" onClick={()=>{setRoom_Type('double'), setPrice(200)}}>Double</button>
                <button className="font-bold px-2 border-2 border-black hover:bg-slate-100" onClick={()=>{setRoom_Type('family'), setPrice(300)}}>Family</button>
                <button className="font-bold px-2 border-2 border-black hover:bg-slate-100" onClick={()=>{setRoom_Type('suite'), setPrice(500)}}>Suite</button>
            </div>
            <div className="flex flex-col w-96">
                <h3 className="font-bold text-xl">Date of stay</h3>
                <input className='border-2 border-black text-slate-600 text-xl' type="date" min={new Date().toJSON().slice(0,10)} onChange={(e) => {setStart_Date(e.target.value)}}/>
                <input className='border-2 border-black text-slate-600 text-xl' type="date" min={start_date} max={new_date} onChange={(e) => {setEnd_Date(e.target.value)}}/>
            </div>
            <div className="border-4 border-black py-6 px-2 text-center w-96 h-26 desktop:w-3/6">
                    <h1 className="font-bold text-2xl">Price:£{price}.00 <button className="border-4 rounded-xl p-1.5 border-black" onClick={submit}>Checkout</button></h1>
                    <a href="/ticket-checkout" className="text-xl font-bold">RESET</a>
                </div>
            </div>
        </div>
    </div>

    </> );
}
 
export default Hotels;