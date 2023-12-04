import React, { useEffect, useState } from "react";
import axios from "axios";

import VideoThumbnail from 'react-video-thumbnail'; 
  
  export default function CoursesList() {

    const[courses,setCourses] = useState([])

   useEffect(()=>{
  getCourses()
   },[])

   const getCourses =()=>{
     axios.get("https://odd-lime-caiman-cap.cyclic.app/api/course/get-course")
     .then(response => {
      setCourses(response.data.courses)
      console.log(response.data.courses);
  })
  .catch(error => {
      console.log(error);
  });
   }
    return (
      <div className="">
        <div className="mx-auto items-center max-w-7xl px-10 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only text-white">Courses</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 items-center">
            {courses.map((course) => (
              <a key={course._id} href={course.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
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
               
                <p className="mt-1 text-sm font-normal text-white">{course.course_description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
  