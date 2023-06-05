import {
  handleScoreLevel1,
  handleScoreLevel2,
  handleScoreLevel3,
  getScore,
  levelTransition,
  resetScore,
  restartLevel1,
  restartLevel2,
  restartLevel3,
} from "../../score/scoreSystem";

// Library Jest taken from source https://jestjs.io/

describe("Score system functions", () => {
  it("handleScoreLevel1 should be defined", () => {
    expect(handleScoreLevel1).toBeDefined();
  });

  it("handleScoreLevel2 should be defined", () => {
    expect(handleScoreLevel2).toBeDefined();
  });

  it("handleScoreLevel3 should be defined", () => {
    expect(handleScoreLevel3).toBeDefined();
  });

  it("getScore should be defined", () => {
    expect(getScore).toBeDefined();
  });

  it("levelTransition should be defined", () => {
    expect(levelTransition).toBeDefined();
  });

  it("resetScore should be defined", () => {
    expect(resetScore).toBeDefined();
  });

  it("restartLevel1 should be defined", () => {
    expect(restartLevel1).toBeDefined();
  });

  it("restartLevel2 should be defined", () => {
    expect(restartLevel2).toBeDefined();
  });

  it("restartLevel3 should be defined", () => {
    expect(restartLevel3).toBeDefined();
  });
});
