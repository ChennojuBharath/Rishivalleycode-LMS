import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class Resources {
    Resourcelink() {
        return element(by.xpath("//a[@ng-reflect-router-link='/resources']/div[contains(text(),'Resources')]"));
    }
    Createnewresourcebtn() {
        return element(by.xpath("//span[contains(text(),'CREATE NEW RESOURCE')]"));
    }
    Classradiobtn() {
        return element(by.xpath("//mat-radio-button[@value='Class']"));
    }
    resourceClassradiobtn() {
        return element(by.xpath("//p[text()='1']"));
    }
     Subjectdropdown() {
        return element(by.xpath("//select[@name='subjectNames']"));
    }
    
    typefile() {
        return element(by.xpath("//input[@type='file']"))
    }
    OKbtn() {
        return element(by.xpath("//button[text()='OK']"));
    }
    savebtn() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }
    Createclasstyperesourcesforenglish() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ResourceData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//a[@ng-reflect-router-link='/resources']"));
                this.Resourcelink().click();
                browser.sleep(2000);
                //Audio
                this.Createnewresourcebtn().click();
                browser.sleep(5000);
                this.Classradiobtn().click();
                browser.sleep(5000);
                this.resourceClassradiobtn().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["AudioTitle"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='milestoneNum']"), record["MilestoneNumber"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["AudioDescription"]);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
                //Video
                this.Createnewresourcebtn().click();
                browser.sleep(5000);
               this.Classradiobtn().click();
                browser.sleep(5000);
                  this.Classradiobtn().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["VideoTitle"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='milestoneNum']"), record["MilestoneNumber"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["VideoDescription"]);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(videoPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
                //PDF
                this.Createnewresourcebtn().click();
                browser.sleep(5000);
                 this.Classradiobtn().click();
                browser.sleep(5000);
                this.Classradiobtn().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["pdfTitle"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='milestoneNum']"), record["MilestoneNumber"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["pdfDescription"]);
                var path2 = "../../TestData/PDF/pdf1mb.pdf"
                var pdfPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(pdfPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
            })
        }
    }
    Creategenerictyperesourcesenglish() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ResourceData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//a[@ng-reflect-router-link='/resources']"));
                this.Resourcelink().click();
                browser.sleep(2000);
                //Audio
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["AudioTitle"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["AudioDescription"]);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.savebtn().click();
                browser.sleep(500);
                this.OKbtn().click();
                browser.sleep(1500);
                //Video
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["VideoTitle"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["VideoDescription"]);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(videoPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                //PDF
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["pdfTitle"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["pdfDescription"]);
                var path2 = "../../TestData/PDF/pdf1mb.pdf"
                var pdfPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(pdfPath);
                   browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(5000);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
            })
        }
    }
    Createclasstyperesourcesfortelugu() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ResourceData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//a[@ng-reflect-router-link='/resources']"));
                this.Resourcelink().click();
                browser.sleep(2000);
                //Audio
                this.Createnewresourcebtn().click();
                browser.sleep(5000);
                this.Classradiobtn().click();
               browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["AudioTitle"]);
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
               browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='milestoneNum']"), record["MilestoneNumber"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["AudioDescription"]);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
                //Video
                this.Createnewresourcebtn().click();
                browser.sleep(5000);
                this.Classradiobtn().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["VideoTitle"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["TeluguSubject"]);
                 browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='milestoneNum']"), record["MilestoneNumber"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["VideoDescription"]);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(videoPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
                //PDF
                this.Createnewresourcebtn().click();
                browser.sleep(5000);
                this.Classradiobtn().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["pdfTitle"]);
             browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["Subject"]);
               browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='milestoneNum']"), record["MilestoneNumber"]);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["pdfDescription"]);
                var path2 = "../../TestData/PDF/pdf1mb.pdf"
                var pdfPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(pdfPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
            })
        }
    }
    Creategenerictyperesourcestelugu() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ResourceData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//a[@ng-reflect-router-link='/resources']"));
                this.Resourcelink().click();
                browser.sleep(2000);
                //Audio
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["Title"]);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["Description"]);
                var path1 = '../../TestData/AudioFiles/sample.mp3';
                var audioPath = path.resolve(__dirname, path1);
                browser.sleep(500);
                this.typefile().sendKeys(audioPath);
                browser.sleep(10000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
                //Video
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["VideoTitle"]);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["VideoDescription"]);
                var path2 = "../../TestData/VideoFiles/Train.mp4"
                var videoPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(videoPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
                //PDF
                this.Createnewresourcebtn().click();
                browser.sleep(2000);
                BrowserUtils.enterText(by.xpath("//input[@ng-reflect-name='title']"), record["pdfTitle"]);
                BrowserUtils.enterText(by.xpath("//textarea[@formcontrolname]"), record["pdfDescription"]);
                var path2 = "../../TestData/PDF/pdf1mb.pdf"
                var pdfPath = path.resolve(__dirname, path2);
                this.typefile().sendKeys(pdfPath);
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(5000);
                this.OKbtn().click();
                browser.sleep(1500);
            })
        }
    }
}