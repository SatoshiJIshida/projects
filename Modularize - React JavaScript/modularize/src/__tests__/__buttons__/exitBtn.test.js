import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import ExitBtn from "../../components/buttons/exitBtn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that exits and takes user to the Home Screen", () => {
  it("should be defined", () => {
    expect(ExitBtn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<ExitBtn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<ExitBtn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Exit/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
