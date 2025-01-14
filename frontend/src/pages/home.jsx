import NavBar from "../components/NavBar"
import { useEffect } from "react"

const Home = () => {
    
    //  Home page has image of a forest covering it

    
    return ( 
    <>
        <body className="bg-landing_img h-full w-full bg-no-repeat bg-cover lg:bg-black">
            <NavBar/>
            <div className="flex flex-col justify-center border-2 border-red-500 h-svh">
                <div className="bg-landing_img w-auto m-10 h-2/6 bg-no-repeat bg-cover"></div>
                <p className="m-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
            </div>
        </body>
    </> 
    );
}

export default Home;