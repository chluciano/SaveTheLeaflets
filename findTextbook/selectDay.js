// Create your global variables below:
var day_num;


function init() {
	// Your code goes here
    day_num = 0;
};

function storeDay(val) {
    localStorage.setItem("curDay",val)  
}



init();