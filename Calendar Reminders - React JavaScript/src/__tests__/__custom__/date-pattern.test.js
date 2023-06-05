import { date, fullDate, year } from "../../custom/date-pattern";

describe("Date Pattern Data", () => {
  it("should be defined", () => {
    expect(date).toBeDefined();
    expect(fullDate).toBeDefined();
    expect(year).toBeDefined();
  });
});
