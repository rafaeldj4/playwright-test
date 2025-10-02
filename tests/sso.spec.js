const {test,expect} = require("@playwright/test");
const {POManager} = require("../pages/POManager");
const { json } = require("stream/consumers");
const dataset =  JSON.parse(JSON.stringify(require("../utils/ssoUsersTestData.json")));

test("Login exitoso", async({page})=>{

    
    await page.goto("https://usuario.claro.com.do/login");
    const poManager = new POManager(page);
    poManager.ssoLoginPage.ssoLogin(dataset.username,dataset.password);
    
    

    


})