import AdvancedSearchPage from '../pages/AdvancedSearch.page';
import ResultsPage from '../pages/Results.page';
import { TableDefinition, Then, When } from 'cucumber';

When('I do an advanced search with Title {string}', function(query: string) {
  AdvancedSearchPage.open();
  AdvancedSearchPage.titleField.setValue(query);
  AdvancedSearchPage.searchButton.click();
});

Then('the only result should be:', function(table: TableDefinition) {
  expect(ResultsPage.numberOfResults).toEqual(1);

  const firstResult = ResultsPage.firstResult;
  expect(firstResult['Title']).toEqual(table.rowsHash()['Title']);
  expect(firstResult['Author']).toEqual(table.rowsHash()['Author']);
});

Then('there should be multiple results', function() {
  expect(ResultsPage.numberOfResults).toBeGreaterThan(1);
});

Then('the results should include:', function(table: TableDefinition) {
  const actualResults = ResultsPage.allResults;
  const expectedResults = table.hashes();

  for (let i = 0; i < expectedResults.length; i++) {
    expect(actualResults).toContainEqual(expectedResults[i]);
  }
});
