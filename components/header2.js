import Dropdown from 'react-bootstrap/Dropdown';
import SearchBar from './searchbar';
import { useState } from 'react';

export default function Header2({jobs, setJobs}) {
    
    const dev_url = process.env.DEV_URL   

    return (
        <div className="flex justify-center items-center w-full md:mt-5 md:mb-5">

            <SearchBar jobs={jobs} setJobs={setJobs} />
            

        </div>
            
                     
           
        
    )
}