import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/');
    await page.getByRole('link', { name: 'Stores' }).click();
    await page.locator('#main div').filter({ hasText: 'Churro Nation Pollença Ver Bicicletas' }).getByRole('link', { name: 'Ver Bicicletas' }).click();
    await page.getByRole('paragraph').filter({ hasText: '599 € Ver Bici' }).getByRole('link', { name: 'Ver Bici' }).click();
});