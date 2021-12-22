chrome.browserAction.onClicked.addListener(function () {
    // 当点击扩展图标时，执行...
    chrome.sessions.getRecentlyClosed(
        chrome.tabs.Tab, function (sessions) {
            chrome.sessions.restore(sessions[0].tab.sessionId, function(session){})
        });
});
