const Post = require('./Post')

class Author{
    constructor(name, email, username){
        this.name = name
        this.email = email
        this.username = username
        this.posts = []
    }

    writePost(title, body){
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author