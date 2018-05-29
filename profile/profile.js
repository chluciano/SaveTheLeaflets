// Create your global variables below:
function sendBorrow(borrow) {
    localStorage.setItem("borrow",borrow)
}

function highlightShelf(shelf) {
	shelf.style.opacity = 0.5;
}

function unhighlightShelf(shelf) {
	shelf.style.opacity = 1.0;
}
