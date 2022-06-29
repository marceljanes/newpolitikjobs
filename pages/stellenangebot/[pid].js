import React, { useState } from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import { Markup } from 'interweave';




const fetcher = (url) => fetch(url).then((res) => res.json())


function Job() {
  
  const [schemaData, setSchemaData] = useState('')
  const router = useRouter()
  let id = ''
  if(router.query.pid) {
    id = router.query.pid.split('uniqueID')[1]
    
  }
   
  const { data, error } = useSWR(`/api/job/${id}`, fetcher)
  
  
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
           
          <div className="flex flex-row p-5">
            <div className="basis-0 md:basis-1/3"></div>            
            <div className="basis-full md:basis-1/3">
              <div className="flex flex-col bg-gray-50 text-slate-500 rounded-lg mb-2 relative border-gray-300 border-1 p-5">
                <p>{data.title}</p>
                <Markup content={data.article} />                
              </div>             
            </div>
            <div className="basis-0 md:basis-1/3"></div>
          
          
          </div>
        }
      

      
      
    </div>
  )
}

export default Job


