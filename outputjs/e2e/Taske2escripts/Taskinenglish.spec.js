"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_po_1 = require("../../Pages/loginPage.po");
const fillintheblanks_po_1 = require("../../Pages/fillintheblanks.po");
const rearranging_po_1 = require("../../Pages/rearranging.po");
const trueorfalse_po_1 = require("../../Pages/trueorfalse.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
const sorting_po_1 = require("../../Pages/sorting.po");
const tapandlisten_po_1 = require("../../Pages/tapandlisten.po");
const matchtheFollowing_po_1 = require("../../Pages/matchtheFollowing.po");
const browser_utils_1 = require("../../utils/browser.utils");
const dataprovider_1 = require("../../TestData/dataprovider");
let loginPg;
loginPg = new loginPage_po_1.loginPage();
let fillintheblanks;
fillintheblanks = new fillintheblanks_po_1.fillintheblanksPage();
let Rearranging;
Rearranging = new rearranging_po_1.rearrangingPage();
let trueorfalsePg;
trueorfalsePg = new trueorfalse_po_1.trueorfalsePage();
let taskPg;
taskPg = new multiplechoicePage_po_1.tasksPage();
let Sorting;
Sorting = new sorting_po_1.sortingPage();
let Tapandlisten;
Tapandlisten = new tapandlisten_po_1.tapandlistenPage();
let matchtheFollowing;
matchtheFollowing = new matchtheFollowing_po_1.matchtheFollowingPage();
describe('Run the LMS scripts end to end', () => {
    beforeAll(() => {
        protractor_1.browser.manage().window().maximize();
        browser_utils_1.BrowserUtils.enterUrl();
    });
    it('keycloak login', () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.waitForAngularEnabled(false);
        var dataObj = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/loginData.json', 'Taskauthorlogindata');
        loginPg.Taskauthor(dataObj);
        setTimeout(() => {
            protractor_1.browser.waitForAngularEnabled(true);
        }, 20000);
    });
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Create fill in the blanks task with english subject', () => {
        fillintheblanks.Fibtaskwithenglishdata();
    });
    it('Create Rearranging task with Images with english subject', () => {
        Rearranging.createRearrangingTaskwithImageseng();
    });
    // it('Check for the task with pictureandtext can be created with english subject', () => {
    //     trueorfalsePg.createTrueorfalsetaskwithtextenglish();
    // });
    // it('Check for the task with pictureandtext can be created with english subject', () => {
    //     trueorfalsePg.createTrueorfalsetaskwithpictureandtextenglish();
    // });
    // it('Create task flow check for TapingMCQ with Text to Text with english subject', () => {
    //     taskPg.createTappingMCQTaskenglish();
    // });
    // it('Create Sorting task with Text with english subject', () => {
    //     Sorting.createTextSortingTaskenglish();
    // });
    // it('Create Sorting task with Image with english subject', () => {
    //     Sorting.createImageSortingTaskenglish();
    // });
    // it('Create Tap and Listen task with Text with audio with english subject', () => {
    //     Tapandlisten.createTapandlistenTaskwithTextenglish();
    // });
    // it('Create Tap and Listen task with Picture and Text with audio with english subject', () => {
    //     Tapandlisten.createTapandlistenTaskwithPictureandTextenglish();
    // });
    // it('Create task flow check for Matchthefollowing for Image to Image selection with english subject', () => {
    //     matchtheFollowing.createMatchthefollowingImagetoImageTaskenglish();
    // });
    // it('Create task flow check for Matchthefollowing for Text to Image selection with english subject', () => {
    //     matchtheFollowing.createMatchthefollowingTexttoImageTaskenglish();
    // });
    // it('Create task flow check for Matchthefollowing for Text to Text selection with english subject', () => {
    //     matchtheFollowing.createMatchthefollowingTexttoTextTaskenglish();
    // });
    // it('Create task flow check for Matchthefollowing for Image to Text selection with english subject', () => {
    //     matchtheFollowing.createMatchthefollowingImagetoTextTaskenglish();
    // });
});
