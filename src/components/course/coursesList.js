import React, { useEffect, useState } from "react";
import axios from "axios";

import VideoThumbnail from 'react-video-thumbnail'; 
  
  export default function CoursesList() {

    const[courses,setCourses] = useState([])
    const [showFullText, setShowFullText] = useState(false);
   useEffect(()=>{
  getCourses()
   },[])


   

   const toggleFullText = () => {
     setShowFullText(!showFullText);
   };

   const getCourses =()=>{
     axios.get("https://lms-backend-production-068b.up.railway.app/api/course/get-course")
     .then(response => {
      setCourses(response.data.courses)
      console.log(response.data.courses);
  })
  .catch(error => {
      console.log(error);
  });
   }
    return (
      <div className=" w-full h-full">
     <div className="flex items-center justify-center h-20 bg-white">
      <p className="text-center font-semibold text-lg">Courses list</p>
    </div>

        <div className="mx-auto items-center max-w-7xl px-10 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only text-white">Courses</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 items-center">
            {courses.map((course) => (
              <div  key={course._id} href={course.href} className=" bg-gray-950 py-2 px-2 rounded-md">
                <div className="">
                  <VideoThumbnail
                  videoUrl={course.course_video_url}
                    className="h-full w-full"
                  />
                </div>
                <h3 className="mt-4 text-sm text-white">{course.course_name}</h3>
                <div className=" flex flex-row">
                <p className="mt-1 text-lg font-medium text-white">₹{course.course_price}</p>
                <p className="mt-1 mx-2 text-lg line-through font-medium text-white">{course.course_discount}</p>
                </div>
               
                {/* <p className="mt-1 text-sm font-normal text-white">{course.course_description}</p> */}
                <div className="max-w-prose mx-auto">
      <p className={`line-clamp-3 ${showFullText ? 'line-clamp-none' : ''}`}>
        Your long text goes here. This text will be truncated after three lines.Your long text goes here. This text will be truncated after three lines.Your long text goes here. This text will be truncated after three lines.Your long text goes here. This text will be truncated after three lines.Your long text goes here. This text will be truncated after three lines.
        Your long text goes here. This text will be truncated after three lines.
        Your long text goes here. This text will be truncated after three lines.
        Your long text goes here. This text will be truncated after three lines.
      </p>
      {!showFullText && (
        <button
          className="text-blue-500 hover:underline focus:outline-none"
          onClick={toggleFullText}
        >
          Read More
        </button>
      )}
    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  