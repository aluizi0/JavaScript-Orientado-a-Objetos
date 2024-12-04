class User {
    constructor(fullName, email, password){
        this.fullName = fullName
        this.email = email
        this.password = password
    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log("Usuário logado")
        } else{
            console.log("Email ou senha incorretos")
        }
    }
}

const user1 = new User("Alulol", "alulol@gmail.com", "alulol123")

user1.login("alulol@gmail.com", "alulol123")


