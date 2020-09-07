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
        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);
        var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Courseauthorlogindata')
        loginPg.Courseauthor(dataObj);
        setTimeout(() => {
            browser.waitForAngularEnabled(true);
        }, 20000);
    });
    it('create a course using course author', () => {
        coursePg.createNewCourseenglish();
    });
    it('logout from application', () => {
        loginPg.logoutoperation()
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
    it('check course can be created with multiple tasks', () => {
        approval.draftcourseforenglish();
    });
    it('logout from application', () => {
        loginPg.logoutoperation()
    });
    
})