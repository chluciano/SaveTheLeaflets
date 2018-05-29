// Create your global variables below:
function init() {
    var bookCount = checkNull(localStorage.getItem("yourBookCount"));
    bookCount = bookCount + 1;
    localStorage.setItem("yourBookCount",bookCount);
}

function checkNull(sharedDay){
    if (sharedDay == null) {
        return 2
    } else {
        return parseInt(sharedDay)
    }
}

init();