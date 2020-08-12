import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
import { coursePage } from '../Pages/coursePage.po';
var path = require("path");
let coursePg: coursePage
coursePg = new coursePage();
export class focuscardsPage {
   createNewTaskBtn() {
      return element(by.xpath("//span[contains(text(),'Create New Task')]"));
   }
   FocusCardsLink() {
      return element(by.xpath("//mat-card-title[@class='title-link mat-card-title'][text()='Focus Cards']"));
   }
   selectSubject() {
      return element(by.xpath('//select[@name="subjectNames"]'));
   }
   addSlide() {
      return element(by.xpath("//div[@class='add-slide ng-star-inserted']"));
   }
   clickOntappingMCQNextBtn() {
      return element(by.xpath("//span[text()='Next ']"))
   }
   plusbutton() {
      return element(by.xpath("//button[text()='+']"));
   }
   overallFeedbackCheckbox() {
      return element(by.xpath("//div[@class='task-head']//input[@type='checkbox']"));
   }
   Activityid() {
      return element(by.xpath("//input[@id='activityid']"));
   }
   sliderTextBox() {
      return element(by.xpath("//input[@ng-reflect-name='feedbackInfo']"));
   }
   slider() {
      return element(by.xpath("//div[@class='mat-slider-thumb']"));
   }
   Instructions() {
      return element(by.xpath("//textarea[@ng-reflect-name]"));
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
   publishBtn() {
      return element(by.xpath("//span[contains(text(),'Send To Review')]"))
   }
   succesfulCreationOfTasks() {
      return element(by.xpath("//span[text()='SUBMIT ']"))
   }
   Audiobutton() {
      return element(by.xpath("//div[.='Upload Audio File']"));
   }
   Addbtn() {
      return element(by.xpath("//button[@class='addButton']"));
   }
   Textradio1() {
      return element(by.xpath("(//mat-radio-button[@ng-reflect-value='text']//div[@class='mat-radio-outer-circle'])[1]"));
   }
   Textradio2() {
      return element(by.xpath("(//mat-radio-button[@ng-reflect-value='text']//div[@class='mat-radio-outer-circle'])[1]"));
   }
   OKbtn() {
      return element(by.xpath('//button[.="OK"]'));
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
   typefile5() {
      return element(by.xpath("(//input[@type='file'])[5]"))
   }
   typefile6() {
      return element(by.xpath("(//input[@type='file'])[6]"))
   }
   typefile7() {
      return element(by.xpath("(//input[@type='file'])[7]"))
   }
   typefile8() {
      return element(by.xpath("(//input[@type='file'])[8]"))
   }
   typefile9() {
      return element(by.xpath("(//input[@type='file'])[9]"))
   }
   typefile10() {
      return element(by.xpath("(//input[@type='file'])[10]"))
   }
   typefile11() {
      return element(by.xpath("(//input[@type='file'])[11]"))
   }
   Deletebtn() {
      return element(by.xpath("//span[text()='DELETE']"))
   }
   saveMCQ() {
      return element(by.xpath("//span[text()='Save']"))
   }
   okbutton() {
      return element(by.xpath("//button[text()='OK']"))
   }
   Previewbreadcrumb() {
      return element(by.xpath("//a[text()=' Task-list']"))
   }
   AddQuestion() {
      return element(by.xpath("//span[text()='Add Question +']"))
   }
   AddBtn() {
      return element(by.xpath("//span[text()='ADD +']"))
   }
   Spinner() {
      return element(by.xpath("//mat-progress-spinner[@role]"))
   }
   acceptSaveTaskPopUp() {
      return element(by.xpath("//button[text()='OK']"))
   }
   Previewheader() {
      return element(by.xpath("//div[text()=' PREVIEW ']"))
   }
   Checkbtn() {
      return element(by.xpath("//button[text()='Check']"))
   }
   ShowSolutionbtn() {
      return element(by.xpath("//button[text()='Show Solution']"))
   }
   Backbtn() {
      return element(by.xpath("//div[text()='Back']"))
   }
   deletecheckbox() {
      return element(by.xpath("(//div[contains(@class,'mat-checkbox-inner-container ')])[5]"))
   }
   Cancelbtn() {
      return element(by.xpath("//div[text()='Cancel']"))
   }
   Cancelicon() {
      return element(by.xpath("//span[text()='×']"))
   }
   Class1() {
      return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[contains(text(),'Class 1')]"));
   }
   Norecored() {
      return element(by.xpath("//td[text()=' No record found. ']"));
   }
   Taskcancelbtn() {
      return element(by.xpath("//span[text()='Cancel']"));
   }
   ActivityId() {
      this.Activityid().sendKeys(coursePg.ClickonRandomArray());
   }
   createfocuscardsTasktelugu() {
      this.CreateFocuscardstelugu();
      this.focuscardsTasktelugu();
      this.saveMCQ().click();
      browser.sleep(500);
      BrowserUtils.waitUntilReady(this.Spinner());
      browser.sleep(3500);
      this.acceptSaveTaskPopUp().click();
      browser.sleep(500);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(500);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Focal cards Task is created successfully')
      })

   }
   createfocuscardsTaskenglish() {
      this.CreateFocuscardsenglish();
      this.focuscardsTaskenglish();
      this.saveMCQ().click();
      browser.sleep(5000);
      this.acceptSaveTaskPopUp().click();
      browser.sleep(1500);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(500);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Focal cards Task is created successfully')
      })

   }
   CreateFocuscardsenglish() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            browser.ignoreSynchronization = true
            browser.sleep(5000);
            this.createNewTaskBtn().click();
            browser.sleep(3000);
            this.FocusCardsLink().click();
            browser.sleep(5000);
            BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
            browser.sleep(1000);
            BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
            browser.sleep(1000);
            this.Activityid().sendKeys(this.ClickonRandomArray());
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["FocuscardsEnglishTitle"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["FocuscardsEnglishInstructions"]);
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
            browser.sleep(1000);
            var path1 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path1);
            browser.sleep(5000);
            this.typefile1().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            this.overallfeedbackenglish();
            browser.sleep(3000);
         })
      }
   }
   focuscardsTaskenglish() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/FocuscardsData/EnglishData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            var panduraju = "../../TestData/ImageFiles/panduraju.jpeg";
            var pandurajuPath = path.resolve(__dirname, panduraju);
            this.typefile2().sendKeys(pandurajuPath);
            browser.sleep(1500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[1]"), record["Textbox1"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile3().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            var bheema = "../../TestData/ImageFiles/bheema.jpeg";
            var bheemaPath = path.resolve(__dirname, bheema);
            this.typefile4().sendKeys(bheemaPath);
            browser.sleep(1500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[2]"), record["Textbox2"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile5().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            var bheema = "../../TestData/ImageFiles/bheema.jpeg";
            var bheemaPath = path.resolve(__dirname, bheema);
            this.typefile6().sendKeys(bheemaPath);
            browser.sleep(1500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[3]"), record["Textbox3"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile7().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            var pandavulu = "../../TestData/ImageFiles/pandavulu.jpeg";
            var pandavuluPath = path.resolve(__dirname, pandavulu);
            this.typefile8().sendKeys(pandavuluPath);
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[4]"), record["Textbox1"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile9().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);

         })
      }
   }
   CreateFocuscardstelugu() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            browser.ignoreSynchronization = true
            browser.sleep(5000);
            this.createNewTaskBtn().click();
            browser.sleep(3000);
            this.FocusCardsLink().click();
            browser.sleep(5000);
            BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subjectNames']"), record["EnglishTaskSubject"]);
            browser.sleep(1000);
            BrowserUtils.selectDropdownValue(by.xpath("(//span[@class='input-text-align'])[2]"), record["AcivityType"]);
            browser.sleep(1000);
            this.Activityid().sendKeys(this.ClickonRandomArray());
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("(//input[@ng-reflect-name])[1]"), record["FocuscardsEnglishTitle"]);
            browser.sleep(1000);
            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name]"), record["FocuscardsEnglishInstructions"]);
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("//input[@placeholder='__:__']"), record["Time"]);
            browser.sleep(1000);
            var path1 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path1);
            browser.sleep(5000);
            this.typefile1().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            this.overallfeedbackenglish();
            browser.sleep(3000);
         })
      }
   }
   focuscardsTasktelugu() {
      var dataRecs = dataProvider.getJsonDataFromFile('./TestData/FocuscardsData/TeluguData.json', null)
      if (dataRecs && dataRecs.length > 0) {
         dataRecs.forEach(record => {
            var panduraju = "../../TestData/ImageFiles/panduraju.jpeg";
            var pandurajuPath = path.resolve(__dirname, panduraju);
            this.typefile2().sendKeys(pandurajuPath);
            browser.sleep(1500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[1]"), record["Textbox1"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile3().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            var bheema = "../../TestData/ImageFiles/bheema.jpeg";
            var bheemaPath = path.resolve(__dirname, bheema);
            this.typefile4().sendKeys(bheemaPath);
            browser.sleep(1500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[2]"), record["Textbox2"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile5().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            var bheema = "../../TestData/ImageFiles/bheema.jpeg";
            var bheemaPath = path.resolve(__dirname, bheema);
            this.typefile6().sendKeys(bheemaPath);
            browser.sleep(1500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[3]"), record["Textbox3"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile7().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
            var pandavulu = "../../TestData/ImageFiles/pandavulu.jpeg";
            var pandavuluPath = path.resolve(__dirname, pandavulu);
            this.typefile8().sendKeys(pandavuluPath);
            browser.sleep(500);
            BrowserUtils.enterText(by.xpath("(//input[@class='rv-input ng-pristine ng-valid ng-touched'])[4]"), record["Textbox1"]);
            browser.sleep(1500);
            var path2 = '../../TestData/AudioFiles/sample.mp3';
            var audioPath = path.resolve(__dirname, path2);
            browser.sleep(5000);
            this.typefile9().sendKeys(audioPath);
            browser.sleep(5000);
            this.OKbtn().click();
            browser.sleep(5000);
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
            BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[1]"), record["BadScore"]);
            BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[2]"), record["AverageScore"]);
            BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[3]"), record["GoodScore"]);
            BrowserUtils.enterText(by.xpath("(//input[@formcontrolname='feedbackInfo'])[4]"), record["VeryGoodScore"]);
         })
      }
   }
   ClickonRandomArray() {
      var myArray = ['FocusCards1a', 'FocusCards1.1a', 'FocusCards1.2a', 'FocusCards1.3a', 'FocusCards1.4a', 'FocusCards1.5a', 'FocusCards1.6a', 'FocusCards2.0a', 'FocusCards2.1s', 'FocusCards2.s2', 'FocusCards2.s3', 'FocusCards2.4s', 'FocusCards2f.5', 'FocusCards2.6g', 'FocusCards3.0g', 'FocusCards3.1g', 'FocusCards3.2g', 'FocusCards3.g3', 'FocusCards3.4g', 'FocusCards3.g5', 'FocusCards3.6g', 'FocusCards4.1g', 'FocusCards4.1g', 'FocusCards4.2g', 'FocusCards4.3g', 'FocusCards4.4g', 'FocusCards4.g5', 'FocusCards4.g6', 'FocusCards5.g0', 'FocusCards5.g1', 'FocusCards5.g2', 'FocusCards5.d3', 'FocusCards5.4d', 'FocusCards5.d5', 'FocusCards5.d6', 'FocusCards6.d0', 'FocusCards6.d1', 'FocusCards6.d2', 'FocusCards6.w3', 'FocusCards6.4w', 'FocusCards6.5w', 'FocusCards6.6w', 'FocusCards1.0w', 'FocusCards1.1e1', 'FocusCards1.2e1', 'FocusCards1.3e1', 'FocusCards1.e41', 'FocusCards1.51e', 'FocusCards1.61e', 'FocusCards2.0e1', 'FocusCards2.1e1', 'FocusCards2.2e1', 'FocusCards2.3e1', 'FocusCards2.4e1', 'FocusCards2.5e1', 'FocusCards2.6e1', 'FocusCards3.0e1', 'FocusCards3.1e1', 'FocusCards3.2e1', 'FocusCards3.31r', 'FocusCards3.41r', 'FocusCards3.5r1', 'FocusCards3.r61', 'FocusCards4r.11', 'FocusCards4.1t2', 'FocusCards4.2t1', 'FocusCards4.t31', 'FocusCards4.t41', 'FocusCards4.5t1', 'FocusCards4.t61', 'FocusCards5.0t1', 'FocusCards5.1t1', 'FocusCards5.2t1', 'FocusCards5.3t1', 'FocusCards5.4t1', 'FocusCards5.51t', 'FocusCards5.6u1', 'FocusCards6.u01', 'FocusCards6.11u', 'FocusCards6.2u1', 'FocusCards6.31u', 'FocusCards6.u41', 'FocusCards6.5u1', 'FocusCards6.u61', 'FocusCards1.21u2', 'FocusCards1.12', 'FocusCards1.22', 'FocusCards1.32i', 'FocusCards1.i42', 'FocusCards1.5i2', 'FocusCards1.6i2', 'FocusCards2.0o2', 'FocusCards2.12o', 'FocusCards2.22o', 'FocusCards2.32o', 'FocusCards2.4o2', 'FocusCards2.52o', 'FocusCards2.6o2', 'FocusCards3.l02', 'FocusCards3.1l2', 'FocusCards3.2l2', 'FocusCards3.3l2', 'FocusCards3.4l2', 'FocusCards3.5l2', 'FocusCards3.6x2', 'FocusCards4.12x', 'FocusCards4.12x3', 'FocusCards4.22c', 'FocusCards4.32c', 'FocusCards4.42c', 'FocusCards4.52c', 'FocusCards4.6c2', 'FocusCards5.0c2', 'FocusCards5.c12', 'FocusCards5.22b', 'FocusCards5.3b2', 'FocusCards5.4n2', 'FocusCards5.52', 'FocusCards5.62', 'FocusCards6.02', 'FocusCards6.12', 'FocusCards6.22', 'FocusCards6.32', 'FocusCards6.42', 'FocusCards6.52', 'FocusCards6.62'];
      var rand = myArray[Math.floor(Math.random() * myArray.length)];
      return rand;

   }
   Contenttypesearch() {
      var contentsearch = element(by.xpath("//input[@type='search']"));
      this.createNewTaskBtn().click();
      browser.sleep(1000);
      contentsearch.sendKeys("Fill in the blanks");
      contentsearch.clear();
      browser.sleep(500);
      this.Class1().click();
   }
   Previewbackbutton() {
      this.CreateFocuscardstelugu();
      this.focuscardsTasktelugu();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
      browser.sleep(1500);
      this.saveMCQ().click();
      browser.sleep(2500);
      this.okbutton().click();
      browser.sleep(1500);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(500);
      this.Backbtn().click();
      browser.sleep(500);
      this.Taskcancelbtn().click();
      browser.sleep(500);
      this.Class1().click();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Preview cancelicon is working successfully')
      })
   }
   Previewbreadcrumbs() {
      this.CreateFocuscardstelugu();
      this.focuscardsTasktelugu();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
      browser.sleep(1500);
      this.saveMCQ().click();
      browser.sleep(2500);
      this.okbutton().click();
      browser.sleep(1500);
      this.clickOntappingMCQNextBtn().click();
      BrowserUtils.scrollIntoView(by.xpath("//a[text()=' Task-list']"));
      browser.sleep(500);
      this.Previewbreadcrumb().click();
      browser.sleep(500);
      this.Class1().click();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Preview page breadcrumbs is working successfully')
      })
   }
   Publishbackbutton() {
      this.CreateFocuscardstelugu();
      this.focuscardsTasktelugu();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
      browser.sleep(1500);
      this.saveMCQ().click();
      browser.sleep(2500);
      this.okbutton().click();
      browser.sleep(1500);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(500);
      this.clickOntappingMCQNextBtn().click();
      BrowserUtils.waitUntilReady(this.publishBtn());
      browser.sleep(500);
      this.Backbtn().click();
      browser.sleep(500);
      this.Backbtn().click();
      browser.sleep(500);
      this.Taskcancelbtn().click();
      browser.sleep(500);
      this.Class1().click();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Publish backbutton is working successfully')
      })
   }
   Publishbreadcrmbs() {
      this.CreateFocuscardstelugu();
      this.focuscardsTasktelugu();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
      browser.sleep(1500);
      this.saveMCQ().click();
      browser.sleep(2500);
      this.okbutton().click();
      browser.sleep(1500);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(500);
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
   Publishnavigation() {
      browser.sleep(2000);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(2000);
      this.publishBtn().click();
      browser.sleep(3000);
      BrowserUtils.waitUntilReady(this.succesfulCreationOfTasks());
      this.succesfulCreationOfTasks().click();
      browser.sleep(5000);
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Tasks is created successfully')
      })
   }
 
   Addanddeletefocuscards() {
      this.CreateFocuscardstelugu();
      this.focuscardsTasktelugu();
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='ADD +']"));
      this.AddBtn().click();
      var Peacockskin = "../../TestData/ImageFiles/peacockskin.jpeg";
      var PeacockskinPath = path.resolve(__dirname, Peacockskin);
      this.typefile6().sendKeys(PeacockskinPath);
      browser.sleep(500);
      var path1 = '../../TestData/AudioFiles/sample.mp3';
      var audioPath = path.resolve(__dirname, path1);
      browser.sleep(500);
      this.typefile6().sendKeys(audioPath);
      browser.sleep(500);
      this.deletecheckbox().click();
      browser.sleep(500);
      BrowserUtils.scrollIntoView(by.xpath("//span[text()='ADD +']"));
      this.Deletebtn().click();
      browser.sleep(500);
      this.acceptSaveTaskPopUp().click();
      browser.sleep(500);
      this.saveMCQ().click();
      browser.sleep(500);
      BrowserUtils.waitUntilReady(this.Spinner());
      browser.sleep(3500);
      this.acceptSaveTaskPopUp().click();
      browser.sleep(500);
      this.clickOntappingMCQNextBtn().click();
      browser.sleep(500);
      this.Publishnavigation();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Focal cards is added and deleted successfully')
      })

   }
   SearchTaskfromlist() {
      var clearsearch = element(by.xpath("//input[@class='search-input']"));
      clearsearch.sendKeys("trueorflase");
      BrowserUtils.waitUntilReady(this.Norecored());
      clearsearch.clear();
      browser.sleep(500);
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Task list search is working')
      })
   }
   CancelTask() {
      this.focuscardsTaskenglish();
      this.Taskcancelbtn().click();
      browser.sleep(2000);
      this.Class1().click();
      this.createNewTaskBtn().isDisplayed().then(function (dis) {
         expect(dis).toBe(true, 'Task popup is closed successfully')
      })
   }

   
}