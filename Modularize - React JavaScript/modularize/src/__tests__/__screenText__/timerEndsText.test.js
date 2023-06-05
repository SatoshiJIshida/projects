import React from "react";
import { shallow } from "enzyme";
import TimerEndsText from "../../components/screenText/timerEndsText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Timer Ends Text", () => {
  it("should be defined", () => {
    expect(TimerEndsText).toBeDefined();
  });

  it("should render correctly", () => {
    const timerEndsText = shallow(<TimerEndsText name="timerEndsText-test" />);
    expect(timerEndsText).toMatchSnapshot();
  });
});
