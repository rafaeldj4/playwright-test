const {test,expect} = require("@playwright/test");

test("Handling Static Dropdown", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise")

    const dropdown = page.locator("select");
    await dropdown.selectOption("Teacher")

   // await page.pause()

})

test("Handling Radio Buttons", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise")

    const radioUserBtn = page.locator(".radiotextsty");

    await radioUserBtn.last().click()

    await page.locator("#okayBtn").click()

    await expect(radioUserBtn.last()).toBeChecked();

})