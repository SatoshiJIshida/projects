import React from "react";
import { shallow } from "enzyme";
import IntroText from "../../components/screenText/introText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Intro Text", () => {
  it("should be defined", () => {
    expect(IntroText).toBeDefined();
  });

  it("should render correctly", () => {
    const introText = shallow(<IntroText name="introText-test" />);
    expect(introText).toMatchSnapshot();
  });
});
