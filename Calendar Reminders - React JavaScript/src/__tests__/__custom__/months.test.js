import React from "react";
import months from "../../custom/months";

describe("Months Data", () => {
  it("should be defined", () => {
    expect(months).toBeDefined();
  });

  it("should render correctly", () => {
    const newMonths = <months name="months-test" />;
    expect(newMonths).toMatchSnapshot();
  });

  it("outputMonth should contain the correct elements", () => {
    expect(months.outputMonth).toContain(
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december"
    );
  });
});
