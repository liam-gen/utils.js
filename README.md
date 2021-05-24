# Utils.js

## Utils.js vous permettera de créer simplement des projets en JavaScript

`npm i  @liamgen/utils.js`


### Voici quelques exemples :

__Créer un website__

```js
const utils = require('@liamgen/utils.js')
const monSite = new utils.Website()
monSite.createPage('/', "Bienvenue dans l'acceuil !")
monSite.createFilePage('/home', '/views/home.html') // Votre fichier html doit etre dans un dossier nommé views
monSite.connect(3000)
````

__Utilitaire__

```js
const utils = require('@liamgen/utils.js')
const console = new utils.console()

console.imprimer('Salut')
// Envoit salut dans la console

console.clear()
// Vide la console

console.sendError("Unne erreur s'est produite", '4', 'index.js')
// Envoyer une erreur dans la console 1: message d'erreur. 2: ligne de l'erreur. 3: fichier

```

[Github](https://github.com/liam-gen/utils.js)