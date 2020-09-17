import { sortingPage } from '../../Pages/sorting.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
let Sorting: sortingPage
Sorting = new sortingPage();
let taskPg: tasksPage
taskPg = new tasksPage();
let loginPg: loginPage;
loginPg = new loginPage();
describe('Sorting Tasks Creation', () => {
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
    it('Create Sorting task with Text', () => {
        Sorting.createTextSortingTasktelugu();
    });
    it('Update Sorting task with link', () => {
        Sorting.Updatesortingbylink();
    });
    it('Create Sorting task with Image', () => {
        Sorting.createImageSortingTasktelugu();
    });
    it('To Search data in list of tasks', () => {
        Sorting.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        Sorting.CancelTask();
    });
    it('Verify drafted task can be send to review', () => {
        Sorting.UpdateSortingtask();
    });
    it('Check the task preview page back button', () => {
        Sorting.Previewbackbutton()
    });
    it('Check the task publish page back button', () => {
        Sorting.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        Sorting.Previewbreadcrumbs()
      });
      it('Check the task publish page breadcrumbs are working', () => {
        Sorting.Publishbreadcrmbs();
      }) 
      it('logout from application', () => {
        loginPg.logoutoperation()
      });
})
