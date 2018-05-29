// Create your global variables below:

function init() {
	// Your code goes here
     var borrow = localStorage.getItem("borrow");
     var bookCountVar = "yourBookCount"
     var defaultBooks = 2
     if (borrow == 'true') {
          bookCountVar = "borrowBookCount"
          defaultBooks = 3
     } 
     value = checkNull(localStorage.getItem(bookCountVar),defaultBooks);
     changeBackground(value)
     localStorage.setItem(bookCountVar,value);
}

function checkNull(sharedDay, defaultValue){
    if (sharedDay == null) {
        return defaultValue
    } else {
        return parseInt(sharedDay)
    }
}

function changeBackground(book){
     var body = document.getElementsByTagName('body')[0]
     if (book == 1) {
          body.style.backgroundImage = "url(../images/LibraryZoom2.jpg)";
     } else if (book == 2) {
          body.style.backgroundImage = "url(../images/LibraryZoom2.jpg)";          
     } else if (book == 3) {
          body.style.backgroundImage = "url(../images/LibraryZoom3.jpg)";             
     } else {
          body.style.backgroundImage = "url(../images/LibraryZoom4A.jpg)";          
     }
}

function storeLink() {
    localStorage.setItem("changeScheduleLink","../profile/lendBookScheduleUpdate.html")
}

init();