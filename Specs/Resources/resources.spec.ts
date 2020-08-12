import { Resources } from '../../Pages/resources.po';

describe('Resource Creation Page', () => {
    let Resource: Resources
    Resource = new Resources();
    it('Verify Resource can  be created with class data', () => {
      Resource.Createclasstyperesourcesforenglish();
      });
      it('Verify Resource can  be created with generic data', () => {
        Resource.Creategenerictyperesourcesenglish();
        });

})