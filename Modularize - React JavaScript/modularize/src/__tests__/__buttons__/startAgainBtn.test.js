import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import StartAgainBtn from "../../components/buttons/startAgainBtn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens Level1 (repeated button with different text))", () => {
  it("should be defined", () => {
    expect(StartAgainBtn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<StartAgainBtn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<StartAgainBtn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Start Again/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
