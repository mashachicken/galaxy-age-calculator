import $ from 'jquery';
import "./css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
        $('#hide').show()
      } else {
        $("#yearspast").append("<li>" + year * (-1) + " years pass the expectancy for this planet" + "</li>")
      }
    });
    $(".mercury").html(userYears.mercuryYears + '<br>');
    $("#mercury").show()
    $(".venus").html(userYears.venusYears+ '<br>');
    $("#venus").show()
    $(".mars").html(userYears.marsYears+ '<br>');
    $("#mars").show()
    $(".jupiter").html(userYears.jupiterYears+ '<br>');
    $("#jupiter").show()
  });
});