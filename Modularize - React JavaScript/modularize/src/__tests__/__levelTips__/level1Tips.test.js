import React from "react";
import { shallow } from "enzyme";
import Level1Tips from "../../components/levelTips/level1Tips";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level1Tips modals", () => {
  it("should be defined", () => {
    expect(Level1Tips).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level1Tips name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
