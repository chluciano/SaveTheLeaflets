// Create your global variables below:

function init() {
	// Your code goes here

    var mon_avail = parseInt(localStorage.getItem("monAvail"));
    var tues_avail = parseInt(localStorage.getItem("tuesAvail"));
    var wed_avail = parseInt(localStorage.getItem("wedAvail"));
    var thurs_avail = parseInt(localStorage.getItem("thursAvail"));
    var fri_avail = parseInt(localStorage.getItem("friAvail"));
    var sat_avail = parseInt(localStorage.getItem("satAvail"));
    var sun_avail = parseInt(localStorage.getItem("sunAvail"));

    var str_info = ""

    if (mon_avail == 0) {
        str_info = str_info + "M ";
    } 
    if (tues_avail == 0) {
        str_info = str_info + "Tu ";
    }
    if (wed_avail == 0) {
        str_info = str_info + "W ";
    }
    if (thurs_avail == 0) {
        str_info = str_info + "Th ";
    }
    if (fri_avail == 0) {
        str_info = str_info + "F ";
    }
    if (sat_avail == 0) {
        str_info = str_info + "Sa ";
    }
    if (sun_avail == 0) {
        str_info = str_info + "Su ";
    }

    document.getElementById("info").innerHTML = "<img id="coins" src="../images/coins.png" alt="coins">Cost: 5<br>Rating: 3.8<br>Days Free: " + str_info       
};

function storeLink() {
    localStorage.setItem("changeScheduleLink","../findTextbook/requested.html")
}

init();