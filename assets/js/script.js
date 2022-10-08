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
};

// Stores the hour and to do to Local Storage
function storeTodo() {
    localStorage.setItem(hour + " 'o Clock", "To do: " + toDo);
};