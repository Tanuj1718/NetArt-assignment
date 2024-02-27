import React from "react";

const Section = ()=>{
    return(
        <>
<div className=" flex h-auto w-[100vw] m-2 gap-8">

  <div className="w-[500px] mr-2 flex flex-wrap">
    <img className="h-[600px] w-[400px]" src="/public/1.png" alt=""/>
  </div>


  <div className="w-[800px] m-2">
    <h3 className="font-extrabold text-[15px]"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
    <div className="prose pl-6 mt-3">
  <ul className="list-disc font-bold text-xs">
    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
  </ul>
</div>

{/* image container */}
<div className="mt-2">
    <img className="m-3" src="/public/2.png" alt="" />
</div>
<p className="text-[15px] font-semibold">	Government of India has awarded the "<b>National Energy Conservation Award 2018</b>". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
  </div>
</div>
        </>
    )
}
export default Section;