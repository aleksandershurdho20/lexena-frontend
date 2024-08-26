import { makeAutoObservable } from "mobx";

class Auth {
  selectedAuthMethod = "";
  email = "";
  password = "";
  firstname = "";
  lastname = "";
  fatherhood = "";
  maiden_name = "";
  date_of_birth = "";
  gender = "";
  id_number = "";
  phone = "";
  adress = "";
  place_of_birth = "";
  nationality = "";
  city = "";
  region = "";
  passport_image = "";
  image = "";
  errorMessage: { [key: string]: string } = {};
  disableButton = false;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedAuthMethod = (value: string) => {
    this.selectedAuthMethod = value;
  };

  handleChange = <K extends keyof Auth>(key: K, value: Auth[K]) => {
    if (Object.prototype.hasOwnProperty.call(this, key)) {
      (this as Auth)[key] = value;
    } else {
      console.warn(`Field ${key} does not exist on Auth`);
    }
  };

  handleEmptyValues = <K extends keyof Auth>(key: K, label: string) => {
    if (!(this as Auth)[key]) {
      this.errorMessage[key] = `${label} nuk mund te jete bosh!`;
      this.disableButton = true;
      return;
    }
    this.errorMessage[key] = "";
    this.disableButton = false;
  };

  areRequiredFieldsFilledForStep = (step: number) => {
    const requiredFieldsByStep = [
      [
        "email",
        "password",
        "firstname",
        "lastname",
        "fatherhood",
        "date_of_birth",
        "gender",
      ],
      [
        "id_number",
        "phone",
        "adress",
        "place_of_birth",
        "nationality",
        "city",
        "region",
      ],
      [
        "passport_image",
        "image",
      ],
    ];

    const requiredFields = requiredFieldsByStep[step];

    for (const field of requiredFields) {
      if (!this[field as keyof Auth]) {
        return false;
      }
    }
    return true;
  };
}

const authStore = new Auth();

export default authStore;
