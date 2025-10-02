class ReviewExamplePage {

    constructor(page) {
        this.page = page;
        this.emailInput = page.locator("#userEmail");
        this.passwordInput = page.locator("#userPassword");
        this.loginBtn = page.locator("#login")
    }

    async goToPage(page){
        await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    }

    async enterEmail(email){

        await this.emailInput.fill(email);

    }

    async enterPassword(password){
        await this.passwordInput.fill(password)
    }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }

}

module.exports = {ReviewExamplePage};