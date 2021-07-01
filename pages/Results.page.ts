class ResultsPage {
  open() {
    throw 'The results page cannot be opened directly.';
  }

  get searchResultItems() {
    return $$('#searchResults li.searchResultItem');
  }

  get numberOfResults() {
    return this.searchResultItems.length;
  }

  get firstResult() {
    if (this.numberOfResults === 0) {
      throw 'No search results found.';
    }

    const firstResultItem = this.searchResultItems[0];

    return {
      'Title': firstResultItem.$('h3[itemprop="name"] a').getText(),
      'Author': firstResultItem.$('span[itemprop="author"] a').getText()
    };
  }
}

export default new ResultsPage();
