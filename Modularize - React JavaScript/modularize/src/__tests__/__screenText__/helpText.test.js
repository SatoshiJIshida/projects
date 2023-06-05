import React from "react";
import { shallow } from "enzyme";
import HelpText from "../../components/screenText/helpText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Help Text", () => {
  it("should be defined", () => {
    expect(HelpText).toBeDefined();
  });

  it("should render correctly", () => {
    const helpText = shallow(<HelpText name="helpText-test" />);
    expect(helpText).toMatchSnapshot();
  });
});
