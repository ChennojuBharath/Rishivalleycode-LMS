import { Approverview } from '../../Pages/taskapprover.po';
import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'
let loginPg: loginPage;
  loginPg = new loginPage();
let Approver: Approverview
Approver = new Approverview();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Approver flow ', () => {
  beforeAll(() => {
    browser.manage().window().maximize();
    BrowserUtils.enterUrl();  
  });
  it('Task approver login', () => {
    browser.waitForAngularEnabled(false);
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskapproverlogindata')
    loginPg.Taskapprover(dataObj);
    browser.sleep(5000);
  });
  it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
  });
  it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects();
  });
  it('Verify approver is able to approve task successfully', () => {
    Approver.Approvetasktelugu();
  });
  it('Verify review tasks and send for approval is successful without comments', () => {
    Approver.Approvetaskswithoutcomments();
  });
  it('Verify created tasks can be drafted', () => {
    Approver.conformdraftapprovetasks();
  });
  it('Verify comments for tasks can be edited', () => {
    Approver.editcomments();
  });
  it('Verify comments for tasks can be deleted', () => {
    Approver.deletecomments();
  });
  it('logout from approver application', () => {
    loginPg.logoutoperation()
});
})