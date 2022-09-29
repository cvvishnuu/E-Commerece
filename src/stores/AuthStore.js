import { action, makeObservable, observable } from "mobx";

const SIGNIN = "signin";

class AuthStore {
  navigatinbutton = SIGNIN;

  constructor() {
    makeObservable(this, {
      navigatinbutton: observable,
      setNavigatingButton: action,
    });
  }

  setNavigatingButton = (route) => {
    this.navigatinbutton = route;
  };

  getNavigatingButton = () => this.navigatinbutton;
}

export default AuthStore;
