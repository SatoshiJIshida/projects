import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import Level2Btn from "../../components/buttons/level2Btn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that opens Level2", () => {
  it("should be defined", () => {
    expect(Level2Btn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<Level2Btn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<Level2Btn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Continue/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
