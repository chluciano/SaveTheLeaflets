// Create your global variables below:
var dayList = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
var avail_list = [0, 0, 0, 0, 0, 0, 0];

var monList = [["1. History 255",
                "2. History 255",
				        "3. History 301",
                "4. History 201"],
               ["$23",
               "$24",
               "$24",
               "$32"],
               ["Kofi",
               "Christian",
               "Leeks",
               "Christian123"],
               [1,2,3,4]
               ];
			   
var tuesList = [["1. History 255",
                "2. History 255",
                ],
               ["$23",
               "$24",
               ],
               ["Kofi",
               "Christian",
               ],
               [4,5,]
               ];
				
var wedList = [["1. History 255",
                "2. History 255",
                "3. History 301"],
               ["$23",
               "$24",
               "$24"],
               ["Kofi",
               "Kofi",
               "Kofi"],
               [2,3,4]
               ];
			   
var thursList = [[],
               []];
			   
var friList = [["1. History 255",
                "2. History 255",
                "3. History 301",
                "4. History 255",
                "5. History 301"
                ],
               ["$23",
               "$24",
               "$24",
               "$24",
               "$24"],
               ["Kofi",
               "Christian",
               "Leeks",
               "Santa",
               "Kira"],
               [2,2,1,4,5]
               ];
			   
var satList = [["1. History 255",
                "2. History 255",
                "3. History 301"],
               ["$23",
               "$24",
               "$24"],
               ["Kofi",
               "Kofi",
               "Kofi"],
               [3,1,2]
               ];
			   
var sunList = [["1. History 255",
                "2. History 255",
                "3. History 301"],
               ["$23",
               "$24",
               "$24"],
               ["Kofi",
               "Kofi",
               "Kofi"],
               [1,3,4]
               ];

var day_num;


function init() {
	// Your code goes here
    day_num = parseInt(localStorage.getItem("curDay"));//0;
    avail_list[0] = 0;
    avail_list[1] = -1;
    avail_list[2] = 0;
    avail_list[3] = -1;
    avail_list[4] = 0;
    avail_list[5] = 0;
    avail_list[6] = 0;
    var dayOfWeek = document.getElementById("dayOfWeek");
    dayOfWeek.innerHTML = dayList[day_num];
    refreshDay()
};

function rightDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    var dayOfWeekScreen = document.getElementById("dayOfWeek-background");

    if (day_num == 6) {
        day_num = 0;
    } else {
        day_num = day_num + 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];
    changeColorDiff(dayOfWeekScreen);
    changeColorOrig(dayOfWeekScreen);

    refreshDay()
}

function leftDay() {
    var dayOfWeek = document.getElementById("dayOfWeek");
    var dayOfWeekScreen = document.getElementById("dayOfWeek-background");
    if (day_num == 0) {
        day_num = 6;
    } else {
        day_num = day_num - 1;
    }
    dayOfWeek.innerHTML = dayList[day_num];
    changeColorDiff(dayOfWeekScreen);
    changeColorOrig(dayOfWeekScreen);
    
    refreshDay()
}

function changeColorDiff(el){
  el.style.backgroundColor = "#004ba0"
  el.style.color = "#fff"
}

function changeColorOrig(el){
  setTimeout(function(){
  el.style.backgroundColor = "#fff"
  el.style.color = "#000"

  }, 250);
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

function storeDay(el) {
    localStorage.setItem("curDay",day_num)
    localStorage.setItem("monAvail",avail_list[0])
    localStorage.setItem("tuesAvail",avail_list[1])
    localStorage.setItem("wedAvail",avail_list[2])
    localStorage.setItem("thursAvail",avail_list[3])
    localStorage.setItem("friAvail",avail_list[4])
    localStorage.setItem("satAvail",avail_list[5])
    localStorage.setItem("sunAvail",avail_list[6])

    //var linkData = el.getElementsByClassName()
}


function addMonday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < monList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = monList[0][i];


        //a.appendChild(bookName);
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = monList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = monList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<monList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }
        for (k = 0; k<(5-monList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);


  //       var title = document.createElement("p");
		// title.className ="headerText";
  //       title.innerHTML = monList[0][i];
  //       var a = document.createElement("a");
  //       a.setAttribute('href',"selectBook.html");
  //       a.setAttribute('onclick',"storeDay()");
  //       a.appendChild(title);

  //       var name = document.createElement("div")
  //       name.className = "col-5 text-center"
  //       name.appendChild(a)
  //       top.appendChild(name) 

  //       var info = document.createElement("p");
		// info.className = "bodyText";
  //       info.innerHTML = monList[1][i];

  //       var info_top = document.createElement("div")
  //       info_top.className = "col-7"
  //       info_top.appendChild(info)
  //       top.appendChild(info_top) 

  //       courseEntries.appendChild(top)

        avail_list[0] = 0;
        avail_list[1] = -1;
        avail_list[2] = 0;
        avail_list[3] = -1;
        avail_list[4] = 0;
        avail_list[5] = 0;
        avail_list[6] = 0;
    }
}

