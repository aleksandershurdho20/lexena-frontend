import { FC } from "react";

import { observer } from "mobx-react-lite";
import Button from "src/common/Button/Button";

const Confirm: FC = () => {
  return (
    <>
      <div>
        <input type="checkbox" />
        <span>
          Konfirmoj <a>Deklaraten</a>
        </span>
      </div>
      <Button title="Regjistrohu" />
    </>
  );
};

export default observer(Confirm);
