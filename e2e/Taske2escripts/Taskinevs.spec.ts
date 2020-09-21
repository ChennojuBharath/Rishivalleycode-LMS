import { browser} from "protractor";
import { BrowserUtils } from '../../utils/browser.utils';
import { dataProvider } from '../../TestData/dataprovider';
import { loginPage } from '../../Pages/loginPage.po';
import { fillintheblanksPage } from '../../Pages/fillintheblanks.po';
import { rearrangingPage } from '../../Pages/rearranging.po';
import { trueorfalsePage } from '../../Pages/trueorfalse.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { sortingPage } from '../../Pages/sorting.po';
import { tapandlistenPage } from '../../Pages/tapandlisten.po';
import { matchtheFollowingPage } from '../../Pages/matchtheFollowing.po';
import { focuscardsPage } from '../../Pages/focuscards.po';
import { Reviewerview } from '../../Pages/taskreviewer.po';
import { Approverview } from '../../Pages/taskapprover.po';
  let loginPg: loginPage;
  loginPg = new loginPage();
let fillintheblanks: fillintheblanksPage
fillintheblanks = new fillintheblanksPage();
let Rearranging: rearrangingPage
Rearranging = new rearrangingPage();
let trueorfalsePg: trueorfalsePage
trueorfalsePg = new trueorfalsePage();
let taskPg: tasksPage
taskPg = new tasksPage();
let Sorting: sortingPage
Sorting = new sortingPage();
let Tapandlisten: tapandlistenPage
Tapandlisten = new tapandlistenPage();
let matchtheFollowing: matchtheFollowingPage
matchtheFollowing = new matchtheFollowingPage()
let focuscards: focuscardsPage
focuscards = new focuscardsPage();
let Reviewer: Reviewerview
Reviewer = new Reviewerview();
let Approver: Approverview
Approver = new Approverview();
describe('Run the LMS scripts end to end', () => {
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
    it('Create fill in the blanks task with evs subject', () => {
        fillintheblanks.Fibtaskwithevsdata();
    })
    it('Create Rearranging task with Images with english subject', () => {
        Rearranging.createRearrangingTaskwithImagesevs();
    });
    it('Create Rearranging task with text with english subject', () => {
      Rearranging.createRearrangingTaskwithTextevs();
  });
    it('Check true or false task is working with text', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextevs();
    });
    it('Check true or false task is working with text and picture', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextandpictureevs();
    });
    it('Create task flow check for TapingMCQ with Text to Text with evs subject', () => {
        taskPg.createTappingMCQTasktextevs();
    });
    it('Create Sorting task with Text with evs subject', () => {
        Sorting.createTextSortingTaskevs();
    });
    it('Create Sorting task with Image with evs subject', () => {
        Sorting.createImageSortingTaskevs();
    });
    it('Create Tap and Listen task with Text with audio with evs subject', () => {
        Tapandlisten.createTapandlistenTaskwithTextevs();
    });
    it('Create Tap and Listen task with Picture and Text with audio with evs subject', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandTextevs();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection with evs subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTaskevs();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection with evs subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTaskevs();
    });
    it('Create task flow check for focuscards task', () => {
        focuscards.createfocuscardsTaskevs();
    });
    it('logout from application', () => {
        loginPg.Logoutoperation()
    });
    it('Task reviewer login', () => {
      browser.waitForAngularEnabled(false);
      var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskreviewerlogindata')
      loginPg.Taskreviewer(dataObj);
      browser.sleep(5000);
    });
      it('Verify review tasks and send for approval is successful', () => {
        Reviewer.Reviewtasksforevs();
     });
     it('logout from reviewer application', () => {
        loginPg.Logoutoperation()
    });
    it('Task approver login', () => {
      browser.waitForAngularEnabled(false);
      var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskapproverlogindata')
      loginPg.Taskapprover(dataObj);
      browser.sleep(5000);
    });
      it('Verify approval of tasks is successful', () => {
        Approver.Approvetaskevs();
     });
     it('logout from approver application', () => {
        loginPg.logoutoperation()
    });
})