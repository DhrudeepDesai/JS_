class User {
    constructor(mail, psswd){
        this.mail = mail;
        this.psswd = psswd;
    }
    get psswd(){
        return `Hello${this._psswd}`;
    }
    set psswd(value){
        this._psswd = value;
    }
}
const obj = new User("dd", "123abc")
console.log(obj.psswd)
console.log(obj._psswd)