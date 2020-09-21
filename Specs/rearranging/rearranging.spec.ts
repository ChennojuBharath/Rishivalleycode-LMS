import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
import { rearrangingPage } from '../../Pages/rearranging.po';
import { sortingPage } from '../../Pages/sorting.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Rearranging: rearrangingPage
Rearranging = new rearrangingPage();
let loginPg: loginPage;
loginPg = new loginPage();
let taskPg: tasksPage
taskPg = new tasksPage();
let Sorting: sortingPage
Sorting = new sortingPage();
describe('Rearranging Tasks Creation', () => {
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
    it('Create Rearranging task with Images', () => {
        Rearranging.createRearrangingTaskwithImagestelugu();
    });
    it('Create Rearranging task with Text', () => {
        Rearranging.createRearrangingTaskwithTexteng();
    });
    it('Closing the task popup using cancel button', () => {
        Rearranging.CancelTask();
    });
    it('Update drafted Rearranging task can be updated using link', () => {
        Rearranging.UpdateRearrangingtask();
    });
    it('Verify Delete options is working in Create page', () => {
        Rearranging.Deleteoptions();
    });
    it('Check Create page cancel icon is working', () => {
        Rearranging.Createcancelicon();
    });
    it('To Search data in list of tasks', () => {
        Rearranging.SearchTaskfromlist();
    });
    it('Check the task preview page back button', () => {
        Rearranging.Previewbackbutton()
    });
    it('Check the task publish page back button', () => {
        Rearranging.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        Rearranging.Previewbreadcrumbs()
    });
    it('Check the task publish page breadcrumbs are working', () => {
        Rearranging.Publishbreadcrmbs();
    })
    it('logout from application', () => {
        loginPg.logoutoperation()
      });
})