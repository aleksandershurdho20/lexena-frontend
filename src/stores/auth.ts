import { makeAutoObservable } from "mobx";

class Auth {
  selectedAuthMethod = "";
  constructor() {
    makeAutoObservable(this);
  }

  setSelectedAuthMethod = (value : string) => {
    this.selectedAuthMethod = value
  };
}

const authStore = new Auth();

export default authStore;
