window.postMessage("front");

window.addEventListener("message", (o) => {
    if (o.data === "content_script") {
        // receiving message from front
        console.log("content_script eventListener", o)
        // sending message to background
        chrome.runtime.sendMessage("hello I'm a content_script")
    }
});

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        // receiving message from background
      console.log("content_script onMessage", request, sender, sendResponse);
    }
);