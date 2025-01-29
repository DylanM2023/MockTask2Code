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
        <div className="flex-col h-screen w-auto bg-no-repeat bg-cover bg-center">
            <NavBar/>
        <div className="place-items-center">
            <div className="bg-suite_room w-96 m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-3/6 desktop:h-96"><a href="/hotel-checkout" className="flex flex-grow h-full desktop:h-full hover:border-2 hover:border-white"></a></div>
                <div className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1">
                    <h1 className="font-bold py-1.5 text-xl">Suite Room</h1>
                    <p className="">The suite has a double bed and a sofa bed. This room features a living room and desk area. This room is recommended for two to four people.</p>
                </div>
                <div className="desktop:flex desktop:place-content-center">
                    <div className="flex px-14">
                            <div>
                                <div className="bg-ticket_icon hover:bg-slate-200 w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black "><a className='flex flex-grow border-2 border-black h-28' href="/ticket-checkout"><p className='font-bold py-32 px-2'>ADULT £16</p></a></div>
                            </div>
                            <div className="">
                                <div className="bg-ticket_icon hover:bg-slate-200 w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/ticket-checkout"><p className='font-bold py-32 px-3.5'>CHILD £8</p></a></div>
                            </div>
                        </div>
                        <div className="flex px-14">
                            <div className="">
                                <div className="bg-ticket_icon hover:bg-slate-200 w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/ticket-checkout"><p className='font-bold py-32 px-3.5'>TEEN £12</p></a></div>
                            </div>
                        <div className="">
                            <div className="bg-ticket_icon hover:bg-slate-200 w-28 m-10 h-28 bg-no-repeat bg-center bg-cover border-2 border-black"><a className='flex flex-grow border-2 border-black h-28' href="/ticket-checkout"><p className='font-bold py-32 px-2.5'>INFANT £0</p></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Shop;