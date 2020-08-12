import { rearrangingPage } from '../../Pages/rearranging.po';
import { sortingPage } from '../../Pages/sorting.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Rearranging: rearrangingPage
Rearranging = new rearrangingPage();
let taskPg: tasksPage
taskPg = new tasksPage();
let Sorting: sortingPage
Sorting = new sortingPage();
describe('Rearranging Tasks Creation', () => {
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
});
it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects();
});
it('Create Rearranging task with Images', () => {
    Rearranging.createRearrangingTaskwithImagestelugu();
});
it('Create Rearranging task with Text', () => {
    Rearranging.createRearrangingTaskwithTexteng();
});
it('Update drafted Rearranging task can be updated using link', () => {
    Rearranging.UpdateRearrangingtask();
});
it('Verify Delete options is working in Create page', () => {
    Rearranging.Deleteoptions();
});
it('Check Preview page back button', () => {
    Rearranging.Previewbackbutton();
});
it('Check Publish page back button', () => {
    Rearranging.Publishbackbutton();
});
it('Check Create page cancel icon is working', () => {
    Rearranging.Createcancelicon();
});
it('To Search data in list of tasks', () => {
    Rearranging.SearchTaskfromlist();
  });
  it('Closing the task popup using cancel button', () => {
    Rearranging.CancelTask();
  });
  it('Check for the content type search', () => {
    Rearranging.Contenttypesearch();
  });
})