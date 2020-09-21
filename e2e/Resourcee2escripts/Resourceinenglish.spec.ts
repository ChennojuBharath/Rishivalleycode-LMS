import { browser } from "protractor";
import { Resources } from '../../Pages/resources.po';
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
describe('Resource Creation Page', () => {
  let Resource: Resources
  Resource = new Resources();
  let loginPg: loginPage;
  loginPg = new loginPage();
  beforeAll(() => {
    browser.manage().window().maximize();
    BrowserUtils.enterUrl();
  });
  it('Task Resource login', () => {
    browser.waitForAngularEnabled(false);
    var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskauthorlogindata')
    loginPg.Taskauthor(dataObj);
    browser.sleep(5000);
  });
  it('Verify Resource can  be created with class data', () => {
    Resource.Createclasstyperesourcesforenglish();
  });
  it('Verify Resource can  be created with generic data', () => {
    Resource.Creategenerictyperesourcesenglish();
  });
  it('logout from approver application', () => {
    loginPg.logoutoperation()
  })
})
