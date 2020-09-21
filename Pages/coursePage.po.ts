import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class coursePage {
    CourselistPanelElement() {
        return element(by.xpath("//mat-expansion-panel-header[@aria-expanded='false']//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']"));
    }

    ClickAllclasses() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']"))
    }
    Createnewcoursebutton() {
        return element(by.xpath("//span[contains(text(),'Create New Course')]"));
    }
    Subjectvalidation() {
        return element(by.xpath("//div[contains(text(),'No subjects available')]"));
    }
    Subjectdropdown() {
        return element(by.xpath("//select[@name='subject']"));
    }
    AddMilestonecontainer() {
        return element(by.xpath("//button[@class='add-container ng-star-inserted']"));
    }
    Exportbutton() {
        return element(by.xpath("//span[text()='Export']"));
    }
    commentbutton() {
        return element(by.xpath("//span[contains(text(),'Add Comment')]"))
    }
    previewcommentbutton() {
        return element(by.xpath("(//span[contains(text(),'Add Comment')])[2]"))
    }
    Commentcancelbtn() {
        return element(by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
    AddMilestoneicon() {
        return element(by.xpath("(//mat-icon[text()='add'])[1]"));
    }
    AddMilestoneicon2() {
        return element(by.xpath("(//mat-icon[text()='add'])[2]"));
    }
    AddMilestoneicon3() {
        return element(by.xpath("(//mat-icon[text()='add'])[3]"));
    }
    AddMilestoneicon4() {
        return element(by.xpath("(//mat-icon[text()='add'])[4]"));
    }
    AddMilestoneicon5() {
        return element(by.xpath("(//mat-icon[text()='add'])[5]"));
    }
    AddMilestoneicon6() {
        return element(by.xpath("(//mat-icon[text()='add'])[6]"));
    }
    AddMilestoneicon7() {
        return element(by.xpath("(//mat-icon[text()='add'])[7]"));
    }
    AddMilestoneicon8() {
        return element(by.xpath("(//mat-icon[text()='add'])[1]"));
    }
    AddnewActivity() {
        return element(by.xpath("//span[contains(text(),' Add New Activity ')]"));
    }
    TabActivity() {
        return element(by.xpath("//span[text()='Tab Activity ']"));
    }
    practiceactivity() {
        return element(by.xpath("//span[contains(text(),'Practice')]"));
    }
    assessmentactivity() {
        return element(by.xpath("//span[contains(text(),'Assessment')]"));
    }
    input2() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[2]"));
    }
    input3() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[3]"));
    }
    input4() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[4]"));
    }
    input5() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[5]"));
    }
    input6() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[6]"));
    }
    input7() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[7]"));
    }
    input8() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[8]"));
    }
    input9() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[9]"));
    }
    input10() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[10]"));
    }
    input11() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[11]"));
    }
    input12() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[12]"));
    }
    input13() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[13]"));
    }
    input14() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[14]"));
    }
    input15() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[15]"));
    }
    input16() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[16]"));
    }
    input17() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[17]"));
    }
    input18() {
        return element(by.xpath("(//input[@placeholder='enter no. here'])[18]"));
    }
    introductionactivity() {
        return element(by.xpath("//span[contains(text(),'Introduction')]"));
    }
    engBatBallnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Bat Ball')]"));
    }
    engKitenontabactivity() {
        return element(by.xpath("//span[contains(text(),'Kite')]"));
    }
    engLampnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Lamp')]"));
    }
    engMarblesnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Marbles')]"));
    }
    engMicnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Mic')]"));
    }
    engPuzzlenontabactivity() {
        return element(by.xpath("//span[contains(text(),'Puzzle')]"));
    }
    engRingsnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Rings')]"));
    }
    engRingsInTabnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Rings In Tab')]"));
    }
    engRiverBanknontabactivity() {
        return element(by.xpath("//span[contains(text(),'River Bank')]"));
    }
    engRoleplaynontabactivity() {
        return element(by.xpath("//span[contains(text(),'Roleplay')]"));
    }
    engShehnaiInTabnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Shehnai')]"));
    }
    engShuttleBatnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Shuttle Bat')]"));
    }
    engTextbooknontabactivity() {
        return element(by.xpath("//span[contains(text(),'Textbook')]"));
    }
    engTopInTabnontabactivity() {
        return element(by.xpath("//span[contains(text(),'Top')]"));
    }
    PeacockActivity() {
        return element(by.xpath("//span[text()='Peacock ']"));
    }
    PenguinActivity() {
        return element(by.xpath("//span[text()='Penguin ']"));
    }
    ParrotActivity() {
        return element(by.xpath("//span[text()='Parrot ']"));
    }
    RoosterActivity() {
        return element(by.xpath("//span[text()='Rooster  ']"));
    }
    ReadingActivity() {
        return element(by.xpath("//span[text()='Reading ']"));
    }
    nonTabTask() {
        return element(by.xpath("//p[contains(text(),' You are adding a Non-Tab Task')]"));
    }
    typefile2() {
        return element(by.xpath("//input[@type='file']"))
    }
    TabTask() {
        return element(by.xpath("//p[contains(text(),'You are adding a Tab Task')]"));
    }
    TabTask2() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[2]"));
    }
    TabTask3() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[3]"));
    }
    TabTask4() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[4]"));
    }
    TabTask5() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[5]"));
    }
    TabTask6() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[6]"));
    }
    TabTask7() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[7]"));
    }
    TabTask8() {
        return element(by.xpath("(//p[contains(text(),'You are adding a Tab Task')])[8]"));
    }
    Taskselection() {
        return element(by.xpath("//input[@name='selectTask']"));
    }
    Taskselection2() {
        return element(by.xpath("(//input[@name='selectTask'])[2]"));
    }
    Taskselection3() {
        return element(by.xpath("(//input[@name='selectTask'])[3]"));
    }
    Taskselection4() {
        return element(by.xpath("(//input[@name='selectTask'])[4]"));
    }
    Taskselection5() {
        return element(by.xpath("(//input[@name='selectTask'])[5]"));
    }
    Taskselection6() {
        return element(by.xpath("(//input[@name='selectTask'])[6]"));
    }
    Taskselection7() {
        return element(by.xpath("(//input[@name='selectTask'])[7]"));
    }
    Taskselection8() {
        return element(by.xpath("(//input[@name='selectTask'])[8]"));
    }
    Itemsperpage() {
        return element(by.xpath("//div[@class='mat-paginator-page-size-label']"));
    }
    radio() {
        return element(by.xpath("//label[@class='radio']"));
    }
    Taskcheckround() {
        return element(by.xpath("(//span[@class='checkround'])[1]"));
    }
    Taskcheckround2() {
        return element(by.xpath("(//span[@class='checkround'])[2]"));
    }
    Taskcheckround3() {
        return element(by.xpath("(//span[@class='checkround'])[3]"));
    }
    Taskcheckround4() {
        return element(by.xpath("(//span[@class='checkround'])[4]"));
    }
    Taskcheckround5() {
        return element(by.xpath("(//span[@class='checkround'])[5]"));
    }
    Taskcheckround6() {
        return element(by.xpath("(//span[@class='checkround'])[6]"));
    }
    Taskcheckround7() {
        return element(by.xpath("(//span[@class='checkround'])[7]"));
    }
    Taskcheckround8() {
        return element(by.xpath("(//span[@class='checkround'])[8]"));
    }
    Taskcheckrandomround() {
        return element(by.xpath("//span[@class='checkround']"));
    }
    AddTask() {
        return element(by.xpath("//span[text()='ADD']"));
    }
    AddTaskbtn() {
        return element(by.xpath("//span[contains(text(),'Add Task')]"));
    }
    Tasktypedropdown() {
        return element(by.xpath("//span[text()='ADD']"));
    }
    Taskswrapper() {
        return element(by.xpath("//div[@ng-reflect-klass='tab-wrapper']"));
    }
    SaveCourse() {
        return element(by.xpath("//span[text()='Save']"));
    }
    SubmitforApproval() {
        return element(by.xpath("//span[contains(text(),'Submit For Approval')]"));
    }
    SaveMilestone() {
        return element(by.xpath("//span[text()='Save']"));
    }
    DeleteCourse() {
        return element(by.xpath("//div[@class='buttons-container']//span[text()='Delete']"));
    }
    PreviewCourse() {
        return element(by.xpath("//span[contains(text(),'Activity Preview')]"));
    }
    Homebtn() {
        return element(by.xpath("//span[text()='Home']"));
    }
    MilestonePreviewbtn() {
        return element(by.xpath("//button[text()='PREVIEW ']"));
    }
    Backbtn() {
        return element(by.xpath("//span[@class='back-title']"));
    }
    Previewclose() {
        return element(by.xpath("//mat-icon[text()='clear']"));
    }
    MilestoneUpdateicon() {
        return element(by.xpath("(//i[text()='edit'])[1]"));
    }
    Clonemilestone() {
        return element(by.xpath("(//i[text()='file_copy'])[1]"));
    }
    MilestoneDeleteicon() {
        return element(by.xpath("(//i[text()='delete'])[1]"));
    }
    MilestoneOKbtn() {
        return element(by.xpath("//button[text()='OK']"));
    }
    CorseOKbtn() {
        return element(by.xpath("//span[text()='OK']"));
    }
    Subjectok() {
        return element(by.xpath("//button[text()='OK']"));
    }
    MilestoneCancelDelete() {
        return element(by.xpath("//button[@class='foot-cancel-btn']"));
    }
    Publishmilestone() {
        return element(by.xpath("//span[text()='Publish']"));
    }
    Publishtask() {
        return element(by.xpath("//div[text()='Publish']"));
    }
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/classes/all-courses']/div[contains(text(),'Class 2')]"));
    }
    Maths() {
        return element(by.xpath("//div[@class='mat-tab-label-content'][text()='MATHS']"));
    }
    Activityname() {
        return element(by.xpath("//input[contains(@class,'activityname-cls')]"));
    }
    Searchcourse() {
        return element(by.xpath("//input[@class='head-search']"));
    }
    Yeardropdown() {
        return element(by.xpath("//select[contains(@class,'year-list-dropdown ')]"));
    }
    Previewicon() {
        return element(by.xpath("(//i[text()='remove_red_eye'])[1]"));
    }
    TaskPreviewicon() {
        return element(by.xpath("(//i[@class='fa fa-eye'])[1]"));
    }
    TaskEditicon() {
        return element(by.xpath("(//i[@class='fa fa-pencil-square-o'])[1]"));
    }
    TaskCancelicon() {
        return element(by.xpath("//div[text()='x']"));
    }
    Previewcancelicon() {
        return element(by.xpath("//div[text()='X']"));
    }
    Cancelicon() {
        return element(by.xpath("//span[text()='CANCEL']"));
    }
    Activitydelete() {
        return element(by.xpath("//span[contains(text(),'Delete')]"));
    }
    Taskremovalbtn() {
        return element(by.xpath("(//i[@class='fa fa-remove'])[1]"));
    }
    Courselink() {
        return element(by.xpath("//table[@class='mat-table']//td/a[@class='task-link']"));
    }
    Editicon() {
        return element(by.xpath("(//i[@class='fa fa-edit action-icon-btn'])[1]"));
    }
    Deleteicon() {
        return element(by.xpath("(//i[text()='delete'])[1]"));
    }
    Norecored() {
        return element(by.xpath("//td[text()=' No record found. ']"));
    }
    CourselinkPath() {
        return by.xpath("//a[@class='task-link']");
    }
    Tasksadded() {
        return element(by.xpath("//div[@ng-reflect-klass='tab-wrapper']"));
    }
    Coursepreviewicon() {
        return element(by.xpath("//i[@class='fa fa-eye action-icon-btn']"));
    }
    Previewpagecontainer() {
        return element(by.xpath("//div[@class='course-container']"));
    }
    saveMCQ() {
        return element(by.xpath('//div[text()="Save"]'))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath('//button[text()="OK"]'))
    }
    taskcloneicon() {
        return element(by.xpath("//i[@class='fa fa-clone']"));
    }
    taskdeleteicon() {
        return element(by.xpath("//i[@class='fa fa-trash']"));
    }
    taskminimizeicon() {
        return element(by.xpath("//i[@class='fa fa-minus']"));
    }
    clickOnClassLinks() {
        return by.xpath("//mat-panel-title[text()=' All Courses ']/../../following-sibling::div//mat-list-item");
    }
    clickOnSubjectsLinks() {
        return by.xpath("//div[@class='mat-tab-label-content']");
    }
    Previewtext() {
        return element(by.xpath("//div[text()=' Preview ']"));
    }
    Browsebtn() {
        return element(by.xpath("//input[@name='selectDocument']"));
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//div[@class='action-btn'][text()='Next']"))
    }
    Newtaskbtn() {
        return element(by.xpath("//span[text()='New Task ']"));
    }
    Activityid() {
        return element(by.xpath("//input[@id='activityid']"))
    }
    Tasktime() {
        return element(by.xpath("//input[@placeholder='mm:ss']"));
    }
    Allcourseslink() {
        return element(by.xpath("//mat-panel-title[@ng-reflect-router-link='/classes/all-courses']"));
    }
    MilestonePreview() {
        browser.ignoreSynchronization = true
        browser.sleep(2500);
        this.Courselink().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Milestone created is previewed');
            this.Courselink().click();
            this.MilestonePreviewbtn().click();
            this.Backbtn().click();
        });
    }
    ExportCourse() {
        browser.sleep(2000);
        this.Exportbutton().click();
        browser.sleep(15000);
        this.Subjectok().click();
        browser.sleep(5000);
        this.Createnewcoursebutton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Course can be exported successfully')
        })
    }
    Milestonecoursepreview() {
        BrowserUtils.waitUntilReady(this.PreviewCourse());
        browser.sleep(500);
        this.PreviewCourse().click();
        BrowserUtils.waitUntilReady(this.Previewclose());
        browser.sleep(500);
        this.Previewclose().click();
        this.Class1().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Milestone course preview is displayed successfully')
        })
    }
    clickallsubjects() {
        BrowserUtils.countAndClick(this.clickOnSubjectsLinks());
        this.Maths().click();
        this.Createnewcoursebutton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Course subject links are clickable')
            this.Class1().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'course subjects are clickable ')
            })
        })
    }
    Coursedata() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='title']"), record["Retakes"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["HomepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                var Activityselection = by.xpath("//span[contains(text(),'" + record["ActivityName"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Activityselection);
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@dicimalnumber][@placeholder='enter no. here']"), record["ActivityNo"]);
                browser.sleep(200);
                this.TabTask().click();
                browser.sleep(200);
                this.Taskselection().click()
                this.TabTask().sendKeys(this.ClickonRandomArray());
                this.Taskselection().click();
                browser.sleep(200);
                BrowserUtils.getTotalElementCount(by.xpath("//tr[@class='header-items mat-row ng-star-inserted']")).then((gettaskCount) => {
                    console.log("loc is:" + gettaskCount);
                    if (gettaskCount) {
                        browser.ignoreSynchronization = true
                        browser.sleep(2000);
                        console.log("There are Tasks assigned on this task type");
                        this.Taskcheckround().click();
                        this.AddTask().click();
                        BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                        browser.sleep(500);
                        this.SaveCourse().click();
                        browser.sleep(500);
                        BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                        this.MilestoneOKbtn().click();
                        browser.sleep(500);
                        BrowserUtils.scrollIntoView(by.xpath("(//span[contains(text(),'Add Comment')])[2]"));
                        this.previewcommentbutton().click();
                        BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                        browser.sleep(500);
                        this.Commentsavebtn().click();
                        browser.sleep(1500);
                        this.Milestonecoursepreview();
                        browser.sleep(500);
                        BrowserUtils.waitUntilReady(this.SaveCourse());
                        this.Homebtn().click();
                        browser.sleep(500);
                        this.SubmitforApproval().isDisplayed().then(function (dis) {
                            expect(dis).toBe(true, 'Course is created successfully')
                        })
                    }
                    else {
                        browser.ignoreSynchronization = true
                        console.log("There are no Tasks assigned on this task type");
                        BrowserUtils.waitUntilReady(this.Cancelicon());
                        browser.sleep(2000);
                        this.Cancelicon().click();
                        browser.sleep(1500);
                        BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Delete')]"));
                        this.Activitydelete().click();
                        browser.sleep(500);
                        this.CorseOKbtn().click();
                        browser.sleep(500);
                        this.Class1().click();
                        browser.sleep(1500);
                        this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                            expect(dis).toBe(true, 'Course cannot be created due to inavilability of tasks')
                        })
                    }
                })
            })
        }
    }

    Coursedataforenglishwithmultiplemilestones() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@name='title']"), record["Retakes"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["HomepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.milestonedata1();
                this.milestonedata2();
                this.milestonedata3();
                this.milestonedata4();
                this.milestonedata5();
                this.milestonedata6();
                this.milestonedata7();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approval')]"));
                this.SubmitforApproval().click();
                browser.sleep(500);
                this.CorseOKbtn().click();
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Course data for english with multiplemilestones are created successfully ')
                })
            })
        }
    }
    Nontabactivitiesforenglish() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddnewActivity().click();
                browser.sleep(500);
                //1st activity
                this.engBatBallnontabactivity().click();
                browser.sleep(500);
                this.input3().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[3]"), record["BatBallnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //2nd activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engKitenontabactivity().click();
                browser.sleep(500);
                this.input5().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[4]"), record["KitenontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engLampnontabactivity().click();
                browser.sleep(500);
                this.input6().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[5]"), record["LampnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engMarblesnontabactivity().click();
                browser.sleep(500);
                this.input7().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[6]"), record["MarblesnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engMicnontabactivity().click();
                browser.sleep(500);
                this.input8().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[7]"), record["MicnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engPuzzlenontabactivity().click();
                browser.sleep(500);
                this.input9().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[8]"), record["PuzzlenontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engRingsInTabnontabactivity().click();
                browser.sleep(500);
                this.input10().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[9]"), record["RingsInTabnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engRingsnontabactivity().click();
                browser.sleep(500);
                this.input11().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[10]"), record["RingsnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engRiverBanknontabactivity().click();
                browser.sleep(500);
                this.input12().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[11]"), record["RiverBanknontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engRiverBanknontabactivity().click();
                browser.sleep(500);
                this.input13().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[12]"), record["RiverBanknontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engRoleplaynontabactivity().click();
                browser.sleep(500);
                this.input14().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[13]"), record["RoleplaynontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engShehnaiInTabnontabactivity().click();
                browser.sleep(500);
                this.input15().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[14]"), record["ShehnainontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engShuttleBatnontabactivity().click();
                browser.sleep(500);
                this.input16().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[15]"), record["ShuttleBatnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engTextbooknontabactivity().click();
                browser.sleep(500);
                this.input17().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[16]"), record["TextbooknontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.AddnewActivity().click();
                browser.sleep(500);
                this.engTopInTabnontabactivity().click();
                browser.sleep(500);
                this.input18().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[17]"), record["TopInTabnontabActivityNo"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Course data for english with non tab activities are created successfully ')
                })
            })
        }
    }
        coursewithallactivities() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@name='title']"), record["Retakes"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["HomepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.IntroductionActivity();
                this.Nontabactivitiesforenglish();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approval')]"));
                this.SubmitforApproval().click();
                browser.sleep(5000);
                this.CorseOKbtn().click();
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Course data for english with all activities are created successfully ')
                })
            })
        }
    }
    Coursedataforteluguwithmultiplemilestones() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Telugu.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@name='title']"), record["Retakes"]);
                browser.sleep(1000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='year']"), record["Academicyear"]);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["HomepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.milestonedata1();
                this.milestonedata2();
                this.milestonedata3();
                this.milestonedata4();
                this.milestonedata5();
                this.milestonedata6();
                this.milestonedata7();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["MilestonepageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(500);
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approval')]"));
                this.SubmitforApproval().click();
                browser.sleep(5000);
                this.CorseOKbtn().click();
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Course data for telugu with multiplemilestones are created successfully ')
                })
            })
        }
    }
    milestonedata1() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.IntroductionActivity();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone1 data is created successfully ')
                })
            })
        }

    }
    milestonedata2() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon2().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone2 data is created successfully ')
                })
            })
        }

    }
    milestonedata3() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon3().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone3 data is created successfully ')
                })
            })
        }

    }
    milestonedata4() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon4().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone4 data is created successfully ')
                })
            })
        }

    }
    milestonedata5() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon5().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone5 data is created successfully ')
                })
            })
        }

    }
    milestonedata7() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon7().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone7 data is created successfully ')
                })
            })
        }

    }
    milestonedata6() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddMilestonecontainer().click();
                browser.sleep(500);
                this.AddMilestoneicon6().click();
                browser.sleep(5000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='daysToComplete']"), record["Completiondays"]);
                this.PracticeActivitywithmultipletasks();
                this.AssessmentActivitywithmultipletasks();
                this.commentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["EditpageComment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                BrowserUtils.scrollIntoView(by.xpath("//span[text()='Save']"));
                browser.sleep(500);
                this.SaveCourse().click();
                browser.sleep(3500);
                BrowserUtils.waitUntilReady(this.MilestoneOKbtn());
                this.MilestoneOKbtn().click();
                browser.sleep(5000);
                this.previewcommentbutton().click();
                BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                browser.sleep(500);
                this.Commentsavebtn().click();
                browser.sleep(1500);
                this.Milestonecoursepreview();
                browser.sleep(500);
                BrowserUtils.waitUntilReady(this.SaveCourse());
                this.Homebtn().click();
                browser.sleep(5000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' milestone6 data is created successfully ')
                })
            })
        }

    }
    PracticeActivitywithmultipletasks() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddnewActivity().click();
                browser.sleep(500);
                this.practiceactivity().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("//input[@dicimalnumber][@placeholder='enter no. here']"), record["PracticeActivityNo"]);
                browser.sleep(2000);
                this.TabTask().click();
                browser.sleep(200);
                this.Taskselection().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask2().click();
                browser.sleep(200);
                this.Taskselection2().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround2().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask3().click();
                browser.sleep(200);
                this.Taskselection3().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround3().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask4().click();
                browser.sleep(200);
                this.Taskselection4().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround4().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask5().click();
                browser.sleep(200);
                this.Taskselection5().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround5().click();
                browser.sleep(2000);
                this.AddTask().click();
                browser.sleep(4000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Practice activity data is created successfully ')
                })
            })
        }
    }
    AssessmentActivitywithmultipletasks() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddnewActivity().click();
                browser.sleep(500);
                this.assessmentactivity().click();
                browser.sleep(500);
                this.input2().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[2]"), record["AssessmentActivityNo"]);
                browser.sleep(2000);
                this.TabTask().click();
                browser.sleep(200);
                this.Taskselection().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask2().click();
                browser.sleep(200);
                this.Taskselection2().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround2().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask3().click();
                browser.sleep(200);
                this.Taskselection3().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround3().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask4().click();
                browser.sleep(200);
                this.Taskselection4().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround4().click();
                this.AddTask().click();
                browser.sleep(2000);
                this.AddTaskbtn().click();
                browser.sleep(2000);
                this.TabTask5().click();
                browser.sleep(200);
                this.Taskselection5().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround5().click();
                browser.sleep(2000);
                this.AddTask().click();
                browser.sleep(4000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Assessment activity data is created successfully ')
                })
            })
        }
    }
    IntroductionActivity() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddnewActivity().click();
                browser.sleep(500);
                this.introductionactivity().click();
                browser.sleep(1500);
                this.input3().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[3]"), record["IntroductionActivityNo"]);
                browser.sleep(200);
                this.TabTask().click();
                browser.sleep(200);
                this.Taskselection().click();
                browser.sleep(2000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[contains(@class,'year-list-dropdown')]"), record["Class"]);
                browser.sleep(2000);
                this.Taskcheckround().click();
                browser.sleep(2000);
                this.AddTask().click();
                browser.sleep(4000);
                this.Class1().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, ' Introduction activity data is created successfully ')
                })
            })
        }
    }
    Milestoneupdate() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                var linkselection = by.xpath("//td[contains(text(),'Draft')]/..//a[text()='" + record["Coursesubjectlink"] + "']");
                BrowserUtils.clickOnElement(linkselection);
                browser.sleep(2000);
            })
        }
    }
    createNewCourseenglish() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Createnewcoursebutton().click();
                browser.sleep(4000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                browser.sleep(1000);
                this.Coursedataforenglishwithmultiplemilestones();
            })
        }
    }
    createcoursewithallactivities() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Telugu.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Createnewcoursebutton().click();
                browser.sleep(4000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                browser.sleep(1000);
                this.coursewithallactivities();
            })
        }
    }
    createNewCoursetelugu() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Telugu.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Createnewcoursebutton().click();
                browser.sleep(4000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                browser.sleep(1000);
                this.Coursedataforteluguwithmultiplemilestones();
            })
        }
    }
    createNewCourseevs() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/EVS.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Createnewcoursebutton().click();
                browser.sleep(4000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                browser.sleep(1000);
                this.Coursedataforteluguwithmultiplemilestones();
            })
        }
    }
    createNewCoursemaths() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/Maths.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                this.Createnewcoursebutton().click();
                browser.sleep(4000);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='subject']"), record["Subject"]);
                browser.sleep(1000);
                this.Coursedataforteluguwithmultiplemilestones();
            })
        }
    }
    clickAllclasses() {
        console.log("Click on all classes");
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.Class1());
                browser.sleep(4000);
                //BrowserUtils.countAndClick(this.clickOnClassLinks());
                var editiconselection = by.xpath("//mat-expansion-panel-header[@ng-reflect-router-link='/classes/all-courses']/../div//mat-list/mat-list-item/div[contains(text(),'" + record["Courseclass"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(editiconselection);
                this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'AllCourses class links are clickable')
                })
            })
        }
    }
    PublishMilestone() {
        browser.ignoreSynchronization = true
        BrowserUtils.waitUntilReady(this.Publishmilestone());
        browser.sleep(500);
        this.Publishmilestone().click();
        browser.sleep(500);
        this.MilestoneOKbtn().click();
    }
    SearchCourse() {
        browser.ignoreSynchronization = true
        this.Class1().click();
        var clearsearch = element(by.xpath("//div[@class='head-search-container']/input"));
        clearsearch.sendKeys("Testing");
        BrowserUtils.waitUntilReady(this.Norecored());
        clearsearch.clear();
        BrowserUtils.waitUntilReady(this.Previewicon());
        this.Createnewcoursebutton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Course search  is successfully ')
        })
    }
    Yearselectiondropdown() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.selectDropdownValue(by.xpath("//div[text()='Year']/../select[contains(@class,'rv-select')]"), record["Year"]);
                BrowserUtils.waitUntilReady(this.Previewicon());
            })
            this.Createnewcoursebutton().isDisplayed().then(function (dis) {
                expect(dis).toBe(true, 'Year selection  is successfully ')
            })
        }
    }
    ClickonRandomArray() {
        var myArray = ['1a', '1.1a', '1.2a', '1.3a', '1.4a', '1.5a', '1.6a', '2.0a', '2.1s', '2.s2', '2.s3', '2.4s', '2f.5', '2.6g', '3.0g', '3.1g', '3.2g', '3.g3', '3.4g', '3.g5', '3.6g', '4.1g', '4.1g', '4.2g', '4.3g', '4.4g', '4.g5', '4.g6', '5.g0', '5.g1', '5.g2', '5.d3', '5.4d', '5.d5', '5.d6', '6.d0', '6.d1', '6.d2', '6.w3', '6.4w', '6.5w', '6.6w', '1.0w', '1.1e1', '1.2e1', '1.3e1', '1.e41', '1.51e', '1.61e', '2.0e1', '2.1e1', '2.2e1', '2.3e1', '2.4e1', '2.5e1', '2.6e1', '3.0e1', '3.1e1', '3.2e1', '3.31r', '3.41r', '3.5r1', '3.r61', '4r.11', '4.1t2', '4.2t1', '4.t31', '4.t41', '4.5t1', '4.t61', '5.0t1', '5.1t1', '5.2t1', '5.3t1', '5.4t1', '5.51t', '5.6u1', '6.u01', '6.11u', '6.2u1', '6.31u', '6.u41', '6.5u1', '6.u61', '1.21u2', '1.12', '1.22', '1.32i', '1.i42', '1.5i2', '1.6i2', '2.0o2', '2.12o', '2.22o', '2.32o', '2.4o2', '2.52o', '2.6o2', '3.l02', '3.1l2', '3.2l2', '3.3l2', '3.4l2', '3.5l2', '3.6x2', '4.12x', '4.12x3', '4.22c', '4.32c', '4.42c', '4.52c', '4.6c2', '5.0c2', '5.c12', '5.22b', '5.3b2', '5.4n2', '5.52', '5.62', '6.02', '6.12', '6.22', '6.32', '6.42', '6.52', '6.62'];
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        return rand;

    }
}

