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
        const manifestVersion = chrome.runtime.getManifest().manifest_version;
        if (manifestVersion === 2) {
            // MV2
            chrome.tabs.query({url: "http://localhost:4444/index.html"}, result => {
                chrome.tabs.sendMessage(result[0].id, "yo I'm the only background")
            });
        } else {
            //MV3
            const result = await chrome.tabs.query({url: "http://localhost:4444/index.html"})
            chrome.tabs.sendMessage(result[0].id, "yo I'm the only background")
        }
    }
);