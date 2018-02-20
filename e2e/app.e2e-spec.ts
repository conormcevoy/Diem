import { DiemPage } from './app.po';

describe('diem App', function() {
  let page: DiemPage;

  beforeEach(() => {
    page = new DiemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
