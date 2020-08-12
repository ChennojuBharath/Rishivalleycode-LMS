"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fillintheblanks_po_1 = require("../../Pages/fillintheblanks.po");
const rearranging_po_1 = require("../../Pages/rearranging.po");
const trueorfalse_po_1 = require("../../Pages/trueorfalse.po");
const multiplechoicePage_po_1 = require("../../Pages/multiplechoicePage.po");
const sorting_po_1 = require("../../Pages/sorting.po");
const tapandlisten_po_1 = require("../../Pages/tapandlisten.po");
const matchtheFollowing_po_1 = require("../../Pages/matchtheFollowing.po");
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
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Create fill in the blanks task with telugu subject', () => {
        fillintheblanks.Fibtaskwithtelugudata();
    });
    it('Create Rearranging task with Images with telugu subject', () => {
        Rearranging.createRearrangingTaskwithImagestelugu();
    });
    it('Create Rearranging task with Text with telugu subject', () => {
        Rearranging.createRearrangingTaskwithTexttelugu();
    });
    it('Check for the task with text can be created with telugu subject', () => {
        trueorfalsePg.createTrueorfalsetaskwithtexttelugu();
    });
    it('Check for the task with pictureandtext can be created with telugu subject', () => {
        trueorfalsePg.createTrueorfalsetaskwithpictureandtexttelugu();
    });
    it('Create task flow check for TapingMCQ with Text to Text', () => {
        taskPg.createTappingMCQTasktelugu();
    });
    it('Create Sorting task with Text with telugu subject', () => {
        Sorting.createTextSortingTaskenglish();
    });
    it('Create Sorting task with Image with telugu subject', () => {
        Sorting.createImageSortingTaskenglish();
    });
    it('Create Tap and Listen task with Text with audio with telugu subject', () => {
        Tapandlisten.createTapandlistenTaskwithTexttelugu();
    });
    it('Create Tap and Listen task picture with audio with telugu subject', () => {
        Tapandlisten.createTapandlistenTaskwithpicture();
    });
    it('Create Tap and Listen task with Picture and Text with audio with telugu subject', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandTexttelugu();
    });
    it('Create task flow check for Matchthefollowing for Image to Image selection with telugu subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoImageTask();
    });
    it('Create task flow check for Matchthefollowing for Text to Image selection with telugu subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoImageTasktelugu();
    });
    it('Create task flow check for Matchthefollowing for Text to Text selection with telugu subject', () => {
        matchtheFollowing.createMatchthefollowingTexttoTextTasktelugu();
    });
    it('Create task flow check for Matchthefollowing for Image to Text selection with telugu subject', () => {
        matchtheFollowing.createMatchthefollowingImagetoTextTasktelugu();
    });
});
