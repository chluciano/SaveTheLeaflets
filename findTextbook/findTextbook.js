// Create your global variables below:
var dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var grouplist="Alex Anders"

var day_num;


function init() {
	// Your code goes here
    day_num = 0;
};

function rightDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    if (day_num == 6) {
        day_num = 0;
    } else {
        day_num = day_num + 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];
}

function leftDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    if (day_num == 0) {
        day_num = 6;
    } else {
        day_num = day_num - 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];
    
    //refreshDay()
}

function refreshDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    var book_entries = document.getElementsByClassName("row findGroupEntry")
    var length_max = book_entries.length;
    for (i = length_max-1; i >= 0; i--) {
        book_entries[i].remove();
    }

    var course_entries = document.getElementsByClassName("findCourseEntries")[0]

    //For now just add as many entries as the day
    for (i = 0; i < day_num + 2; i++){
        course_entries.createElement("div")
    }
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