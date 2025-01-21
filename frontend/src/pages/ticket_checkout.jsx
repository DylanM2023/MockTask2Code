import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const Tickets = () => {
    
    const [adult, setAdult] = useState()
    const [child, setChild] = useState()
    const [student, setStudent] = useState()
    const [infant, setInfant] = useState()
    const [price, setPrice] = useState()

    useEffect(()=>{
        setPrice(0.00)
        setAdult(0)
        setChild(0)
        setStudent(0)
        setInfant(0)
    }, []);

    // Logic Here
    
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
                    <p p className="text-xl">14 and Over Price: £12.00  <button className='border-2 border-black w-10 rounded-2xl' onClick={()=>{setStudent(student + 1), setPrice(price + 12)}}>{student}</button> </p>
                </div>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h2 className="font-bold text-3xl">Infant</h2>
                    <p p className="text-xl">2 and Under Price: £00.00  <button className='border-2 border-black w-10 rounded-2xl' onClick={()=>{setInfant(infant + 1)}}>{infant}</button> </p>
                </div>
                <div className="border-4 border-black py-6 px-2 text-center desktop:w-3/6">
                    <h1 className="font-bold text-3xl">Price:£{price}.00 <button className="border-4 rounded-xl p-1.5 border-black">Checkout</button></h1>
                    <a href="/ticket-checkout" className="text-2xl font-bold">RESET</a>
                </div>
            </div>
            </> );
}

export default Tickets;