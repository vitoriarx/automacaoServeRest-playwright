import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 1,
  expect: { timeout: 10_000 },

 // playwright.config.ts
use: {
  headless: false,
  trace: 'on',
  screenshot: 'on',
},


  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
});
