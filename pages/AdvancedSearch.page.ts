class AdvancedSearchPage {
  open() {
    browser.url('/advancedsearch');
  }

  get titleField() {
    return $('#qtop-title');
  }

  get searchButton() {
    return $('#contentBody form input[type="submit"]');
  }
}

export default new AdvancedSearchPage();
