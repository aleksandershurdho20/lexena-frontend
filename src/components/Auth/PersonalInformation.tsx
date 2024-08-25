import { FC } from "react";
import { Input } from "src/common/Input";
import { observer } from "mobx-react-lite";

const PersonalInformation: FC = () => {
  return (
    <div className="personal-information-container">
      <div className="personal-information-row">
        <Input label="Email" type="text" />
        <Input label="Password" type="password" />
      </div>
      <div className="personal-information-row">
        <Input label="Emri" type="text" />
        <Input label="Mbiemri" type="text" />
      </div>
      <div className="personal-information-row">
        <Input label="Atesia" type="text" />
        <Input label="Mbiemri vajzerise" type="text" />
      </div>
      <div className="personal-information-row">
        <Input label="Datelindja" type="date" />
        <Input label="Gjinia" type="text" />
      </div>
    </div>
  );
};

export default observer(PersonalInformation);
