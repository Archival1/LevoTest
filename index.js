var showMore = false;

function toggleMore() {
	var items = document.getElementsByName("hide");
	showMore = !showMore;
	if(showMore) {
		for (var showItems = 0; showItems < items.length;++showItems) {
			items[showItems].classList.remove("d-none");
		}
		invertButtons(true);
	} else {
		for (var hideItems = 0; hideItems < items.length;++hideItems) {
			items[hideItems].classList.add("d-none");
		}
		invertButtons(false);
	}
}

function invertButtons(direction) {
	if(direction) {
		document.getElementById("showMore").classList.add("d-none");
		document.getElementById("showLess").classList.remove("d-none");
	} else {
		document.getElementById("showMore").classList.remove("d-none");
		document.getElementById("showLess").classList.add("d-none");
	}
}

function loadScript() {
	console.log("Page loaded");
}