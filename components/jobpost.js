import Link from 'next/link'


export default function JobPost({job}) {
    console.log(job)
    return (
        <div key={job.title} className="sm: m-2 mt-3 p-5 text-slate-600 mb-2 relative border-neutral-600 border-1 rounded-xl flex w-full justify-between hover:border-l-yellow-200">
            <div className="">
                <div className="underline decoration-white decoration-1 decoration-dotted underline-offset-4">         
                    <Link href={`/stellenangebot/${job.title.replace(/\s/g, "-").replace(/\//g, '-').replace(/' '/g, '--').replace(/„/g, "-").replace(/“/g, "-").replace(/\(/g , "-").replace(/\)/g, '-').replace(/_/g, '-').replace(/\"/g,'-')}uniqueID${job._id}`}><p className="font-medium cursor-pointer text-gray-200"><span className="">{job.title}</span></p></Link>
                </div>
                <p className="font-medium text-gray-400 text-sm">{job.organisation}</p>
                <p className="font-medium text-gray-400 text-sm">in {job.stadt}</p>
                
            </div>            
            <div className="flex justify-end">
                <div className="md:mr-20 bg-slate-300 w-20 h-20 rounded-md text-center flex justify-center items-center">
                    <div className="text-xl font-semibold">R</div>
                    
                </div>
                <div className="rounded-full animate-pulse bg-green-300 w-3 h-3" />                                
            </div>
            
            
        </div>
    )
}


