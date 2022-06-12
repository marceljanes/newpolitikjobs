import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/router'


function Job({data}) {
  console.log('thats the job')
  console.log(data)
  const router = useRouter()
  useEffect(() => {  
    
    //console.log(router.query.pid.split('uniqueID')[1])  
    //console.log(data)

  }, [])
  
  


  return (
    <div>Job
      <p>{data.title}</p>
    </div>
  )
}

export default Job


export async function getServerSideProps(context) {
  
  // Fetch data from external API  
  const id = context.query.pid.split('uniqueID')[1]
  if(!process.env.NEXT_PUBLIC_FRONTEND_URL) {
    const res = await fetch(`/api/job/${id}`)
    const data = await res.json()
    // Pass data to the page via props
    return { props: { data } }

  }
  
}