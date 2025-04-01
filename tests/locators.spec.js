const {test,expect} = require("@playwright/test");

test("Playwright Locators", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise")
    console.log(await page.title())
    
    await page.locator("input#username").fill("rahulshettyacademy ");
    await page.locator("input[name='password']").fill("learning");
    await page.locator("input#terms").click();
    await page.locator("#signInBtn").click();

});

test("Successful Login", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    await expect(page).toHaveTitle("ProtoCommerce");
    console.log(await page.title())

});

test("Failed Login", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");
    await page.locator("#username").fill("rahulshetty");
    await page.locator("#password").fill("learning");
    await page.locator("#signInBtn").click();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.")

});