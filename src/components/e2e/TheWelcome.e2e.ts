import { test, expect } from '@playwright/test';

test('event @update:model-value', async ({ page }) => {
  // set pre-defined date  
  await page.clock.install({ time: new Date('2024-12-02T08:00:00') });

  await page.goto('https://showcase-datepicker.vercel.app/');

  await page.locator('[data-test-id="dp-input"]').click();

  page.once('dialog', dialog => {
    dialog.dismiss().catch(() => {});
  });

  await page.locator('[data-test-id^="Mon Dec 23 2024"]').getByText('23').click();

  await expect(page.locator('[data-test-id="dp-input"]')).toHaveValue(/12\/23\/2024/)
});

