const {test,expect} = require("@playwright/test");

test("Playwright Locators", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise")
    console.log(await page.title())

});