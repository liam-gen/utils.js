const express = require('express')
const path = require('path')
class SimplyPage{
    constructor(server, link, html){
        server.get(link, function (req, res){
            res.send(html)
        })
    }
}
class FilePage{
    constructor(server, link, htmlFile){
        server.set('views', './views')
        server.get(link, function (req, res){
            res.sendFile(path.join(__dirname+htmlFile))
        })
    }
}
module.exports.Website = class server{
    constructor(){
        this.app = express()
    }

    connect(host, messageToConnect = "Connect !"){
        this.app.listen(host, function(){
            console.log(messageToConnect)
        })
    }
    createPage(link, html){
        new SimplyPage(this.app, link, html)
    }
    createFilePage(link, fileHtml){
        new FilePage(this.app, link, fileHtml)
    }
}