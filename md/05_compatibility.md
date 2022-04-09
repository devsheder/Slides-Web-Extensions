<!-- .slide: class="transition left" data-background="./assets/images/pexels-miguel-á-padriñán-four.jpeg" style="left: 700px;"-->

# La compatibilité dans tout ça ?

##==##

<!-- .slide: -->

## Compatibilité multi-browsers

- structure de la web ext
<br/><br/><br/>
- APIs JS

##==##

<!-- .slide: -->

## Compatibilité - manifest

![h-600 center](./assets/images/browser_compatibility.png)

[https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json)

[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)

##==##

<!-- .slide: class="two-column-layout" -->

## Compatibilité - API Js

##--##

<b>Chrome / Safari</b>

<br />

Namespace : `chrome`

Asynchronous callbacks `() => {}`

##--##
<b>Firefox / Safari</b>

<br />

Namespace : `browser`

Asynchronous `Promise`


##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Compatibilité - Polyfill

![h-200 center](./assets/images/polyfill.png)

```json
{
  // ...
  "background": {
    "scripts": [
      "browser-polyfill.js",
      "background.js"
    ]
  },
  "content_scripts": [{
    "js": [
      "browser-polyfill.js",
      "content.js"
    ]
  }]
}
```

[https://github.com/mozilla/webextension-polyfill](https://github.com/mozilla/webextension-polyfill)

##==##

<!-- .slide: class="flex-row" -->

## Compatibilité - build

Géré par votre CI préférée

![h-300 center](./assets/images/jenkins.png)
![h-300 center](./assets/images/gitlab_ci.jpeg)
![h-300 center](./assets/images/github_actions.webp) ...

##==##

<!-- .slide: -->

## Compatibilité - Et sur mobile ?

Chrome : ❌

Firefox : ✅

Safari : ✅
