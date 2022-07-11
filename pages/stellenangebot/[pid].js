import React, { useState } from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import { Markup } from 'interweave';
import JobPost from '../../components/jobpost'





const fetcher = (url) => fetch(url).then((res) => res.json())


function Job() {
  
  const [schemaData, setSchemaData] = useState('')
  const router = useRouter()
  let id = ''
  if(router.query.pid) {
    id = router.query.pid.split('uniqueID')[1]
    
  }
   
  const { data, error } = useSWR(`/api/job/${id}`, fetcher)
  const { data: data2, error: error2 } = useSWR(`/api/under_single_job`, fetcher)
  
  
  useEffect(() => {
    if(data) {
      const schema = {
        "@context": "http://schema.org/",
        "@type": "JobPosting",
        "url": `https://www.politik-jobs.de/api/job/${id}`,    
        "datePosted": data['datum'],      
        "description": data['article_clean'],
        "employmentType": "Full-time",
        "industry": "Politik",
        "hiringOrganization": data['organisation'],
        "jobLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": data['stadt']
              
            }
          },        
        "title": data['title']
       
      };
    
      const JSONschema = JSON.stringify(schema)
      setSchemaData(JSONschema)

    }
    

  }, data)
  

  


    
  return (
    <div className="flex flex-col background">
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        { schemaData && <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        /> }
      </Head>     
        { data &&
           
          <div className="flex flex-row mt-5">
            <div className="basis-0 md:basis-1/3"></div>            
            <div className="basis-full md:basis-1/3">
              <div className="flex flex-col bg-neutral-100 text-slate-600 rounded-lg relative border-gray-300 border-1 p-11 article">
                <p>{data.title}</p>
                <Markup content={data.article} />                
              </div>             
            </div>
            <div className="basis-0 md:basis-1/3"></div>
          
          
          </div>
        }
         {        
          data2 && 
          <div className="md:w-1/2 mr-5">{data2.map(job => 
            < JobPost key={job.title} job={job}/>)}
            
          </div>
        }

      
      
    </div>
  )
}

export default Job


