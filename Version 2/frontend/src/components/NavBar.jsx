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
    <nav className="flex bg-green-600 h-12">
        <h1 className="flex-grow text-4xl font-bold">ZOO-WEBSITE-NAME</h1>
        <a href="/shop" className="p-1 text-3xl border-2 border-black">SHOP</a>
        <a href="/shop" className="p-1 text-3xl border-2 border-black">MAP</a>
        {isAuth ? <Nav.Link href="/logout" className='p-1 text-3xl border-2 border-black'>LOGOUT</Nav.Link> :  <Nav.Link href="/login" className='p-1 text-3xl border-2 border-black'>LOGIN</Nav.Link>}
        <a href="/shop" className="p-1 text-3xl border-2 border-black">ACCOUNT</a>
    </nav>
    </> 
    );
}
 
export default NavBar;