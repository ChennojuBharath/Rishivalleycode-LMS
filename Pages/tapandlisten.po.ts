import { browser, by, element, Key, WebElement } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
var path = require('path');

export class tapandlistenPage {
    createNewTaskBtn() {
        return element(by.xpath("//span[contains(text(),'Create New Task')]"));
    }
    TapandListenLink() {
        return element(by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Tap and Listen']"));
    }
    commentbutton() {
        return element(by.xpath("(//span[contains(text(),'Add Comment')])[1]"))
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
    Activityid() {
        return element(by.xpath("//input[@id='activityid']"));
    }
    selectSubject() {
        return element(by.xpath('//select[@name="subjectNames"]'));
    }
    plusbutton() {
        return element(by.xpath("//button[text()='+']"));
    }
    overallFeedbackCheckbox() {
        return element(by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
    }
    sliderTextBox() {
        return element(by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
    }
    slider() {
        return element(by.xpath("//div[@class='mat-slider-thumb']"));
    }
    Behaviourtext() {
        return element(by.xpath("//div[text()='Behaviour ']"));
    }
    feedbackbox() {
        return element(by.xpath("//input[@formcontrolname='feedbackInfo']"));
    }
    feedbackbox1() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"));
    }
    feedbackbox2() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"));
    }
    feedbackbox3() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"));
    }
    feedbackbox4() {
        return element(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"));
    }
    Norecored() {
        return element(by.xpath("//td[text()=' No record found. ']"));
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//span[text()='Next ']"))
    }
    TapandListenbreadcrumb() {
        return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Tap And Listen']"))
    }
    Previewbreadcrumb() {
        return element(by.xpath("//a[@class='nav-link ng-star-inserted'][text()=' Preview']"))
    }
    publishBtn() {
        return element(by.xpath("//span[contains(text(),'Send To Review')]"))
    }
    succesfulCreationOfTasks() {
        return element(by.xpath("//span[text()='Home']"))
    }
    Audiobutton() {
        return element(by.xpath("//div[text()='Upload Audio File']"));
    }
    Taskcancelbtn() {
        return element(by.xpath("//span[text()='Cancel']"));
    }
    Backbtn() {
            return element(by.xpath("//span[contains(text(),'Back')]"))
      }
    Cancelbtn() {
        return element(by.xpath("//div[text()='Cancel']"))
    }
    Canceliconn() {
        return element(by.xpath("//span[text()='×']"))
    }
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 2')]"));
    }
    TaskCancelicon() {
        return element(by.xpath("//button[@class='close mat-icon-button']"));
    }
    saveMCQ() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath("//button[text()='OK']"))
    }
    okbutton() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Audiofile() {
        return element(by.css('img[alt="upload audio"]'))
    }
    typefile1() {
        return element(by.css('input[type="file"]'))
    }
    typefile2() {
        return element(by.xpath("(//input[@type='file'])[2]"))
    }
    typefile3() {
        return element(by.xpath("(//input[@type='file'])[3]"))
    }
    typefile4() {
        return element(by.xpath("(//input[@type='file'])[4]"))
    }
    typefile6() {
        return element(by.xpath("(//input[@type='file'])[6]"))
    }
    typefile5() {
        return element(by.xpath("(//input[@type='file'])[5]"))
    }
    typefile7() {
        return element(by.xpath("(//input[@type='file'])[7]"))
    }
    typefile8() {
        return element(by.xpath("(//input[@type='file'])[8]"))
    }

    OKbtn() {
        return element(by.xpath('//button[.="OK"]'));
    }
    text1() {
        return element(by.xpath("(//div[text()=' Text '])[1]"));
    }
    text2() {
        return element(by.xpath("(//div[text()=' Text '])[2]"));
    }
    text3() {
        return element(by.xpath("(//div[text()=' Text '])[3]"));
    }
    textarea() {
        return element(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Text '])[1]"));
    }
    textarea2() {
        return element(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Text '])[2]"));
    }
    picture() {
        return element(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture '])[1]"));
    }
    picture2() {
        return element(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture '])[2]"));
    }
    pictureandtext() {
        return element(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture and Text '])[1]"));
    }
    pictureandtext2() {
        return element(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture and Text '])[2]"));
    }
    pictureandText4() {
        return element(by.xpath("(//mat-radio-button[@value='pictureAndText'])[3]"));
    }
    Videoradio() {
        return element(by.xpath("//mat-radio-button[@value='video']"));
    }
    Videoradio2() {
        return element(by.xpath("(//mat-radio-button[@value='video'])[2]"));
    }
    Videoradio3() {
        return element(by.xpath("(//mat-radio-button[@value='video'])[3]"));
    }
    addquestionbtn() {
        return element(by.xpath("//span[text()='ADD Question + ']"));
    }

    createTapandlistenTaskwithTexttelugu() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        this.PicturetoAudio();
        this.PictureandTexttoVideotelugu();
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithTextenglish() {
        this.Tapandlistencreatepageenglish();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        this.PicturetoAudio();
        this.PictureandTexttoVideotelugu();
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithTextevs() {
        this.Tapandlistencreatepageevs();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        this.PicturetoAudio();
        this.PictureandTexttoVideotelugu();
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithTextmaths() {
        this.Tapandlistencreatepagemaths();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        this.PicturetoAudio();
        this.PictureandTexttoVideotelugu();
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    Updatetapandlistentask() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.waitUntilReady(this.createNewTaskBtn());
                browser.sleep(1000);
                var Subjectselection = by.xpath("//span[text()='" + record["TaskSubject"] + "']");
                BrowserUtils.clickOnElement(Subjectselection);
                browser.sleep(2000);
                var linkselection = by.xpath("(//td[contains(text(),'Draft')]/..//td/span//a[contains(text(),'Tapandlisten')])[1]");
                BrowserUtils.clickOnElement(linkselection);
                browser.sleep(6000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
                browser.sleep(1000);
                this.saveMCQ().click();
                browser.sleep(1000);
                this.okbutton().click();
                browser.sleep(1500);
                this.Publishnavigation();
            })
        }
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tap and Listen Task is updated successfully')
        })

    }
    Createpagecomments() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["CreatepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task popup is closed successfully')
                })
            })
        }
    }
    Previewpagecomments() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["PreviewpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task popup is closed successfully')
                })
            })
        }
    }
    createTapandlistenTaskwithpictureenglish() {
        this.Tapandlistencreatepageenglish();
        browser.sleep(500);
        this.PicturetoAudio();
        browser.sleep(500);
        this.PicturetoVedio();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.acceptSaveTaskPopUp().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithpicturetelugu() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.PicturetoAudio();
        browser.sleep(500);
        this.PicturetoVedio();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    PictureandTextwithaudio() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture and Text '])[1]"));
                this.pictureandtext().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[1]"), record["Textarea"]);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile2().sendKeys(TrainPath);
                browser.sleep(2000);
                var path1 = '../../TestData/AudioFiles/Telugu/Train.mp4';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
            })
        }
    }
    PictureandTextwithaudioenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture and Text '])[1]"));
                this.pictureandtext().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[1]"), record["Textarea"]);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile2().sendKeys(TrainPath);
                browser.sleep(2000);
                var path1 = '../../TestData/AudioFiles/Telugu/Train.mp4';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
            })
        }
    }
    PictureandTextwithaudiotelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("(//div[@class='mat-radio-container']/following-sibling::div[text()=' Picture and Text '])[1]"));
                this.pictureandtext().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[1]"), record["Textarea"]);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile2().sendKeys(TrainPath);
                browser.sleep(2000);
                var path1 = '../../TestData/AudioFiles/Telugu/Train.mp4';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
            })
        }
    }
    createTapandlistenTaskwithPictureandTexttelugu() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.PictureandTextwithaudiotelugu()
        this.PictureandTexttoVideotelugu()
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithPictureandTextenglish() {
        this.Tapandlistencreatepageenglish();
        browser.sleep(500);
        this.PictureandTextwithaudioenglish()
        this.PictureandTexttoVideoenglish()
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(5000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithPictureandTextevs() {
        this.Tapandlistencreatepageevs();
        browser.sleep(500);
        this.PictureandTextwithaudioenglish()
        this.PictureandTexttoVideoenglish()
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(5000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithPictureandTextmaths() {
        this.Tapandlistencreatepagemaths();
        browser.sleep(500);
        this.PictureandTextwithaudioenglish()
        this.PictureandTexttoVideoenglish()
        browser.sleep(10000);
        this.saveMCQ().click();
        browser.sleep(5000);
        this.okbutton().click();
        browser.sleep(5000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    ClickonRandomArray() {
        var myArray = ['Tapandlisten1a', 'Tapandlisten1.1a', 'Tapandlisten1.2a', 'Tapandlisten1.3a', 'Tapandlisten1.4a', 'Tapandlisten1.5a', 'Tapandlisten1.6a', 'Tapandlisten2.0a', 'Tapandlisten2.1s', 'Tapandlisten2.s2', 'Tapandlisten2.s3', 'Tapandlisten2.4s', 'Tapandlisten2f.5', 'Tapandlisten2.6g', 'Tapandlisten3.0g', 'Tapandlisten3.1g', 'Tapandlisten3.2g', 'Tapandlisten3.g3', 'Tapandlisten3.4g', 'Tapandlisten3.g5', 'Tapandlisten3.6g', 'Tapandlisten4.1g', 'Tapandlisten4.1g', 'Tapandlisten4.2g', 'Tapandlisten4.3g', 'Tapandlisten4.4g', 'Tapandlisten4.g5', 'Tapandlisten4.g6', 'Tapandlisten5.g0', 'Tapandlisten5.g1', 'Tapandlisten5.g2', 'Tapandlisten5.d3', 'Tapandlisten5.4d', 'Tapandlisten5.d5', 'Tapandlisten5.d6', 'Tapandlisten6.d0', 'Tapandlisten6.d1', 'Tapandlisten6.d2', 'Tapandlisten6.w3', 'Tapandlisten6.4w', 'Tapandlisten6.5w', 'Tapandlisten6.6w', 'Tapandlisten1.0w', 'Tapandlisten1.1e1', 'Tapandlisten1.2e1', 'Tapandlisten1.3e1', 'Tapandlisten1.e41', 'Tapandlisten1.51e', 'Tapandlisten1.61e', 'Tapandlisten2.0e1', 'Tapandlisten2.1e1', 'Tapandlisten2.2e1', 'Tapandlisten2.3e1', 'Tapandlisten2.4e1', 'Tapandlisten2.5e1', 'Tapandlisten2.6e1', 'Tapandlisten3.0e1', 'Tapandlisten3.1e1', 'Tapandlisten3.2e1', 'Tapandlisten3.31r', 'Tapandlisten3.41r', 'Tapandlisten3.5r1', 'Tapandlisten3.r61', 'Tapandlisten4r.11', 'Tapandlisten4.1t2', 'Tapandlisten4.2t1', 'Tapandlisten4.t31', 'Tapandlisten4.t41', 'Tapandlisten4.5t1', 'Tapandlisten4.t61', 'Tapandlisten5.0t1', 'Tapandlisten5.1t1', 'Tapandlisten5.2t1', 'Tapandlisten5.3t1', 'Tapandlisten5.4t1', 'Tapandlisten5.51t', 'Tapandlisten5.6u1', 'Tapandlisten6.u01', 'Tapandlisten6.11u', 'Tapandlisten6.2u1', 'Tapandlisten6.31u', 'Tapandlisten6.u41', 'Tapandlisten6.5u1', 'Tapandlisten6.u61', 'Tapandlisten1.21u2', 'Tapandlisten1.12', 'Tapandlisten1.22', 'Tapandlisten1.32i', 'Tapandlisten1.i42', 'Tapandlisten1.5i2', 'Tapandlisten1.6i2', 'Tapandlisten2.0o2', 'Tapandlisten2.12o', 'Tapandlisten2.22o', 'Tapandlisten2.32o', 'Tapandlisten2.4o2', 'Tapandlisten2.52o', 'Tapandlisten2.6o2', 'Tapandlisten3.l02', 'Tapandlisten3.1l2', 'Tapandlisten3.2l2', 'Tapandlisten3.3l2', 'Tapandlisten3.4l2', 'Tapandlisten3.5l2', 'Tapandlisten3.6x2', 'Tapandlisten4.12x', 'Tapandlisten4.12x3', 'Tapandlisten4.22c', 'Tapandlisten4.32c', 'Tapandlisten4.42c', 'Tapandlisten4.52c', 'Tapandlisten4.6c2', 'Tapandlisten5.0c2', 'Tapandlisten5.c12', 'Tapandlisten5.22b', 'Tapandlisten5.3b2', 'Tapandlisten5.4n2', 'Tapandlisten5.52', 'Tapandlisten5.62', 'Tapandlisten6.02', 'Tapandlisten6.12', 'Tapandlisten6.22', 'Tapandlisten6.32', 'Tapandlisten6.42', 'Tapandlisten6.52', 'Tapandlisten6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;

    }
    createTapandlistenTaskwithTextandvideoenglish() {
        this.Tapandlistencreatepageenglish();
        browser.sleep(500);
        this.TexttoVideoenglish();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithTextandvideotelugu() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoVideotelugu();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    SearchTaskfromlist() {
        var clearsearch = element(by.xpath("//input[@class='rv-input']"));
        clearsearch.sendKeys("tapandlisten");
        BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        browser.sleep(500);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task list search is working')
        })
    }
    CancelTask() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        browser.sleep(2000);
        this.saveMCQ().click();
        browser.sleep(10000);
        this.okbutton().click();
        browser.sleep(500);
        this.Taskcancelbtn().click();
        browser.sleep(2000);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task popup is closed successfully')
        })
    }
    Contenttypesearch() {
        var contentsearch = element(by.xpath("//input[@placeholder='All content types']"));
        this.createNewTaskBtn().click();
        browser.sleep(1000);
        contentsearch.sendKeys("Tap and Listen");
        contentsearch.clear();
        browser.sleep(500);
        this.Class1().click();
    }
    createTapandlistenTaskwithPictureandTextandvideoenglish() {
        this.Tapandlistencreatepageenglish();
        browser.sleep(500);
        this.PictureandTexttoVideo();
        this.overallfeedbackenglish();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    createTapandlistenTaskwithPictureandTextandvideotelugu() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.PictureandTexttoVideo();
        this.overallfeedbacktelugu();
        browser.sleep(500);
        this.saveMCQ().click();
        browser.sleep(500);
        this.okbutton().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.Publishnavigation();
    }
    Previewbackbutton() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(2500);
        this.Backbtn().click();
        browser.sleep(1500);
        this.Taskcancelbtn().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview back button is working successfully')
        })
    }
    Previewbreadcrumbs() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(3500);
        BrowserUtils.scrollIntoView(by.xpath("//a[text()=' Task-list']"));
        browser.sleep(1500);
        this.Previewbreadcrumb().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Preview page breadcrumbs is working successfully')
        })
    }
    Publishbackbutton() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(3500);
        this.clickOntappingMCQNextBtn().click();
        BrowserUtils.waitUntilReady(this.publishBtn());
        browser.sleep(500);
        this.Backbtn().click();
        browser.sleep(3500);
        this.Backbtn().click();
        browser.sleep(3500);
        this.Taskcancelbtn().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully')
        })
    }
    Publishbreadcrmbs() {
        this.Tapandlistencreatepagetelugu();
        browser.sleep(500);
        this.TexttoAudiotelugu();
        browser.sleep(500);
        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
        browser.sleep(1500);
        this.saveMCQ().click();
        browser.sleep(12500);
        this.okbutton().click();
        browser.sleep(1500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(3500);
        this.clickOntappingMCQNextBtn().click();
        BrowserUtils.waitUntilReady(this.publishBtn());
        browser.sleep(500);
        this.Previewbreadcrumb().click();
        browser.sleep(500);
        this.Class1().click();
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Publish backbutton is working successfully')
        })
    }

    PictureandTexttoVideo() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                this.addquestionbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[2]"), record["Textarea"]);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile3().sendKeys(TrainPath);
                browser.sleep(2000);
                this.Videoradio2().click();
                browser.sleep(1000);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile3().sendKeys(videoPath);
            })
        }
    }
    PictureandTexttoVideoenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                this.addquestionbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[2]"), record["Textarea"]);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile3().sendKeys(TrainPath);
                browser.sleep(2000);
                this.Videoradio2().click();
                browser.sleep(1000);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile3().sendKeys(videoPath);
            })
        }
    }
    PictureandTexttoVideotelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                this.addquestionbtn().click();
                browser.sleep(1000);
                this.pictureandText4().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[2]"), record["Textarea"]);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile5().sendKeys(TrainPath);
                browser.sleep(5000);
                this.Videoradio3().click();
                browser.sleep(1000);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile6().sendKeys(videoPath);
                browser.sleep(1000);
            })
        }
    }
    overallfeedbackenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.overallFeedbackCheckbox());
                this.overallFeedbackCheckbox().click();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 150, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 200, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 250, y: 0 }).perform();
                this.plusbutton().click();
                browser.sleep(2000);
                browser.actions().mouseMove(this.saveMCQ()).perform();
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScoreenglish"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScoreenglish"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScoreenglish"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScoreenglish"]);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Feedback can be entered successfully')
                })
            })
        }
    }
    overallfeedbacktelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.overallFeedbackCheckbox());
                this.overallFeedbackCheckbox().click();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 150, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 200, y: 0 }).perform();
                this.plusbutton().click();
                browser.actions().dragAndDrop(this.slider(), { x: 250, y: 0 }).perform();
                this.plusbutton().click();
                browser.sleep(2000);
                browser.actions().mouseMove(this.saveMCQ()).perform();
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScoretelugu"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScoretelugu"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScoretelugu"]);
                BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScoretelugu"]);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Feedback can be entered successfully')
                })
            })
        }
    }

    TexttoAudio() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//h3[text()='Question 1']"));
                browser.sleep(1500);
                this.textarea().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[1]"), record["Textarea"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Train.mp4';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
            })
        }
    }
    TexttoAudioenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//h3[text()='Question 1']"));
                browser.sleep(1500);
                this.textarea().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[1]"), record["Textarea"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Train.mp4';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
            })
        }
    }
    TexttoAudiotelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//h3[text()='Question 1']"));
                browser.sleep(1500);
                this.text1().click();
                browser.sleep(500);
                this.textarea().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[1]"), record["Textarea"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Tapandlisten.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile2().sendKeys(audioPath);
                browser.sleep(5000);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'TexttoAudio task can  be created successfully')
                })
            })
        }
    }
    TexttoVedioenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.addquestionbtn().click();
                browser.sleep(1500);
                this.textarea2().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[2]"), record["Textarea"]);
                browser.sleep(1000);
                this.Videoradio2().click();
                browser.sleep(1000);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile3().sendKeys(videoPath);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'TexttoVedio task can  be created successfully')
                })
            })
        }
    }
    TexttoVediotelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.addquestionbtn().click();
                browser.sleep(1500);
                this.textarea2().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[2]"), record["Textarea"]);
                browser.sleep(1000);
                this.Videoradio2().click();
                browser.sleep(1000);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile3().sendKeys(videoPath);
                browser.sleep(10000);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'TexttoVedio task can  be created successfully')
                })
            })
        }
    }
    TexttoVedio() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.addquestionbtn().click();
                browser.sleep(1500);
                this.textarea2().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("(//div[@class='tap-listen-text-block']//textarea)[2]"), record["Textarea"]);
                browser.sleep(1000);
                this.Videoradio2().click();
                browser.sleep(1000);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile3().sendKeys(videoPath);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'TexttoVedio task can  be created successfully')
                })
            })
        }
    }
    PicturetoAudio() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1500);
                this.addquestionbtn().click();
                BrowserUtils.scrollIntoView(by.xpath("//h3[text()='Question 2']"));
                browser.sleep(1500);
                this.picture2().click();
                browser.sleep(1000);
                var tigerskin = "../../TestData/ImageFiles/Train.jpeg";
                var tigerskinPath = path.resolve(__dirname, tigerskin);
                this.typefile3().sendKeys(tigerskinPath);
                browser.sleep(3500);
                var path1 = '../../TestData/AudioFiles/Telugu/Tapandlisten.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile4().sendKeys(audioPath);
                browser.sleep(5000);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'PicturetoAudio task can  be created successfully')
                })
            })
        }
    }
    PicturetoVedio() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.addquestionbtn().click();
                browser.sleep(1500);
                this.picture2().click();
                browser.sleep(1000);
                var Train = "../../TestData/ImageFiles/Train.jpeg";
                var TrainPath = path.resolve(__dirname, Train);
                this.typefile3().sendKeys(TrainPath);
                browser.sleep(1500);
                this.Videoradio2().click();
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile3().sendKeys(videoPath);
                browser.sleep(10000);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'PicturetoVedio task can  be created successfully')
                })
            })
        }
    }
    TexttoVideo() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//div[@class='tap-listen-text-area ng-star-inserted']"));
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea"), record["Textarea"]);
                browser.sleep(1000);
                this.Videoradio().click();
                var path = "../../TestData/VideoFiles/videoplayback.mp4"
                browser.sleep(500);
                this.typefile2().sendKeys(path);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'TexttoVideo task can  be created successfully')
                })
            })
        }
    }
    TexttoVideotelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//div[@class='tap-listen-text-area ng-star-inserted']"));
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea"), record["Textarea"]);
                browser.sleep(1000);
                this.Videoradio().click();
                var path = "../../TestData/VideoFiles/videoplayback.mp4"
                browser.sleep(500);
                this.typefile2().sendKeys(path);
                this.overallFeedbackCheckbox().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'TexttoVideo task can  be created successfully')
                })
            })
        }
    }
    TexttoVideoenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/TapandListenData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.scrollIntoView(by.xpath("//div[@class='tap-listen-text-area ng-star-inserted']"));
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea"), record["Textarea"]);
                browser.sleep(1000);
                this.Videoradio().click();
                var path = "../../TestData/VideoFiles/videoplayback.mp4"
                browser.sleep(500);
                this.typefile2().sendKeys(path);
            })
        }
    }
    Tapandlistencreatepagetelugu() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(2000);
                this.createNewTaskBtn().click();
                browser.sleep(1000);
                this.TapandListenLink().click();
                browser.sleep(3000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["tappingTeluguTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["tappingTeluguInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Tapandlisten.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(6000);
                this.OKbtn().click();
                browser.sleep(500);
                this.overallfeedbacktelugu();
                this.Createpagecomments();
                browser.sleep(500);
            })
        }
    }
    Tapandlistencreatepageenglish() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(2000);
                this.TapandListenLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["tappingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["tappingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Tapandlisten.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
            })
        }
    }
    Tapandlistencreatepageevs() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(2000);
                this.TapandListenLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EvsTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["tappingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["tappingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Tapandlisten.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
            })
        }
    }
    Tapandlistencreatepagemaths() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                browser.sleep(5000);
                this.createNewTaskBtn().click();
                browser.sleep(2000);
                this.TapandListenLink().click();
                browser.sleep(5000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["MathsTaskSubject"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("(//select[@class='rv-select w-100 ng-untouched ng-pristine ng-valid'])[2]"), record["AcivityType"]);
                browser.sleep(1000);
                this.Activityid().sendKeys(this.ClickonRandomArray());
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["tappingEnglishTitle"]);
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["tappingEnglishInstructions"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
                browser.sleep(1000);
                var path1 = '../../TestData/AudioFiles/Telugu/Tapandlisten.wav';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile1().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.overallfeedbackenglish();
            })
        }
    }
    Publishnavigation() {
        browser.sleep(2000);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(500);
        this.clickOntappingMCQNextBtn().click();
        browser.sleep(5000);
        this.publishBtn().click();
        browser.sleep(10000);
        this.succesfulCreationOfTasks().click();
        browser.sleep(5000);
        this.createNewTaskBtn().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Tasks is created successfully')
        })
    }
}