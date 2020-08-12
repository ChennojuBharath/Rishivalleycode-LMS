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
  it('Course Author login', () => {
    beforeAll(() => {
      browser.manage().window().maximize();
      BrowserUtils.enterUrl();
    });
    it('Course Author login', () => {
      browser.ignoreSynchronization = true
      browser.waitForAngularEnabled(false);
      var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Courseauthorlogindata')
      loginPg.Courseauthor(dataObj);
      setTimeout(() => {
        browser.waitForAngularEnabled(true);
      }, 20000);
    });
    it('Verify Resource can  be created with class data', () => {
      Resource.Createclasstyperesourcesfortelugu();
    });
    it('Verify Resource can  be created with generic data', () => {
      Resource.Creategenerictyperesourcestelugu();
    });

  })
})