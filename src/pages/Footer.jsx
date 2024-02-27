import React from "react";
import { FaInternetExplorer, FaFacebook, FaPhone } from 'react-icons/fa';


const Footer = ()=>{
    return (
        <>
        <div className="bg-red-500 h-[150px] flex flex-wrap justify-center items-center m-2">
        <FaPhone className="bg-red-500 size-7" />
            <div className="bg-red-500">
            <span className="bg-red-500 p-2 text-white mr-5">Toll Free 1200 3030 03030</span>
            
            </div>

            <FaFacebook className="bg-red-500 size-7" />
            <div className="bg-red-500 ">
            <span className="bg-red-500 p-2 text-white mr-5 ">www.facebook.com/cripumps</span>
            
            </div>
            <FaInternetExplorer className="bg-red-500 size-7"/>
            <div className="bg-red-500 ">
            <span className="bg-red-500 p-2 text-white mr-5 ">www.crigroups.com</span>
            
            </div>
            

      {/* Other content of your component */}
        </div>
        </>
    )
}
export default Footer