import React from 'react'

function Payments() {
    const handleClick = () => {
        console.log('worrk')
      alert('working')
       };
 
 
   return (
     <div className=' bg-gray-900 mt-20 rounded-md max-w-5xl mx-auto '>
 <div className="flex flex-col justify-center ml-20">
       <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
         <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
           <div className="overflow-hidden">
             <table className="min-w-full text-left bg-gray-800 text-sm font-light">
               <thead className="border-b font-medium bg-gray-700">
                 <tr>
                   <th scope="col" className="px-6 py-4 text-white">Payment ID</th>
                   <th scope="col" className="px-6 py-4 text-white">Course name</th>
                   <th scope="col" className="px-6 py-4 text-white">Course ID</th>
                   <th scope="col" className="px-6 py-4 text-white">Email</th>
                   <th scope="col" className="px-6 py-4 text-white"> Status</th>
                 </tr>
               </thead>
               <tbody>
                 <tr className="border-b dark:border-neutral-500">
                   <td className="whitespace-nowrap px-6 py-4 font-medium text-white">12356dbdabadyub</td>
                   <td className="whitespace-nowrap px-6 py-4 text-white">Chemistry</td>
                   <td className="whitespace-nowrap px-6 py-4 text-white">348369w6</td>
                   <td className="whitespace-nowrap px-6 py-4 text-white">shahzaibbmehmood65@gmail.com</td>
                   <td className="whitespace-nowrap px-6 py-4 text-white bg-green-300 text-center">confirmed</td>
                 </tr>
 
               
               
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
       
     </div>
   
  )
}

export default Payments
