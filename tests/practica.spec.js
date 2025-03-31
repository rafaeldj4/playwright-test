const {test,expect} = require("@playwright/test");

test("Practicing Playwright", async ({page})=>{


    await page.goto("https://usuario.claro.com.do/login")
    console.log(await page.title())
    await expect(page).toHaveTitle("Portal Único Claro")


})