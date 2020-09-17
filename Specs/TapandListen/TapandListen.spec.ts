import { tapandlistenPage } from '../../Pages/tapandlisten.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
let Tapandlisten: tapandlistenPage
Tapandlisten = new tapandlistenPage();
let taskPg: tasksPage
taskPg = new tasksPage();
let loginPg: loginPage;
loginPg = new loginPage();
describe('Tap and Listen task Creation Page', () => {
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
    it('Create Tap and Listen task with all scenarios in telugu', () => {
        Tapandlisten.createTapandlistenTaskwithTexttelugu();
    });
   it('Create Tap and Listen task with Text  all scenarios in english', () => {
        Tapandlisten.createTapandlistenTaskwithTextenglish();
    });
    it('To Search data in list of tasks', () => {
        Tapandlisten.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        Tapandlisten.CancelTask();
    });
     it('Verify Drafted task can be sent for review', () => {
        Tapandlisten.Updatetapandlistentask();
    });
    it('Check the task preview page back button', () => {
        Tapandlisten.Previewbackbutton();
    });
    it('Check the task publish page back button', () => {
        Tapandlisten.Publishbackbutton();
   })
   it('Check the task preview page breadcrumbs are working', () => {
    Tapandlisten.Previewbreadcrumbs()
  });
  it('Check the task publish page breadcrumbs are working', () => {
    Tapandlisten.Publishbreadcrmbs();
  }) 
  it('logout from application', () => {
    loginPg.logoutoperation()
  });
})