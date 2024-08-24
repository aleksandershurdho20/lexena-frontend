import { FC } from "react";
import { ActionCards } from "src/common/ActionCards";

import { LogIn } from "lucide-react";
import { observer } from "mobx-react-lite";
import authStore from "src/stores/auth";
import { Input } from "src/common/Input";
import Button from "src/common/Button/Button";

const AuthForm: FC = () => {
  return (
    <>
      <Input label="Email" type="text" />
      <Input label="Password" type="text" />
      <Button
        title={
          authStore.selectedAuthMethod == "register"
            ? "Regjistrohu"
            : "Identifikohu"
        }
      />
      <div className="additional-options">
        <a href="#" className="forgot-password">
          Keni harruar passwordin?
        </a>
      </div>
    </>
  );
};

export default observer(AuthForm);
