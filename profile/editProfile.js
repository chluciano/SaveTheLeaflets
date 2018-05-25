// Create your global variables below:
function storeLink(finish_link) {

    if (finish_link == 0) {
        localStorage.setItem("changeScheduleLink","../profile/lendScheduleUpdate.html")

        //TODO: match variable names profileShare_ with internal profile data
        //TODO: javaScript for updating shared profile variables after schedule
        var mon = checkNull(localStorage.getItem("profileShareMon"));
        var tues = checkNull(localStorage.getItem("profileShareTues"));
        var wed = checkNull(localStorage.getItem("profileShareWed"));
        var thurs = checkNull(localStorage.getItem("profileShareThurs"));
        var fri = checkNull(localStorage.getItem("profileShareFri"));
        var sat = checkNull(localStorage.getItem("profileShareSat"));
        var sun = checkNull(localStorage.getItem("profileShareSun"));    
        localStorage.setItem("monAvail",mon)
        localStorage.setItem("tuesAvail",tues)
        localStorage.setItem("wedAvail",wed)
        localStorage.setItem("thursAvail",thurs)
        localStorage.setItem("friAvail",fri)
        localStorage.setItem("satAvail",sat)
        localStorage.setItem("sunAvail",sun)
        localStorage.setItem("curDay",0)
    } else {
        localStorage.setItem("changeScheduleLink","../profile/borrowScheduleUpdate.html")

        var mon = checkNull(localStorage.getItem("profileShareMon"));
        var tues = checkNull(localStorage.getItem("profileShareTues"));
        var wed = checkNull(localStorage.getItem("profileShareWed"));
        var thurs = checkNull(localStorage.getItem("profileShareThurs"));
        var fri = checkNull(localStorage.getItem("profileShareFri"));
        var sat = checkNull(localStorage.getItem("profileShareSat"));
        var sun = checkNull(localStorage.getItem("profileShareSun"));    
        localStorage.setItem("monAvail",mon)
        localStorage.setItem("tuesAvail",tues)
        localStorage.setItem("wedAvail",wed)
        localStorage.setItem("thursAvail",thurs)
        localStorage.setItem("friAvail",fri)
        localStorage.setItem("satAvail",sat)
        localStorage.setItem("sunAvail",sun)
        localStorage.setItem("curDay",0)   
    }
}

function checkNull(sharedDay){
    if (sharedDay == null) {
        return 0
    } else {
        return parseInt(sharedDay)
    }
}