// Create your global variables below:
var dayCheckCount = [0,0,0,0,0,0,0];
var amState = [false,false,false,false,false,false,false,false,false,false,false,false];
var pmState = [false,false,false,false,false,false,false,false,false,false,false,false];
var grouplist="Alex Anders"

var day_num;


function init() {
	// Your code goes here
    day_num = 0;
};


function checkColor(el) {
    var tab = el.getElementsByClassName("schedule-tab")[0];
    var id_name = tab.getAttribute('id');

    var num_str = id_name.split("-")[1];
    var num = parseInt(num_str);

    if (id_name.includes('am')) {
        if(amState[num] == false) {
            el.style.color = "#004ba0"
            amState[num] = true
            dayCheckCount[day_num] = dayCheckCount[day_num] + 1;
        } else {
            el.style.color = "#000000"
            amState[num] = false
            dayCheckCount[day_num] = dayCheckCount[day_num] - 1;
        }
    } else {
        if(pmState[num] == false) {
            el.style.color = "#004ba0"
            pmState[num] = true
            dayCheckCount[day_num] = dayCheckCount[day_num] + 1;
        } else {
            el.style.color = "#000000"
            pmState[num] = false
            dayCheckCount[day_num] = dayCheckCount[day_num] - 1;
        }
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