function addTuesday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < tuesList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = tuesList[0][i];
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = tuesList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = tuesList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<tuesList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }
        for (k = 0; k<(5-tuesList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);
//     var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

//     for (i = 0; i < tuesList[0].length; i++){
//         var top = document.createElement("div")
//         top.className = "row findGroupEntry"

//         var title = document.createElement("p");
//         title.innerHTML = tuesList[0][i];
// 		title.className ="headerText";
//         var a = document.createElement("a");
//         a.setAttribute('href',"selectBook.html");
//         a.setAttribute('onclick',"storeDay()");
//         a.appendChild(title);

//         var name = document.createElement("div")
//         name.className = "col-5 text-center"
//         name.appendChild(a)
//         top.appendChild(name) 

//         var info = document.createElement("p");
// 		info.className ="bodyText";
//         info.innerHTML = tuesList[1][i];

//         var info_top = document.createElement("div")
//         info_top.className = "col-7"
//         info_top.appendChild(info)
//         top.appendChild(info_top) 

//         courseEntries.appendChild(top)

        avail_list[0] = 0;
        avail_list[1] = 0;
        avail_list[2] = 0;
        avail_list[3] = -1;
        avail_list[4] = -1;
        avail_list[5] = -1;
        avail_list[6] = -1;
    }
}

function addWednesday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < wedList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = wedList[0][i];
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = wedList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = wedList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<wedList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }
        for (k = 0; k<(5-wedList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);
//     var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

//     for (i = 0; i < wedList[0].length; i++){
//         var top = document.createElement("div")
//         top.className = "row findGroupEntry"

//         var title = document.createElement("p");
// 		title.className ="headerText";
//         title.innerHTML = wedList[0][i];
//         var a = document.createElement("a");
//         a.setAttribute('href',"selectBook.html");
//         a.setAttribute('onclick',"storeDay()");
//         a.appendChild(title);

//         var name = document.createElement("div")
//         name.className = "col-5 text-center"
//         name.appendChild(a)
//         top.appendChild(name) 

//         var info = document.createElement("p");
// 		info.className = "bodyText"
//         info.innerHTML = wedList[1][i];

//         var info_top = document.createElement("div")
//         info_top.className = "col-7"
//         info_top.appendChild(info)
//         top.appendChild(info_top) 

//         courseEntries.appendChild(top)


        avail_list[0] = -1;
        avail_list[1] = -1;
        avail_list[2] = 0;
        avail_list[3] = 0;
        avail_list[4] = 0;
        avail_list[5] = 0;
        avail_list[6] = -1;
    }
}

function addThursday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < thursList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = thursList[0][i];
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = thursList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = thursList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<thursList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }
        for (k = 0; k<(5-thursList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);
//     var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

//     for (i = 0; i < thursList[0].length; i++){
//         var top = document.createElement("div")
//         top.className = "row findGroupEntry"

//         var title = document.createElement("p");
// 		title.className ="headerText";
//         title.innerHTML = thursList[0][i];
//         var a = document.createElement("a");
//         a.setAttribute('href',"selectBook.html");
//         a.setAttribute('onclick',"storeDay()");
//         a.appendChild(title);

//         var name = document.createElement("div")
//         name.className = "col-5 text-center"
//         name.appendChild(a)
//         top.appendChild(name) 

//         var info = document.createElement("p");
// 		info.className = "bodyText"
//         info.innerHTML = thursList[1][i];

//         var info_top = document.createElement("div")
//         info_top.className = "col-7"
//         info_top.appendChild(info)
//         top.appendChild(info_top) 

//         courseEntries.appendChild(top)

        avail_list[0] = -1;
        avail_list[1] = -1;
        avail_list[2] = 0;
        avail_list[3] = 0;
        avail_list[4] = 0;
        avail_list[5] = 0;
        avail_list[6] = -1;
    }
}

function addFriday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < friList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = friList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        a.appendChild(bookName);
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = friList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = friList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<friList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }
        for (k = 0; k<(5-friList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);
//     var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

//     for (i = 0; i < friList[0].length; i++){
//         var top = document.createElement("div")
//         top.className = "row findGroupEntry"

//         var title = document.createElement("p");
// 		title.className ="headerText";
//         title.innerHTML = friList[0][i];
//         var a = document.createElement("a");
//         a.setAttribute('href',"selectBook.html");
//         a.setAttribute('onclick',"storeDay()");
//         a.appendChild(title);

//         var name = document.createElement("div")
//         name.className = "col-5 text-center"
//         name.appendChild(a)
//         top.appendChild(name) 

//         var info = document.createElement("p");
// 		info.className = "bodyText";
//         info.innerHTML = friList[1][i];

//         var info_top = document.createElement("div")
//         info_top.className = "col-7"
//         info_top.appendChild(info)
//         top.appendChild(info_top) 

//         courseEntries.appendChild(top)

        avail_list[0] = -1;
        avail_list[1] = 0;
        avail_list[2] = -1;
        avail_list[3] = -1;
        avail_list[4] = 0;
        avail_list[5] = 0;
        avail_list[6] = 0;
    }
}

