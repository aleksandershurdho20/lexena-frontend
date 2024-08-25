import { FC, useState } from "react";

import { observer } from "mobx-react-lite";
import { Input } from "src/common/Input";
import { Select } from "src/common/Select";
const ContactInformation: FC = () => {
  const nationalities = [
    { value: "shqiptar", label: "Shqiptar" },
    { value: "amerikan", label: "Amerikan" },
    { value: "gjerman", label: "Gjerman" },
    { value: "francez", label: "Francez" },
    { value: "italian", label: "Italian" },
    { value: "spanjoll", label: "Spanjoll" },
    { value: "turk", label: "Turk" },
    { value: "kinez", label: "Kinez" },
    { value: "japonez", label: "Japonez" },
    { value: "kanadez", label: "Kanadez" },
    { value: "britanik", label: "Britanik" },
    // Add more nationalities as needed
  ];
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <>
      <div className="personal-information-container">
        <div className="personal-information-row">
          <Input label="Numri Personal" type="number" />
          <Input label="Numri Telefonit" type="number" />
        </div>
        <div className="personal-information-row">
          <Input label="Vendlindja" type="text" />
          <Input label="Adresa" type="text" />
        </div>
        <div className="personal-information-row">
          <Select
            options={nationalities}
            value={selectedValue}
            onChange={setSelectedValue}
            placeholder="Select an option"
            label="Select an option"
          />
          {/* <Select
            value="sdsd"
            label="Kombesia"
            options={nationalities}
            onChange={() => {}}
          /> */}
        </div>
      </div>
    </>
  );
};

export default observer(ContactInformation);
