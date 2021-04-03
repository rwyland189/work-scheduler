
// TO DO: click on empty div and a text area will appear

// Create an event (we need to assume that the divs are already established events.. even if empty, so that we can click on them and edit the text content)
var createEvent = function(eventText) {
    // Create list item to store event text
    var eventLi = $("<li>").addClass("list-group-item");

    // Event text
    var eventP = $("<p>")
        .addClass("m-1")
        .text(eventText);

    // Append event text to new list item
    eventLi.append(eventP);

    // Append list item to ul
    $("#future").append(eventLi);
};



/* Click on available work hour
$(".future").on("click", "p", function() {
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
*/