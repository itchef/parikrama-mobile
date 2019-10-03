import React from "react";
import Header from "./Header";
import { AppBar } from "@material-ui/core";

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

    it("should render header with AppBar", () => {
      const appBar = component.find(AppBar);
      expect(appBar).toHaveLength(1);
      expect(appBar.props().position).toEqual("fixed");
      expect(appBar.props().color).toEqual("primary");
    });
  });
});
