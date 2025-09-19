const {test,expect} = require("@playwright/test");

test("Get by label", async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/")
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Student").click();
    await page.getByPlaceholder("Password").fill("12345678");
    await page.getByRole("button", {name: 'Submit'}).click();
    await page.getByRole("link", {name: "Shop"}).click();
    await page.locator("app-card").filter({hasText:"iphone X"}).getByRole("button",{name:"Add"}).click()
    await page.pause();

})