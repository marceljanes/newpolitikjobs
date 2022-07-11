import Autocomplete from "react-google-autocomplete";
import { useState, useEffect } from "react";
import Image from "next/image";


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
        let res
        console.log('keyword')
        console.log(keywords_holder)
        console.log('long')
        console.log(long)                
        if(long == '') {
            res = await fetch(`/api/jobs/all?keyword=${keywords_holder}`) }
        else {
            res = await fetch(`/api/jobs/all?keyword=${keywords_holder}&long=${long}&lat=${lat}`) 
        }

       


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
        
        <div className="w-full bg-slate-200 h-60 flex items-center justify-center relative bg-gradient-to-r from-neutral-800 to-neutral-800">
            <div className="w-24 h-24 bg-slate-400 absolute rounded-full bg-[url('/bg3.jpg')] bg-cover bg-center left-48 hidden xl:block"></div>            
            
            <div id="inputbox" className="flex m-2 md:space-x-4 flex-col sm:flex-row w-full md:w-1/2">
                
                <div className="w-full md:w-1/3 bg-slate-500 h-12 rounded mb-1 sm:mb-0">
                    <input onChange={(e) => setKeywords_Holder(e.target.value) } className="h-full text-gray-500 pl-2 w-full rounded outline-none" type="text" name="keywords" placeholder="Dein Suchbegriff" />  
                </div>
                <div className="w-full md:w-1/3 bg-slate-500 h-12 rounded mb-1 sm:mb-0"> 
                    <Autocomplete
                        apiKey={'AIzaSyDuGVU7vliA4SJPZ38gH5QYq2rb-djspPY'}
                        placeholder = 'Stadt oder PLZ'
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
                        defaultValue=""
                    />               
                    
                </div>
                <div className="bg-slate-500 w-full md:w-1/3 h-12 rounded">
                    <button id="myBtn" onClick={(e) => {startSearch(e)}} className="outline-none hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded h-full w-full">
                        Suche
                    </button>
                </div>
                
                        
                                    
                    
                
            </div>
        </div>
    )
}

