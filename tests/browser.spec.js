//include library
const {test,expect}=require ('@playwright/test');


//async-await needed explicitely to run code synchronously
//anynomous function: instead of function (), ()=> is used
//(browser)- the system will not recognize the fixture 
//proper way is ({browser})
test('Browser context Playwright test',async ({browser})=>
{
//browser instance

const context = await browser.newContext();
const page = await context.newPage();
const userName= page.locator('#username');
const passWord = page.locator("[type=password]");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
await userName.type('rahulshetty');
await passWord.type("Learning");
await page.locator('#signInBtn').click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
await userName.fill("");
await userName.fill("rahulshettyacademy");
await passWord.fill("");
await passWord.fill("learning");
await page.locator('#signInBtn').click();
await console.log(await page.title());

console.log(await page.locator(".card-body a").nth(0).textContent());
//find element CSS: 

})

// test('page playwright test',async ({page})=>
// {
//     await page.goto("https://google.com");
//     console.log(await page.title());
//     await expect(page).toHaveTitle("Google");
// })