// Get current date
var moment = require('moment');

var now = moment(currentDay);
console.log(now);

// TO DO: click on empty p and a text area will appear



// Click on available work hour
$(".future").on("click", "textarea", function() {
    // Get the current text of the div
    var text = $(this)
        .text()
        .trim();

    // Repace div with a new text area
    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
    $(this).replaceWith(textInput);

    // Focus on the new text area
    textInput.trigger("focus");
}); 