function addSaturday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < satList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay()");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = satList[0][i];
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        a.appendChild(bookName);
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = satList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = satList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<satList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }
        for (k = 0; k<(5-satList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);
//     var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

//     for (i = 0; i < satList[0].length; i++){
//         var top = document.createElement("div")
//         top.className = "row findGroupEntry"

//         var title = document.createElement("p");
// 		title.className ="headerText";
//         title.innerHTML = satList[0][i];
//         var a = document.createElement("a");
//         a.setAttribute('href',"selectBook.html");
//         a.setAttribute('onclick',"storeDay()");
//         a.appendChild(title);

//         var name = document.createElement("div")
//         name.className = "col-5 text-center"
//         name.appendChild(a)
//         top.appendChild(name) 

//         var info = document.createElement("p");
// 		info.className = "bodyText";
//         info.innerHTML = satList[1][i];

//         var info_top = document.createElement("div")
//         info_top.className = "col-7"
//         info_top.appendChild(info)
//         top.appendChild(info_top) 

//         courseEntries.appendChild(top)

        avail_list[0] = 0;
        avail_list[1] = 0;
        avail_list[2] = 0;
        avail_list[3] = 0;
        avail_list[4] = 0;
        avail_list[5] = 0;
        avail_list[6] = 0;
    }
}

function addSunday() {
    var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

    for (i = 0; i < sunList[0].length; i++){
        var top = document.createElement("div")
        top.className = "row findGroupEntry"

        var dataTable = document.createElement("div");
        var a = document.createElement("a");
        a.setAttribute('href',"selectBook.html");
        a.setAttribute('onclick',"storeDay(this)");
        dataTable.className = "dataTable";
        a.appendChild(dataTable)
        top.appendChild(a);

        var dataTableRow = document.createElement("div");
        dataTableRow.className = "dataTable-row";
        dataTable.appendChild(dataTableRow);

        var bookName = document.createElement("p");
        bookName.innerHTML = sunList[0][i];
        dataTableRow.appendChild(bookName);

        var bookOwner = document.createElement("p");
        bookOwner.innerHTML = sunList[1][i];
        dataTableRow.appendChild(bookOwner);


        var dataTableRow2 = document.createElement("div");
        dataTableRow2.className = "dataTable-row";
        dataTable.appendChild(dataTableRow2);

        var bookPrice = document.createElement("p");
        bookPrice.innerHTML = sunList[2][i];
        dataTableRow2.appendChild(bookPrice);

        var elfHatRankings = document.createElement("div");
        elfHatRankings.className = "elf-hat-rankings";
        dataTableRow2.appendChild(elfHatRankings);


        for (j = 0; j<sunList[3][i]; j++){
            var elfHat = document.createElement("img");
            elfHat.setAttribute('src', '../images/elf_hat_color.svg');
            elfHat.className = "elf_hat"
            elfHatRankings.appendChild(elfHat);
        }

        for (k = 0; k<(5-sunList[3][i]); k++){
            var elfHatOutline = document.createElement("img");
            elfHatOutline.setAttribute('src', '../images/elf_hat.svg');
            elfHatOutline.className = "elf_hat"
            elfHatRankings.appendChild(elfHatOutline);
        }

        courseEntries.appendChild(top);
//     var courseEntries = document.getElementsByClassName("findCourseEntries")[0];

//     for (i = 0; i < sunList[0].length; i++){
//         var top = document.createElement("div")
//         top.className = "row findGroupEntry"

//         var title = document.createElement("p");
// 		title.className ="headerText";
//         title.innerHTML = sunList[0][i];
//         var a = document.createElement("a");
//         a.setAttribute('href',"selectBook.html");
//         a.setAttribute('onclick',"storeDay()");
//         a.appendChild(title);

//         var name = document.createElement("div")
//         name.className = "col-5 text-center"
//         name.appendChild(a)
//         top.appendChild(name) 

//         var info = document.createElement("p");
// 		info.className = "bodyText";
//         info.innerHTML = sunList[1][i];

//         var info_top = document.createElement("div")
//         info_top.className = "col-7"
//         info_top.appendChild(info)
//         top.appendChild(info_top) 

//         courseEntries.appendChild(top)

        avail_list[0] = -1;
        avail_list[1] = 0;
        avail_list[2] = 0;
        avail_list[3] = 0;
        avail_list[4] = 0;
        avail_list[5] = 0;
        avail_list[6] = 0;
    }
}

init();