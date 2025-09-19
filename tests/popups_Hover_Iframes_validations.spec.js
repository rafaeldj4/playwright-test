const {test,expect} = require("@playwright/test");

test("Navegation validations", async ({page})=>{


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://usuario.claro.com.do/login");
    await page.goBack();
    await page.goForward();
});

test("Popups handling", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#confirmbtn").click();
    await page.on("dialog", dialog=> dialog.accept());


});

test("Hover", async ({page})=>{

    await page.goto("https://usuario.claro.com.do/login");
    await page.locator("#username").fill("prueba0094");
    await page.locator("#password").fill("12345678");
    await page.getByRole("button", {name:"Acceder"}).click();
    await page.locator(".user-settings").hover();

    //ambas opciones funcionan
    /*await page.getByRole("link", {name:"Perfil"}).click(); */
    await page.locator(".dropdown-item").filter({hasText:"Perfil"}).click();
})


test("Iframe Handling", async ({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const iframePage = page.frameLocator("#courses-iframe");
    await iframePage.getByRole("link",{name:"Courses"}).click();

});