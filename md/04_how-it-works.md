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
 - `host_permissions` : uniquement pour Chrome
 - `permissions` : pour Firefox et Chrome, enfin presque...

Manifest :

```json
{
    ...
    // Permissions
    "host_permissions": [               // Chrome uniquement
        "*://developer.mozilla.org/*"
    ], 
    "permissions": [
        "*://developer.mozilla.org/*",  // Firerox uniquement
        "webRequest"                    // Chrome et Firefox
    ]
}
```

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

Permissions déclarées optionnelles : `optional_permissions`

Manifest :

```json
{
    ...
    // Permissions
    "optional_permissions": [
        "*://developer.mozilla.org/*",  // Firerox uniquement
        "tabs"
    ],
}
```


##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Manifest permissions

Demande une permission à l'utilisateur

Chrome :
```js
void chrome.permissions.request(
    {
        permissions: String[],
        origins: String[]
    },
    (granted: boolean) => {}
)
```

Firefox :
```js
Promise<boolean> browser.permissions.request(
    {
        permissions: String[],
        origins: String[]
    }
)
```

⚠️ Polyfill

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Cycles de vie

1. Au chargement du browser<br/><br/><br/><br/>

1. Au chargement d'une page web

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Lancement du browser

Exécution unique d'une ressource de la web-ext

`Manifest.json` :

```json
{
    ...
    "background": {
        "scripts": ["background-script.js"], // Firefox et Chrome manifest V2
        "service_worker": ["background-script.js"] // Chrome seulement manifest V3
    },
}
```

##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Page Web

Exécution liée à une page Web

`Manifest.json` :

```json
{
    ...
    "content_scripts": [{
        "matches": ["*://*.mozilla.org/*"],
        "js": ["index.js"]
    }]
}
```