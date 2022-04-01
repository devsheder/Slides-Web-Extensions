if (typeof window != "undefined") {
  window.browserObject = window.browser !== undefined ? browser : chrome;
} else {
  browserObject = chrome;
}

browserObject.devtools.panels.create(
    "Demo Logs",                      // title
    "icons/star.png",                // icon
    "index.html"      // content
  )
//   .then((newPanel) => {
//     newPanel.onShown.addListener(initialisePanel);
//     newPanel.onHidden.addListener(unInitialisePanel);
//   });