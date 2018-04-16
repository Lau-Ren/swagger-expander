/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "expand_all")) {
        /* Call the specified callback, passing 
           the web-pages DOM content as argument */
		var endpoints = document.getElementsByClassName("endpoints")
	    for (var i = endpoints.length - 1; i >= 0; i--) {
	      endpoints[i].setAttribute("style", "display: block;");
	    }
    } else if (msg.text && (msg.text == "collapse_all")) {
        /* Call the specified callback, passing 
           the web-pages DOM content as argument */
        var endpoints = document.getElementsByClassName("endpoints")
        for (var i = endpoints.length - 1; i >= 0; i--) {
          endpoints[i].setAttribute("style", "display: none;");
        }
    }
    sendResponse(msg.text);

});
