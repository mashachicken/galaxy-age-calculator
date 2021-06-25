import $ from 'jquery';
import 'bootstrap';
import { Years } from './../src/calculator.js';
$(document).ready(function () {
  $("#calculateYearsForm").submit(function (event) {
    event.preventDefault()
    const userAge = $("#solar").val();
    const lifeExpectancy = $("#life").val();
    let userYears = new Years(userAge, lifeExpectancy)
    userYears.mercuryCount()
    userYears.venusCount()
    userYears.marsCount()
    userYears.jupiterCount()

    userYears.yearsLeft().forEach(function (year) {
      if (year >= 0) {
        $("#yearsleft").append("<li>" + year + "</li>")
      } else {
        $("#yearspast").append("<li>" + year * (-1) + " years pass the expectancy" + "</li>")
      }
    });
      $(".mercury").html(userYears.mercuryYears);
      $(".venus").html(userYears.venusYears);
      $(".mars").html(userYears.marsYears);
      $(".jupiter").html(userYears.jupiterYears);
    });
  });