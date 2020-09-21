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
    it('Create fill in the blanks task with maths subject', () => {
        fillintheblanks.Fibtaskwithmathsdata();
    })
    it('Create Rearranging task with Images with maths subject', () => {
        Rearranging.createRearrangingTaskwithImagesmaths();
    });
    it('Create Rearranging task with text with maths subject', () => {
      Rearranging.createRearrangingTaskwithTextmaths();
  });
    it('Check true or false task is working with text', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextmaths();
    });
    it('Check true or false task is working with text and picture', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextandpicturemaths();
    });
    it('Create task flow check for TapingMCQ with Text to Text with maths subject', () => {
        taskPg.createTappingMCQTasktextmaths();
    });
    it('Create Sorting task with Text with maths subject', () => {
        Sorting.createTextSortingTaskmaths();
    });
    it('Create Sorting task with Image with maths subject', () => {
        Sorting.createImageSortingTaskmaths();
    });
    it('Create Tap and Listen task with Text with audio with maths subject', () => {
        Tapandlisten.createTapandlistenTaskwithTextmaths();
    });
    it('Create Tap and Listen task with Picture and Text with audio with maths subject', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandTextmaths();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection with maths subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTaskmaths();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection with maths subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTaskmaths();
    });
    it('Create task flow check for focuscards task', () => {
        focuscards.createfocuscardsTaskmaths();
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
        Reviewer.Reviewtasksformaths();
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
        Approver.Approvetaskmaths();
     });
     it('logout from approver application', () => {
        loginPg.logoutoperation()
    });
})