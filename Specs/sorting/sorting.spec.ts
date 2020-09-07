import { sortingPage } from '../../Pages/sorting.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';

let Sorting: sortingPage
Sorting = new sortingPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Sorting Tasks Creation', () => {
    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create Sorting task with Text', () => {
        Sorting.createTextSortingTasktelugu();
    });
    it('Update Sorting task with link', () => {
        Sorting.Updatesortingbylink();
    });
    it('Create Sorting task with Image', () => {
        Sorting.createImageSortingTasktelugu();
    });
    it('To Search data in list of tasks', () => {
        Sorting.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        Sorting.CancelTask();
    });
    it('Verify drafted task can be send to review', () => {
        Sorting.UpdateSortingtask();
    });
    it('Check the task preview page back button', () => {
        Sorting.Previewbackbutton()
    });
    it('Check the task publish page back button', () => {
        Sorting.Publishbackbutton();
    })
    it('Check the task preview page breadcrumbs are working', () => {
        Sorting.Previewbreadcrumbs()
      });
      it('Check the task publish page breadcrumbs are working', () => {
        Sorting.Publishbreadcrmbs();
      }) 
})
