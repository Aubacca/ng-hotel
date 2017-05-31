import { NgHotelPage } from './app.po';

describe('ng-hotel App', function() {
  let page: NgHotelPage;

  beforeEach(() => {
    page = new NgHotelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
