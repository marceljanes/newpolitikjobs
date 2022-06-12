import Link from 'next/link'


export default function JobPost({job}) {
    return (
        <div key={job.title} className="sm: m-2 p-5 bg-gray-50 text-slate-500 rounded-lg mb-2 relative border-gray-300 border-1 flex w-full justify-between hover:bg-gray-100">
            <div>                
                <Link href={`/stellenangebot/${job.title.replace(/\s/g, "-").replace(/\//g, '-').replace(/' '/g, '--').replace(/„/g, "-").replace(/“/g, "-").replace(/\(/g , "-").replace(/\)/g, '-').replace(/_/g, '-').replace(/\"/g,'-')}uniqueID${job._id}`}><p className="font-medium cursor-pointer text-blue-700">{job.title}</p></Link>
                <p className="font-medium text-gray-400 text-sm">in {job.stadt}</p>
            </div>            
            <div className="flex justify-end">
                <div className="md:mr-20 bg-slate-300 w-20 h-20 rounded-md text-center flex justify-center items-center">
                    <div className="text-xl font-semibold">R</div>
                    
                </div>
                <div className="rounded-full animate-pulse bg-fuchsia-300 w-3 h-3" />                                
            </div>
            
            
        </div>
    )
}


