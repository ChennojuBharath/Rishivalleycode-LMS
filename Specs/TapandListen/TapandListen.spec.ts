import { tapandlistenPage } from '../../Pages/tapandlisten.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Tapandlisten: tapandlistenPage
Tapandlisten = new tapandlistenPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Tap and Listen task Creation Page', () => {

    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create Tap and Listen task with all scenarios in telugu', () => {
        Tapandlisten.createTapandlistenTaskwithTexttelugu();
    });
   it('Create Tap and Listen task with Text  all scenarios in english', () => {
        Tapandlisten.createTapandlistenTaskwithTextenglish();
    });
    it('To Search data in list of tasks', () => {
        Tapandlisten.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        Tapandlisten.CancelTask();
    });
     it('Verify Drafted task can be sent for review', () => {
        Tapandlisten.Updatetapandlistentask();
    });
    it('Check the task preview page back button', () => {
        Tapandlisten.Previewbackbutton();
    });
    it('Check the task publish page back button', () => {
        Tapandlisten.Publishbackbutton();
   })
   it('Check the task preview page breadcrumbs are working', () => {
    Tapandlisten.Previewbreadcrumbs()
  });
  it('Check the task publish page breadcrumbs are working', () => {
    Tapandlisten.Publishbreadcrmbs();
  }) 
})