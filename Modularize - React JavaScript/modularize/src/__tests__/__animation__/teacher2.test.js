import React from "react";
import { shallow } from "enzyme";
import Teacher2 from "../../components/animation/teacher2";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Teacher Transition Screen Animation", () => {
  it("should be defined", () => {
    expect(Teacher2).toBeDefined();
  });

  it("should render correctly", () => {
    const img = shallow(<Teacher2 name="img-test" />);
    expect(img).toMatchSnapshot();
  });
});
