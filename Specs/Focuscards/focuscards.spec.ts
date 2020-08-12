import { focuscardsPage } from '../../Pages/focuscards.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let focuscards: focuscardsPage
focuscards = new focuscardsPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Focuscards Tasks Creation', () => {
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
 });
 it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects(); 
  }); 
it('Create task flow check for focuscards task', () => {
    focuscards.createfocuscardsTaskenglish();
});
it('To Search data in list of tasks', () => {
  focuscards.SearchTaskfromlist();
});
it('Closing the task popup using cancel button', () => {
  focuscards.CancelTask();
});
it('Check for the content type search', () => {
  focuscards.Contenttypesearch();
});
it('Check the task preview page back button', () => {
  focuscards.Previewbackbutton()
});
it('Check the task publish page back button', () => {
  focuscards.Publishbackbutton();
})
it('Check the task preview page breadcrumbs are working', () => {
  focuscards.Previewbreadcrumbs()
});
it('Check the task publish page breadcrumbs are working', () => {
  focuscards.Publishbreadcrmbs();
}) 
})