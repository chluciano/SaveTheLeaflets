// Create your global variables below:
var dayCheckCount = [0,0,0,0,0,0,0];
var dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var amState = [[false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false]];
var pmState =  [[false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false],
               [false,false,false,false,false,false,false,false,false,false,false,false]];
var day_num;


function init() {
	// Your code goes here

    var mon_avail = parseInt(localStorage.getItem("monAvail"));
    var tues_avail = parseInt(localStorage.getItem("tuesAvail"));
    var wed_avail = parseInt(localStorage.getItem("wedAvail"));
    var thurs_avail = parseInt(localStorage.getItem("thursAvail"));
    var fri_avail = parseInt(localStorage.getItem("friAvail"));
    var sat_avail = parseInt(localStorage.getItem("satAvail"));
    var sun_avail = parseInt(localStorage.getItem("sunAvail"));

    if (mon_avail == -1) {
        dayCheckCount[0] = -1;
        for (i=0; i < 12; i++){
            amState[0][i] = 2
            pmState[0][i] = 2
        }
    } 
    if (tues_avail == -1) {
        dayCheckCount[1] = -1;
        for (i=0; i < 12; i++){
            amState[1][i] = 2
            pmState[1][i] = 2
        }        
    }
    if (wed_avail == -1) {
        dayCheckCount[2] = -1;
        for (i=0; i < 12; i++){
            amState[2][i] = 2
            pmState[2][i] = 2
        }
    }
    if (thurs_avail == -1) {
        dayCheckCount[3] = -1;
        for (i=0; i < 12; i++){
            amState[3][i] = 2
            pmState[3][i] = 2
        }
    }
    if (fri_avail == -1) {
        dayCheckCount[4] = -1;
        for (i=0; i < 12; i++){
            amState[4][i] = 2
            pmState[4][i] = 2
        }
    }
    if (sat_avail == -1) {
        dayCheckCount[5] = -1;
        for (i=0; i < 12; i++){
            amState[5][i] = 2
            pmState[5][i] = 2
        }
    }
    if (sun_avail == -1) {
        dayCheckCount[6] = -1;
        for (i=0; i < 12; i++){
            amState[6][i] = 2
            pmState[6][i] = 2
        }
    }        


    day_num = parseInt(localStorage.getItem("curDay"));
    dayOfWeek.innerHTML = dayList[day_num];

    var change_link = localStorage.getItem("changeScheduleLink")
    var link = document.getElementById("end-link")
    link.setAttribute('href',change_link);
    updateDayHighlight()
    updateColor()
};


function checkColor(el) {
    var tab = el.getElementsByClassName("schedule-tab")[0];
    var id_name = tab.getAttribute('id');

    var num_str = id_name.split("-")[1];
    var num = parseInt(num_str);

    if (id_name.includes('am')) {
        if(amState[day_num][num] == false) {
            //el.style.color = "#004ba0"
            amState[day_num][num] = true
            dayCheckCount[day_num] = dayCheckCount[day_num] + 1;

        } else if (amState[day_num][num] == true) {
            //el.style.color = "#000000"
            amState[day_num][num] = false
            dayCheckCount[day_num] = dayCheckCount[day_num] - 1;
        }
    } else {
        if(pmState[day_num][num] == false) {
            //el.style.color = "#004ba0"
            pmState[day_num][num] = true
            dayCheckCount[day_num] = dayCheckCount[day_num] + 1;
        } else if (pmState[day_num][num] == true){
            //el.style.color = "#000000"
            pmState[day_num][num] = false
            dayCheckCount[day_num] = dayCheckCount[day_num] - 1;
        }
    }

    updateColor()
    updateDayHighlight()
}

function updateColor() {
    var days = document.getElementsByClassName("schedule-tab-out")
    for (i=0; i < 12; i++){
        if (amState[day_num][i] == true) {
            //days[i].style.color = "#004ba0"
            days[i].style.backgroundColor = "#004ba0"
        } else /*if (amState[day_num][i] == 0)*/ {
            //days[i].style.color = "#000000"
            days[i].style.backgroundColor = "#b9987e"
        } /*else if (amState[day_num][i] == 2) {
            days[i].style.color = "#eeeeee"
        }*/
    }

    for (i=12; i < 24; i++){
        if (pmState[day_num][i-12] == true) {
            //days[i].style.color = "#004ba0"
            days[i].style.backgroundColor = "#004ba0"
            
        } else /*if (pmState[day_num][i] == 0)*/ {
            //days[i].style.color = "#000000"
            days[i].style.backgroundColor = "#b9987e"
        } /*else if (pmState[day_num][i] == 2) {
            days[i].style.color = "#eeeeee"
        }*/
    }
}

function updateDayHighlight() {
    var day = document.getElementsByClassName("day")
    for (i=0; i < 7; i++){
        if (dayCheckCount[i] > 0) {
            day[i].style.color = "#004ba0"
            day[i].style.fontWeight = "bold"
        } else if (dayCheckCount[i] == 0){
            day[i].style.color = "#000000"
            day[i].style.fontWeight = "lighter"
        } else if (dayCheckCount[i] == -1){
            day[i].style.color = "#b9987e"

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
    while (dayCheckCount[day_num] == -1) {
        if (day_num == 6) {
            day_num = 0;
        } else {
            day_num = day_num + 1;
        }
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

   while (dayCheckCount[day_num] == -1) {
        if (day_num == 0) {
            day_num = 6;
        } else {
            day_num = day_num - 1;
        }
    }
    dayOfWeek.innerHTML = dayList[day_num];
    
    updateColor()
}



function setMon() {
    if (dayCheckCount[0] > -1){
        var dayOfWeek = document.getElementById("dayOfWeek");
        day_num = 0;
        dayOfWeek.innerHTML = dayList[day_num];
       
        updateColor()
    }
}

function setTues() {
    if (dayCheckCount[1] > -1){
        var dayOfWeek = document.getElementById("dayOfWeek");
        day_num = 1;
        dayOfWeek.innerHTML = dayList[day_num];
       
        updateColor()
    }
}

function setWed() {
    if (dayCheckCount[2] > -1){
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 2;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
    }
}

function setThurs() {
    if (dayCheckCount[3] > -1){
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 3;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
    }
}


function setFri() {
    if (dayCheckCount[4] > -1){
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 4;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
    }
}

function setSat() {
    if (dayCheckCount[5] > -1){
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 5;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
    }
}

function setSun() {
    if (dayCheckCount[6] > -1){
    var dayOfWeek = document.getElementById("dayOfWeek");
    day_num = 6;
    dayOfWeek.innerHTML = dayList[day_num];
   
    updateColor()
    }
}

init();