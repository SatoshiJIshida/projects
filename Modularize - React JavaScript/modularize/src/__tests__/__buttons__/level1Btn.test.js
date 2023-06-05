import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import Level1Btn from "../../components/buttons/level1Btn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens Level1", () => {
  it("should be defined", () => {
    expect(Level1Btn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<Level1Btn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<Level1Btn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Start/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
