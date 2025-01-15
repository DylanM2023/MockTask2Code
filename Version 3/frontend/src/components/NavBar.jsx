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
    <nav className="flex bg-green-600 h-12 justify-center">
        <a href='/' className="flex-grow p-2.5 text-lg font-bold">RIDGET-ZOO-ADVENTURES</a>
        <a href="/shop" className="text-center py-1.5 px-0.5 text-lg border-2 border-black">SHOP</a>
        <a href="/shop" className="py-1.5 px-0.5 text-lg border-2 border-black">MAP</a>
        {isAuth ? <Nav.Link href="/logout" className='py-1.5 px-0.5 text-lg border-2 border-black'>LOGOUT</Nav.Link> :  <Nav.Link href="/login" className='py-1.5 px-0.5 text-lg border-2 border-black'>LOGIN</Nav.Link>}
        <a href="/shop" className="py-1.5 text-lg border-2 px-1 border-black">ACC</a>
    </nav>
    </> 
    );
}
 
export default NavBar;