const {test,expect,request} = require("@playwright/test");
let token;
const loginPayLoad = {userEmail:"prueba97@mailinator.com",userPassword:"Master123#"};

test.beforeAll("Precondition Login", async()=>{

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        
        {
            data:loginPayLoad
        })

        expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log(token);
    
});


test("Web API Handling - Client app login", async({page})=>{

    await page.addInitScript(value => {
        window.localStorage.setItem('token',value)
    },token);

    await page.goto("https://rahulshettyacademy.com/api/ecom/auth/login")

});