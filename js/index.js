function validate(){
    let event = document.getElementById("event-type");
    let selEvent = event.options[event.selectedIndex].value;
    let eventTitle = document.getElementById("event-title").value;
    let dateFrom = document.getElementById("date-from").value;
    let dateTo = document.getElementById("date-to").value;
    let postDate = document.getElementById("post-date").value;

    if(selEvent == "" && eventTitle == "" && dateFrom == "" && dateTo == "" && postDate == "")
    {
        alert("Please fill out all the fields.");
        return false;
      
    }
    else if(selEvent == ""){
        alert("Please choose an event.");
        return false;
    }
    else if(eventTitle == ""){
        alert("Please choose an event title.")
        return false;

    }
    else if(dateTo == "" || dateFrom == ""){
        alert("Please set the date. ")
        return false;
    }
    else if(postDate == ""){
        alert("Please choose the posting date.")
    }
    else if (dateFrom > dateTo){

        alert("Event dates are invalid.");

    }
    else if (postDate > dateFrom || postDate == dateFrom) {

        alert("The posting date should be before the event.");

    }
    else{
        alert("Your event has been submitted." + "\n" + "\n" + "Event Type: " + selEvent + "\n" + "Event Title: " + eventTitle + "\n"
        + "Event Date: " + dateFrom + "  to  " + dateTo + "\n" + "Posting Date: " + postDate);
    return true;
    }


}