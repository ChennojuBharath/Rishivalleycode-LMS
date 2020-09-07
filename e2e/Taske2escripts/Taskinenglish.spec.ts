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
    it('Create fill in the blanks task with english subject', () => {
        fillintheblanks.Fibtaskwithenglishdata();
    })
    it('Create Rearranging task with Images with english subject', () => {
        Rearranging.createRearrangingTaskwithImageseng();
    });
    it('Create Rearranging task with text with english subject', () => {
      Rearranging.createRearrangingTaskwithTexteng();
  });
    it('Check true or false task is working with text', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextenglish();
    });
    it('Check true or false task is working with text and picture', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextandpictureenglish();
    });
    it('Create task flow check for TapingMCQ with Text to Text with english subject', () => {
        taskPg.createTappingMCQTasktextenglish();
    });
    it('Create Sorting task with Text with english subject', () => {
        Sorting.createTextSortingTaskenglish();
    });
    it('Create Sorting task with Image with english subject', () => {
        Sorting.createImageSortingTaskenglish();
    });
    it('Create Tap and Listen task with Text with audio with english subject', () => {
        Tapandlisten.createTapandlistenTaskwithTextenglish();
    });
    it('Create Tap and Listen task with Picture and Text with audio with english subject', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandTextenglish();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTaskenglish();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTaskenglish();
    });
    it('Create task flow check for Matchthefollowing for Text to Text selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoTextTaskenglish();
    });
    it('Create task flow check for Matchthefollowing for Image to Text selection with english subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoTextTaskenglish();
    });
    it('Create task flow check for focuscards task', () => {
        focuscards.createfocuscardsTaskenglish();
    });
    it('logout from application', () => {
        loginPg.logoutoperation()
    });
    it('Task reviewer login', () => {
        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);
        var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskreviewerlogindata')
        loginPg.Taskreviewer(dataObj);
        setTimeout(() => {
          browser.waitForAngularEnabled(true);  
        }, 20000);
      });
      it('Verify review tasks and send for approval is successful', () => {
        Reviewer.Reviewtasksforenglish();
     });
     it('logout from reviewer application', () => {
        loginPg.logoutoperation()
    });
     it('Task approver login', () => {
        browser.ignoreSynchronization = true
        browser.waitForAngularEnabled(false);
        var dataObj = dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskapproverlogindata')
        loginPg.Taskapprover(dataObj);
        setTimeout(() => {
          browser.waitForAngularEnabled(true);  
        }, 20000);
      });
      it('Verify approval of tasks is successful', () => {
        Approver.Approvetaskenglish();
     });
     it('logout from approver application', () => {
        loginPg.logoutoperation()
    });
})