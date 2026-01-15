# Test Scope

This document defines the scope of the automated testing effort for the Sauce Demo application using Cypress.

The scope has been intentionally limited to focus on high-value scenarios that provide the most confidence with the lowest maintenance cost.

---

## In Scope

The following functional areas are included in the automated testing scope:

- User authentication using valid credentials
- Product catalog visualization after successful login
- Adding products to the shopping cart
- Navigation to the shopping cart
- Checkout initiation and completion
- Order confirmation after checkout

The automated tests focus on validating the main End-to-End business flow of a typical e-commerce application.

Smoke tests are used to quickly verify that the most critical functionalities are working correctly, while End-to-End tests cover extended user journeys.

---

## Out of Scope

The following areas are intentionally excluded from the current testing scope:

- Performance and load testing
- Security testing
- Accessibility testing
- API and backend testing
- Visual regression testing
- Mobile and responsive testing
- Cross-browser testing beyond the default Cypress browser
- Negative scenarios and edge cases

These areas are excluded to avoid over-automation and to keep the focus on stable, high-value functional testing.

---

## Scope Rationale

The scope selection is based on the following principles:

- Prioritize business-critical user flows
- Avoid unstable or low-value automation
- Ensure tests remain maintainable and deterministic
- Reflect realistic QA automation decisions commonly made in professional projects

This approach helps balance test coverage with long-term maintainability.
