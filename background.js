



function getOpeningIds() {
    var ids = [];
    try {
      ids = JSON.parse(localStorage.openWhenComplete);
    } catch (e) {
      localStorage.openWhenComplete = JSON.stringify(ids);
    }
    return ids;
}
  
function setOpeningIds(ids) {
    localStorage.openWhenComplete = JSON.stringify(ids);
}

// React when a browser action's icon is clicked.
// chrome.browserAction.onClicked.addListener(function(tab) {
//     var viewTabUrl = chrome.extension.getURL('image.html');
//     var imageUrl = /* an image's URL */;
  
//     // Look through all the pages in this extension to find one we can use.
//     var views = chrome.extension.getViews();
//     for (var i = 0; i < views.length; i++) {
//       var view = views[i];
  
//       // If this view has the right URL and hasn't been used yet...
//       if (view.location.href == viewTabUrl && !view.imageAlreadySet) {
  
//         // ...call one of its functions and set a property.
//         view.setImageUrl(imageUrl);
//         view.imageAlreadySet = true;
//         break; // we're done
//       }
//     }
//   });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.downloads.download({url: info.linkUrl}, function(downloadId) {
      var ids = getOpeningIds();
      if (ids.indexOf(downloadId) >= 0) {
        return;
      }
      ids.push(downloadId);
      setOpeningIds(ids);
    });
  });
  
  chrome.contextMenus.create({
    title: 'Add to favourites',
    contexts: ['link'],
  });