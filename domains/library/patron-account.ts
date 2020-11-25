export class PatronAccount {
  name: string;
  private _balance: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  get balance(): number {
    return this._balance;
  }

  chargeAccount(amount: number) {
    this._balance += amount;
  }
}