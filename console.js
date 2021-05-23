module.exports = class entree{
    constructor(){
        this.console = 1
    }

    imprimer(entree){
        console.log(entree)
    }

    sendError(message, ligne, file){
        return console.log(`Erreur :\n> ${message}\n> Ligne ${ligne} du fichier ${file}`)
    }
    clear(){
        console.clear()
    }

    debug(entree){
        console.debug(entree)
    }

    erreur(entree){
        console.error(entree)
    }
}
