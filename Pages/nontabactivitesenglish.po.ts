import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
var path = require("path");
export class nontabPage {
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
    //Class-1,2
    Ballon() {
        return element(by.xpath("//span[contains(text(),'Bat Ball')]"));
    }
    Doll() {
        return element(by.xpath("//span[contains(text(),'Kite')]"));
    }
    Dora() {
        return element(by.xpath("//span[contains(text(),'Lamp')]"));
    }
    Drum() {
        return element(by.xpath("//span[contains(text(),'Rings')]"));
    }
    Marbles() {
        return element(by.xpath("//span[contains(text(),'Marbles')]"));
    }
    Mic() {
        return element(by.xpath("//span[contains(text(),'Mic')]"));
    }
    PuzzleTab() {
        return element(by.xpath("//span[contains(text(),'Puzzle')]"));
    }
    Puzzle() {
        return element(by.xpath("//span[contains(text(),'Puzzle')]"));
    }
    Rattle() {
        return element(by.xpath("//span[contains(text(),'Puzzle')]"));
    }
    Shehnai() {
        return element(by.xpath("//span[contains(text(),'Shehnai')]"));
    }
    Textbook() {
        return element(by.xpath("//span[contains(text(),'Textbook')]"));
    }
    Top() {
        return element(by.xpath("//span[contains(text(),'Top')]"));
    }
    Toyphone() {
        return element(by.xpath("//span[contains(text(),'Textbook')]"));
    }
    Worksheets() {
        return element(by.xpath("//span[contains(text(),'Top')]"));
    }
   //Class-3,4,5
   BatBall() {
    return element(by.xpath("//span[contains(text(),'Bat Ball')]"));
}
  Kite() {
    return element(by.xpath("//span[contains(text(),'Kite')]"));
}
 Lamp() {
    return element(by.xpath("//span[contains(text(),'Lamp')]"));
} 
    RingsInTab() {
        return element(by.xpath("//span[contains(text(),'Rings In Tab')]"));
    }
    RiverBank() {
        return element(by.xpath("//span[contains(text(),'River Bank')]"));
    }
    ShuttleBat() {
        return element(by.xpath("//span[contains(text(),'Shuttle Bat')]"));
    }
    Rings() {
        return element(by.xpath("//span[contains(text(),'Rings')]"));
    }

    Roleplay() {
        return element(by.xpath("//span[contains(text(),'Roleplay')]"));
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
    Nontabforenglishclass12() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddnewActivity().click();
                browser.sleep(500);
                //1st activity
                this.Ballon().click();
                browser.sleep(500);
                this.input3().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[3]"), record["Ballon"]);
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
                this.Doll().click();
                browser.sleep(500);
                this.input4().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[4]"), record["Doll"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //3rd activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Dora().click();
                browser.sleep(500);
                this.input5().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[5]"), record["Dora"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //4 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Drum().click();
                browser.sleep(500);
                this.input6().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[6]"), record["Drum"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //5 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Marbles().click();
                browser.sleep(500);
                this.input7().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[7]"), record["Marbles"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //6 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Mic().click();
                browser.sleep(500);
                this.input8().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[8]"), record["Mic"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //7 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.PuzzleTab().click();
                browser.sleep(500);
                this.input9().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[9]"), record["PuzzleTab"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //8 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Puzzle().click();
                browser.sleep(500);
                this.input10().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[10]"), record["Puzzle"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                 //9 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Rattle().click();
                browser.sleep(500);
                this.input11().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[11]"), record["Rattle"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                 //10 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Shehnai().click();
                browser.sleep(500);
                this.input12().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[12]"), record["Shehnai"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //11 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Textbook().click();
                browser.sleep(500);
                this.input13().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[13]"), record["Textbook"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //11 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Top().click();
                browser.sleep(500);
                this.input14().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[14]"), record["Top"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //11 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Toyphone().click();
                browser.sleep(500);
                this.input15().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[15]"), record["Toyphone"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //12 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Worksheets().click();
                browser.sleep(500);
                this.input16().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[16]"), record["Worksheets"]);
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
                    expect(dis).toBe(true, ' Course data for class-1 english with non tab activities are created successfully ')
                })
            })
        }
    }
    Nontabforenglishclass345() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CourseData/English.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                this.AddnewActivity().click();
                browser.sleep(500);
                //1st activity
                this.BatBall().click();
                browser.sleep(500);
                this.input3().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[3]"), record["BatBall"]);
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
                this.Kite().click();
                browser.sleep(500);
                this.input4().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[4]"), record["Kite"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //3rd activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Lamp().click();
                browser.sleep(500);
                this.input5().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[5]"), record["Lamp"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //4 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Marbles().click();
                browser.sleep(500);
                this.input6().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[6]"), record["Marbles"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //5 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.PuzzleTab().click();
                browser.sleep(500);
                this.input7().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[7]"), record["PuzzleTab"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //8 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Puzzle().click();
                browser.sleep(500);
                this.input8().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[8]"), record["Puzzle"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                 //9 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.RingsInTab().click();
                browser.sleep(500);
                this.input9().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[9]"), record["RingsInTab"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                 //10 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Rings().click();
                browser.sleep(500);
                this.input10().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[10]"), record["Rings"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //11 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.RiverBank().click();
                browser.sleep(500);
                this.input11().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[11]"), record["RiverBank"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //12 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Shehnai().click();
                browser.sleep(500);
                this.input12().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[12]"), record["Shehnai"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //13 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.ShuttleBat().click();
                browser.sleep(500);
                this.input13().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[13]"), record["ShuttleBat"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //14 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Textbook().click();
                browser.sleep(500);
                this.input14().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[14]"), record["Textbook"]);
                browser.sleep(2000);
                this.nonTabTask().click();
                browser.sleep(1500);
                BrowserUtils.selectDropdownValue(by.xpath("//select[@name='type']"), record["Nontabtype"]);
                browser.sleep(500);
                var steps = "../../TestData/ImageFiles/steps.jpeg";
                var stepsPath = path.resolve(__dirname, steps);
                this.typefile2().sendKeys(stepsPath);
                browser.sleep(1000);
                //15 activity
                this.AddnewActivity().click();
                browser.sleep(500);
                this.Top().click();
                browser.sleep(500);
                this.input15().click();
                browser.sleep(500);
                BrowserUtils.enterText(by.xpath("(//input[@dicimalnumber][@placeholder='enter no. here'])[15]"), record["Top"]);
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
                    expect(dis).toBe(true, ' Course data for class-1 english with non tab activities are created successfully ')
                })
            })
        }
    }


}