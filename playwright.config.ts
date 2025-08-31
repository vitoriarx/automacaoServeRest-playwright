import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: isCI ? 2 : 0,
  expect: { timeout: 10_000 },
  use: {
    // baseURL: process.env.SR_BASE_URL || 'https://front.serverest.dev',
    headless: isCI,
    trace: isCI ? 'retain-on-failure' : 'on',
    screenshot: isCI ? 'only-on-failure' : 'on',
    video: isCI ? 'retain-on-failure' : 'off',
  },
  projects: [
    { name: 'Chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'WebKit',   use: { ...devices['Desktop Safari'] } },
  ],
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
});
