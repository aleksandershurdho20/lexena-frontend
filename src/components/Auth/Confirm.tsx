import { FC } from "react";

import { observer } from "mobx-react-lite";
import Button from "src/common/Button/Button";

const Confirm: FC = () => {
  return (
    <>
      <input type="checkbox" />
      <span>
        Konfirmoj <a>Deklaraten</a>
      </span>
      <Button title="regjistrohu" />
    </>
  );
};

export default observer(Confirm);
