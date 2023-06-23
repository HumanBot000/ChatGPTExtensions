chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.url.startsWith("https://chat.openai.com/c/")) {
    chrome.tabs.reload(tabId);
  }
});
