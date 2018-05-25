// Create your global variables below:
function storeLink() {
    localStorage.setItem("changeScheduleLink","../addTextbook/bookConfirm.html")

    var mon = sharedDay(localStorage.getItem("profileShareMon"));
    var tues = sharedDay(localStorage.getItem("profileShareTues"));
    var wed = sharedDay(localStorage.getItem("profileShareWed"));
    var thurs = sharedDay(localStorage.getItem("profileShareThurs"));
    var fri = sharedDay(localStorage.getItem("profileShareFri"));
    var sat = sharedDay(localStorage.getItem("profileShareSat"));
    var sun = sharedDay(localStorage.getItem("profileShareSun"));    
    localStorage.setItem("monAvail",mon)
    localStorage.setItem("tuesAvail",tues)
    localStorage.setItem("wedAvail",wed)
    localStorage.setItem("thursAvail",thurs)
    localStorage.setItem("friAvail",fri)
    localStorage.setItem("satAvail",sat)
    localStorage.setItem("sunAvail",sun)
}

function checkNull(sharedDay){
    if (sharedDay == null) {
        return 0
    } else {
        return parseInt(sharedDay)
    }
}