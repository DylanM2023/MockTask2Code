import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";


const AnimalDetails = () => {
    const [details, setDetails] = useState();
    const location = useLocation()
    const navigate = useNavigate()
    const params = new URLSearchParams(location.search)
    const animalName = params.get("name")
    const APIKey = 'wWaK9bUJK0xVDgk4URxHyQ==BqrAR7tQpRBct2KK'

    useEffect(()=>{
        const fetchInfo = async () => {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`,{
                    headers: {
                        'X-Api-Key': APIKey,
                    },
                });
                const data = await response.json();
                
                if(data.length > 0) {
                    setDetails(data[0])
                }
            } catch (error){
                console.error('Error with api call!', error)
            };
        };
        fetchInfo();
    }, [animalName])

    console.log(details)

    return ( 
    <>
    <NavBar/>
    <div>{details != null && 
        (<>
            <div className="desktop:place-items-center">
                <h1 className="border-2 text-2xl py-2 desktop:w-96">Name: {details.name}</h1>
                <h1 className="border-2 text-2xl py-2 desktop:w-96">Diet: {details.characteristics.diet}</h1>
                <h1 className="border-2 text-2xl py-2 desktop:w-96">Habitat: {details.characteristics.habitat}</h1>
                <h1 className="border-2 text-2xl py-2 desktop:w-96">Biggest Threat: {details.characteristics.biggest_threat}</h1>
                <h1 className="border-2 text-2xl py-2 desktop:w-96">Weight: {details.characteristics.weight}</h1>
                <h1 className="border-2 text-2xl py-2 desktop:w-96">Location: {details.locations[0]}</h1>
                <a className='border-2 border-black rounded-lg hover:bg-slate-300' href="/map">Return to Map</a>
            </div>
        </>)}
    </div>
    <div>{details == null && 
        (<>
        <div className="place-items-center desktop:my-80 my-24"> 
            <h1 className="desktop:text-9xl text-7xl font-bold">Loading...</h1>
        </div>
        </>)}
    </div>



    </> );
    
}

export default AnimalDetails;