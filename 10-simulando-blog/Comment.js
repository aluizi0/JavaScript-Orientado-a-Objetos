class Comment{
    constructor(username, content){
        this.username = username
        this.content = content
        this.createdAt = new Date() //associacao de data e hora
    }
}

module.exports = Comment