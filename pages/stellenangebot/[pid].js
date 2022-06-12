import React from 'react'
import {useEffect} from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())


function Job(context) {

  const router = useRouter()  

  const id = router.query.pid.split('uniqueID')[1]
  const { data, error } = useSWR(`/api/job/${id}`, fetcher)  
  
  console.log(data)
  return (
    <div>Job
      <p>{data && data.title}</p>
    </div>
  )
}

export default Job


