import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";

function Experience({ data, setData, handleChange, errors }) {
  const [addExperience, setAddExperience] = useState(false);
  return (
    <div>
      <div>
        <div className="mt-7">
          <div className=" mt-7">
            <div className="">
              <p className="font-semibold text-gray-400">Position</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                data-testid="position"
                name="position"
                value={data.experience[0].position}
                onChange={(e) => handleChange(e, 0)}
                required
              />
              <span className="text-red-300">
                {errors?.position ? errors?.position : ""}
              </span>
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">Company</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                data-testid="company"
                name="company"
                value={data.experience[0].company}
                onChange={(e) => handleChange(e, 0)}
                required
              />
              <span className="text-red-300">
                {errors?.company ? errors?.company : ""}
              </span>
            </div>
          </div>

          <div className="mt-7">
            <p className="font-semibold text-gray-400">Start</p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="date"
              data-testid="starting"
              name="starting"
              value={data.experience[0].starting}
              onChange={(e) => handleChange(e, 0)}
              required
            />
            <span className="text-red-300">
              {errors?.starting ? errors?.starting : ""}
            </span>
          </div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">End</p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="date"
              data-testid="ending"
              name="ending"
              value={data.experience[0].ending}
              onChange={(e) => handleChange(e, 0)}
              required
            />
            <span className="text-red-300">
              {errors?.ending ? errors?.ending : ""}
            </span>
          </div>

          <div className="mt-7">
            <p className="font-semibold text-gray-400">Job Description</p>
            <textarea
              className="mt-3 pl-4 w-full h-40 p-2 bg-gray-100 rounded-md focus:outline-none"
              name="jobdescri"
              data-testid="description"
              value={data.experience[0].jobdescri}
              onChange={(e) => handleChange(e, 0)}
              required
            />
            <span className="text-red-300">
              {errors?.jobdescri ? errors?.jobdescri : ""}
            </span>
          </div>
        </div>
        <div className="mt-10  text-green-800 flex justify-end">
          {!addExperience && (
            <MdAddCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddExperience(true)}
            />
          )}
          {addExperience && (
            <AiFillMinusCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddExperience(false)}
            />
          )}
        </div>
        {addExperience && (
          <div className="mt-10">
            <div className="mt-7">
              <p className="font-semibold text-gray-400">Position</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                name="position"
                value={data.experience[1].position}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">Company</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                name="company"
                value={data.experience[1].company}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>

            <div className="mt-7">
              <p className="font-semibold text-gray-400">Start</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                name="starting"
                value={data.experience[1].starting}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">End</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                name="ending"
                value={data.experience[1].ending}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>

            <div className="mt-7">
              <p className="font-semibold text-gray-400">Job Description</p>
              <textarea
                className="mt-3 pl-4 w-full h-40 p-2 bg-gray-100 rounded-md focus:outline-none"
                name="jobdescri"
                value={data.experience[1].jobdescri}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Experience;
