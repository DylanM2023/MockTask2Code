import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect} from 'react';

const NavBar = () => {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('access_token') !== null) {
            setIsAuth(true); 
        }
    }, [isAuth]);

    // Navbar with 4 Navigation options
    return ( 
    <>
    <nav className="flex bg-green-600 h-12 w-auto ">
        <a href='/' className="text-left flex-grow p-2.5 text-lg font-bold hover:text-white">RIDGET-ZOO-ADVENTURES</a>
        <a href="/shop" className="text-center py-1.5 px-0.5 text-lg border-2 border-black hover:bg-green-700 hover:text-white rounded-xl desktop:flex-grow">SHOP</a>
        <a href="/" className="py-1.5 px-0.5 text-center text-lg border-2 border-black hover:bg-green-700 hover:text-white rounded-xl desktop:flex-grow">MAP</a>
        {isAuth ? <Nav.Link href="/logout" className='py-1.5 px-0.5 text-lg border-2 border-black hover:bg-green-700 hover:text-white rounded-xl desktop:flex-grow text-center'>LOGOUT</Nav.Link> :  <Nav.Link href="/login" className='text-center py-1.5 px-0.5 text-lg border-2 border-black hover:bg-green-700 hover:text-white rounded-xl desktop:flex-grow'>LOGIN</Nav.Link>}
        <a href="/account" className="text-center py-1.5 text-lg border-2 px-1 border-black hover:bg-green-700 hover:text-white rounded-xl desktop:flex-grow">ACC</a>
    </nav>
    </> 
    );
}
 
export default NavBar;