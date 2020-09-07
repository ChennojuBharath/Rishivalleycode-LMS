import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class Reviewerview {
    keycloakusername() {
        return element(by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return element(by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return element(by.xpath("//input[@name='login']"));
    }
    Tasksearch() {
        return element(by.xpath("//div[@class='head-search-container']"));
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//span[contains(text(),'Next')]"))
    }
    saveMCQ() {
        return element(by.xpath("//span[text()='Save']"))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Taskcancelbtn() {
        return element(by.xpath("//span[text()='Cancel']"));
    }
    Telugu() {
        return element(by.xpath("//span[text()='TELUGU']"))
    }
    commentbutton() {
        return element(by.xpath("//span[contains(text(),'Add Comment')]"))
    }
    Commentcancelbtn() {
        return element(by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
     Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 2')]"));
    }
    SubmitForApproverbtn() {
        return element(by.xpath("//span[contains(text(),'Submit For Approver')]"));
    }
    Draftbtn() {
        return element(by.xpath("//span[contains(text(),'Draft')]"));
    }
    successmsgokbtn() {
        return element(by.xpath("//span[contains(text(),'OK')]"));
    }
    Conformdraftbtn() {
        return element(by.xpath("//span[contains(text(),'CONFIRM')]"));
    }
    Canceldraftbtn() {
        return element(by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Previewbackbtn() {
        return element(by.xpath("//span[contains(text(),'Back')]"));
    }
    Rivertext() {
        return element(by.xpath("//span[contains(text(),'RiVER')]"));
    }
    Commentsediticon() {
        return element(by.xpath("//img[@src='assets/images/Union.svg']"));
    }
    Commentsdeleteicon() {
        return element(by.xpath("//img[@src='assets/images/delete.svg']"));
    }
    Keycloaklogin() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.enterText(by.xpath("//input[@id='username']"), record["ReviewerUsername"]);
                BrowserUtils.enterText(by.xpath("//input[@id='password']"), record["Reviewerpassword"]);
                this.keycloakloginbtn().click();
                browser.sleep(20000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Reviewer login is successful')
                })
            })
        }
    }
    Reviewmultipletasksforenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["EnglishTaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                BrowserUtils.getTotalElementCount(by.xpath("//a[@class='task-link']")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    console.log("reviewed task is" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
                            var loc = "(//a[@class='task-link'])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(10000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentReviewer"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                            this.SubmitForApproverbtn().click();
                            browser.sleep(10000);
                            this.successmsgokbtn().click();
                            browser.sleep(10000);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task review flow is successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to review");
                    }

                })
            })
        }
    }
    Reviewtasksforenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["EnglishTaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                var loc = "(//a[@class='task-link'])[1]";
                console.log(loc);
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentReviewer"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.SubmitForApproverbtn().click();
                browser.sleep(10000);
                this.successmsgokbtn().click();
                browser.sleep(10000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task review flow is successful')
                })


            })
        }
    }
    Reviewtasksfortelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                var loc = "(//a[@class='task-link'])[1]";
                console.log(loc);
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentReviewer"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.SubmitForApproverbtn().click();
                browser.sleep(10000);
                this.successmsgokbtn().click();
                browser.sleep(10000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task review flow is successful')
                })


            })
        }
    }
    Reviewmultipletaskstelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                BrowserUtils.getTotalElementCount(by.xpath("//a[@class='task-link']")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
                            var loc = "(//a[@class='task-link'])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentReviewer"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                            this.SubmitForApproverbtn().click();
                            browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task review flow is successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to review");
                    }

                })
            })
        }
    }
    Reviewtaskswithoutcomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(5000);
                var loc = "(//a[@class='task-link'])[1]";
                console.log(loc);
                var tasklinkselection = by.xpath(loc)
                BrowserUtils.clickOnElement(tasklinkselection);
                  browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentcancelbtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.SubmitForApproverbtn().click();
                browser.sleep(1500);
                this.successmsgokbtn().click();
                    browser.sleep(5000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task can be reviewed without comments')
                })
            })
        }
    }
    conformdraftreviewtasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                    browser.sleep(5000);
                var loc = "(//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                   browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
               this.Draftbtn().click();
                  browser.sleep(5000);
                this.Canceldraftbtn().click();
                browser.sleep(1500);
                this.Draftbtn().click();
                browser.sleep(1500);
                this.Conformdraftbtn().click();
                   browser.sleep(5000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task can be drafted successfully')
                })
            })
        }
    }
    canceldraftreviewtasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var loc = "(//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                    browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.Draftbtn().click();
                  browser.sleep(5000);
                this.Canceldraftbtn().click();
                   browser.sleep(5000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Draft can be cancelled successful')
                })
            })
        }

    }
    editcomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var loc = "(//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                    browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Commentsediticon().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.Class1().click();
                    browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Comments edit is working successful')
                })

            })
        }
    }
    deletecomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var loc = "(//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(2000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Commentsdeleteicon().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.Class1().click();
                    browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Delete review comment flow is successful')
                })
            })
        }
    }
}