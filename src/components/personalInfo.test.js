import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PersonalInfo from "./personalInfo";

describe("PersonalInfo Component", () => {
  const cvData = {
    fullName: "John Doe",
    email: "gikundirohappy@gmail.com",
    phoneNumber: "1234567890",
    linkedin: "https://linkedin.com/happygikundiro",
    profession: "Front-end Developer",
  };

  it("checking different types of input values", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <PersonalInfo
        data={cvData}
        setData={() => {}}
        handleChange={handleChange}
      />
    );
    const fullNameInput = getByTestId("fullname");
    fireEvent.change(fullNameInput, { target: { value: "happy Gikundiro" } });
    expect(typeof fullNameInput.value).toBe("string");

    const emailInput = getByTestId("email");
    fireEvent.change(emailInput, {
      target: { value: "gikundirohappy@gmail.com" },
    });
    expect(typeof emailInput.value).toBe("string");

    const phoneNumberInput = getByTestId("phonenumber");
    fireEvent.change(phoneNumberInput, {
      target: { value: "1234567890" },
    });
    expect(typeof phoneNumberInput.value).toBe("string");

    const linkedinInput = getByTestId("linkedin");
    fireEvent.change(linkedinInput, {
      target: { value: "https://linkedin.com/happygikundiro" },
    });
    expect(typeof linkedinInput.value).toBe("string");

    const professionInput = getByTestId("profession");
    fireEvent.change(professionInput, {
      target: { value: "Front-end Developer" },
    });
    expect(typeof professionInput.value).toBe("string");
  });
});
