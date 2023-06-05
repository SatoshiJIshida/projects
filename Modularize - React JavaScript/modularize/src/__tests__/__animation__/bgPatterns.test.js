import React from "react";
import { shallow } from "enzyme";
import {
  Connections,
  Movements,
  Movements2,
} from "../../components/animation/bgPatterns";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 */

describe("Background Screen Pattern Animations", () => {
  it("should be defined", () => {
    expect(Connections).toBeDefined();
    expect(Movements).toBeDefined();
    expect(Movements2).toBeDefined();
  });

  it("Pattern1 should render correctly", () => {
    const anime1 = shallow(<Connections name="anime-test" />);
    expect(anime1).toMatchSnapshot();
  });

  it("Pattern2 should render correctly", () => {
    const anime2 = shallow(<Movements name="anime-test" />);
    expect(anime2).toMatchSnapshot();
  });

  it("Pattern3 should render correctly", () => {
    const anime3 = shallow(<Movements2 name="anime-test" />);
    expect(anime3).toMatchSnapshot();
  });
});
