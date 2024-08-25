import { FC } from "react";

import { observer } from "mobx-react-lite";
import { Input } from "src/common/Input";

const ContactInformation: FC = () => {
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
      </div>
    </>
  );
};

export default observer(ContactInformation);
