import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";

function Education({ data, setData, handleChange, errors }) {
  const [addEducation, setAddEducation] = useState(false);
  return (
    <div>
      <div>
        <div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">
              Degree(Example: Bachelor of Arts | GPA 3.5)
            </p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="text"
              data-testid="degree"
              name="degree"
              value={data.education[0].degree}
              onChange={(e) => handleChange(e, 0)}
              required
            />
            <span className="text-red-300">
              {errors?.degree ? errors?.degree : ""}
            </span>
          </div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">
              Institution Name (School, University, etc)
            </p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="text"
              data-testid="institution"
              name="institution"
              value={data.education[0].institution}
              onChange={(e) => handleChange(e, 0)}
              required
            />{" "}
            <span className="text-red-300">
              {errors?.institution ? errors?.institution : ""}
            </span>
          </div>

          <div className="mt-7">
            <p className="font-semibold text-gray-400">Start</p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="date"
              data-testid="start"
              name="start"
              value={data.education[0].start}
              onChange={(e) => handleChange(e, 0)}
              required
            />
            <span className="text-red-300">
              {errors?.start ? errors?.start : ""}
            </span>
          </div>
          <div className="mt-7">
            <p className="font-semibold text-gray-400">End</p>
            <input
              className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
              type="date"
              data-testid="end"
              name="end"
              value={data.education[0].end}
              onChange={(e) => handleChange(e, 0)}
              required
            />
            <span className="text-red-300">
              {errors?.end ? errors?.end : ""}
            </span>
          </div>
        </div>
        <div className="mt-10  text-green-800 flex justify-end">
          {!addEducation && (
            <MdAddCircle
              className="w-[50px] h-10 cursor-pointer"
              onClick={() => setAddEducation(true)}
            />
          )}
          {addEducation && (
            <AiFillMinusCircle
              className="w-[50px] h-10 cursor-pointer"
              data-testid="add-education-button"
              onClick={() => setAddEducation(false)}
            />
          )}
        </div>
        {addEducation && (
          <div>
            <div className="mt-10">
              <p className="font-semibold text-gray-400">
                Degree(Example: Bachelor of Arts | GPA 3.5)
              </p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                data-testid="degree-1"
                name="degree"
                value={data.education[1].degree}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">
                Institution Name (School, University, etc)
              </p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="text"
                data-testid="institution-1"
                name="institution"
                value={data.education[1].institution}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>

            <div className="mt-7">
              <p className="font-semibold text-gray-400">Start</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                data-testid="start-1"
                name="start"
                value={data.education[1].start}
                onChange={(e) => handleChange(e, 1)}
                required
              />
            </div>
            <div className="mt-7">
              <p className="font-semibold text-gray-400">End</p>
              <input
                className="mt-3 pl-4 w-full p-2 bg-gray-100 rounded-md focus:outline-none"
                type="date"
                data-testid="end-1"
                name="end"
                value={data.education[1].end}
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

export default Education;
