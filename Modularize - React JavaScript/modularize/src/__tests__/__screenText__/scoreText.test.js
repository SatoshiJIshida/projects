import React from "react";
import { shallow } from "enzyme";
import ScoreText from "../../components/screenText/scoreText";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Score Text", () => {
  it("should be defined", () => {
    expect(ScoreText).toBeDefined();
  });

  it("should render correctly", () => {
    const scoreText = shallow(<ScoreText name="scoreText-test" />);
    expect(scoreText).toMatchSnapshot();
  });
});
