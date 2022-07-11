import React from 'react'
import SearchBar from './searchbar'

export default function LoadMoreButton({loadMore, jobs, setJobs, page, setPage, ort, setOrt, lat, setLat, long, setLong, keywords_holder, setKeywords_Holder}) {
  
  return (
    <div className="w-full h-24 bg-neutral-800 font-bold text-slate-200 pl-5 pr-5 flex flex-column justify-center">
        

        <SearchBar jobs={jobs} setJobs={setJobs} page={page} setPage={setPage} ort={ort} setOrt={setOrt} lat={lat} setLat={setLat} long={long} setLong={setLong} loadMore={loadMore} keywords_holder={keywords_holder} setKeywords_Holder={setKeywords_Holder} />
       
        
    </div>
  )
}
