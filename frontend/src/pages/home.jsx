import NavBar from "../components/NavBar"
import { useEffect } from "react"

const Home = () => {
    
    //  Home page has image of a forest covering it

    
    return ( 
    <>
        <body className="bg-landing_img h-max w-auto bg-no-repeat bg-cover lg:bg-black border-2 border-red-500">
            <NavBar/>
                <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black"></div>
                <p className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
                <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black"></div>
                <p className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
                <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black"></div>
                <p className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
        </body>
    </> 
    );
}

export default Home;