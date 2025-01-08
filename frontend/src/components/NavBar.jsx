const NavBar = () => {
    
    // Navbar with 4 Navigation options
    return ( 
    <>
    <nav className="flex bg-green-600 h-12">
        <h1 className="flex-grow text-4xl font-bold">ZOO-WEBSITE-NAME</h1>
        <a href="/shop" className="p-1 text-3xl border-2 border-black">SHOP</a>
        <a href="/shop" className="p-1 text-3xl border-2 border-black">MAP</a>
        <a href="/shop" className="p-1 text-3xl border-2 border-black">LOGIN</a>
        <a href="/shop" className="p-1 text-3xl border-2 border-black">ACCOUNT</a>
    </nav>
    </> 
    );
}
 
export default NavBar;