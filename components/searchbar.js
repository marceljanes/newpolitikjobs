import Autocomplete from "react-google-autocomplete";
import { useState, useEffect } from "react";

export default function SearchBar({jobs, setJobs}) {   
    const [keywords_holder, setKeywords_Holder] = useState('')
    const [ort, setOrt] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')


    useEffect(() => {

        let input = document.getElementById("inputbox")
        input.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault()
                document.getElementById("myBtn").click()
                startSearchBackend()
                
              }

        })
        
        
            

    }, [])



    const startSearchBackend = async() => {                
        const res = await fetch(`/api/jobs/all?keyword=${keywords_holder}`)
        const jobs_from_api = await res.json()
        // Es kommt ein Objekt zurück und die Jobs sind im Schlüssel "jobs"
        const jobs_from_api_array = jobs_from_api.jobs 
        setJobs(jobs_from_api_array)
        
    }




    const startSearch = (e) => {
        e.preventDefault()            
        startSearchBackend()
    }


    return (
        <div id="inputbox" className="flex m-2 md:space-x-4 flex-col sm:flex-row w-full md:w-1/2 h-full">
             <div className="w-full md:w-1/3 bg-slate-500 h-12 rounded mb-1 sm:mb-0">
                <input onChange={(e) => setKeywords_Holder(e.target.value) } className="h-full text-gray-500 pl-2 w-full rounded outline-none" type="text" name="keywords" />  
            </div>
            <div className="w-full md:w-1/3 bg-slate-500 h-12 rounded mb-1 sm:mb-0"> 
                <Autocomplete
                    apiKey={'AIzaSyDuGVU7vliA4SJPZ38gH5QYq2rb-djspPY'}
                    className="h-full text-gray-500 pl-2 w-full rounded outline-none"                
                    onPlaceSelected={(place) => {
                        console.log(place);
                        setOrt(place.formated_address)
                        setLat(place.geometry.location.lat());
                        setLong(place.geometry.location.lng())
                        console.log(place.geometry.location.lat())
                        console.log(place.geometry.location.lng())
                    }}
                    options={{
                        types: ["(regions)"],
                        componentRestrictions: { country: "de" },
                    }}
                    defaultValue="Berlin"
                />               
                 
            </div>
            <div className="bg-slate-500 w-full md:w-1/3 h-12 rounded">
                <button id="myBtn" onClick={(e) => {startSearch(e)}} className="bg-blue-400 outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-full w-full">
                    Suche
                </button>
            </div>
            
                      
                                
                
            
        </div>
    )
}

