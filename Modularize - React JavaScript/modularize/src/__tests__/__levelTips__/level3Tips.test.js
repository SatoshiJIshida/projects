import React from "react";
import { shallow } from "enzyme";
import Level3Tips from "../../components/levelTips/level3Tips";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level3Tips modals", () => {
  it("should be defined", () => {
    expect(Level3Tips).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level3Tips name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
