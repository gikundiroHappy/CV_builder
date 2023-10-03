import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Experience from "./experience";

describe("Experience Component", () => {
  const experienceData = {
    experience: [
      {
        position: "Bachelor of Arts | GPA 3.5",
        company: "Example University",
        startinging: "2022-01-01",
        endinging: "2025-01-01",
        description: " Hello Work",
      },
    ],
  };

  it("checking different types of input values", async () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <Experience
        data={experienceData}
        setData={() => {}}
        handleChange={handleChange}
      />
    );
    const positionInput = getByTestId("position");
    fireEvent.change(positionInput, { target: { value: "Engineer" } });
    expect(typeof positionInput.value).toBe("string");

    const companyInput = getByTestId("company");
    fireEvent.change(companyInput, {
      target: { value: "Amali" },
    });
    expect(typeof companyInput.value).toBe("string");

    const startingInput = getByTestId("starting");
    fireEvent.change(startingInput, {
      target: { value: "2022-01-01" },
    });
    expect(typeof startingInput.value).toBe("string");

    const endingInput = getByTestId("ending");
    fireEvent.change(endingInput, {
      target: { value: "2025-01-01" },
    });

    const descriptionInput = getByTestId("description");
    fireEvent.change(descriptionInput, {
      target: { value: "2025-01-01" },
    });
  });
});
