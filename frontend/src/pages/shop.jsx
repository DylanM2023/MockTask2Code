import { useEffect } from "react";
import NavBar from "../components/NavBar"

const Shop = () => {
    
    // logic here
    
    useEffect(() => {
        if (localStorage.getItem('access_token') === null){
            window.location.href = '/login'
        }
    }, []);

    return ( 
        <>
        <div className="flex-col bg-landing_img h-screen w-auto bg-no-repeat bg-cover lg:bg-black border-2 border-red-500">
            <NavBar/>
            <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black"></div>
            <div className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1">
                <h1 className="font-bold py-1.5 text-xl">Room Number/Name</h1>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae</p>
            </div>
            <div className="flex px-14">
                <div className="">
                    <div className="bg-ticket_icon w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/"></a></div>
                </div>
                <div className="">
                    <div className="bg-ticket_icon w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/"></a></div>
                </div>
            </div>
            <div className="flex px-14">
                <div className="">
                    <div className="bg-ticket_icon w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/"></a></div>
                </div>
                <div className="">
                    <div className="bg-ticket_icon w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/"></a></div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Shop;