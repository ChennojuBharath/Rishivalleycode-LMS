import { Resources } from '../../Pages/resources.po';
import { browser, element, by, ExpectedConditions, utils } from "protractor";
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { BrowserUtils } from '../../utils/browser.utils';
import { loginPage } from '../../Pages/loginPage.po';
import { dataProvider } from '../../TestData/dataprovider'
describe('Resource Creation Page', () => {
  let Resource: Resources
  Resource = new Resources();
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
    taskPg.Clickresoucerselink();
  });
  it('Verify Resource can  be created with class data', () => {
    Resource.Createclasstyperesourcesforenglish();
  });
  it('Verify Resource can  be created with generic data', () => {
    Resource.Creategenerictyperesourcesenglish();
  });
  it('Verify Generic Resource can be deleted', () => {
    Resource.Deletegenerictypeesource();
  });
  it('Verify classtype Resource can be deleted', () => {
    Resource.Deleteclasstypeesource();
  });
  it('Verify type drop down selection is working', () => {
    Resource.Typedropdown();
  });
  it('Verify resource search is working', () => {
    Resource.Searchresourcefromlist();
  });
  it('logout from application', () => {
    loginPg.logoutoperation()
  });
})