<!-- .slide: class="transition left" data-background="./assets/images/pexels-miguel-á-padriñán-two.jpeg" style="left: 700px;"-->

# WebExtensions ce standard du web

##==##

# C'est quoi une WebExtensions ?

<div class="flex-row">

![h-600](../assets/images/webext.png)
![h-600](../assets/images/webext-2.png)

</div>

Notes:

- Des éléments cosmétiques ou des outils
- Les WebExt sont issues des Chrome Apps

##==##

# C'est quoi une WebExtensions ?

![center h-600](../assets/images/w3c.png)

Notes:
- Les WebExt sont standardisées par le w3c
- On utilise du html, du css et du js standard
    - avec quelques déclarations en plus (manifest.json en particulier)
- Tout est documenté sur MDN

##==##

# Versus les autres solutions ?

<table>
    <thead>
    <tr>
        <th></th>
        <th>mise à jour</th>
        <th>portabilité</th>
        <th>documentation</th>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td>Snippets</td>
            <td>❌</td>
            <td>✅</td>
            <td>❌</td>
        </tr>
        <tr>
            <td>Extensions</td>
            <td>✅</td>
            <td>❌</td>
            <td>😬</td>
        </tr>
        <tr>
            <td>Web Extensions</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
        </tr>
    </tbody>
</table>

Notes:
- mise à jour gérée par le navigateur
- chaque navigateur a sa solution
- documenté plus ou moins bien

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-2.jpeg" -->

# Un champ des possibles presque infini

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1-revert.jpeg" -->

# Network

Notes:

- bloquer/modifier les requêtes
- bloquer/modifier les réponses
- ...

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1.jpeg" -->

# DOM

Notes:
- ajouter/modifier/supprimer des éléments
- écouter des évènements
- ...

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1-revert.jpeg" -->

# Native Messaging

Notes:
- émettre des messages vers un process sur la machine
- recevoir des messages depuis un process de la machine

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1.jpeg" -->

# Panneaux lateraux (Sidebars)

Notes:
- ajouter un panneau

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1-revert.jpeg" -->

# Menu contextuel

Notes:
- ajouter des menus au clic droit

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1.jpeg" -->

# Devtools

Notes:
- ajouter des panneaux

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1-revert.jpeg" -->

# Preferences

Notes:
- avoir une page dédiée aux préférences de notre webext

##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-1.jpeg" -->

# ...

Notes:
- En fait tout ce qu'on peut imaginer faire dans un navigateur est accessible


##==##

<!-- .slide: class="transition" data-background="./assets/images/engrenage-2.jpeg" -->

# Quelques exemple d'extensions

##==##

# Filtrer le contenu 

<div class="flex-row">

![h-150](../assets/images/ext/adblock.png)
![h-150](../assets/images/ext/ublock-origin.png)
![h-150](../assets/images/ext/ghostery.png)
![h-150](../assets/images/ext/https-everywhere.png)
![h-150](../assets/images/ext/decentral-eyes.png)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- AdblockPlus
- uBlock Origin
- Ghostery
- Https everywhere
- Decentral eyes

##==##

# Etendre le navigateur

<div class="flex-row">

![h-150](../assets/images/ext/dark-reader.png)
![h-150](../assets/images/ext/papaly.jpg)
![h-150](../assets/images/ext/multi-account-containers.png)
![h-150](../assets/images/ext/todoist.png)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- Dark Reader
- Papaly
- Firefox multi-account coutainers
- Todoist
- ...

##==##

# Etendre les sites

<div class="flex-row">

![h-150](../assets/images/ext/wide-github.png)
![h-150](../assets/images/ext/refined-github.png)
![h-150](../assets/images/ext/octotree.png)
![h-150](../assets/images/ext/linkedin-ext.jpg)
![h-150](../assets/images/ext/call-timer-meet.jpg)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- Wide Github
- Refined Github
- Octotree - GitHub code tree
- LinkedIn Extension
- Call Timer for Meet
- ...

##==##

# Correction

<div class="flex-row">

![h-150](../assets/images/ext/grammalecte.png)
![h-150](../assets/images/ext/grammarly.png)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- Grammalecte
- Grammarly
- ...

##==##

# Intéragir avec l'OS

<div class="flex-row">

![h-150](../assets/images/ext/gnome-shell-ext.png)
![h-150](../assets/images/ext/bitwarden.png)
![h-150](../assets/images/ext/1password.png)
![h-150](../assets/images/ext/keepassxc.png)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- GNOME Shell Extensions
- Bitwarden
- 1Password
- KeePassXC-Browser
- ...

##==##

# Outils développeur

<div class="flex-row">

![h-150](../assets/images/ext/react-devtool.png)
![h-150](../assets/images/ext/vue-devtool.png)
![h-150](../assets/images/ext/angular-devtool.jpg)
![h-150](../assets/images/ext/redux-devtool.png)
![h-150](../assets/images/ext/json-formatter.jpg)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- React DevTools
- Vue DevTools
- Angular DevTools
- Redux DevTools
- JSON Formatter
- ...

##==##

# Clients

<div class="flex-row">

![h-150](../assets/images/ext/rested.png)
![h-150](../assets/images/ext/etc.svg)

</div>

Notes:
- RESTED
- ...

##==##
<!-- .slide: class="flex-row" -->

# Mention special a ...

![h-600](./assets/images/form-troubleshooter.png)
![h-450](./assets/images/form-troubleshooter-how-it-works.png)