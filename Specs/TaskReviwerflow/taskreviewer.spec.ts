import { Reviewerview } from '../../Pages/taskreviewer.po';
import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'
let loginPg: loginPage;
  loginPg = new loginPage();
let Reviewer: Reviewerview
Reviewer = new Reviewerview();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Reviewer flow ', () => {
 
     it('keycloak login', () => {
    browser.ignoreSynchronization = true
     browser.manage().window().maximize();
    BrowserUtils.enterUrl();
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskreviewerlogindata')
    loginPg.Taskreviewer(dataObj);
    setTimeout(() => {
      browser.waitForAngularEnabled(true);  
    }, 2000000);
  });
   it('Verify tasks by performing click action on every class', () => {
      taskPg. ClickAllclasses() ;
   });
   it('Verify the tab click for Subject tabs', () => {
      taskPg.ClickAllsubjects();
   });
    it('Verify review tasks and send for approval is successful', () => {
      Reviewer.Reviewtasksforenglish();
   });
   it('Verify review tasks and send for approval is successful without comments', () => {
      Reviewer.Reviewtaskswithoutcomments();
   });
   it('Verify created tasks can be drafted', () => {
      Reviewer.conformdraftreviewtasks();
   });
   it('Verify draft popup can be cancelled', () => {
      Reviewer.editcomments();
   });
   it('Verify comments for tasks can be deleted', () => {
      Reviewer.deletecomments();
   });
})