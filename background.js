// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      var newUrl = "https://12ft.io/" + activeTab.url;
      chrome.tabs.create({ url: newUrl });
    });
  });