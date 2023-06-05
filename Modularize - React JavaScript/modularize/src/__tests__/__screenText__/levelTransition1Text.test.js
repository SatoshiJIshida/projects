import React from "react";
import { shallow } from "enzyme";
import LevelTransition1Text from "../../components/screenText/levelTransition1Text";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Level Transition Text (1)", () => {
  it("should be defined", () => {
    expect(LevelTransition1Text).toBeDefined();
  });

  it("should render correctly", () => {
    const levelTransition1Text = shallow(
      <LevelTransition1Text name="levelTransition1Text-test" />
    );
    expect(levelTransition1Text).toMatchSnapshot();
  });
});
