const {test,expect} = require("@playwright/test");

test.skip("Locators Practice - Register User", async ({page})=>{

    const clientPage = "https://rahulshettyacademy.com/client"
    const firstName = "Juana";
    const lastName = "Martinez";
    const email = "playwrightuser009211@mailinator.com";
    const phoneNumber = "8098845630";
    const password = "Master123";


    await page.goto(clientPage);

    //Email input
    const emailInput = page.locator("input#userEmail")

    //Password input
    const passwordInput = page.locator("input#userPassword")
    
    // Click Register here link
    await page.locator("a.text-reset").click()

    //Register Page form
    const firstNameInput = page.locator("#firstName");
    const lastNameInput = page.locator("#lastName");
    const phoneNumberInput = page.locator("#userMobile");
    const occupationSelect = page.locator("select[formcontrolname='occupation']");
    const genderInput = page.locator("input[formcontrolname='gender']");
    const confirmPasswordInput = page.locator("#confirmPassword");
    const ageCheckbox = page.locator("input[type='checkbox']");
    const loginButton = page.locator("#login");


    //Fill Register Form
    await firstNameInput.fill(firstName);
    await lastNameInput.fill(lastName);
    await emailInput.fill(email);
    await phoneNumberInput.fill(phoneNumber);
    await page.selectOption("select[formcontrolname='occupation']","Doctor");
    await genderInput.first().click()
    await passwordInput.fill(password);
    await confirmPasswordInput.fill(password);
    await ageCheckbox.check();
    await loginButton.click();


    //Register Validation
    const registrationMessage = page.locator("div h1.headcolor");
    const loginRegistrationPage = page.locator("div button");

    await expect(registrationMessage).toContainText("Account Created Successfully");
    await loginRegistrationPage.click();


    //Login
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await loginButton.click();


   // await emailInput.fill("playwrightuser@mailinator.com")
    // await passwordInput.fill("12345678")

    await page.pause();

});

test("Login User Succesful", async ({page})=>{

    const clientPage = "https://rahulshettyacademy.com/client"
    const email = "playwrightuser009211@mailinator.com";
    const password = "Master123";
    const loginButton = page.locator("#login");
    const emailInput = page.locator("input#userEmail")
    const passwordInput = page.locator("input#userPassword")

    //Login
    await page.goto(clientPage);
    await emailInput.fill(email);
    await passwordInput.fill(password);
    await loginButton.click();

    //Validate Home Button
    const headerButtons = page.locator("ul li button");
    await expect(headerButtons.first()).toContainText("HOME");

});