import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class Approverview {
    keycloakusername() {
        return element(by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return element(by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return element(by.xpath("//input[@name='login']"));
    }
    Telugu() {
        return element(by.xpath("//span[text()='TELUGU']"))
    }
    tasklistPanelElement() {
        return element(by.xpath("//mat-panel-title[text()=' Tasks ']"));
    }
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 2')]"));
    }
    clickOnClassLinks() {
        return by.xpath('//mat-panel-title[text()=" Tasks "]/../../following-sibling::div//mat-list-item');
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
    Approverbtn() {
        return element(by.xpath("//span[contains(text(),'Approve')]"));
    }
    Commentsediticon() {
        return element(by.xpath("//img[@src='assets/images/Union.svg']"));
    }
    Commentsdeleteicon() {
        return element(by.xpath("//img[@src='assets/images/delete.svg']"));
    }
    successmsgokbtn() {
        return element(by.xpath("//span[contains(text(),'OK')]"));
    }
    Draftbtn() {
        return element(by.xpath("//span[contains(text(),'Draft')]"));
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
    Keycloaklogin() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.enterText(by.xpath("//input[@id='username']"), record["ApproverUsername"]);
                BrowserUtils.enterText(by.xpath("//input[@id='password']"), record["Approverpassword"]);
                this.keycloakloginbtn().click();
                browser.sleep(2000);
            })
        }
    }

    Approvetasktelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentApprover"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                 browser.sleep(2500);
                this.Approverbtn().click();
                browser.sleep(5500);
                this.successmsgokbtn().click();
                browser.sleep(10000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task approval flow is successful')
                })
            })
        }
    }
    Approvemultipletasktelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                        for (let i = 1; i <= 2; i++) {
                           var subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                            browser.sleep(2000);
                            BrowserUtils.clickOnElement(subjectselection);
                            browser.sleep(2000);
                            var tasklinkselection = by.xpath("(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]");
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(10000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentApprover"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            browser.sleep(5000);
                            this.successmsgokbtn().click();
                            browser.sleep(20000);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task  approval flow is successful')
                            })
                    }

                })
        }
    }
    Approvetaskenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["EnglishTaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentApprover"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                this.Approverbtn().click();
                browser.sleep(5000);
                this.successmsgokbtn().click();
                browser.sleep(10000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task approvalflow is successful')
                })
            })
        }
    }
    Approvemultipletaskenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["EnglishTaskSubject"] + "']");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(2000);
                BrowserUtils.getTotalElementCount(by.xpath("(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
                            var loc = "(//a[@class='task-link'])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(10000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageCommentApprover"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            browser.sleep(5000);
                            this.successmsgokbtn().click();
                            browser.sleep(10000);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task  approval flow is successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to approve");
                    }

                })
            })
        }

    }
    ClickAllclasses() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.Class1());
                browser.sleep(1500);
                BrowserUtils.countAndClick(this.clickOnClassLinks());
                var editiconselection = by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[text()='" + record["Class"] + "']");
                BrowserUtils.clickOnElement(editiconselection);
            })
        }
    }
    Approvetaskswithoutcomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentcancelbtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                this.Approverbtn().click();
                browser.sleep(1500);
                this.successmsgokbtn().click();
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task can be reviewed without comments')
                })
            })
        }
    }
    conformdraftapprovetasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                 this.Draftbtn().click();
                browser.sleep(1500);
                this.Canceldraftbtn().click();
                browser.sleep(1500);
                this.Draftbtn().click();
                browser.sleep(1500);
                this.Conformdraftbtn().click();
                browser.sleep(1500);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task can be drafted successfully')
                })
            })
        }
    }
    canceldraftapprovetasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                this.Previewbackbtn().click();
                browser.sleep(1500);
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
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
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
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                this.Class1().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Comments edit is worrking successful')
                })
            })
        }
    }
    deletecomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                var loc = "(//td[contains(text(),'Pending Approve')]/..//a[@class='task-link'])[1]";
                var tasklinkselection = by.xpath(loc);
                BrowserUtils.clickOnElement(tasklinkselection);
                browser.sleep(10000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Commentsdeleteicon().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                this.Class1().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Delete  approval comment flow is successful')
                })

            })
        }
    }

}