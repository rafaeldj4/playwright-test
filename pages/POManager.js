const {SSOLoginPage} = require("../pages/SSOLoginPage");

class POManager {

    constructor (page){

        this.page = page;
        this.ssoLoginPage = new SSOLoginPage(this.page);

    }

}
module.exports = {POManager};