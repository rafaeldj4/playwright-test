class SSOLoginPage {

    constructor(page){

        this.page = page;
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.accederBtn = page.locator(".btn-primary");

    }

    async ssoLogin(username,password){

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.accederBtn.click()
    }


}
module.exports = {SSOLoginPage};