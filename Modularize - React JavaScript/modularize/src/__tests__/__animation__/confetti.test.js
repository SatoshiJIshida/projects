import React from "react";
import { shallow } from "enzyme";
import ConfettiAnimation from "../../components/animation/confetti";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Confetti Animation", () => {
  it("should be defined", () => {
    expect(ConfettiAnimation).toBeDefined();
  });

  it("should render correctly", () => {
    const img = shallow(<ConfettiAnimation name="img-test" />);
    expect(img).toMatchSnapshot();
  });
});
