<!-- .slide: class="transition left" data-background="./assets/images/pexels-miguel-á-padriñán-three.jpeg" style="left: 700px"-->

# Comment ça marche ?

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest

Point d'entrée principal du browser : `manifest.json`

```json
{
    // Attributs minimums obligatoires
    "manifest_version": 2,
    "name": "Talk-Webext",
    "version": "1.0"
    ...
}
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: -->

## Manifest version

V2 release Firefox / V3 release Chrome

![h-600 center](./assets/images/manifest_version_compatibility.png)

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

Permissions déclarées à l'installation

`manifest.json`
```json
{
    "host_permissions": [               // Chrome MV3 uniquement
        "*://developer.mozilla.org/*"
    ], 
    "permissions": [
        "*://developer.mozilla.org/*",  // Chrome MV2 et Firefox
        "webRequest"                    // Chrome et Firefox
    ]
    ...
}
```
<!-- .element: class="big-code" -->

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
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

<!-- Demande une permission à l'utilisateur -->

```js
// Chrome :

void chrome.permissions.request({
        permissions: String[],
        origins: String[]
    },
    (granted: boolean) => {}
)
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

```js
// Firefox :

Promise<boolean> browser.permissions.request({
        permissions: String[],
        origins: String[]
    }
)
```
<!-- .element: class="big-code" -->

⚠️ Polyfill

##==##

<!-- .slide: class="transition" -->

# Cycles de vie

Notes:
1. Browser
2. Page web
3. Devtools

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
        "scripts": ["background-script.js"], // Firefox et Chrome MV2
        "service_worker": ["background-script.js"] // Chrome MV3 uniquement
    },
}
```
<!-- .element: class="big-code" -->

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
        "run_at": "document_start" | "document_end" | "document_idle" 
            // optionnel (par défaut document_idle)
    }]
}
```
<!-- .element: class="big-code" -->

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
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition" -->

# Execution : isolation & background

##==##

<!-- .slide: -->

## Execution - isolation

![h-800 center](./assets/images/execution_isolation.jpg)

##==##

<!-- .slide: -->

## Execution - background

![h-800 center](./assets/images/execution_background.jpg)

##==##

<!-- .slide: -->

## Execution - APIs

![h-800 center](./assets/images/execution_apis.jpg)

##==##

<!-- .slide: class="transition" -->

# Installation & déploiement

##==##

<!-- .slide: -->

## Installation - dev
[chrome://extensions/](chrome://extensions/)

![center](./assets/images/chrome_dev_extensions.png)

![h-400 center](./assets/images/chrome_dev_webext.png)


##==##

<!-- .slide: -->

## Installation - en entreprise

<strong>Windows</strong> : déploiement par GPO

<strong>Linux</strong> : déploiement par script au lancement


##==##

<!-- .slide: -->

## Installation - grand public

![h-200 center](./assets/images/chrome_store.png)

![h-250 center](./assets/images/firefox_store.png)

![h-200 center](./assets/images/safari_store.png)