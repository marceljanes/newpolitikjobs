import Head from 'next/head'
import Image from 'next/image'
import Header2 from "../components/header2"
import JobPost from '../components/jobpost'
import { useState, useEffect } from 'react'



const dev_url = process.env.DEV_URL


import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({posts}) {
  console.log(posts)
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    setJobs(posts)

  }, [])

  
  return (
    <div className="bg-stone-200 h-full w-full background flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
     
      <Header2 jobs={jobs} setJobs={setJobs}/>
      
       {jobs && <div className="z-10 md:w-1/2">{jobs.map(job => 
        < JobPost key={job.title} job={job}/>)}
      </div> }




        <form className="m-4 flex">
          <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
          <button className="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
        </form>
        
      </div>
     

      

   
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library  
  //const res = await fetch(`https://newpolitikjobs.vercel.app/api/hello`)
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/hello`)  
  const posts = await res.json()
 
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}