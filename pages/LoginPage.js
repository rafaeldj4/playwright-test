class LoginPage {

    constructor(page) {

        this.page = page;
        this.emailInput = page.locator("#userEmail");
        this.passwordInput = page.locator("#userPassword");
        this.loginBtn = page.locator("#login");

    }

        async login(){

        await this.emailInput.fill("test1234@gmail.com")
        await this.passwordInput.fill("12345678")
        await this.loginBtn.click();

    }

}

module.exports = {LoginPage};