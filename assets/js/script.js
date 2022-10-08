//Jumbotron Header
function currentDate() {
    currentDate = moment().format("MMMM Do YYYY, h a");
    $("#currentDate").text(currentDate);
};

currentDate();