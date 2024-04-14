import { render } from "@testing-library/react";
import App from "../App";

test("renders app", () => {
  const view = render(<App />);
  expect(view).toBeTruthy();
});
