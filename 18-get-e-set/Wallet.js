class Wallet{
    #amount 
    #username

    constructor(){
        this.#amount = 100.99 * 100// 10099
    }

    get amount(){
        return this.#amount / 100
    }

    set username(newUsername){
        if (typeof newUsername !== 'string'){
            this.#username = newUsername
        } else {
            console.log('Username deve ser uma string')
        }
        this.#username = newUsername
    }

    get username(){
        return this.#username
    }
}

const myWallet = new Wallet()
console.log(myWallet.amount) // 100.99

myWallet.username = 'Alulol'
console.log(myWallet.username) // Alulol

myWallet.username += ' Calango'
console.log(myWallet.username) // Alulolcalango

myWallet.username = 123