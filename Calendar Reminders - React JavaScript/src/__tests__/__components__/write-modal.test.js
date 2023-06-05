import React from "react";
import { shallow } from "enzyme";
import { WriteModal, WriteModal2 } from "../../components/write-modal";

describe("Write Modal Component", () => {
  it("WriteModal should be defined", () => {
    expect(WriteModal).toBeDefined();
  });
  it("WriteModal2 should be defined", () => {
    expect(WriteModal2).toBeDefined();
  });

  it("WriteModal should render correctly", () => {
    const newWriteModal = shallow(<WriteModal name="writeModal-test" />);
    expect(newWriteModal).toMatchSnapshot();
  });
  it("WriteModal2 should render correctly", () => {
    const newWriteModal2 = shallow(<WriteModal2 name="writeModal2-test" />);
    expect(newWriteModal2).toMatchSnapshot();
  });
});
