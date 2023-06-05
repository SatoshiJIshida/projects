import React from "react";
import { render } from "@testing-library/react";
import Calendar from "../../views/calendar";

describe("Calendar Screen Integration", () => {
  it("should be defined", async () => {
    expect(Calendar).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<Calendar />);
  });
});
