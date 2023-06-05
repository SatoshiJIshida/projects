import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import ReplayLevel3Btn from "../../components/buttons/replayLevel3Btn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens Level3 (repeated button with different text))", () => {
  it("should be defined", () => {
    expect(ReplayLevel3Btn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<ReplayLevel3Btn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<ReplayLevel3Btn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Replay Level 3/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
