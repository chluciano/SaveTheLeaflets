// Create your global variables below:
var dayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

var monList = [["1. History 255",
				"2. History 255",
				"3. History 301"],
               ["Something about textbook",
			   "Something about textbook",
			   "Something about textbook"]];
			   
var tuesList = [["1. History 250",
				 "2. History 260",
				 "3. History 301"],
               ["Something about textbook",
				"Something about textbook",
				"Something about textbook"]];
				
var wedList = [["1. History 260",
				"2. History 260"],
               ["Something about textbook",
			   "Something about textbook"]];
			   
var thursList = [[],
               []];
			   
var friList = [["1. History 250",
				"2. History 250",
				"3. History 250",
				"4. History 260",
				"5. History 260",
				"6. History 301"],
               ["Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook"]];
			   
var satList = [["1. History 260",
				"2. History 260",
				"3. History 301",
				"4. History 301",
				"5. History 301"],
               ["Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook"]];
			   
var sunList = [["1. History 250",
				"2. History 250",
				"3. History 250",
				"4. History 250",
				"5. History 250",
				"6. History 250"],
               ["Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook",
			   "Something about textbook"]];

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

    refreshDay()
}

function leftDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    if (day_num == 0) {
        day_num = 6;
    } else {
        day_num = day_num - 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];
    
    refreshDay()
}

function refreshDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    var book_entries = document.getElementsByClassName("row findGroupEntry");
    var length_max = book_entries.length;
    for (i = length_max-1; i >= 0; i--) {
        book_entries[i].remove();
    }


    if (day_num == 0) {
        addMonday()
    } else if (day_num == 1) {
        addTuesday()
    } else if (day_num == 2) {
        addWednesday()
    } else if (day_num == 3) {
        addThursday()
    } else if (day_num == 4) {
        addFriday()
    } else if (day_num == 5) {
        addSaturday()
    } else if (day_num == 6) {
        addSunday()
    }
}

function storeDay() {
    localStorage.setItem("curDay",day_num)

    var test = localStorage.getItem("curDay");
    var x = 2;
}


function addMonday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < monList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
		title.className ="headerText";
        title.innerHTML = monList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className = "bodyText";
        info.innerHTML = monList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

function addTuesday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < tuesList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
        title.innerHTML = tuesList[0][i];
		title.className ="headerText";
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className ="bodyText";
        info.innerHTML = tuesList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

function addWednesday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < wedList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
		title.className ="headerText";
        title.innerHTML = wedList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className = "bodyText"
        info.innerHTML = wedList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

function addThursday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < thursList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
		title.className ="headerText";
        title.innerHTML = thursList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className = "bodyText"
        info.innerHTML = thursList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

function addFriday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < friList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
		title.className ="headerText";
        title.innerHTML = friList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className = "bodyText";
        info.innerHTML = friList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

function addSaturday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < satList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
		title.className ="headerText";
        title.innerHTML = satList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className = "bodyText";
        info.innerHTML = satList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

function addSunday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < sunList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var title = document.createElement("p");
		title.className ="headerText";
        title.innerHTML = sunList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(title);

        var name = document.createElement("div")
        name.className = "col-5 text-center"
        name.appendChild(a)
        top.appendChild(name) 

        var info = document.createElement("p");
		info.className = "bodyText";
        info.innerHTML = sunList[1][i];

        var info_top = document.createElement("div")
        info_top.className = "col-7"
        info_top.appendChild(info)
        top.appendChild(info_top) 

        courseEntries.appendChild(top)
    }
}

init();