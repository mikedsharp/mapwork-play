import { MapworkPlayPage } from './app.po';

describe('mapwork-play App', function() {
  let page: MapworkPlayPage;

  beforeEach(() => {
    page = new MapworkPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
