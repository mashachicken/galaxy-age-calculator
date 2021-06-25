import { Years} from './../src/calculator.js';
describe('Years', () => {
  test('Should correctly calculate user`s age in mercury years', () => {
    let testAge = new Years(30);
    testAge.mercuryCount()
    expect(testAge.mercuryYears).toEqual(7.199999999999999);
  });
  test('Should correctly calculate user`s age in venus years', () => {
    let testAge = new Years(30);
    testAge.venusCount()
    expect(testAge.venusYears).toEqual(9);
  });
});