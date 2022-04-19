//#region A tiny polyfill to be compatible with Chrome and Firefox

if (typeof window != "undefined") {
  window.browserObject = window.browser !== undefined ? browser : chrome;
} else {
  browserObject = chrome;
}

//#endregion

browserObject.devtools.panels.create(
    "Demo Logs",      // title
    "icon.svg",       // icon
    "index.html"      // content
  )
//   .then((newPanel) => {
//     newPanel.onShown.addListener(initialisePanel);
//     newPanel.onHidden.addListener(unInitialisePanel);
//   });