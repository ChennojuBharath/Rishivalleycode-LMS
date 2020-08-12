import { courseapprovalPage } from '../../Pages/courseapproval.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let approval: courseapprovalPage
approval = new courseapprovalPage();

describe('Course approval flow ', () => {
   it('Verify course approval flow is working  successful', () => {
    approval.approvecourseforenglish();
   });
   it('Verify course draft flow is working  successful', () => {
      approval.draftcourseforenglish();
     });
})