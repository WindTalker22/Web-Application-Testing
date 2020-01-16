import React from "react"
import App from "./App"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Display from "./components/Display"
import Dashboard from "./components/Dashboard"

test("renders without crash", () => {
  render(<App />)
})

test("renders without crash", () => {
  const { getByText } = render(<App />)
})

test("Balls is found", () => {
  const { getByTestId } = render(<Display />)
})

test("Hits is found", () => {
  const { getByTestId } = render(<Dashboard />)
})
