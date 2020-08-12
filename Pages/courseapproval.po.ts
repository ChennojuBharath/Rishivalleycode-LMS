import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
export class courseapprovalPage {

     ClickAllclasses() {
          return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']"))
     }
     keycloakloginbtn() {
          return element(by.xpath("//input[@name='login']"));
      }
      commentbutton() {
          return element(by.xpath("//span[contains(text(),'Add Comment')]"))
      }
      approvebutton() {
          return element(by.xpath("//span[contains(text(),'Approve')]"))
      }
      milestonedraftbutton() {
          return element(by.xpath("//span[contains(text(),'DRAFT')]"))
      }
      coursedraftbutton() {
          return element(by.xpath("//span[contains(text(),'Draft')]"))
      }
      publishbutton() {
          return element(by.xpath("//span[contains(text(),'PUBLISH')]"))
      }
      okbutton() {
          return element(by.xpath("//button[contains(text(),'OK')]"))
      }
      searchfeild() {
          return element(by.xpath("//div[@class='head-search-container']/input"))
      }
      Milestonewrapper() {
          return element(by.xpath("(//div[@ng-reflect-klass='milestone-wrapper'])[1]"))
      }
    approvecourseforenglish(){
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/EnglishData.json', null)
          if (dataRecs && dataRecs.length > 0) {
              dataRecs.forEach(record => {
               browser.ignoreSynchronization = true
               var classselection = by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']/../mat-list-item/div[text()='" + record["Class"] + "']");
               BrowserUtils.clickOnElement(classselection);
               browser.sleep(1500);
               var Tasklinkselection = by.xpath("//a[contains(text(),'" + record["ApproverTasklink"] + "')]");
               BrowserUtils.clickOnElement(Tasklinkselection);
               browser.sleep(1500);
               BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
               this.commentbutton().click();
               BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageCommentApprover"]);
               browser.sleep(1500);
               BrowserUtils.getTotalElementCount(by.xpath("//div[contains(@class,'milestone-wrapper')]")).then((getmilestoneCount) => {
                    console.log("loc is:" + getmilestoneCount);
                    for (let milestoneCount = 1;milestoneCount <= getmilestoneCount; milestoneCount++) {
                         var milestoneCountloc = "(//div[contains(@class,'milestone-wrapper')])[" + milestoneCount + "]";
                         console.log(milestoneCountloc);
                         var milestoneContainer = by.xpath(milestoneCountloc);
                         BrowserUtils.clickOnElement(milestoneContainer);
                         browser.sleep(5000);
                         BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
               this.commentbutton().click();
               BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageCommentApprover"]);
               browser.sleep(1500);
               this.approvebutton().click();
               browser.sleep(1500);
               this.okbutton().click();
                    }
                    browser.sleep(1500);
                    BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                    this.commentbutton().click();
                    BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageCommentApprover"]);
                    browser.sleep(1500);
                    this.publishbutton().click();
                    browser.sleep(1500);
                    this.okbutton().click();
                    browser.sleep(1500);
                    this.searchfeild().isDisplayed().then(function (dis) {
                         expect(dis).toBe(true, 'Course approval flow is successful')
                    })
              })
              })
          }        
     }
     draftcourseforenglish(){
          var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/EnglishData.json', null)
          if (dataRecs && dataRecs.length > 0) {
              dataRecs.forEach(record => {
               var classselection = by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']/../mat-list-item/div[text()='" + record["Class"] + "']");
               BrowserUtils.clickOnElement(classselection);
               browser.sleep(1500);
               var Tasklinkselection = by.xpath("//a[contains(text(),'" + record["ApproverTasklink"] + "')]");
               BrowserUtils.clickOnElement(Tasklinkselection);
               browser.sleep(1500);
               BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
               this.commentbutton().click();
               BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageCommentApprover"]);
               browser.sleep(1500);
               this.Milestonewrapper().click();
               browser.sleep(2500);
               this.milestonedraftbutton().click();
               browser.sleep(2500);
               this.okbutton().click();
                    browser.sleep(1500);
                    this.searchfeild().isDisplayed().then(function (dis) {
                         expect(dis).toBe(true, 'Course can be drafted successful')
                    })
          })
          }


     }

     approvecoursefortelugu(){
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
             browser.ignoreSynchronization = true
             var classselection = by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']/../mat-list-item/div[text()='" + record["Class"] + "']");
             BrowserUtils.clickOnElement(classselection);
             browser.sleep(1500);
             var Tasklinkselection = by.xpath("//a[contains(text(),'" + record["ApproverTasklink"] + "')]");
             BrowserUtils.clickOnElement(Tasklinkselection);
             browser.sleep(1500);
             BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
             this.commentbutton().click();
             BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageCommentApprover"]);
             browser.sleep(1500);
             BrowserUtils.getTotalElementCount(by.xpath("//div[contains(@class,'milestone-wrapper')]")).then((getmilestoneCount) => {
                  console.log("loc is:" + getmilestoneCount);
                  for (let milestoneCount = 1;milestoneCount <= getmilestoneCount; milestoneCount++) {
                       var milestoneCountloc = "(//div[contains(@class,'milestone-wrapper')])[" + milestoneCount + "]";
                       console.log(milestoneCountloc);
                       var milestoneContainer = by.xpath(milestoneCountloc);
                       BrowserUtils.clickOnElement(milestoneContainer);
                       browser.sleep(5000);
                       BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
             this.commentbutton().click();
             BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageCommentApprover"]);
             browser.sleep(1500);
             this.approvebutton().click();
             browser.sleep(1500);
             this.okbutton().click();
                  }
                  browser.sleep(1500);
                  BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                  this.commentbutton().click();
                  BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageCommentApprover"]);
                  browser.sleep(1500);
                  this.publishbutton().click();
                  browser.sleep(1500);
                  this.okbutton().click();
                  browser.sleep(1500);
                  this.searchfeild().isDisplayed().then(function (dis) {
                       expect(dis).toBe(true, 'Course approval flow is successful')
                  })
            })
            })
        }        
   }
   draftcoursefortelugu(){
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/TeluguData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
             var classselection = by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']/../mat-list-item/div[text()='" + record["Class"] + "']");
             BrowserUtils.clickOnElement(classselection);
             browser.sleep(1500);
             var Tasklinkselection = by.xpath("//a[contains(text(),'" + record["ApproverTasklink"] + "')]");
             BrowserUtils.clickOnElement(Tasklinkselection);
             browser.sleep(1500);
             BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
             this.commentbutton().click();
             BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageCommentApprover"]);
             browser.sleep(1500);
             this.Milestonewrapper().click();
             browser.sleep(2500);
             this.milestonedraftbutton().click();
             browser.sleep(2500);
             this.okbutton().click();
                  browser.sleep(1500);
                  this.searchfeild().isDisplayed().then(function (dis) {
                       expect(dis).toBe(true, 'Course can be drafted successful')
                  })
        })
        }


   }

    }