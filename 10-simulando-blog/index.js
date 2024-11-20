const Author = require('./Author')

const alulol = new Author('Alulol', 'alulol@gmail.com', 'alulol')

const post = alulol.writePost('Hello World', 'This is my first post')

post.addComment('emanuceta', 'Great post!')
post.addComment('negot', 'Great post!')
post.addComment('caietepiranha', 'Great post!')

console.log(alulol)
console.log(post)