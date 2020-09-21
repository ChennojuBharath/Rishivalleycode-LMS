import { coursePage } from '../../Pages/coursePage.po';
import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'
describe('Course Creation Page', () => {
  let coursePg: coursePage
  coursePg = new coursePage();
  let loginPg: loginPage;
  loginPg = new loginPage();
  beforeAll(() => {
    browser.manage().window().maximize();
    BrowserUtils.enterUrl();  
  });
  it('Course Author login', () => {
    browser.waitForAngularEnabled(false);
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Courseauthorlogindata')
    loginPg.Courseauthor(dataObj);
    browser.sleep(5000);
  });
  it('Verify tasks by performing click action on every class', () => {
    coursePg.clickAllclasses();
  });
  it('check course can be created with multiple tasks', () => {
    coursePg.createNewCoursetelugu(); 
  });
  it('check course can be created with all activities for english subject', () => {
    coursePg.createcoursewithallactivities(); 
  });
  it('Search for the courses', () => {
    coursePg.SearchCourse();
  })
  it('Checking for the Export button is working or not', () => {
    coursePg.ExportCourse();
  })
  it('logout from approver application', () => {
    loginPg.logoutoperation()
  })
})






