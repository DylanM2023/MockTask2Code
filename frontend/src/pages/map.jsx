import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

const Map = () => {
    
    const [searchinput, setSearchInput] = useState('')
    const [animals, setAnimals] = useState([])
    const APIKey =  'wWaK9bUJK0xVDgk4URxHyQ==BqrAR7tQpRBct2KK'


    useEffect(()=>{
        if(localStorage.getItem("access_token") === null){
            window.location.href = '/login'
        }

    }, [])

    const handle_search = async ()=> {
            try{
                const response = await axios.get(`https://api.api-ninjas.com/v1/animals`, {
                    headers: {
                        'X-Api-Key': APIKey,
                    },
                    params: {
                        name: searchinput,
                    }
                })
            if (response.data && Array.isArray(response.data)){
                setAnimals(response.data)
            }
            else{
                setAnimals([])
            }
            } catch (error){
                console.error('There was an error', error)
            };  
    };  

    return ( 
    
    <>
    <div>
        <NavBar/>
        <div className="place-items-center flex-col">
            <div className="bg-map_img h-80 my-10 w-2/3 bg-cover bg-center"></div>
            <div className="flex flex-col">
                <input type="text"
                value={searchinput}
                placeholder="Search Animals"
                onChange={(e)=> {setSearchInput(e.target.value)}}
                className="border-2 border-black"
                />
                <button className='my-5 border-2 border-black rounded-lg hover:bg-slate-300' onClick={handle_search}>Search</button>
            </div>
            <ul>{animals.length > 0 ? (animals.map((info, index)=>(
                    <li key={index} className="">
                        <strong>Name: </strong>{info.name} <br />
                        <a className="text-blue-400 font-bold" href={`/animalinfo?name=${info.name}`}>Learn More</a>
                    </li>
                ))):(<p></p>)}</ul> 
        </div>
    </div>
    </> 
    );
}

export default Map;