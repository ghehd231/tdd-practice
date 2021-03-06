import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  it("has input and button", () => {
    const { getByText, getByPlaceholderText } = render(<TodoForm />);
    getByPlaceholderText("할 일을 입력하세요.");
    getByText("등록");
  });
});
