import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/');
    await page.getByRole('link', { name: 'Availables' }).click();
    await page.getByRole('paragraph').filter({ hasText: '1299 € Ver Bici' }).getByRole('link', { name: 'Ver Bici' }).click();
    await page.getByRole('heading', { name: 'Downhill Racer' }).click();
});