export class Years {
  constructor (userAge, lifeExpectancy) {
    this.userAge = userAge,
    this.lifeExpectancy = lifeExpectancy
  }
  userYears.yearsLeft().forEach(function(year){
    if (year >= 0) {
      $("#yearsleft").append("<li>" + year + "</li>")
    } else {
      $("#yearspast").append("<li>" + year * (-1) + " years pass the expectancy" + "</li>")
    };
  })