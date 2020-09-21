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
describe('Create courese end to end', () => {
    beforeAll(() => {
        browser.manage().window().maximize();
        BrowserUtils.enterUrl();
    });
    it('Course Author login', () => {
        browser.waitForAngularEnabled(false);
        var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Courseauthorlogindata')
        loginPg.Courseauthor(dataObj);
        browser.sleep(5000);
      });
    it('check course can be created with multiple tasks', () => {
        coursePg.createNewCourseevs();
    });
    it('logout from application', () => {
        loginPg.Logoutoperation()
    });
    it('Course Approver login', () => {
        browser.waitForAngularEnabled(false);
        var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Courseapproverlogindata')
        loginPg.Courseapprover(dataObj);
        browser.sleep(5000);
      });
    it('check course can be created with multiple tasks', () => {
        approval.approvecoursefortelugu();
    });
    it('logout from application', () => {
        loginPg.logoutoperation()
    });
})