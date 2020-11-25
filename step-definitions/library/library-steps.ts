import { PatronAccount } from '../../domains/library/patron-account';
import expect from 'expect';
import { Given, Then, When } from 'cucumber';
import { World } from 'cucumber';

let currentPatron: PatronAccount, actualBalance: number;
declare module 'cucumber' {
  interface World {
    currentPatron: PatronAccount;
    actualBalance: number;
  }
}

Given('a new patron, John, has joined the library', async function () {
  this.currentPatron = new PatronAccount("John");
});

Given('John has been fined ${float} for a late return', async function (amount) {
  this.currentPatron.chargeAccount(amount);
});

Given('John has been charged ${float} for a lost book', async function (amount) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('John checks his account balance', async function () {
  this.actualBalance = this.currentPatron.balance;
});

Then('the balance should be ${float}', async function (expectedBalance) {
  expect(this.actualBalance).toEqual(expectedBalance);
});
