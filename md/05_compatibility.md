<!-- .slide: class="transition left" data-background="./assets/images/pexels-miguel-á-padriñán-four.jpeg" style="left: 700px;"-->

# La compatibilité dans tout ça ?

##==##

<!-- .slide: -->

## Compatibilité - manifest

![h-750 center](./assets/images/browser_compatibility.png)

##==##

<!-- .slide: -->

## Compatibilité - API Js

<b>Chrome / Safari</b>

Namespace : `chrome`

Asynchronous callbacks : `() => {}`

<br /> <br />

<b>Firefox / Safari</b>


Namespace : `browser`

Asynchronous : `Promise`


##==##

<!-- .slide: class="with-code-bg-dark consolas" -->

## Compatibilité - Polyfill

![h-200 center](./assets/images/polyfill.png)

<div class="flex-row">

```json
{
  "background": {
    "scripts": [
      "browser-polyfill.js",
      "background.js"
    ]
  },
}
```
<!-- .element: class="big-code" style="width: 49%" -->


```json
{
  "content_scripts": [{
    "js": [
      "browser-polyfill.js",
      "content.js"
    ]
  }]
}
```
<!-- .element: class="big-code" style="width: 49%" -->


</div>

##==##

<!-- .slide: class="flex-row" -->

## Compatibilité - Build

Géré par votre CI préférée

![h-300 center](./assets/images/jenkins.png)
![h-300 center](./assets/images/gitlab_ci.jpeg)
![h-300 center](./assets/images/github_actions.webp) ...

##==##

<!-- .slide: -->

## Compatibilité - Et sur mobile ?


Firefox : ✅

Safari : ✅

Chrome : ❌

Brave : ❌

Edge : ❌