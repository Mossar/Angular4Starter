import { ItsilesiaProgrammersPage } from './app.po';

describe('itsilesia-programmers App', () => {
  let page: ItsilesiaProgrammersPage;

  beforeEach(() => {
    page = new ItsilesiaProgrammersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
