import { FineCalculator } from '../../domains/library/fine-calculator';
import expect from 'expect';
import { Before, Given, Then, When } from 'cucumber';
import { World } from 'cucumber';

declare module 'cucumber' {
  interface World {
    fineCalculator: FineCalculator;
    calculatedFine: number;
  }
}

Before(async function () {
  this.calculatedFine = -1;
});

Given('the standard fine per day is ${float}', async function (finePerDay) {
  this.fineCalculator = new FineCalculator(finePerDay);
});

When('the patron returns a book on time', async function() {
  this.calculatedFine = this.fineCalculator.calculateFine(0);
});

When('the patron returns a book {int} days late', async function (daysLate) {
  this.calculatedFine = this.fineCalculator.calculateFine(daysLate);
});

Then('the there should be no fine', async function() {
  const expectedFine = 0;
  expect(this.calculatedFine).toEqual(expectedFine);
});

Then('there should be a ${float} fine', async function (expectedFine) {
  expect(this.calculatedFine).toEqual(expectedFine);
});