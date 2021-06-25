export class Years {
  constructor (userAge, lifeExpectancy) {
    this.userAge = userAge,
    this.lifeExpectancy = lifeExpectancy
  }
  mercuryCount() {
    this.mercuryYears = (this.userAge * .24);
  }
  venusCount() {
    this.venusYears = (this.userAge * .62);
  }
  marsCount() {
    this.marsYears = (this.userAge * 1.88);
  }
  jupiterCount() {
    this.jupiterYears = (this.userAge * 11.86);
  }