//Including playwright library
const {test,expect}=require('@playwright/test');

test('self try',async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");

    await page.locator(".checkmark").last().click();

  // await page.pause();
 
    await page.locator("#terms").check();
   //await expect(page.locator("#terms")).isChecked();//.toBeChecked();

    await page.locator("#signInBtn").click();
})
