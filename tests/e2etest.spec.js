const {test,expect} = require("@playwright/test");

test("End to End Test Practice", async ({page})=>{

    const clientPage = "https://rahulshettyacademy.com/client"
    const firstName = "Juana";
    const lastName = "Martinez";
    const email = "playwrightuser009211@mailinator.com";
    const phoneNumber = "8098845630";
    const password = "Master123";
    const emailInput = page.locator("input#userEmail")
    const passwordInput = page.locator("input#userPassword")
    const loginButton = page.locator("#login");

    //Visit Login Page
    await page.goto(clientPage);

    //Enter Login Credentials
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await loginButton.click();

    //Successful login Validation
    const navBarBtn = page.locator("ul li button");
    expect(await navBarBtn.first()).toContainText("HOME");
    console.log(await navBarBtn.first().textContent())

    //Home Page Products
    const homeProductsCard = page.locator("div.card-body");
    console.log(await homeProductsCard.last().textContent())
    await homeProductsCard.last().locator("button").last().click()




    await page.pause();

});