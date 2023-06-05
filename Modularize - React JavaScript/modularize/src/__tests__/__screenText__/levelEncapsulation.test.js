import React from "react";
import { shallow } from "enzyme";
import LevelEncapsulation from "../../components/screenText/levelEncapsulation";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level Encapsulation modal", () => {
  it("should be defined", () => {
    expect(LevelEncapsulation).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<LevelEncapsulation name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
