import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
import { fillintheblanksPage } from '../../Pages/fillintheblanks.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let loginPg: loginPage;
loginPg = new loginPage();
let fillintheblanks: fillintheblanksPage
fillintheblanks = new fillintheblanksPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Fill in the blanks Tasks Creation', () => {
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
it('Create task flow check for fill in the blanks in telugu subject', () => {
  fillintheblanks.Fibtaskwithtelugudata();
})
it('Create task flow check for fill in the blanks in english subject', () => {
  fillintheblanks.Fibtaskwithenglishdata();
})
it('Verify deletion of Options and Slides is working', () => {
  fillintheblanks.DeleteSlideandOptions();
})
it('Closing the task popup using cancel button', () => {
  fillintheblanks.CancelTask();
});
it('Update drafted fill in the blanks task', () => {
  fillintheblanks.Updatefillintheblanks();
})
it('To Search data in list of tasks', () => {
  fillintheblanks.SearchTaskfromlist();
});
it('Check for the content type search', () => {
  fillintheblanks.Contenttypesearch();
});
it('Check the task preview page back button', () => {
  fillintheblanks.Previewbackbutton()
});
it('Check the task publish page back button', () => {
  fillintheblanks.Publishbackbutton();
})
it('Check the task preview page breadcrumbs are working', () => {
  fillintheblanks.Previewbreadcrumbs()
});
it('Check the task publish page breadcrumbs are working', () => {
  fillintheblanks.Publishbreadcrmbs();
}) 
it('logout from application', () => {
  loginPg.logoutoperation()
});
});