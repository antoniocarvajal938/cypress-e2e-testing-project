# 🧪 Cypress E2E Testing Project – Sauce Demo

## 📌 Project Overview
This repository showcases an End-to-End automated testing framework built with **Cypress** and **TypeScript**, following real-world QA automation practices.

The main goal of this project is to demonstrate not only test automation skills, but also **QA decision-making**, test planning, and maintainable framework design.

The application under test is **Sauce Demo**, a public e-commerce demo site commonly used for QA practice.

---

## 🎯 Objectives
- Build a scalable QA automation framework using Cypress
- Automate critical business flows of an e-commerce application
- Apply QA best practices such as:
  - Smoke vs End-to-End test separation
  - Page Object Model (POM)
  - Risk-based test selection
  - Maintainable and readable test code
- Provide a realistic **Test Plan** similar to those used in real projects

---

## 🧠 Why Sauce Demo?
Although Sauce Demo is a simple application, it allows focusing on:
- Test architecture rather than UI complexity
- Stable and deterministic test execution
- Clean implementation of Page Object Model
- Realistic e-commerce user flows (login, cart, checkout)

Automation quality is measured by **how tests are designed and maintained**, not by how complex the application is.

---

## 🧪 Test Types Covered
- Smoke Tests
- End-to-End Tests
- Regression-ready structure (future extension)

---

## 🗂 Project Structure
The project follows a modular structure designed to resemble a real-world Cypress automation framework:

```text
cypress/
├── e2e/
│ ├── smoke/
│ └── e2e/
├── fixtures/
├── pages/
├── support/
test-plan/
```


---

## 📄 Test Plan
A complete test plan is included to reflect how QA automation is approached in professional environments.

The test plan covers:
- Testing scope and exclusions
- Test strategy and approach
- Risk analysis and mitigation
- Test types and execution criteria

📁 See `/test-plan/test-plan.md` for full details.

---

## 🧠 Automation Strategy
This project prioritizes:
- Critical business flows over edge UI cases
- Stability and maintainability over test quantity
- Clear separation between test logic and UI interactions

Not all possible scenarios are automated on purpose.  
Some cases are intentionally left out to reflect realistic QA decision-making.

---

## 🚀 Tech Stack
- **Cypress**
- **TypeScript**
- **Node.js**

---

## 📊 Reports
Cypress generates execution artifacts such as screenshots and videos during test runs.

These artifacts are excluded from version control and can be found locally after test execution.

---

## 🗂 Test Structure

- `cypress/e2e/smoke/`  
  Contains critical smoke tests covering the main business flows.

- `cypress/e2e/e2e/`  
  Contains extended end-to-end scenarios validating complete user journeys.

- `cypress/pages/`  
  Page Object Model implementation to encapsulate UI interactions.

---

## 🔧 How to Run the Tests

#### Install dependencies
```bash
npm install 
```


## Open Cypress Test Runner (interactive mode)
```bash
npx cypress open
```

## Run all tests headlessly
```bash
npx cypress run
```

## Run smoke tests only
```bash
npx cypress run --spec "cypress/e2e/smoke/**/*.cy.ts"
```

## Run end-to-end tests only
```bash
npx cypress run --spec "cypress/e2e/e2e/**/*.cy.ts"
```

---