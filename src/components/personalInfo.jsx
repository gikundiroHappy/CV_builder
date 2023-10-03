import React from "react";

function PersonalInfo({ data, setData, errors, handleChange }) {
  return (
    <div>
      <div>
        <div className="mt-10">
          <p className="font-semibold text-gray-400">Full Name</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            data-testid="fullname"
            value={data.fullName}
            name="fullName"
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="text-red-300">
            {errors?.fullName ? errors?.fullName : ""}
          </span>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">Email</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            data-testid="email"
            value={data.email}
            name="email"
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="text-red-300">
            {errors?.email ? errors?.email : ""}
          </span>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">Phone Number</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            data-testid="phonenumber"
            value={data.phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="text-red-300">
            {errors?.phoneNumber ? errors?.phoneNumber : ""}
          </span>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">LinkedIn url</p>
          <input
            className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
            type="text"
            data-testid="linkedin"
            value={data.linkedin}
            name="linkedin"
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="text-red-300">
            {errors?.linkedin ? errors?.linkedin : ""}
          </span>
        </div>
        <div className="mt-7">
          <p className="font-semibold text-gray-400">Professional Summary</p>
          <textarea
            className="mt-3 pl-4 w-full h-40 p-2 bg-gray-100 rounded-md focus:outline-none"
            name="profession"
            data-testid="profession"
            value={data.profession}
            onChange={(e) => handleChange(e)}
            required
          />
          <span className="text-red-300">
            {errors?.profession ? errors?.profession : ""}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
