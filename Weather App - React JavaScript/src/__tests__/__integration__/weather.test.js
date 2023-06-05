import { render } from "@testing-library/react";
import Weather from "../../views/weather";

describe("Weather Screen Integration", () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };

  global.navigator.geolocation = mockGeolocation;

  it("should be defined", async () => {
    expect(Weather).toBeDefined();
  });

  it("should render all elements correctly", async () => {
    render(<Weather />);
  });
});
