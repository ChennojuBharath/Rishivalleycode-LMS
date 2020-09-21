import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';

describe('Tapping MCQ Tasks Creation', () => {
    let loginPg: loginPage;
loginPg = new loginPage();
    let taskPg: tasksPage
    taskPg = new tasksPage();
    beforeAll(() => {
        browser.manage().window().maximize();
        BrowserUtils.enterUrl();  
      });
      it('Task author login', () => {
        browser.waitForAngularEnabled(false);
        var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskauthorlogindata')
        loginPg.Taskauthor(dataObj);
        browser.sleep(5000);
      });
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create task flow check for TapingMCQ with all scenarios', () => {
        taskPg.createTappingMCQTasktexttelugu();
    });
    it('Create task flow check for TapingMCQ with all scenarios', () => {
        taskPg.createTappingMCQTasktextenglish();
    });

    it('To Search data in list of tasks', () => {
        taskPg.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        taskPg.CancelTask();
    });
    it('Verify MCQ task can be updated', () => {
        taskPg.UpdateMCQ();
    });
    it('Check the task preview page back button', () => {
        taskPg.Previewbackbutton();
    });
    it('Check the task publish page back button', () => {
        taskPg.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        taskPg.Previewbreadcrumbs()
    });
    it('Check the task publish page breadcrumbs are working', () => {
        taskPg.Publishbreadcrmbs();
    })
    it('logout from application', () => {
        loginPg.logoutoperation()
      });
})