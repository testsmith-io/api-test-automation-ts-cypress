# API Test Automation with TypeScript and Cypress

[![API Test Automation with TypeScript and Cypress - Run Tests](https://github.com/testsmith-io/api-test-automation-ts-cypress/actions/workflows/test.yml/badge.svg)](https://github.com/testsmith-io/api-test-automation-ts-cypress/actions/workflows/test.yml)

This repository contains example scripts for API test automation using:
- **TypeScript**
- **Cypress** for API testing

## Features
- Examples of GET, POST, and Protected API requests.
- Clear demonstration of API test automation best practices, including assertions and request chaining.
- Fully automated CI pipeline using GitHub Actions.

## Test API
All examples in this repository are designed to work with the **Practice Software Testing API**, a publicly available API for learning and practicing software testing. You can explore the API documentation and endpoints here:  
👉 **[Practice Software Testing API](https://api.practicesoftwaretesting.com/api/documentation)** 👈

## Examples Included
1. **GET Request**: Fetch a list of brands with `GET /brands`.
2. **Login API**: Authenticate using `POST /login` with an email/password payload.
3. **Protected API Request**: Authenticate, then use a token to fetch data with `GET /invoices`.

## Prerequisites
- **Node.js 16+**
- **npm** or **yarn**
- An IDE like **Visual Studio Code**

## Setup and Run
1. Clone this repository:
   ```bash
   git clone https://github.com/testsmith-io/api-test-automation-ts-cypress.git
   ```
2. Navigate to the project directory:
   ```bash
   cd api-test-automation-ts-cypress
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the tests:
   ```bash
   npx cypress run
   ```

## Automated Workflow
The repository includes a GitHub Actions workflow to automatically run the API tests on every push and pull request.
