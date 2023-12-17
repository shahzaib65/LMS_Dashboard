import React, { useEffect, useState } from "react";
import axios from "axios";

const Enquiries = () => {

    const[enquery,setEnquery] = useState([])

    useEffect(()=>{
   getEnquery()
    },[])
 
    const getEnquery =()=>{
      axios.get("https://lms-backend-production-068b.up.railway.app/api/enquiry/get-enquiry")
      .then(response => {
       setEnquery(response.data.enquiries)
       console.log(response.data.enquiries);
   })
   .catch(error => {
       console.log(error);
   });
    }



  return (
    <div className=" w-full h-full">
      <div className=" flex flex-col">
      <div className="flex items-center justify-center h-20 bg-white">
      <p className="text-center font-semibold text-lg">Enquiries</p>
    </div>

    <div className="">
        <div className="mx-auto items-center max-w-7xl px-10 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only text-white">Courses</h2>
          <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8 items-center">
            {enquery.map((e) => (
              <a key={e._id} href={e.href} className="group">
               <div className=" bg-white mx-0 h-auto flex flex-col">
               <div className=" flex flex-row justify-between mx-2">
               <h3 className="mt-4 text-sm text-black">FirstName: {e.firstName}</h3>
               <h3 className="mt-4 text-sm text-black">FirstName: {e.lastName}</h3>
               </div>
              

               <div className=" flex flex-row justify-between mx-2">
               <h3 className="mt-4 text-sm text-black">Email: {e.email}</h3>
               <h3 className="mt-4 text-sm text-black">Phone: {e.phoneNo}</h3>
               </div>
               <p className="mt-1 text-sm font-normal text-black mx-2">Subject: {e.subject}</p>
              
               </div> 
               
                
               
                
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Enquiries
