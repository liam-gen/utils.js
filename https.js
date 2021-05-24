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
        server.get(link, function (req, res){
            res.send(htmlFile)
        })
    }
}
module.exports = class server{
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
        const reader = new FileReader();
        const read = reader.readAsText(fileHtml, 'UTF-8')
        new FilePage(this.app, link, read)
    }
}