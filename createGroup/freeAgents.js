// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var grouplist="Alex Anders"

var checkboxChecker = setInterval(checkUpdate,100);


function init() {
	// Your code goes here
};

function checkUpdate() {
    var ids = document.getElementsByClassName("form-check-input")
    var count = 0;
    for (i = 0; i < ids.length; i++) {
        var x = ids[i].checked;
        if (x == true) {
            count = count + 1;
        } 
    }
    
    if (count > 0) {
        document.getElementById("createNewGroup").innerHTML = "Form New Group"
        document.getElementById("createNewGroup").setAttribute('href',"groupConfirmed.html")
    } else {
        document.getElementById("createNewGroup").innerHTML = "Join Group"
        document.getElementById("createNewGroup").setAttribute('href',"joinConfirmed.html")
    }
}

init();