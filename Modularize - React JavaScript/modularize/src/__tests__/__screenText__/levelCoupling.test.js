import React from "react";
import { shallow } from "enzyme";
import LevelCoupling from "../../components/screenText/levelCoupling";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level Coupling modal", () => {
  it("should be defined", () => {
    expect(LevelCoupling).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<LevelCoupling name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
