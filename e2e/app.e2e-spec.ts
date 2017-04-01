import { TekwebPage } from './app.po';

describe('tekweb App', () => {
  let page: TekwebPage;

  beforeEach(() => {
    page = new TekwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
