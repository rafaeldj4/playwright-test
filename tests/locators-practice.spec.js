const {test,expect} = require("@playwright/test");

test("Locators Practice", async ({page})=>{

    const clientPage = "https://rahulshettyacademy.com/client"

    await page.goto(clientPage);
    await page.pause();

});