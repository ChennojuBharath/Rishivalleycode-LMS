import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'


describe('Verify Login Page', () => {
  let loginPg: loginPage;
  loginPg = new loginPage();

  beforeAll(() => {
    browser.manage().window().maximize();
    BrowserUtils.enterUrl();
   
  });
  it('keycloak login', () => {
    browser.ignoreSynchronization = true
    //  setTimeout(() => {
    //  browser.waitForAngularEnabled(false);  
    // }, 20000);
    //browser.waitForAngularEnabled(false);
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskauthorlogindata')
    loginPg.Taskauthor(dataObj);
    setTimeout(() => {
      browser.waitForAngularEnabled(true);  
    }, 2000000);
  });


  // it('display error message on accessing wth invaid credentials', () => {
  //   var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'invalidLoginData')
  //    loginPg.login(dataObj);
  //    loginPg.OkButton().click();
     
  // });

  // it('login is successful with valid credentials', () => {
  //    loginPg.userName().clear();
  //    loginPg.passWord().clear();
  //   var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'validLoginData')
  //   loginPg.login(dataObj);

  // });

});