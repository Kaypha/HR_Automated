import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<{ myCustomOption?: string }>({
  testDir: './tests',
  
  /* Run tests in files in parallel */
  fullyParallel: true,

  // FIX 1: Set a realistic global test timeout (45,000ms = 45 seconds)
  // This gives your steps enough room to breathe without colliding with action limits.
  timeout: 45000, 

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  // FIX 2: Consolidate all shared options into ONE single 'use' object block 
  // so settings do not overwrite each other.
  use: {
    /* Timeouts */
    actionTimeout: 15000,     // Limit for clicks/typing (15 seconds)
    navigationTimeout: 20000, // Dedicated navigation threshold buffer (20 seconds)

    /* Debugging and Reporting Artifacts */
    trace: 'on-first-retry',
    screenshot: 'on-first-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});