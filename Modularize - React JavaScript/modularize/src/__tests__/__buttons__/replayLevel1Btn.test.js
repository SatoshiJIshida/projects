import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import ReplayLevel1Btn from "../../components/buttons/replayLevel1Btn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens Level1 (repeated button with different text))", () => {
  it("should be defined", () => {
    expect(ReplayLevel1Btn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<ReplayLevel1Btn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<ReplayLevel1Btn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Restart/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
