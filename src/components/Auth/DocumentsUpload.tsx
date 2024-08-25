import { FC } from "react";

import { observer } from "mobx-react-lite";
import { Input } from "src/common/Input";

const DocumentsUpload: FC = () => {
  return (
    <>
      <Input label="ID ose Pasaporta" type="number" />
      <Input label="Fotografia" type="number" />
    </>
  );
};

export default observer(DocumentsUpload);
