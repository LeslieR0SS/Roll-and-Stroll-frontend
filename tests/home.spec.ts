import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/");
    await page.getByText("Moter RideLemon 45 € Ver Bici").click();
    await page
        .getByRole("paragraph")
        .filter({ hasText: "45 € Ver Bici" })
        .getByRole("link", { name: "Ver Bici" })
        .click();
    await page.getByRole("heading", { name: "Moter" }).click();
});
