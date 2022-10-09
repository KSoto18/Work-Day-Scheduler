//Variables
var timeBlock = $("textarea[id^='hour']");
var saveBtn = $(".saveBtn");


//Jumbotron Header
function currentDate() {
    currentDate = moment().format("MMMM Do YYYY, h a");
    $("#currentDate").text(currentDate);
};

currentDate();
getToDo();

// Stores the hour and to do to Local Storage
function storeTodo() {
    let hour9 = $("#hour-9").val();
    let hour10 = $("#hour-10").val();
    let hour11 = $("#hour-11").val();
    let hour12 = $("#hour-12").val();
    let hour13 = $("#hour-13").val();
    let hour14 = $("#hour-14").val();
    let hour15 = $("#hour-15").val();

    localStorage.setItem("hour-9", hour9);
    localStorage.setItem("hour-10", hour10);
    localStorage.setItem("hour-11", hour11);
    localStorage.setItem("hour-12", hour12);
    localStorage.setItem("hour-13", hour13);
    localStorage.setItem("hour-14", hour14);
    localStorage.setItem("hour-15", hour15);
};

//keeps information on table 
function getToDo() {
    $("#hour-9").val(localStorage.getItem("hour-9"));
    $("#hour-10").val(localStorage.getItem("hour-10"));
    $("#hour-11").val(localStorage.getItem("hour-11"));
    $("#hour-12").val(localStorage.getItem("hour-12"));
    $("#hour-13").val(localStorage.getItem("hour-13"));
    $("#hour-14").val(localStorage.getItem("hour-14"));
    $("#hour-15").val(localStorage.getItem("hour-15"));

};

//Save button function
function saveButton(event) {
    storeTodo();
};

// Compares times to change colors for present(orange), future(green) or past(grey)
function blockColors() {
    timeBlock.each(function () {
        var colorTime = $(this).attr("id").split("-")[1];
        colorTime = parseInt(moment(colorTime, "H").format("H"));
        currentTime = parseInt(moment().format("H"));

        if (currentTime < colorTime) {
            $(this).removeClass("past present");
            $(this).addClass("future");
        } else if (currentTime === colorTime) {
            $(this).removeClass("past future");
            $(this).addClass("present");
        } else if (currentTime > colorTime) {
            $(this).removeClass("present future");
            $(this).addClass("past");
        }
    })
};

// Updates time block colors each minute 
Colors();

function Colors() {
    var currentDateSeconds = new Date().getSeconds();
    if (currentDateSeconds == 0) {
        setInterval(currentDate, 60000);
        setInterval(blockColors, 60000);
    }
    blockColors();
};

Colors();

//Event Listener for Save Buttons
saveBtn.on('click', saveButton);
