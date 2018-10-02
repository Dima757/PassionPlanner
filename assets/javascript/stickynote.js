//This widget creates stick notes that the user can generate for quick reminders

//Event handler to handle submit click within widget, then append as sticky note to widget
$("#sticky-widget").on("click","#sticky-form #sticky-button", function(e){

    e.preventDefault(); //do not refresh window when submitted

    var note = $("#sticky-input").val().trim();  //grab value from form text input
    console.log("Note: "+note);

    var stickyNote = $("<div>");    //create new sticky note object

    stickyNote.text(note);  //stick note text inside the sticky note
    stickyNote.attr("class","sticky-note text-center mt-1 mb-1");

    //add code to push to firebase for retention

    $("#sticky-widget").append(stickyNote);   //append sticky note to sticky widget area

    $('#sticky-form')[0].reset();
});

//event handler to handle case where user wants to delete the sticky note
$("#sticky-widget").on("click",".sticky-note", function(e){

    e.preventDefault();    //do not refresh page
    this.remove();  //delete sticky note element entirely for sticky-widget
});