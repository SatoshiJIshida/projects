import { shallow } from "enzyme";
import { Forecast } from "../../components/forecast-data";

describe("Forecast Data Component", () => {
  it("should be defined", () => {
    expect(Forecast).toBeDefined();
  });

  it("should render correctly", () => {
    const newForecast = shallow(<Forecast name="forecast-test" />);
    expect(newForecast).toMatchSnapshot();
  });
});
