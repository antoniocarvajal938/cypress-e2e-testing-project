# Test Cases

This document describes the test cases covered by the automated test suite implemented using Cypress.

The focus of this project is on automated testing; therefore, test cases are represented directly by executable test specifications rather than detailed manual step-by-step documents.

---

## Automated Test Coverage

The following table summarizes the automated test cases included in this project:

| Test Case | Type | Description |
|----------|------|-------------|
| Login Smoke Test | Smoke | Validates that a user can log in using valid credentials |
| Products Smoke Test | Smoke | Validates that the product catalog is visible after login |
| Add to Cart Smoke Test | Smoke | Validates that a product can be added to the shopping cart |
| Checkout Smoke Test | Smoke | Validates that a user can complete the checkout flow successfully |
| Multiple Products Checkout | End-to-End | Validates checkout flow with multiple products added to the cart |

---

## Test Case Implementation

Each test case is implemented as an automated Cypress test and follows these principles:

- Clear separation between test logic and UI interactions
- Reuse of Page Object Model to improve maintainability
- Minimal and meaningful assertions
- Stable selectors and deterministic execution
- Readable test names describing business intent

The automated tests are organized into:
- Smoke tests for fast validation of critical functionality
- End-to-End tests for extended user journeys

---

## Manual vs Automated Testing Decisions

Not all potential scenarios are automated.

The following types of test cases are intentionally excluded from automation:

- Rare edge cases
- Negative scenarios with low business impact
- Visual validations
- Cross-browser or responsive checks

These scenarios would typically be covered through manual testing in a real-world project.

---

## Test Maintenance Strategy

Automated test cases are designed to be:
- Easy to update when UI changes occur
- Centralized through Page Object Model
- Independent from each other
- Stable across multiple executions

This approach helps ensure long-term reliability and maintainability of the test suite.
