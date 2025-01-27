import NavBar from "../components/NavBar"
import { useEffect } from "react"

const Home = () => {
    
    //  Home page has image of a forest covering it

    
    
    return ( 
    <>
        <div className="bg-landing_img h-auto w-auto bg-no-repeat bg-cover border-0">
            <NavBar/>
            <div className="desktop:place-items-center">
                <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/3 desktop:h-96"></div>
                    <p className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1 desktop:w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
                    <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/3 desktop:h-96 "></div>
                    <p className="m-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1 desktop:w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
                    <div className="bg-landing_img w-auto m-10 h-60 bg-no-repeat bg-cover border-2 border-black bg-center desktop:w-2/3 desktop:h-96"></div>
                    <p className="mx-10 text-white bg-slate-600 bg-opacity-80 border-2 border-black px-1 desktop:w-2/3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit quae pariatur recusandae tempora, placeat ad doloremque laboriosam vero et fugiat esse cum vitae temporibus iste labore! Possimus, a dolorum!</p>
                </div>
            </div>
    </> 
    );
}

export default Home;