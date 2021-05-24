const ms = require('ms')

months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
day = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
date = new Date()
module.exports = function getDate(){
    return date
}

module.exports = function getYear(){
    return date.getFullYear()
}

module.exports = function getMonth(){
    return months[date.getMonth()]
}

module.exports = function getHour(){
    return date.getHours() + 2
}

module.exports = function getMinutes(){
    return date.getMinutes()
}

module.exports = function getSeconds(){
    return date.getSeconds()
}

module.exports = function getDay(){
    return day[date.getDay()]
}
