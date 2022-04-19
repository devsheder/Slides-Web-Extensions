chrome.runtime.onMessageExternal.addListener(
    (request, sender, sendResponse) => {
      // receiving message from front
      console.log("background onMessageExternal", request, sender, sendResponse);
    }
);

chrome.runtime.onMessage.addListener(
    async (request, sender, sendResponse) => {
        // receiving message from content_script
        console.log("background onMessage", request, sender, sendResponse);
        // sending message back to content_script
        if (chrome.tabs.getAllInWindow) {
            // MV2
            chrome.tabs.getAllInWindow(null, tabs => {
                tabs.forEach(tab => {
                    if (tab.url === "http://localhost:4444/index.html") {
                        chrome.tabs.sendMessage(tab.id, "yo I'm background")
                    }
                });
            });
        } else {
            //MV3
            const result = await chrome.tabs.query({url: "http://localhost:4444/index.html"})
            chrome.tabs.sendMessage(result[0].id, "yo I'm background")
        }
    }
);