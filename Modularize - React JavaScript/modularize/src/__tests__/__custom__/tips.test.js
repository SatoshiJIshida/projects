import React from "react";
import tips from "../../custom/tips";

// Library Jest taken from source https://jestjs.io/

describe("Tips objects and arrays", () => {
  it("should be defined", () => {
    expect(tips).toBeDefined();
  });

  it("should render correctly", () => {
    const newTips = <tips name="tips-test" />;
    expect(newTips).toMatchSnapshot();
  });

  it("level1TipOrder should contain the correct elements", () => {
    expect(tips.level1TipOrder).toContain(
      "tip1",
      "tip2",
      "tip3",
      "tip4",
      "tip5",
      "tip6",
      "tip7",
      "tip8",
      "tip9"
    );
  });

  it("level2TipOrder should contain the correct elements", () => {
    expect(tips.level2TipOrder).toContain(
      "tip1",
      "tip2",
      "tip3",
      "tip4",
      "tip5",
      "tip6",
      "tip7",
      "tip8",
      "tip9"
    );
  });

  it("level3TipOrder should contain the correct elements", () => {
    expect(tips.level3TipOrder).toContain(
      "tip1",
      "tip2",
      "tip3",
      "tip4",
      "tip5",
      "tip6",
      "tip7",
      "tip8",
      "tip9"
    );
  });
});
