class Account{
    #password;
    #balance = 10;
    constructor(user){
        this.email = user.email;
        this.#password = user.password;
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)){
            return this.#balance;
        } else{
            return 'Credenciais inválidas';
        }
    }

    #authenticate(email, password){
        return email === this.email && password === this.#password;
    }
}

const user = {
    email : 'alulu@gmail.com',
    password : '123456',
    balance : 0,
}

const myAccount = new Account(user);

console.log(myAccount);
console.log(myAccount.getBalance('alulu@gmail.com','123456'));