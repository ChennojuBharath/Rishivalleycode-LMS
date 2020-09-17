import { browser } from 'protractor';
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { trueorfalsePage } from '../../Pages/trueorfalse.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { loginPage } from '../../Pages/loginPage.po';
let taskPg: tasksPage
taskPg = new tasksPage();
let trueorfalsePg: trueorfalsePage
trueorfalsePg = new trueorfalsePage();
let loginPg: loginPage;
loginPg = new loginPage();
describe('trueorfalse task Creation Page', () => {
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
    it('Check for the task with pictureandtext can be created', () => {
        trueorfalsePg.createTrueorfalsetasktelugumultiplequestions();
    });
    it('Check for the task with pictureandtext can be created', () => {
        trueorfalsePg.createTrueorfalsetaskenglishmultiplequestions();
    });
    it('To Search data in list of tasks', () => {
        trueorfalsePg.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        trueorfalsePg.CancelTask();
    });
    it('Update drafted task to reviewer', () => {
        trueorfalsePg.Updatetrueorfalsetask();
    });
    it('Check the task preview page back button', () => {
        trueorfalsePg.Previewbackbutton()
    });
    it('Check the task publish page back button', () => {
        trueorfalsePg.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        trueorfalsePg.Previewbreadcrumbs()
    });
    it('Check the task publish page breadcrumbs are working', () => {
        trueorfalsePg.Publishbreadcrmbs();
    })
    it('logout from application', () => {
        loginPg.logoutoperation()
    });
})
