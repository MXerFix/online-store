import { makeAutoObservable } from 'mobx'

export const nullUser = {
  name: '',
  email: '',
  tel: '',
  role: ''
}
class UserStore {
  constructor() {
    this._isAuth = false
    this._user = nullUser
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


