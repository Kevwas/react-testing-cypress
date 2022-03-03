import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the page is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // screen.debug();
  // screen.getByRole("");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and a note is entered, the pay button is enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  // screen.getByRole("");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});

// Integration test (combination of 2 or more unit tests)
test("after an amount and a note is entered, the pay button gets enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();

  // screen.getByRole("");
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
