import React from "react";
import { shallow } from "enzyme";
import Level1HelpText from "../../components/screenText/level1HelpText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level1 Help modal", () => {
  it("should be defined", () => {
    expect(Level1HelpText).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level1HelpText name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
