import { shallow } from "enzyme";
import { day } from "../../helpers/day";

describe("Day Data Component", () => {
  it("should be defined", () => {
    expect(day).toBeDefined();
  });

  it("should render correctly", () => {
    const newDay = shallow(<day name="day-test" />);
    expect(newDay).toMatchSnapshot();
  });
});
