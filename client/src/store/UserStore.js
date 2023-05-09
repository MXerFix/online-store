import { makeAutoObservable } from 'mobx'

const user = {
  name: "Евгений",
  email: 'jeka@emae.com',
  tel: ''
}

class UserStore {
  constructor() {
    this._isAuth = false
    this._user = user
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setUser(user) {
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }

}





export default new UserStore()


