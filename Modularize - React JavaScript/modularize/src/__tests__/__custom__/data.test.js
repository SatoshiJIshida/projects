import React from "react";
import data from "../../custom/data";

// Library Jest taken from source https://jestjs.io/

describe("Data", () => {
  it("should be defined", () => {
    expect(data).toBeDefined();
  });

  it("should render correctly", () => {
    const newData = <data name="data-test" />;
    expect(newData).toMatchSnapshot();
  });
});
