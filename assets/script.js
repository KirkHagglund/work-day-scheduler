// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.\


$(function () {
  //Assignment section
const hourNine = document.getElementById('hour-9');
const hourTen = document.getElementById('hour-10');
const hourEleven = document.getElementById('hour-11');
const hourTwelve = document.getElementById('hour-12');
const hourThirteen = document.getElementById('hour-13');
const hourFourteen = document.getElementById('hour-14');
const hourFifteen = document.getElementById('hour-15');
const hourSixteen = document.getElementById('hour-16');
const hourSeventeen = document.getElementById('hour-17');
let saveBtn = document.querySelectorAll('.saveBtn');
let toDoList = document.querySelectorAll('.description');
let toDoText;


let hourList = ["", "", "", "", "", "", "", "", "", hourNine, hourTen, hourEleven, hourTwelve, hourThirteen, hourFourteen, hourFifteen, hourSixteen, hourSeventeen];

//Create an if else statement inside a for loop to hardcode class styles to different times.
for (let i = 9; i < hourList.length; i++) {
  if (dayjs().hour() == [i]) {
    hourList[i].setAttribute('style', 'background-color: #ff6961');
} else if (dayjs().hour() > [i]) {
    console.log('past');
    hourList[i].setAttribute('style', 'background-color: #d3d3d3');
  } else {
    hourList[i].setAttribute('style', 'background-color: #77dd77');
  };
};

  //Needs to set Item inside local storage fo rretrieval on reload
  $(saveBtn).click(function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(time, text);
});


  // If id hour == dayjs h set attrib class present
  //else if hour < set attr class past
  //else set class future
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    setInterval(() =>
{
  let presentDateTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss A');
  document.getElementById("currentDay").innerText = presentDateTime;
},1000);
  });
