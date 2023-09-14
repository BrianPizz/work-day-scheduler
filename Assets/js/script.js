// Code runs when the DOM has finished rendering
$(document).ready(function () {
  //listener for click events on the save button
  $('.saveBtn').on('click', function () {
    //Dom traversal used to get plan text and hour ID
    var plan = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    //both event and hour saved in local storage
    localStorage.setItem(time, plan);
  });
  checkTime()
  function checkTime() {
    //current hour via Day.js
    var currentHour = dayjs().format('H');
    // each time block is targeted 
    $('.time-block').each(function () {
      //convert hour id to an int
      var planHour = parseInt($(this).attr("id").split('hour-').join(''));
      //compare hour id and current hour and apply the past, present, or future class
      if (planHour < currentHour) {
        $(this).addClass('past');
        $(this).removeClass('present');
        $(this).removeClass('future');
      } else if (planHour > currentHour) {
        $(this).addClass('future');
        $(this).removeClass('present');
        $(this).removeClass('past');
      } else {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
      };
      //any user input that was saved in localStorage is set to description value
      $(this).children('.description').val(localStorage.getItem($(this).attr('id')));
    })
  };
  //display the current date in the header of the page.
  $('#currentDay').text(dayjs().format("dddd D/M/YYYY h:mma"));
});