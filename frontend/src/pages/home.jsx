import NavBar from "../components/NavBar"

const Home = () => {
    
    //  Home page has image of a forest covering it

    return ( 
    <>
        <body className="bg-landing_img h-screen w-screen bg-no-repeat bg-cover">
            <NavBar/>
            <div>
                <h1>Index Page</h1>
            </div>
        </body>
    </> 
    );
}

export default Home;