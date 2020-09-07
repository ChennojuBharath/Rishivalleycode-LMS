import { browser, element, by, ExpectedConditions, Browser } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';


export class loginPage {

    keycloakusername(){
        return element(by.xpath("//input[@id='username']"));
    }
    keycloakpassword(){
        return element(by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn(){
        return element(by.xpath("//input[@name='login']"));
    }
    userName() {
        //return element(by.xpath('//input[@name="username"]'));
        return element(by.xpath('//input[@ng-reflect-name="userName"]'));
    }
    profileicon(){
        return element(by.xpath("//i[text()='person_pin']"));     
    }
    logout(){
        return element(by.xpath("//button[@role='menuitem']")); 
    }
    passWord() {
        //return element(by.xpath('//input[@name="password"]'));
        return element(by.xpath('//input[@ng-reflect-name="password"]'));
    }
    loginButton() {
        return element(by.xpath('//span[text()="Login"]'));
    }
    OkButton() {
        return element(by.xpath("//button[text()='OK']"));
    }

    login(logindata) {
        this.userName().click();
        this.userName().sendKeys(logindata.username);
        this.passWord().clear();
        this.passWord().sendKeys(logindata.password);
        this.loginButton().click();
        browser.getCurrentUrl().then((url)=> {
         expect(url).toContain('all-courses')
        })
    }
    Taskauthor(Taskauthorlogindata){
        this.keycloakusername().sendKeys(Taskauthorlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Taskauthorlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        browser.sleep(15000);
    } 
     Taskreviewer(Taskreviewerlogindata){
        this.keycloakusername().sendKeys(Taskreviewerlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Taskreviewerlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        browser.sleep(2000);
    }
        Taskapprover(Taskapproverlogindata){
        this.keycloakusername().sendKeys(Taskapproverlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Taskapproverlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        browser.sleep(2000);
    }
      Courseauthor(Courseauthorlogindata){
        this.keycloakusername().sendKeys(Courseauthorlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Courseauthorlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        browser.sleep(2000);
    }
      Courseapprover(Courseapproverlogindata){
        this.keycloakusername().sendKeys(Courseapproverlogindata.keycloakusername);
        this.keycloakpassword().sendKeys(Courseapproverlogindata.keycloakpassword);
        this.keycloakloginbtn().click();
        browser.sleep(2000);
    }
    logoutoperation(){
        browser.ignoreSynchronization = true
        browser.sleep(2000);
        this.profileicon().click();
        browser.sleep(2000);
        this.logout().click();
        this.keycloakusername().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'logout from application is successful')
         })
    }

}