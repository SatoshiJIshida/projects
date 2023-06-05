import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import HelpBtn from "../../components/buttons/helpBtn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens the Help Screen", () => {
  it("should be defined", () => {
    expect(HelpBtn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<HelpBtn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<HelpBtn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Help/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
