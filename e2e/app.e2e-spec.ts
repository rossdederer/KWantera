import { WkandaPage } from './app.po';

describe('wkanda App', () => {
  let page: WkandaPage;

  beforeEach(() => {
    page = new WkandaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
