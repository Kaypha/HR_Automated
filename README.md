# HRMFlow Playwright Automation

This project contains Playwright end-to-end automation tests for an HR management flow.

## Project Structure

- `Pages/` - Page Object Model classes for the app UI
- `fixtures/` - Shared test fixtures
- `tests/` - Test specifications
- `playwright.config.ts` - Playwright configuration

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Show the HTML report:

```bash
npx playwright show-report
```

## Notes

The project is already configured to use Playwright and includes example test coverage for the HR flow.
