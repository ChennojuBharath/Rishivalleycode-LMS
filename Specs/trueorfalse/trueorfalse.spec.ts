import { browser, by, element, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../../utils/browser.utils';
import { trueorfalsePage } from '../../Pages/trueorfalse.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let taskPg: tasksPage
taskPg = new tasksPage();
let trueorfalsePg: trueorfalsePage
trueorfalsePg = new trueorfalsePage();
describe('trueorfalse task Creation Page', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Check for the task with pictureandtext can be created', () => {
        trueorfalsePg. createTrueorfalsetasktelugumultiplequestions();
    });
    it('Check for the task with pictureandtext can be created', () => {
        trueorfalsePg.createTrueorfalsetaskenglishmultiplequestions();
    });
      it('To Search data in list of tasks', () => {
        trueorfalsePg.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        trueorfalsePg.CancelTask();
    });
     it('Update drafted task to reviewer', () => {
        trueorfalsePg. Updatetrueorfalsetask();
    });
    it('Check the task preview page back button', () => {
        trueorfalsePg.Previewbackbutton()
    });
    it('Check the task publish page back button', () => {
        trueorfalsePg.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        trueorfalsePg.Previewbreadcrumbs()
      });
      it('Check the task publish page breadcrumbs are working', () => {
        trueorfalsePg.Publishbreadcrmbs();
      }) 
})
