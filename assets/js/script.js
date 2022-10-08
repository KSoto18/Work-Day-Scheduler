//Variables
var timeBlock = $("textarea[id^='hour']");
var saveBtn = $(".saveBtn");
var toDo;
var newToDo = [];

//Jumbotron Header
function currentDate() {
    currentDate = moment().format("MMMM Do YYYY, h a");
    $("#currentDate").text(currentDate);
};

currentDate();

//Save button function
function saveButton(event) {
    event.preventDefault();
    hour = $(this).attr("id").split("-")[1];
    toDo = $(this).siblings("textarea[id^='hour']").val();

    storeTodo();

    //keeps information on table (NOT WORKING)
    function getToDo() {
        localStorage.getItem(toDo);
        console.log(toDo);

        $(this).siblings("textarea[id^='hour']").text(toDo);
    }

    getToDo();

};

// Stores the hour and to do to Local Storage
function storeTodo() {
    localStorage.setItem(hour + " 'o Clock", "To do: " + toDo);
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
