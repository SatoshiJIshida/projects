import React from "react";
import { shallow } from "enzyme";
import Level3SystemModal from "../../components/screenText/level3SystemModal";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level3 System modal", () => {
  it("should be defined", () => {
    expect(Level3SystemModal).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level3SystemModal name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
