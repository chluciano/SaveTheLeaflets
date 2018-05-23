// Create your global variables below:
var dayCheckCount = [0,0,0,0,0,0,0];
var dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var amState = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var pmState =  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var day_num;


function init() {
	// Your code goes here

    var mon_avail = parseInt(localStorage.getItem("monAvail"));
    var tues_avail = parseInt(localStorage.getItem("tuesAvail"));
    var wed_avail = parseInt(localStorage.getItem("wedAvail"));
        var thirs_avail = parseInt(localStorage.getItem("wedAvail"));

    day_num = parseInt(localStorage.getItem("curDay"));
    dayOfWeek.innerHTML = dayList[day_num];
};


function checkColor(el) {
    var tab = el.getElementsByClassName("schedule-tab")[0];
    var id_name = tab.getAttribute('id');

    var num_str = id_name.split("-")[1];
    var num = parseInt(num_str);

    if (id_name.includes('am')) {
        if(amState[day_num][num] == 0) {
            el.style.color = "#004ba0"
            amState[day_num][num] = 1
            dayCheckCount[day_num] = dayCheckCount[day_num] + 1;

        } else if (amState[day_num][num] == 1) {
            el.style.color = "#000000"
            amState[day_num][num] = 0
            dayCheckCount[day_num] = dayCheckCount[day_num] - 1;
        }
    } else {
        if(pmState[day_num][num] == 0) {
            el.style.color = "#004ba0"
            pmState[day_num][num] = 1
            dayCheckCount[day_num] = dayCheckCount[day_num] + 1;
        } else if (pmState[day_num][num] == 1){
            el.style.color = "#000000"
            pmState[day_num][num] = 0
            dayCheckCount[day_num] = dayCheckCount[day_num] - 1;
        }
    }

    updateDayHighlight()
}

function updateColor() {
    var days = document.getElementsByClassName("schedule-tab-out")
    for (i=0; i < 12; i++){
        if (amState[day_num][i] == 1) {
            days[i].style.color = "#004ba0"
        } else if (amState[day_num][i] == 0) {
            days[i].style.color = "#000000"
        } else if (amState[day_num][i] == 2) {
            days[i].style.color = "#eeeeee"
        }
    }

    for (i=12; i < 24; i++){
        if (pmState[day_num][i] == 1) {
            days[i].style.color = "#004ba0"
        } else if (pmState[day_num][i] == 0) {
            days[i].style.color = "#000000"
        } else if (pmState[day_num][i] == 2) {
            days[i].style.color = "#eeeeee"
        }
    }
}

function updateDayHighlight() {
    var day = document.getElementsByClassName("day")
    for (i=0; i < 7; i++){
        if (dayCheckCount[i] > 0) {
            day[i].style.color = "#004ba0"
        } else if (dayCheckCount[i] == 0){
            day[i].style.color = "#000000"
        } else if (dayCheckCount[i] == -1){
            day[i].style.color = "#eeeeee"
        }
    }
}

function rightDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    if (day_num == 6) {
        day_num = 0;
    } else {
        day_num = day_num + 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];

    updateColor()
}

function leftDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    if (day_num == 0) {
        day_num = 6;
    } else {
        day_num = day_num - 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];
    
    updateColor()
}



function setMon() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 0;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}

function setTues() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 1;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}

function setWed() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 2;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}

function setThurs() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 3;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}


function setFri() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 4;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}

function setSat() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 5;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}

function setSun() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 6;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
}

init();