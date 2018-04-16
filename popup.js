
document.addEventListener('DOMContentLoaded', function() {
  var expandAll = document.getElementById('expand-all');
  var collapseAll = document.getElementById('collapse-all');

	expandAll.addEventListener('click', function() {
		chrome.tabs.getSelected(null, function(tab) {
		  chrome.tabs.sendMessage(tab.id, { text: "expand_all" }, doStuffWithDOMCB);
		});
	}, false);


	collapseAll.addEventListener('click', function() {	
		chrome.tabs.getSelected(null, function(tab) {
		  chrome.tabs.sendMessage(tab.id, { text: "collapse_all" }, doStuffWithDOMCB);
		});
	}, false);

	
}, false);

function doStuffWithDOMCB(action){
	// if (action == "expand_all") {
	// } else if (action == "collapse_all"){
	// }
}


