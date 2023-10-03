import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Education from "./education";

describe("Education Component", () => {
  const educationData = {
    education: [
      {
        degree: "Bachelor of Arts | GPA 3.5",
        institution: "Example University",
        start: "2022-01-01",
        end: "2025-01-01",
      },
    ],
  };

  it("checking different types of input values", async () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Education
        data={educationData}
        setData={() => {}}
        handleChange={handleChange}
      />
    );
    const degreeInput = getByTestId("degree");
    fireEvent.change(degreeInput, { target: { value: "Bachelor" } });
    expect(typeof degreeInput.value).toBe("string");

    const institutionInput = getByTestId("institution");
    fireEvent.change(institutionInput, {
      target: { value: "University of Rwanda" },
    });
    expect(typeof institutionInput.value).toBe("string");

    const startInput = getByTestId("start");
    fireEvent.change(startInput, {
      target: { value: "2022-01-01" },
    });
    expect(typeof startInput.value).toBe("string");

    const endInput = getByTestId("end");
    fireEvent.change(endInput, {
      target: { value: "2025-01-01" },
    });
  });
});
