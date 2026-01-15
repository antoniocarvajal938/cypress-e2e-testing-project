# Test Plan – Cypress Automation | Sauce Demo

## 1. Introduction
This document describes the test strategy and approach for the automated End-to-End testing of the Sauce Demo web application using **Cypress**.

The purpose of this test plan is to define the scope, objectives, testing approach, and key decisions behind the QA automation implemented in this project, following practices commonly used in real-world QA teams.

---

## 2. Objectives
The main objectives of this testing effort are:

- Validate critical business flows of the application through automated tests
- Ensure core functionalities work as expected after changes
- Build a maintainable and scalable Cypress automation framework
- Demonstrate QA decision-making and risk-based testing
- Provide fast and reliable feedback through automation

---

## 3. Scope
The automated testing scope includes the main functional areas of the application:

- User authentication (login with valid credentials)
- Product catalog visualization
- Adding products to the shopping cart
- Shopping cart navigation
- Checkout process
- Order completion confirmation

Detailed scope information can be found in `/test-plan/scope.md`.

---

## 4. Out of Scope
The following testing activities are considered out of scope for this project:

- Performance and load testing
- Security testing
- Accessibility testing
- API and backend testing
- Mobile and responsive testing
- Visual regression testing
- Negative and edge case scenarios

These areas are excluded to keep the focus on high-value functional automation and to avoid over-automation.

---

## 5. Test Strategy
The test strategy is based on automated End-to-End testing using **Cypress** with **TypeScript**.

The approach focuses on:
- Automating only critical and stable user flows
- Clear separation between smoke tests and extended end-to-end tests
- Using Page Object Model (POM) to improve maintainability
- Avoiding flaky tests by relying on Cypress built-in retries and auto-waiting
- Keeping test logic readable and easy to understand

Automation decisions are made based on business value and risk, not on achieving maximum coverage.

---

## 6. Test Types

### Smoke Tests
A small set of critical tests designed to verify that the main functionalities of the application are working correctly.

Smoke tests cover:
- Login
- Product visibility
- Add to cart
- Checkout flow

### End-to-End Tests
Extended scenarios validating complete user journeys across multiple application components.

These tests provide additional confidence beyond smoke coverage.

### Regression Tests
The project structure supports future regression testing once new features or changes are introduced.

---

## 7. Test Environment
- Application: Sauce Demo (public demo environment)
- Automation Tool: Cypress
- Language: TypeScript
- Browsers: Chrome (default Cypress browser)
- Test Execution: Local execution

---

## 8. Test Data
Test data is managed using static fixtures to ensure consistent and repeatable test execution.

User credentials and related test data are stored in:
- `/cypress/fixtures/users.json`

---

## 9. Risks and Mitigation

| Risk | Mitigation |
|------|------------|
| Application changes without notice | Keep tests modular and selectors centralized |
| Flaky tests | Rely on Cypress auto-waiting and avoid hard waits |
| Test data dependency | Use controlled static fixtures |
| Over-automation | Focus only on high-value business scenarios |

---

## 10. Entry and Exit Criteria

### Entry Criteria
- Test environment is accessible
- Test data is available
- Cypress framework is correctly configured

### Exit Criteria
- All smoke tests executed successfully
- No blocking issues detected in core flows
- Test execution completed without critical failures
