import { FC } from "react";

import { observer } from "mobx-react-lite";
import { Input } from "src/common/Input";
import authStore from "src/stores/auth";
import { handleFocus, handleChange } from "src/helpers/formHandlers";

const DocumentsUpload: FC = () => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files[0].name;
    const { name } = e.target;
    if (name === "passport_image") {
      authStore.passport_image = file;
    } else {
      authStore.image = file;
    }
    // authStore.handleChange(name as keyof T, file);
  };

  return (
    <>
      <Input
        label="ID ose Pasaporta"
        type="file"
        name="passport_image"
        required
        onChange={handleUpload}
      />
      <Input
        label="Fotografia"
        type="file"
        name="image"
        required
        onChange={handleUpload}
      />
    </>
  );
};

export default observer(DocumentsUpload);
