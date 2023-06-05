import React from "react";
import { shallow } from "enzyme";
import LevelTransition2Text from "../../components/screenText/levelTransition2Text";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level Transition Text (2)", () => {
  it("should be defined", () => {
    expect(LevelTransition2Text).toBeDefined();
  });

  it("should render correctly", () => {
    const levelTransition2Text = shallow(
      <LevelTransition2Text name="levelTransition2Text-test" />
    );
    expect(levelTransition2Text).toMatchSnapshot();
  });
});
