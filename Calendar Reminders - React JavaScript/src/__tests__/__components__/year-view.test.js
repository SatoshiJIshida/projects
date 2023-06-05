import React from "react";
import { shallow } from "enzyme";
import YearView from "../../components/year-view";

describe("Year View Component", () => {
  it("should be defined", () => {
    expect(YearView).toBeDefined();
  });

  it("should render correctly", () => {
    const newYearView = shallow(<YearView name="yearView-test" />);
    expect(newYearView).toMatchSnapshot();
  });
});
