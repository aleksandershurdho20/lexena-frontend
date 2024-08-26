import { FC } from "react";
import { Input } from "src/common/Input";
import { observer } from "mobx-react-lite";
import authStore from "src/stores/auth";
import { Select } from "src/common/Select";
import { gender } from "src/constants/contactInformation";
import {
  handleSelectBlur,
  handleChange,
  handleFocus,
  handleSelectChange,
} from "src/helpers/formHandlers";
const PersonalInformation: FC = () => {
  return (
    <div className="personal-information-container">
      <div className="personal-information-row">
        <Input
          label="Email"
          type="text"
          name="email"
          value={authStore.email}
          onChange={(e) => handleChange(authStore, e)}
          required
          onBlur={(e) => handleFocus(authStore, e, "Email")}
          errorMessage={authStore.errorMessage.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={authStore.password}
          onChange={(e) => handleChange(authStore, e)}
          required
          onBlur={(e) => handleFocus(authStore, e, "Password")}
          errorMessage={authStore.errorMessage.password}
        />
      </div>
      <div className="personal-information-row">
        <Input
          label="Emri"
          type="text"
          name="firstname"
          value={authStore.firstname}
          onChange={(e) => handleChange(authStore, e)}
          required
          onBlur={(e) => handleFocus(authStore, e, "Emri")}
          errorMessage={authStore.errorMessage.firstname}
        />
        <Input
          label="Mbiemri"
          type="text"
          name="lastname"
          value={authStore.lastname}
          onChange={(e) => handleChange(authStore, e)}
          required
          onBlur={(e) => handleFocus(authStore, e, "Mbiemri")}
          errorMessage={authStore.errorMessage.lastname}
        />
      </div>
      <div className="personal-information-row">
        <Input
          label="Atesia"
          type="text"
          name="fatherhood"
          value={authStore.fatherhood}
          onChange={(e) => handleChange(authStore, e)}
          required
          onBlur={(e) => handleFocus(authStore, e, "Atesia")}
          errorMessage={authStore.errorMessage.fatherhood}
        />
        <Input
          label="Mbiemri vajzerise"
          type="text"
          name="maiden_name"
          value={authStore.maiden_name}
          onChange={(e) => handleChange(authStore, e)}
        />
      </div>
      <div className="personal-information-row">
        <Input
          label="Datelindja"
          type="date"
          name="date_of_birth"
          value={authStore.date_of_birth}
          onChange={(e) => handleChange(authStore, e)}
          required
          onBlur={(e) => handleFocus(authStore, e, "Datelindja")}
          errorMessage={authStore.errorMessage.date_of_birth}
        />
        <Select
          label="Gjinia"
          required
          options={gender}
          value={authStore.gender}
          onChange={(value) => handleSelectChange(authStore, "gender", value)}
          onBlur={() => handleSelectBlur(authStore, "gender", "Gjinia")}
          errorMessage={authStore.errorMessage.gender}
        />
      </div>
    </div>
  );
};

export default observer(PersonalInformation);
