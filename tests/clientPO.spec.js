const {test,expect} = require("@playwright/test");
const {LoginPage} = require("../pages/LoginPage");

test("Succesfull Login", async({page})=>{

 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
const loginPage = new LoginPage(page);
loginPage.login();

});