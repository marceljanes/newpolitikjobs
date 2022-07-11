import React from 'react'
import Image from 'next/image'
import logo1 from '../public/logo1.png'

export default function Navbar() {
  return (
    <div className="w-full h-24 bg-neutral-800 font-bold text-slate-200 pl-5 pr-5 flex flex-column justify-center">
        
        <div className="flex justify-between items-center relative">
            <div>
               <p className="">Politik-Jobs.de</p>
               <p className="absolute top-5 font-thin text-sm hidden md:block">Stellenangebote für Referenten, Führungskräfte und Absolventen</p>
            </div>     
            
            <div className="hidden md:block">
                <div className="text-slate-600">
                    <span className="bg-green-100 p-1">#Wir</span><span className="bg-yellow-100 p-1">machen</span><span className="bg-red-100 p-1">Politik</span>
                </div>
            </div>
            <div className="hidden md:block">
                <div className="flex-row flex">
                    <p className="mr-8">Job aufgeben</p>
                    <p className="font-thin">Login</p>                    
                </div>
            </div>
        </div>
       
        
    </div>
  )
}
