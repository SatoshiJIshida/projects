import React from "react";
import { shallow } from "enzyme";
import HomeText from "../../components/screenText/homeText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Home Text", () => {
  it("should be defined", () => {
    expect(HomeText).toBeDefined();
  });

  it("should render correctly", () => {
    const homeText = shallow(<HomeText name="homeText-test" />);
    expect(homeText).toMatchSnapshot();
  });
});
