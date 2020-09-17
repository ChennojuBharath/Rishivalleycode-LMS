import { browser } from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
import { coursePage } from '../../Pages/coursePage.po';
import { courseapprovalPage } from '../../Pages/courseapproval.po';

let loginPg: loginPage;
loginPg = new loginPage();
let coursePg: coursePage
coursePg = new coursePage();
let approval: courseapprovalPage
approval = new courseapprovalPage();

describe('Course approval flow ', () => {
    beforeAll(() => {
        browser.manage().window().maximize();
        BrowserUtils.enterUrl();  
      });
   it('Course Approver login', () => {
      browser.ignoreSynchronization = true
      browser.waitForAngularEnabled(false);
      var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Courseapproverlogindata')
      loginPg.Courseapprover(dataObj);
      setTimeout(() => {
          browser.waitForAngularEnabled(true);
      }, 20000);
  });
   it('Verify course approval flow is working  successful', () => {
    approval.approvecourseforenglish();
   });
   it('Verify course draft flow is working  successful', () => {
      approval.draftcourseforenglish();
     });
     it('logout from approver application', () => {
      loginPg.logoutoperation()
    })
})