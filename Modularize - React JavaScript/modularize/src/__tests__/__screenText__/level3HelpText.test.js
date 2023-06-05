import React from "react";
import { shallow } from "enzyme";
import Level3HelpText from "../../components/screenText/level3HelpText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level3 Help modal", () => {
  it("should be defined", () => {
    expect(Level3HelpText).toBeDefined();
  });

  it("should render correctly", () => {
    const modal = shallow(<Level3HelpText name="modal-test" />);
    expect(modal).toMatchSnapshot();
  });
});
