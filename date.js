const ms = require('ms')

months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
day = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
date = new Date()
function getDate(){
    return date
}

function getYear(){
    return date.getFullYear()
}

function getMonth(){
    return months[date.getMonth()]
}

function getHour(){
    return date.getHours() + 2
}

function getMinutes(){
    return date.getMinutes()
}

function getSeconds(){
    return date.getSeconds()
}

function getDay(){
    return day[date.getDay()]
}

module.exports.date = {
    getDate,
    getYear,
    getMonth,
    getHour,
    getMinutes,
    getSeconds,
    getDay,
}