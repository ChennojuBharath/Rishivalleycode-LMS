import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
import { focuscardsPage } from '../../Pages/focuscards.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let focuscards: focuscardsPage
focuscards = new focuscardsPage();
let taskPg: tasksPage
taskPg = new tasksPage();
let loginPg: loginPage;
loginPg = new loginPage();
describe('Focuscards Tasks Creation', () => {
  beforeAll(() => {
    browser.manage().window().maximize();
    BrowserUtils.enterUrl();  
  });
  it('Task author login', () => {
    browser.ignoreSynchronization = true
    browser.waitForAngularEnabled(false);
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskauthorlogindata')
    loginPg.Taskauthor(dataObj);
    setTimeout(() => {
      browser.waitForAngularEnabled(true);  
    }, 20000);
  });
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
 });
 it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects(); 
  }); 
it('Create task flow check for focuscards task', () => {
    focuscards.createfocuscardsTaskenglish();
});
it('To Search data in list of tasks', () => {
  focuscards.SearchTaskfromlist();
});
it('Closing the task popup using cancel button', () => {
  focuscards.CancelTask();
});
it('To update focus cards task', () => {
  focuscards.Updatefocuscardsbylink();
});
it('To check focus cards task delete', () => {
  focuscards.focuscardsdelete();
});
it('Check the task preview page back button', () => {
  focuscards.Previewbackbutton()
});
it('Check the task publish page back button', () => {
  focuscards.Publishbackbutton();
})
it('Check the task preview page breadcrumbs are working', () => {
  focuscards.Previewbreadcrumbs()
});
it('Check the task publish page breadcrumbs are working', () => {
  focuscards.Publishbreadcrmbs();
})
it('logout from application', () => {
  loginPg.logoutoperation()
}); 
})