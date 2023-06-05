import React from "react";
import { shallow } from "enzyme";
import Teacher from "../../components/animation/teacher";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Teacher Intro Screen Animation", () => {
  it("should be defined", () => {
    expect(Teacher).toBeDefined();
  });

  it("should render correctly", () => {
    const img = shallow(<Teacher name="img-test" />);
    expect(img).toMatchSnapshot();
  });
});
