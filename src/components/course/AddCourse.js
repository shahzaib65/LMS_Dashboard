import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
export default function AddCourse() {
  
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className=" max-w-7xl mx-auto rounded-lg bg-gray-900 px-6 lg:py-4 mt-20 lg:px-8 sm:py-4">
<div className=" flex justify-center items-center">
<p className=" text-white font-medium text-2xl py-5">Add courses</p>
</div>
      <form
       noValidate
       className="bg-gray-900 mx-auto mt-5 max-w-xl sm:mt-6"
       onSubmit={handleSubmit(async (data) => {
        const data1 = new FormData();
       data1.append("video",selectedFile);
       data1.append("course_name",data.title);
       data1.append("course_description",data.description);
       data1.append("course_price", data.price);
       data1.append("course_discount",data.discount);
       data1.append("standard",data.standard);
       
     const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
axios.post("http://localhost:5000/api/course/register-course",data1, config)
    .then(response => {
        console.log(response);
        reset();
    })
    .catch(error => {
        console.log(error);
        setError(error)
    });
       })}
       >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Course title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                {...register("title", {
                    required: "Course title is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
                {errors.title && (
                  <p className=" text-start text-red-500">{errors.title.message}</p>
                )}
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Course code
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="course code"
                {...register("code", {
                    required: "Course code is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.code && (
                  <p className=" text-start text-red-500">{errors.code.message}</p>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Course price
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="price"
                {...register("price", {
                    required: "Course price is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.price && (
                  <p className=" text-start text-red-500">{errors.price.message}</p>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6  text-white"
            >
              Course Discount Price
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="discount"
                {...register("discount", {
                    required: "Course discount price is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.discount && (
                  <p className=" text-start text-red-500">{errors.discount.message}</p>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6  text-white"
            >
            Standard  Course
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="standard"
                {...register("standard", {
                    required: "Standard course is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 bg-gray-800  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.standard && (
                  <p className=" text-start text-red-500">{errors.standard.message}</p>
                )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Course description
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                {...register("description", {
                    required: "Course description is required",
                  })}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.description && (
                  <p className=" text-start text-red-500">{errors.description.message}</p>
                )}
            </div>
          </div>

          <div className=" w-full mt-0">
            <label className="text-sm block font-semibold text-white leading-6">
              Choose File
            </label>

            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full rounded-md border-0 px-5 py-2 text-white bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {error && (
                <p className="text-red-500">{error || error.message}</p>
              )}
        <div className="mt-10 mb-4">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save course
          </button>
        </div>
      </form>
    </div>
  );
}

// {selectedFile && (
//   <div>
//     <p className="font-bold">Selected File:</p>
//     <p>{selectedFile.name}</p>
//     <p>{selectedFile.type}</p>
//     <p>{selectedFile.size} bytes</p>
//   </div>
// )}
