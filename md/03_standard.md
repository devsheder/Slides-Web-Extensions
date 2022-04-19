<!-- .slide: class="transition left" data-background="./assets/images/pexels-miguel-á-padriñán-two.jpeg" style="left: 700px;"-->

# WebExtensions ce standard du web

##==##

# C'est quoi une WebExtensions ?

<!-- Notes: -->
- Les WebExt sont issues des Chrome Apps
- On utilise du html, du css et du js standard
    - avec quelques déclarations en plus (manifest.json en particulier)
- Les WebExt sont standardisées par le w3c
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

# Un champ des possibles presque infini

- Network
    - bloquer/modifier les requêtes
    - bloquer/modifier les réponses
    - ...

##==##

# Un champ des possibles presque infini

- Network
- DOM
    - ajouter/modifier/supprimer des éléments
    - écouter des évènements
    - ...

##==##

# Un champ des possibles presque infini

- Network
- DOM
- Native Messaging
    - émettre des messages vers un process sur la machine
    - recevoir des messages depuis un process de la machine

##==##

# Un champ des possibles presque infini

- Network
- DOM
- Native Messaging
- Panneaux latéraux (Sidebars)
    - ajouter un panneau

##==##

# Un champ des possibles presque infini

- Network
- DOM
- Native Messaging
- Panneaux latéraux (Sidebars)
- Menu contextuel
    - ajouter des menus au clic droit

##==##

# Un champ des possibles presque infini

- Network
- DOM
- Native Messaging
- Panneaux latéraux (Sidebars)
- Menu contextuel
- Devtools
    - ajouter des panneaux

##==##

# Un champ des possibles presque infini

- Network
- DOM
- Native Messaging
- Panneaux latéraux (Sidebars)
- Menu contextuel
- Devtools
- Préférences
    - avoir une page dédiée aux préférences de notre webext

##==##

# Un champ des possibles presque infini

- Network
- DOM
- Native Messaging
- Panneaux latéraux (Sidebars)
- Menu contextuel
- Devtools
- Préférences
- ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu 
    - AdblockPlus
    - uBlock Origin
    - Ghostery
    - Https everywhere
    - Decentral eyes
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
    - Dark Reader
    - Papaly
    - Firefox multi-account coutainers
    - Todoist
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
- Etendre les sites
    - Wide Github
    - Refined Github
    - LinkedIn Extension
    - Workspace Screensharing
    - Call Timer for Meet
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
- Etendre les sites
- Correction
    - Grammalecte
    - Grammarly
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
- Etendre les sites
- Correction
- Intéragir avec l'OS
    - GNOME Shell Extensions
    - Bitwarden
    - 1Password
    - KeePassXC-Browser
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
- Etendre les sites
- Correction
- Intéragir avec l'OS
- Outils développeur
    - React DevTools
    - Vue DevTools
    - Angular DevTools
    - Redux DevTools
    - JSON Formatter
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
- Etendre les sites
- Correction
- Intéragir avec l'OS
- Outils développeur
- Clients
    - RESTED
    - ...

##==##

# Quelques exemple d'extensions

- Filtrer le contenu
- Etendre le navigateur
- Etendre les sites
- Correction
- Intéragir avec l'OS
- Outils développeur
- Clients
- ...

##==##
<!-- .slide: class="flex-row" -->

# Quelques exemple d'extensions

![h-600](./assets/images/form-troubleshooter.png)
![h-450](./assets/images/form-troubleshooter-how-it-works.png)