import React from "react";
import { shallow } from "enzyme";
import Level2HelpText from "../../components/screenText/level2HelpText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level2 Help modal", () => {
  it("should be defined", () => {
    expect(Level2HelpText).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level2HelpText name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
