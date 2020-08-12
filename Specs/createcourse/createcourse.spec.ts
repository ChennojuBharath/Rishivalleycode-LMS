import { coursePage } from '../../Pages/coursePage.po';
describe('Course Creation Page', () => {
  let coursePg: coursePage
  coursePg = new coursePage();
  it('Verify tasks by performing click action on every class', () => {
    coursePg.clickAllclasses();
  });
  it('check course can be created with multiple tasks', () => {
    coursePg.createNewCoursetelugu(); 
  });
  it('Search for the courses', () => {
    coursePg.SearchCourse();
  })
  it('Checking for the Export button is working or not', () => {
    coursePg.ExportCourse();
  })
})






