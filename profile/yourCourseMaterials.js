// Create your global variables below:

function init() {
	// Your code goes here
     var borrow = parseInt(localStorage.getItem("borrow"));
     var bookCountVar = "yourBookCount"
     var defaultBooks = 2
     var value = checkNull(localStorage.getItem(bookCountVar),defaultBooks);
     
     if (value > 2) {
        var bookList = document.getElementById("center-book-info");
        var book = document.createElement("div");
        book.className = "book-info";

        //book-info-class
        var book_info_class = document.createElement("div");
        book_info_class.className = "book-info-class";
        var book_info_class_label = document.createElement("label");
        book_info_class_label.innerHTML = "History 250 Course Packet"
        book_info_class.appendChild(book_info_class_label);
        book.appendChild(book_info_class)

        //book-info-space1
        var book_info_space1 = document.createElement("div");
        book_info_space1.className = "book-info-space1";
        var book_info_space1_label = document.createElement("label");
        book_info_space1_label.innerHTML = "<br>"
        book_info_space1.appendChild(book_info_space1_label);
        book.appendChild(book_info_space1)

        //book-info-class
        var book_info_status = document.createElement("div");
        book_info_status.className = "book-info-status";
        var book_info_status_label = document.createElement("label");
        book_info_status_label.innerHTML = "Free"
        book_info_status.appendChild(book_info_status_label);
        book.appendChild(book_info_status)

        //book-info-space2
        var book_info_space2 = document.createElement("div");
        book_info_space2.className = "book-info-space1";
        var book_info_space2_label = document.createElement("label");
        book_info_space2_label.innerHTML = "<br>"
        book_info_space2.appendChild(book_info_space2_label);
        book.appendChild(book_info_space2)

        //book-info-space2
        var book_info_button = document.createElement("a");
        book_info_button.className = "btn btn-secondary btn-lg";
        book_info_button.setAttribute('href',"../schedule/schedule.html");
        book_info_button.setAttribute('onclick',"storeLink()");
        book_info_button.setAttribute('style',"width: 75px;text-align: center;font-size: 16px");
        book_info_button.setAttribute('role',"button");
        book_info_button.innerHTML = "edit <br>times"
        book.appendChild(book_info_button)

        bookList.appendChild(book)
     }
     localStorage.setItem(bookCountVar,value);
}

function checkNull(sharedDay, defaultValue){
    if (sharedDay == null) {
        return defaultValue
    } else {
        return parseInt(sharedDay)
    }
}

function storeLink() {
    localStorage.setItem("changeScheduleLink","../profile/lendBookScheduleUpdate.html")
}

init();