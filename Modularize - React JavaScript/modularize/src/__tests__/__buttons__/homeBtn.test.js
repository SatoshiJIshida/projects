import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import HomeBtn from "../../components/buttons/homeBtn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens the Home Screen", () => {
  it("should be defined", () => {
    expect(HomeBtn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<HomeBtn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<HomeBtn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Return/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
