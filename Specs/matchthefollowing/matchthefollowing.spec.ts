import { matchtheFollowingPage } from '../../Pages/matchtheFollowing.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let matchtheFollowing: matchtheFollowingPage
matchtheFollowing = new matchtheFollowingPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('MatchtheFollowing Tasks Creation', () => {
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
 });
it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects(); 
  }); 
it('Create task flow check for Matchthefollowing for Image to Image selection', () => {
    matchtheFollowing.createMatchthefollowingImagetoImageTasktelugu();
});
it('Create task flow check for Matchthefollowing for Text to Image selection', () => {
    matchtheFollowing.createMatchthefollowingTexttoImageTasktelugu();
});
it('Create task flow check for Matchthefollowing for Text to Text selection', () => {
    matchtheFollowing.createMatchthefollowingTexttoTextTasktelugu();
});
it('Create task flow check for Matchthefollowing for Image to Text selection', () => {
    matchtheFollowing.createMatchthefollowingImagetoTextTasktelugu();
});
it('To Search data in list of tasks', () => {
    matchtheFollowing.SearchTaskfromlist();
});
it('Closing the task popup using cancel button', () => {
    matchtheFollowing.CancelTask();
});
it('Update match the following task', () => {
    matchtheFollowing.Updatematchthefoll();
});
it('Check for the content type search', () => {
    matchtheFollowing.Contenttypesearch();
});
it('Check the task preview page back button', () => {
    matchtheFollowing.Previewbackbutton();
});
it('Check the task publish page back button', () => {
    matchtheFollowing.Publishbackbutton();
})
it('Check the task preview page breadcrumbs are working', () => {
    matchtheFollowing.Previewbreadcrumbs()
  });
  it('Check the task publish page breadcrumbs are working', () => {
    matchtheFollowing.Publishbreadcrmbs();
  }) 
})
