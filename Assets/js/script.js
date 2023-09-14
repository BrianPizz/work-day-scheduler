// Code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  //listener for click events on the save button
  $('.saveBtn').on('click', function () {
    //Dom traversal used to get event text and hour ID
    var plan = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    //both event and hour saved in local storage
    localStorage.setItem('plan', plan);
    localStorage.setItem('time', time);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function checkTime() {

    var currentHour = dayjs().format('H');

    console.log(currentHour);

    $('.time-block').each(function () {

      var planHour = parseInt($(this).attr("id").split('hour-').join());

      console.log(planHour);

      if (planHour > currentHour) {
        $(this).addClass('past');
      } else if (planHour < currentHour) {
        $(this).addClass('future');
      } else {
        $(this).addClass('present');
      };

    })
  };

  checkTime()




  //var planHourDigit = parseInt(planHour);



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format("dddd D/M/YYYY h:mma"));
});
