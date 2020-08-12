"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class loginPage {
    keycloakusername() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return protractor_1.element(protractor_1.by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return protractor_1.element(protractor_1.by.xpath("//input[@name='login']"));
    }
    userName() {
        //return element(by.xpath('//input[@name="username"]'));
        return protractor_1.element(protractor_1.by.xpath('//input[@ng-reflect-name="userName"]'));
    }
    profileicon() {
        return protractor_1.element(protractor_1.by.xpath("//i[text()='person_pin']"));
    }
    logout() {
        return protractor_1.element(protractor_1.by.xpath("//button[@role='menuitem']"));
    }
    passWord() {
        //return element(by.xpath('//input[@name="password"]'));
        return protractor_1.element(protractor_1.by.xpath('//input[@ng-reflect-name="password"]'));
    }
    loginButton() {
        return protractor_1.element(protractor_1.by.xpath('//span[text()="Login"]'));
    }
    OkButton() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    login(logindata) {
        this.userName().click();
        this.userName().sendKeys(logindata.username);
        this.passWord().clear();
        this.passWord().sendKeys(logindata.password);
        this.loginButton().click();
        protractor_1.browser.getCurrentUrl().then((url) => {
            expect(url).toContain('all-courses');
        });
    }
    Taskauthor(Taskauthorlogindata) {
        this.keycloakusername().sendKeys(Taskauthorlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Taskauthorlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        protractor_1.browser.sleep(2000);
    }
    Taskreviewer(Taskreviewerlogindata) {
        this.keycloakusername().sendKeys(Taskreviewerlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Taskreviewerlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        protractor_1.browser.sleep(2000);
    }
    Taskapprover(Taskapproverlogindata) {
        this.keycloakusername().sendKeys(Taskapproverlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Taskapproverlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        protractor_1.browser.sleep(2000);
    }
    Courseauthor(Courseauthorlogindata) {
        this.keycloakusername().sendKeys(Courseauthorlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Courseauthorlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        protractor_1.browser.sleep(2000);
    }
    Courseapprover(Courseapproverlogindata) {
        this.keycloakusername().sendKeys(Courseapproverlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Courseapproverlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        protractor_1.browser.sleep(2000);
    }
}
exports.loginPage = loginPage;
