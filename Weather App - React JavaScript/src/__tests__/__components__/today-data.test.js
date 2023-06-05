import { shallow } from "enzyme";
import { Today } from "../../components/today-data";

describe("Today Data Component", () => {
  it("should be defined", () => {
    expect(Today).toBeDefined();
  });

  it("should render correctly", () => {
    const newToday = shallow(<Today name="today-test" />);
    expect(newToday).toMatchSnapshot();
  });
});
