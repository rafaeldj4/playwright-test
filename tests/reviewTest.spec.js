const {test,expect} = require("@playwright/test");
const {ReviewExamplePage} = require("../pages/ReviewExamplePage");
const dataSet = JSON.parse(JSON.stringify(require("../utils/reviewDataSet.json")));

test("Login", async({page})=>{


    const reviewExamplePage = new ReviewExamplePage(page);
    reviewExamplePage.goToPage(page);
    reviewExamplePage.enterEmail(dataSet.email);
    reviewExamplePage.enterPassword(dataSet.password);
    reviewExamplePage.clickLoginBtn()
    await page.pause();

        


});
