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
    it('keycloak login', () => {
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
    it('Create fill in the blanks task with telugu subject', () => {
        fillintheblanks.Fibtaskwithtelugudata();
    })
    it('Create Rearranging task with Images with telugu  subject', () => {
        Rearranging.createRearrangingTaskwithImagestelugu();
    });
    it('Create Rearranging task with text with telugu  subject', () => {
        Rearranging.createRearrangingTaskwithTexttelugu();
    });
    it('Check true or false task is working with text', () => {
        trueorfalsePg.createTrueorfalsetaskwithtexttelugu();
    });
    it('Check true or false task is working with text and picture', () => {
        trueorfalsePg.createTrueorfalsetaskwithtextandpicturetelugu();
    });
    it('Create task flow check for TapingMCQ with Text to Text with telugu  subject', () => {
        taskPg.createTappingMCQTasktexttelugu();
    });
    it('Create Sorting task with Text with telugu subject', () => {
        Sorting.createTextSortingTasktelugu();
    });
    it('Create Sorting task with Image with telugu  subject', () => {
        Sorting.createImageSortingTasktelugu();
    });
    it('Create Tap and Listen task with Text with audio with telugu  subject', () => {
        Tapandlisten.createTapandlistenTaskwithTexttelugu();
    });
    it('Create Tap and Listen task with Picture and Text with audio with telugu  subject', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandTexttelugu();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection with telugu  subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTasktelugu();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection with telugu  subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTasktelugu();
    });
    it('Create task flow check for Matchthefollowing for Text to Text selection with telugu subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoTextTasktelugu();
    });
    it('Create task flow check for Matchthefollowing for Image to Text selection with telugu  subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoTextTasktelugu();
    });
    it('Create task flow check for Focus cards with english subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoTextTasktelugu();
    });
    it('Create task flow check for focuscards task', () => {
        focuscards.createfocuscardsTasktelugu();
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
        Reviewer.Reviewtasksfortelugu();
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
      it('Verify  approval of tasks is successful', () => {
        Approver.Approvetasktelugu();
     });
     it('logout from approver application', () => {
        loginPg.logoutoperation()
    });
})