import { FC } from "react";
import { ActionCards } from "src/common/ActionCards";

import { LogIn } from "lucide-react";
import { observer } from "mobx-react-lite";
import authStore from "src/stores/auth";

const Cards: FC = () => {
  return (
    <>
      <ActionCards
        title="Identifikohu"
        icon={<LogIn />}
        onClick={() => authStore.setSelectedAuthMethod("login")}
      />
      <ActionCards
        title="Regjistrohu"
        icon={<LogIn />}
        onClick={() => authStore.setSelectedAuthMethod("register")}
      />
    </>
  );
};

export default observer(Cards);
