import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Input } from "src/common/Input";
import { Select } from "src/common/Select";
import {
  cities,
  nationalities,
  regions,
} from "src/constants/contactInformation";
import authStore from "src/stores/auth";
import {
  handleSelectBlur,
  handleChange,
  handleFocus,
  handleSelectChange,
} from "src/helpers/formHandlers";

const ContactInformation: FC = () => {
  return (
    <div className="personal-information-container">
      <div className="personal-information-row">
        <Input
          label="Numri Personal"
          type="number"
          name="id_number"
          value={authStore.id_number}
          onChange={(e) => handleChange(authStore, e)}
          onBlur={(e) => handleFocus(authStore, e, "Numri Personal")}
          required
          errorMessage={authStore.errorMessage.id_number}
        />
        <Input
          label="Numri Telefonit"
          type="number"
          name="phone"
          value={authStore.phone}
          onChange={(e) => handleChange(authStore, e)}
          onBlur={(e) => handleFocus(authStore, e, "Numri Telefonit")}
          required
          errorMessage={authStore.errorMessage.phone}
        />
      </div>
      <div className="personal-information-row">
        <Input
          label="Vendlindja"
          type="text"
          name="place_of_birth"
          value={authStore.place_of_birth}
          onChange={(e) => handleChange(authStore, e)}
          onBlur={(e) => handleFocus(authStore, e, "Vendlindja")}
          required
          errorMessage={authStore.errorMessage.place_of_birth}
        />
        <Input
          label="Adresa"
          type="text"
          name="adress"
          value={authStore.adress}
          onChange={(e) => handleChange(authStore, e)}
          onBlur={(e) => handleFocus(authStore, e, "Adresa")}
          required
          errorMessage={authStore.errorMessage.adress}
        />
      </div>
      <div className="personal-information-row">
        <Select
          options={nationalities}
          onChange={(value) =>
            handleSelectChange(authStore, "nationality", value)
          }
          placeholder="Ju lutem zgjidhni nje opsion"
          label="Kombësia"
          required
          value={authStore.nationality}
          onBlur={() => handleSelectBlur(authStore, "nationality", "Kombësia")}
          errorMessage={authStore.errorMessage.nationality}
        />
        <Select
          required
          options={regions}
          value={authStore.region}
          onChange={(value) => handleSelectChange(authStore, "region", value)}
          placeholder="Ju lutem zgjidhni nje opsion"
          label="Qarku"
          onBlur={() => handleSelectBlur(authStore, "region", "Qarku")}
          errorMessage={authStore.errorMessage.region}
        />
      </div>
      <div className="personal-information-row">
        <Select
          options={cities}
          value={authStore.city}
          onChange={(value) => handleSelectChange(authStore, "city", value)}
          placeholder="Ju lutem zgjidhni nje opsion"
          label="Vëndbanimi"
          required
          onBlur={() => handleSelectBlur(authStore, "city", "Vëndbanimi")}
          errorMessage={authStore.errorMessage.city}
        />
      </div>
    </div>
  );
};

export default observer(ContactInformation);
