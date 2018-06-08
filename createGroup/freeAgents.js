// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var grouplist="Alex Anders"

var checkboxChecker = setInterval(checkUpdate,10);
var last_count;


function init() {
	// Your code goes here
    last_count = -1;
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
    
    if (last_count != count) {
        if (count > 0) {
            document.getElementById("createNewGroup").innerHTML = "Share with Checked"
            document.getElementById("createNewGroup").setAttribute('href',"groupConfirmed.html")
            document.getElementById("createNewGroup").setAttribute('style',"margin: 0px 48px")
        } else {
            document.getElementById("createNewGroup").innerHTML = "Join this Group"
            document.getElementById("createNewGroup").setAttribute('href',"joinConfirmed.html")
            document.getElementById("createNewGroup").setAttribute('style',"margin: 0px 68px")
        }
    }
    last_count = count
}

function checkBox(el) {
    var clicked = el.getElementsByClassName("left-agent")[0].getElementsByClassName("form-check-input")[0].checked;
    if (clicked == true) {
       el.getElementsByClassName("left-agent")[0].getElementsByClassName("form-check-input")[0].checked = false;
    } else {
       el.getElementsByClassName("left-agent")[0].getElementsByClassName("form-check-input")[0].checked = true;
    }
}

function checkBoxFix(el) {
    var clicked = el.getElementsByClassName("form-check-input")[0].checked;
    if (clicked == true) {
       el.getElementsByClassName("form-check-input")[0].checked = false;
    } else {
       el.getElementsByClassName("form-check-input")[0].checked = true;
    }
}

init();