import React from "react";
import Header from "./Header";

describe("Header", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  describe("HTML Render", () => {
    it("should render Header successfully", () => {
      expect(component).toBeTruthy();
      expect(component.find(".header__wrapper")).toHaveLength(1);
    });
  });
});
