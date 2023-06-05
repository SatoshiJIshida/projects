import React from "react";
import { shallow } from "enzyme";
import { ReadModal, ReadModal2 } from "../../components/read-modal";

describe("Read Modal Component", () => {
  it("ReadModal should be defined", () => {
    expect(ReadModal).toBeDefined();
  });
  it("ReadModal2 should be defined", () => {
    expect(ReadModal2).toBeDefined();
  });

  it("ReadModal should render correctly", () => {
    const newReadModal = shallow(<ReadModal name="readModal-test" />);
    expect(newReadModal).toMatchSnapshot();
  });
  it("ReadModal2 should render correctly", () => {
    const newReadModal2 = shallow(<ReadModal2 name="readModal2-test" />);
    expect(newReadModal2).toMatchSnapshot();
  });
});
