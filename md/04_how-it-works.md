<!-- .slide: class="transition left" data-background="./assets/images/pexels-miguel-á-padriñán-three.jpeg" style="left: 700px"-->

# Comment ça marche ?

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest

Point d'entrée principal du browser :
`manifest.json`
```json
{
    // Attributs minimums obligatoires
    "manifest_version": 2,
    "name": "Talk-Webext",
    "version": "1.0"
    ...
}
```

##==##

<!-- .slide: -->

## Manifest version

V2 release Firefox / V3 release Chrome

![h-600](./assets/images/manifest_version_compatibility.png)

[https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

Permissions déclarées à l'install :
 - `host_permissions` : uniquement pour Chrome Manifest V3
 - `permissions` : pour Firefox et Chrome, enfin presque...

`manifest.json`
```json
{
    ...
    "host_permissions": [               // Chrome MV3 uniquement
        "*://developer.mozilla.org/*"
    ], 
    "permissions": [
        "*://developer.mozilla.org/*",  // Chrome MV2 et Firefox
        "webRequest"                    // Chrome et Firefox
    ]
}
```
[https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)
[https://developer.chrome.com/docs/extensions/mv3/declare_permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/)

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

Permissions déclarées optionnelles : `optional_permissions`

`manifest.json`
```json
{
    ...
    "optional_permissions": [
        "*://developer.mozilla.org/*",  // Firerox uniquement
        "tabs"                          // Chrome et Firefox
    ],
}
```
[https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

Demande une permission à l'utilisateur

`Chrome :`
```js
void chrome.permissions.request({
        permissions: String[],
        origins: String[]
    },
    (granted: boolean) => {}
)
```

`Firefox :`
```js
Promise<boolean> browser.permissions.request({
        permissions: String[],
        origins: String[]
    }
)
```

⚠️ Polyfill

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Cycles de vie

1. Browser<br/><br/><br/><br/>

1. Page web<br/><br/><br/><br/>

1. Devtools

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Cycle de vie - Lancement du browser

Exécution <b>unique</b> d'une ressource de la web-ext :
 - au lancement du browser
 - à l'installation de l'extension

`manifest.json`
```json
{
    ...
    "background": {
        "scripts": ["background-script.js"], // Firefox et Chrome M2
        "service_worker": ["background-script.js"] // Chrome MV3 uniquement
    },
}
```

[https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background)

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Cycle de vie - Chargement page Web

Exécution liée à une page Web

`manifest.json`

```json
{
    ...
    "content_scripts": [{
        "matches": ["*://*.mozilla.org/*"],
        "js": ["index.js"],
        "run_at": "document_start" | "document_end" | "document_idle" // optionnel (par défaut document_idle)
    }]
}
```
[https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts)

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Cycle de vie - Devtools

Exécution liée à l'ouverture des devtools (F12)

`manifest.json`
```json
{
    ...
    "devtools_page": ["devtool.html"]
}
```
[https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)

##==##

<!-- .slide: class="center" -->

## Exécution
 - isolation
 - background

##==##

<!-- .slide: -->

## Exécution - isolation

![h-800 center](./assets/images/execution_isolation.jpg)

##==##

<!-- .slide: -->

## Exécution - background

![h-800 center](./assets/images/execution_background.jpg)
