import React from "react";
import { shallow } from "enzyme";
import Level1SystemModal from "../../components/screenText/level1SystemModal";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level1 System modal", () => {
  it("should be defined", () => {
    expect(Level1SystemModal).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level1SystemModal name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
