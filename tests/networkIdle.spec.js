const { test,expect } = require("@playwright/test");

test('network idle testing',async ({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://healthfirst.org/");
await page.waitForLoadState("networkidle");
})