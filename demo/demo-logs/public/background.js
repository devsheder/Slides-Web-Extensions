if (typeof window != "undefined") {
  window.browserObject = window.browser !== undefined ? browser : chrome;
} else {
  browserObject = chrome;
}

var nativeApp = browserObject.runtime.connectNative("demo_log");

const PENDING = new Map();

function handleOnBeforeRequest(requestDetails) {
  if (requestDetails.url.endsWith('/logs')) {
    console.log('handleOnBeforeRequest : ', requestDetails);
    const requestBody = decodeRawByteBody(requestDetails);
    PENDING.set(requestDetails.requestId, requestBody?.logs ?? []);
  }
}

function handleOnCompleted(requestDetails) {
  if (requestDetails.url.endsWith('/logs')) {
    const { requestId, statusCode } = requestDetails;
    console.log('handleOnCompleted : ', requestDetails, statusCode);
    const pendingLogs = PENDING.get(requestId) ?? [];
    const logs = pendingLogs.map(l => ({...l, status: statusCode < 400 ? 'OK': 'ERROR' }));
    sendMessage({ type: 'demo-logs.new-log', logs });
    logs.forEach(log => nativeApp.postMessage(JSON.stringify(log)));
    PENDING.delete(requestId);
  }
}

function sendMessage(message) {
  browserObject.runtime.sendMessage(message).catch(()=>{});
}

function decodeRawByteBody(details) {
  return JSON.parse(
    decodeURIComponent(
      String.fromCharCode.apply(
          null,
          new Uint8Array(details.requestBody.raw[0].bytes)
        )
      )
  );
}

browserObject.webRequest.onBeforeRequest.addListener(handleOnBeforeRequest, { urls: ['<all_urls>'] }, ['requestBody']);
browserObject.webRequest.onCompleted.addListener(handleOnCompleted, { urls: ['<all_urls>'] });

console.log('listen for calls to /logs');

/*
Listen for messages from the app.
*/
nativeApp.onMessage.addListener((response) => {
  console.log("Received: " + response);
});

