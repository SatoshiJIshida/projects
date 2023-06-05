import React from "react";
import { shallow } from "enzyme";
import Level2SystemModal from "../../components/screenText/level2SystemModal";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level2 System modal", () => {
  it("should be defined", () => {
    expect(Level2SystemModal).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level2SystemModal name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
