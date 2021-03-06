//include library
const {test,expect}=require ('@playwright/test');


//async-await needed explicitely to run code synchronously
//anynomous function: instead of function (), ()=> is used
//(browser)- the system will not recognize the fixture 
//proper way is ({browser})
test('Browser context Playwright test',async ({browser})=>
{
//browser instance
//Creating context: contex holds page and add arguments
const context = await browser.newContext();
const page = await context.newPage();

//Initialization- section
const userName= page.locator('#username');
const passWord = page.locator("[type=password]");
const productName=page.locator('.card-body a');


//Navigating browser: chromimum is inititated
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


console.log(await page.title());

//login function: negative testing with error capturing
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
await userName.type('rahulshetty');
await passWord.type("Learning");
await page.locator('#signInBtn').click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');

//login funciton: clearing and positive testing
await userName.fill("");
await userName.fill("rahulshettyacademy");
await passWord.fill("");
await passWord.fill("learning");
await page.locator('#signInBtn').click();

//New page proof: capturing and printing the first content
console.log(await productName.nth(0).textContent());
console.log(await productName.first().textContent());
console.log(await productName.last().textContent());
console.log(await productName.nth(3).textContent());

//allTextContents() will not working when page is still loading
//Therefore it'll be wised to use it right away
const productsTitle = await productName.allTextContents();
console.log(productsTitle);
//find element CSS: #id, .class, [tag='attribute']

})//End-test Browser context playwright test function


test.only('page playwright test',async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    const userName= page.locator('#username');
const passWord = page.locator("[type=password]");
//login funciton: clearing and positive testing
await userName.fill("");
await userName.fill("rahulshettyacademy");
await passWord.fill("");
await passWord.fill("learning");
const dropdown =await page.locator("select.form-control");
await dropdown.selectOption('consult');
await page.locator(".radiotextsty").first().click();
await expect(page.locator(".radiotextsty").first()).toBeChecked();
await page.pause();
await page.locator('#signInBtn').click();
})

