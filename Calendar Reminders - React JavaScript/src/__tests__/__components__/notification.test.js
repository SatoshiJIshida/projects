import React from "react";
import { shallow } from "enzyme";
import { Notification, Notification2 } from "../../components/notification";

describe("Notification Component", () => {
  it("Notification should be defined", () => {
    expect(Notification).toBeDefined();
  });
  it("Notification2 should be defined", () => {
    expect(Notification2).toBeDefined();
  });

  it("Notification should render correctly", () => {
    const newNotification = shallow(<Notification name="notification-test" />);
    expect(newNotification).toMatchSnapshot();
  });
  it("Notification2 should render correctly", () => {
    const newNotification2 = shallow(<Notification2 name="notification2-test" />);
    expect(newNotification2).toMatchSnapshot();
  });
});
