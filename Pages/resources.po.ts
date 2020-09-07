import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class Resources {
    Courselink() {
        return element(by.xpath("//mat-panel-title[contains(text(),'All Courses')]"));
    }
    Resourcelink() {
        return element(by.xpath("//a[@ng-reflect-router-link='/resources']"));
    }
     Norecords() {
        return element(by.xpath("//td[contains(text(),'No Resources found')]"));
    }
    Createnewresourcebtn() {
        return element(by.xpath("//span[contains(text(),'CREATE NEW RESOURCE')]"));
    }
    selectclass() {
        return element(by.xpath("(//select[@ng-reflect-model])[1]"));
    }
    selectclassno() {
        return element(by.xpath("//option[contains(text(),'Class 2')]"));
    }
    selecttype() {
        return element(by.xpath("(//select[@ng-reflect-model])[2]"));
    }
    selectall() {
        return element(by.xpath("//option[contains(text(),'All')]"));
    }
    selectGeneric() {
        return element(by.xpath("//option[contains(text(),'Generic')]"));
    }
    selectclasstype() {
        return element(by.xpath("//option[contains(text(),'Class')]"));
    }
    Classradiobtn() {
        return element(by.xpath("//mat-radio-button[@value='Class']"));
    }
    resourceClassradiobtn() {
        return element(by.xpath("//div[@class='radio-button']/p[text()='2']"));
    }
    Subjectdropdown() {
        return element(by.xpath("//select[@name='subjectNames']"));
    }
    Classtypedeleticon() {
        return element(by.xpath("//td[contains(text(),'Class')]/..//i[contains(text(),'delete')]"));
    }
    Generictypedeleticon() {
        return element(by.xpath("//td[contains(text(),'Generic')]/..//i[contains(text(),'delete')]"));
    }
    typefile() {
        return element(by.xpath("//input[@type='file']"))
    }
    OKbtn() {
        return element(by.xpath("//span[text()='OK']"));
    }
    savebtn() {
        return element(by.xpath("//span[contains(text(),'Save')]"))
    }

    Deleteclasstypeesource() {
        browser.sleep(5000);
        this.Courselink().click();
        browser.sleep(5000);
        this.Resourcelink().click();
        browser.sleep(10000);
        this.selectclass().click();
        browser.sleep(500);
        this.selectclassno().click();
        browser.sleep(2500);
        this.Classtypedeleticon().click();
        browser.sleep(500);
        this.OKbtn().click();
        browser.sleep(2500);
        this.OKbtn().click();
        this.Resourcelink().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Class type Resource is deleted successfully')
        })
    }
    Typedropdown() {
        browser.sleep(5000);
        this.selecttype().click();
        browser.sleep(500);
        this.selectall().click();
        browser.sleep(2500);
        this.selectGeneric().click();
        browser.sleep(2500);
        this.selectclass().click();
        browser.sleep(2500);
        this.Resourcelink().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Type dropdown selection is working successfully')
        })
    }
    Deletegenerictypeesource() {
        browser.sleep(5000);
        this.selectclass().click();
        browser.sleep(500);
        this.selectclassno().click();
        browser.sleep(2500);
        this.Generictypedeleticon().click();
        browser.sleep(500);
        this.OKbtn().click();
        browser.sleep(2500);
        this.OKbtn().click();
        this.Resourcelink().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Generic type Resource is deleted successfully')
        })
    }
    Searchresourcefromlist() {
        var clearsearch = element(by.xpath("//input[@class='rv-input w-100']"));
        clearsearch.sendKeys("focuscards");
        BrowserUtils.waitUntilReady(this.Norecords());
        clearsearch.clear();
        browser.sleep(500);
        this.Resourcelink().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Resource search is working')
        })
    }
    Createclasstyperesourcesforenglish() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ResourceData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                // this.Courselink().click();
                // browser.sleep(5000);
                // this.Resourcelink().click();
                // browser.sleep(10000);
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
                 browser.sleep(20000);
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
                this.Resourcelink().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Class type Resource is created successfully')
                })
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
                 browser.sleep(20000);
                this.OKbtn().click();
                browser.sleep(500);
                this.savebtn().click();
                browser.sleep(20000);
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
                this.Resourcelink().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Generic type Resource is created successfully')
                })
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
                 browser.sleep(20000);
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
                this.Resourcelink().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Class type Resource is created successfully')
                })
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
                browser.sleep(20000);
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
                this.Resourcelink().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Generic type Resource is created successfully')
                })
            })
        }
    }
}