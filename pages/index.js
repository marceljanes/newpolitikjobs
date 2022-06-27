import Head from 'next/head'
import Image from 'next/image'
import Header2 from "../components/header2"
import JobPost from '../components/jobpost'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import useSWR from 'swr'
import app from '../config/firebase'
import Navbar from '../components/navbar'




const fetcher = (url) => fetch(url).then((res) => res.json())

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() { 
  
  
   
  const snake = useRef()
  
  
  const [jobs, setJobs] = useState('')

  const { data, error } = useSWR('/api/hello', fetcher)

  

  

  
  return (
    <div className="bg-stone-200 h-full w-full background flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Header2 jobs={jobs} setJobs={setJobs}/>
      
       {        
       (data && jobs == '') ?
       ( data && <div className="z-10 md:w-1/2">{data.map(job => 
        < JobPost key={job.title} job={job}/>)}
        
      </div> ) : ( jobs && <div className="z-10 md:w-1/2">{jobs.map(job => 
        < JobPost key={job.title} job={job}/>)}
        
      </div> )
            
      }
      



        <form className="m-4 flex">
          <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
          <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
        </form>
        
      </div>
     

      

   
  )
}

