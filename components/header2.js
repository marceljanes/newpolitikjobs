import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from './searchbar';
import { useState } from 'react';

export default function Header2({jobs, setJobs, page, setPage, setLong, long, setLat, lat, setKeywords_Holder, keywords_holder}) {
    
     

    return (
        <div className="flex justify-center items-center w-full md:mt-5 md:mb-5">

            <SearchBar jobs={jobs} setJobs={setJobs} page={page} setKeywords_Holder={setKeywords_Holder} keywords_holder={keywords_holder} setLong={setLong} long={long} setLat={setLat} lat={lat} />
            

        </div>
            
                     
           
        
    )
}