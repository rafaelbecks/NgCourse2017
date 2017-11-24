import { FormsReactivePage } from './app.po';

describe('forms-reactive App', function() {
  let page: FormsReactivePage;

  beforeEach(() => {
    page = new FormsReactivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
