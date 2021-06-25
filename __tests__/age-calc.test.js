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
    expect(testAge.venusYears).toEqual(18.6);
  });
  test('Should correctly calculate user`s age in  mars years', () => {
    let testAge = new Years(20);
    testAge.marsCount()
    expect(testAge.marsYears).toEqual(37.599999999999994);
  });
  test('Should correctly calculate user`s age in jupiter years', () => {
    let testAge = new Years(20);
    testAge.jupiterCount()
    expect(testAge.jupiterYears).toEqual(237.2);
  });
  test('Should correctly calculate user`s age in jupiter years', () => {
    let testAge = new Years(20);
    testAge.jupiterCount()
    expect(testAge.jupiterYears).toEqual(237.2);
  });
});
describe('Years', () => {
  test ('Determines if the program correctly counts how many solar years a user has left to live on each planet and pushes it to an array', () => {
    let testAge = new Years(20, 90);
    testAge.mercuryCount()
    testAge.venusCount()
    testAge.marsCount()
    testAge.jupiterCount()
    expect(testAge.yearsLeft()).toEqual([i]);
  });