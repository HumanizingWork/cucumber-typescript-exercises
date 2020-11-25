export class FineCalculator {
  _finePerDay: number;

  constructor(finePerDay: any) {
    this._finePerDay = finePerDay;
  }

  calculateFine(daysOverdue: number) {
    return this._finePerDay * daysOverdue;
  }
}
