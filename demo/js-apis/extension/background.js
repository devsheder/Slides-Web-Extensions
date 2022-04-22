chrome.runtime.onMessageExternal.addListener(
    (request, sender, sendResponse) => {
      // receiving message from front
      console.log("background onMessageExternal", request, sender, sendResponse);
    }
);

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // receiving message from content_script
        console.log("background onMessage", request, sender, sendResponse);
        // sending message back to content_script caller
        chrome.tabs.sendMessage(sender.tab.id, "yo I'm the only background")

        return true;
    }
);