const {test,expect} = require("@playwright/test");

test("Playwright Locators", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise")
    console.log(await page.title())
    
    await page.locator("input#username").fill("rahulshettyacademy ");
    await page.locator("input[name='password']").fill("learning");
    await page.locator("input#terms").click();
    await page.locator("#signInBtn").click();

});

test.only("Successful Login", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce");
    console.log(await page.title())
    // Select the first elemente on a list
    const cardTitles = page.locator("div h4.card-title a");
   // console.log(await cardTitles.first().textContent());
    //await cardTitles.nth(0).textContent();
    console.log(await cardTitles.allTextContents());

});

test("Failed Login", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.")

});