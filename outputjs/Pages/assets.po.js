"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
var path = require("path");
class Assets {
    Assetslink() {
        return protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Assets Management')]"));
    }
    Createnewassetbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Create New Asset')]"));
    }
    typefile() {
        return protractor_1.element(protractor_1.by.xpath("//input[@type='file']"));
    }
    OKbtn() {
        return protractor_1.element(protractor_1.by.xpath("//button[text()='OK']"));
    }
    savebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
    }
    addbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),' Add + ')]"));
    }
    editicon() {
        return protractor_1.element(protractor_1.by.xpath("//img[@src='assets/images/Union.svg']"));
    }
    nametextbox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='assetName']"));
    }
    quantitytextbox() {
        return protractor_1.element(protractor_1.by.xpath("//input[@ng-reflect-name='quantity']"));
    }
    updatebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Update')]"));
    }
    cancelbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Cancel')]"));
    }
    Createassets() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[contains(text(),'Assets Management')]"));
                this.Assetslink().click();
                protractor_1.browser.sleep(2000);
                var Classsroomelection = protractor_1.by.xpath("//select//option[text()='" + record["Class"] + "']");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classsroomelection);
                protractor_1.browser.sleep(1500);
                this.Createnewassetbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='assetName']"), record["name"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='quantity']"), record["quantity"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                this.savebtn().click();
            });
        }
    }
    Updateassets() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/AssetData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var Classsroomelection = protractor_1.by.xpath("//select//option[text()='" + record["Class"] + "']");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(Classsroomelection);
                protractor_1.browser.sleep(1500);
                var editresource = protractor_1.by.xpath("//tr[@class='mat-row cdk-row ng-star-inserted']/td[contains(text(),'" + record["name"] + "')]/../td//img[@src='assets/images/Union.svg']");
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.clickOnElement(editresource);
                protractor_1.browser.sleep(1500);
            });
        }
    }
}
exports.Assets = Assets;
