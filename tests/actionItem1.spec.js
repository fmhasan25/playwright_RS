const { test,expect } = require("@playwright/test");

test('Opencart e-commerce website testing',async ({browser})=>
{
const context =await browser.newContext();
const page = await context.newPage();

await page.goto("https://demo.opencart.com/");
console.log(await page.title())
const products = page.locator('.description a').allTextContents();
console.log(await products);


//mngr416992
//dagEnUj


})

test('Guru99 bank login testing',async ({browser})=>
{
const context1 = await browser.newContext();
const page2 = await browser.newPage();

await page2.goto("https://demo.guru99.com/v4/");
await page2.locator("[name='uid']").fill('mngr416992');
await page2.locator("[type='password']").fill('dagEnUj');

//race condition
await Promise.all(
    [
        page2.waitForNavigation(),
        await page2.locator("[type='submit']").click(),
    ]
);

console.log(await page2.locator(".menusubnav .orange").textContent());
console.log(await page2.locator(".dropdown").allTextContents());
})