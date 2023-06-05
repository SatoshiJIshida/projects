import React from "react";
import { shallow } from "enzyme";
import MonthView from "../../components/month-view";

describe("Month View Component", () => {
  it("should be defined", () => {
    expect(MonthView).toBeDefined();
  });

  it("should render correctly", () => {
    const newMonthView = shallow(<MonthView name="monthView-test" />);
    expect(newMonthView).toMatchSnapshot();
  });
});
