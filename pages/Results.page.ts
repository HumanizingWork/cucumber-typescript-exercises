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
      'Title': firstResultItem.$('a[itemprop="name"]').getText(),
      'Author': firstResultItem.$('a[itemprop="author"]').getText(),
    };
  }

  get allResults() {
    if (this.numberOfResults === 0) {
      throw 'No search results found.';
    }

    return this.searchResultItems.map(function (item) {
      return {
        'Title': item.$('a[itemprop="name"]').getText(),
        'Author': item.$('a[itemprop="author"]').getText(),
      };
    });
  }
}

export default new ResultsPage();
