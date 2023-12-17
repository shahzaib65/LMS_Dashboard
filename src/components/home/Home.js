import React,{useState} from 'react'
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import Students from "../students/StudentsList"
const Home = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleButtonClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };


  return (
    <>

<div className=' w-full h-20 bg-white flex justify-start fixed top-0'>
    <Bars3Icon className="block h-full w-6 mx-5 cursor-pointer" onClick={handleButtonClick} />
    <h1 className=' font-bold text-xl text-black h-full block mt-6'>E-Learning</h1>
    </div>
{
    isSidebarOpen && (
        <div class="fixed top-20 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800" tabindex="-1">
    <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleButtonClick}>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Close menu</span>
    </button>
  <div class="py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium">
       


         <li>
            <Link to="/payments" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             
               <span class="flex-1 ms-3 whitespace-nowrap">Payments</span>
             
            </Link>
         </li>
         <li>
            <Link to="/add" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Add Course</span>    
            </Link>
         </li>
         <li>
            <Link to="/courses" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">  
               <span class="flex-1 ms-3 whitespace-nowrap">Courses list</span>
            </Link>
         </li>
         <li>
            <Link to="/students" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             
               <span class="flex-1 ms-3 whitespace-nowrap">Students</span>
            </Link>
         </li>
         <li>
            <Link to="/enquiry" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Enquires</span>
            </Link>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
             
               <span class="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
         </li>
      </ul>
   </div>
</div>
    )
}

   <Students/>



    </>
    
  )
}

export default Home
