$(document).ready(function(){
  $("#calculateYearsForm").submit(function(event) {
    event.preventDefault()
    const userAge = $("#solar").val();
    
    userYears.yearsLeft().forEach(function(year){
      if (year >= 0) {
        $("#yearsleft").append("<li>" + year + "</li>")
      } else {
        $("#yearspast").append("<li>" + year * (-1) + " years pass the expectancy" + "</li>")
      };
    })