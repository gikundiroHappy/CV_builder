import React, { useEffect, useState } from "react";
import PersonalInfo from "../components/personalInfo";
import Education from "../components/education";
import Experience from "../components/experience";
import { useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Makecv() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const FormTitles = [
    "Personal Info",
    " Work experience",
    "Educational Background",
  ];

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    linkedin: "",
    profession: "",
    education: [
      { degree: "", institution: "", start: "", end: "" },
      { degree: "", institution: "", start: "", end: "" },
    ],
    experience: [
      { position: "", company: "", starting: "", ending: "", jobdescri: "" },
      { position: "", company: "", starting: "", ending: "", jobdescri: "" },
    ],
  });

  const handleChange = (e, index) => {
    setErrors({ ...errors, [e.target.name]: undefined });
    const updatedEducation = [...data.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [e.target.name]: e.target.value,
    };
    const updatedExperience = [...data.experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [e.target.name]: e.target.value,
    };
    setData({
      ...data,
      [e.target.name]: e.target.value,
      education: updatedEducation,
      experience: updatedExperience,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = localStorage.getItem("details");
    let listOfItem = [];

    if (item) {
      localStorage.clear();
    }

    listOfItem.push(data);
    if (listOfItem.length == 0) {
      alert("Fill all the input boxes.");
      return;
    }

    localStorage.setItem("details", JSON.stringify(listOfItem));

    setErrors({});

    setData({
      fullName: "",
      email: "",
      phoneNumber: "",
      linkedin: "",
      profession: "",
      education: [
        { degree: "", institution: "", start: "", end: "" },
        { degree: "", institution: "", start: "", end: "" },
      ],
      experience: [
        { position: "", company: "", starting: "", ending: "", jobdescri: "" },
        { position: "", company: "", starting: "", ending: "", jobdescri: "" },
      ],
    });

    if (page === 2) {
      const errors = {};
      if (!data.education[0].degree) {
        errors.degree = "Degree is required";
      }
      if (!data.education[0].institution) {
        errors.institution = "Institution is required";
      }
      if (!data.education[0].start) {
        errors.start = "Starting date is required";
      }
      if (!data.education[0].end) {
        errors.end = "End date is required";
      }

      if (Object.keys(errors).length !== 0) {
        setErrors(errors);
        setIsValid(false);
        return;
      }
    }

    alert("Cv successfully made");
    navigate("/view");
  };

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInfo
          data={data}
          setData={setData}
          errors={errors}
          handleChange={handleChange}
        />
      );
    } else if (page === 1) {
      return (
        <Experience
          data={data}
          setData={setData}
          errors={errors}
          handleChange={handleChange}
        />
      );
    } else {
      return (
        <Education
          data={data}
          setData={setData}
          errors={errors}
          handleChange={handleChange}
        />
      );
    }
  };

  function displayNext() {
    if (page === 0) {
      const errors = {};
      if (!data.fullName) {
        errors.fullName = "Full Name is required";
      }
      if (!data.email) {
        errors.email = "Email is required";
      }
      if (!data.phoneNumber) {
        errors.phoneNumber = "Phone Number is required";
      }
      if (!data.linkedin) {
        errors.linkedin = "LinkedIn is required";
      }
      if (!data.profession) {
        errors.profession = "Professional Summary is required";
      }

      if (Object.keys(errors).length !== 0) {
        setErrors(errors);
        setIsValid(false);
        return;
      }
    }

    if (page === 1) {
      const errors = {};
      if (!data.experience[0].position) {
        errors.position = "Position is required";
      }
      if (!data.experience[0].company) {
        errors.company = "company is required";
      }
      if (!data.experience[0].starting) {
        errors.starting = "Starting date is required";
      }
      if (!data.experience[0].ending) {
        errors.ending = "End date is required";
      }
      if (!data.experience[0].jobdescri) {
        errors.jobdescri = "Job description Summary is required";
      }

      if (Object.keys(errors).length !== 0) {
        setErrors(errors);
        setIsValid(false);
        return;
      }
    }

    if (page === 2) {
      const errors = {};
      if (!data.education[0].degree) {
        errors.degree = "Degree is required";
      }
      if (!data.education[0].institution) {
        errors.institution = "Institution is required";
      }
      if (!data.education[0].start) {
        errors.start = "Starting date is required";
      }
      if (!data.education[0].end) {
        errors.end = "End date is required";
      }

      if (Object.keys(errors).length !== 0) {
        setErrors(errors);
        setIsValid(false);
        return;
      }
    }

    setPage((currPage) => currPage + 1);
    setIsValid(true);
  }

  return (
    <div
      className="bg-gray-300 px-0 py-10 
      md:px-40 
      sm:px-20 
      xl:px-80
      lg:px-60
    "
    >
      <div className="bg-white rounded-md textalign-center font-abc px-10 py-20 sm:px-20">
        <h1 className="font-bold text-xl text-green-800">{FormTitles[page]}</h1>

        <div>
          <div>{pageDisplay()}</div>
          <div className="sm:flex sm:justify-end sm:gap-3 ">
            <button
              className=" transition-1 bg-green-800 mt-10 px-8 py-2 text-white font-semibold rounded-full 
              hover:bg-green-700"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Previous
            </button>
            <button
              className=" transition-1 bg-green-800 mt-10 px-8 py-2 text-white 
              font-semibold rounded-full hover:bg-green-700
               flex justify-end"
              onClick={(e) => {
                if (page == FormTitles.length - 1) {
                  handleSubmit(e);
                } else {
                  displayNext();
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer> </ToastContainer>
    </div>
  );
}

export default Makecv;
