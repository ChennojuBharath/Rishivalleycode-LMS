import { browser, by, element, ExpectedConditions } from 'protractor';
import { tasksPage } from '../../Pages/multiplechoicePage.po';

describe('Tapping MCQ Tasks Creation', () => {
    let taskPg: tasksPage
    taskPg = new tasksPage();
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create task flow check for TapingMCQ with all scenarios', () => {
        taskPg.createTappingMCQTasktexttelugu();
    });
    it('Create task flow check for TapingMCQ with all scenarios', () => {
        taskPg.createTappingMCQTasktextenglish();
    });

    it('To Search data in list of tasks', () => {
        taskPg.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        taskPg.CancelTask();
    });
    it('Verify MCQ task can be updated', () => {
        taskPg.UpdateMCQ();
    });
    it('Check the task preview page back button', () => {
        taskPg.Previewbackbutton();
    });
    it('Check the task publish page back button', () => {
        taskPg.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        taskPg.Previewbreadcrumbs()
    });
    it('Check the task publish page breadcrumbs are working', () => {
        taskPg.Publishbreadcrmbs();
    })

})