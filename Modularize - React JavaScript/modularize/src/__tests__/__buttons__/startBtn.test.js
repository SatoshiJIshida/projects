import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent } from "@testing-library/react";
import StartBtn from "../../components/buttons/startBtn";

/**
 * Library Jest taken from source https://jestjs.io/
 * Library Enzyme taken from source https://www.npmjs.com/package/enzyme
 * Library React Testing Library taken from source https://testing-library.com/docs/react-testing-library/intro/
 */

describe("Button that starts the game and takes user to the Intro Screen", () => {
  it("should be defined", () => {
    expect(StartBtn).toBeDefined();
  });

  it("should render correctly", () => {
    const button = shallow(<StartBtn name="button-test" />);
    expect(button).toMatchSnapshot();
  });

  it("should call mock function when clicked", () => {
    const handleClick = jest.fn();
    render(<StartBtn onClick={handleClick} />);
    fireEvent.click(screen.getByText(/Start/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
