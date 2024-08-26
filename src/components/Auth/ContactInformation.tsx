import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import { Input } from "src/common/Input";
import { Select } from "src/common/Select";
import {
  cities,
  nationalities,
  regions,
} from "src/constants/contactInformation";

const ContactInformation: FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <div className="personal-information-container">
      <div className="personal-information-row">
        <Input label="Numri Personal" type="number" required />
        <Input label="Numri Telefonit" type="number" required />
      </div>
      <div className="personal-information-row">
        <Input label="Vendlindja" type="text" required />
        <Input label="Adresa" type="text" required />
      </div>
      <div className="personal-information-row">
        <Select
          options={nationalities}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Ju lutem zgjidhni nje opsion"
          label="Kombësia"
          required
        />
        <Select
          required
          options={regions}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Ju lutem zgjidhni nje opsion"
          label="Qarku"
        />
      </div>
      <div className="personal-information-row">
        <Select
          options={cities}
          value={selectedValue}
          onChange={setSelectedValue}
          placeholder="Ju lutem zgjidhni nje opsion"
          label="Vëndbanimi"
          required
        />
      </div>
    </div>
  );
};

export default observer(ContactInformation);
