import { FC } from "react";
import { ActionCards } from "src/common/ActionCards";

import { LogIn } from "lucide-react";
const Cards: FC = () => {
  return (
    <>
      <ActionCards
        title="Identifikohu"
        icon={<LogIn />}
        onClick={() => console.log("here")}
      />
      <ActionCards
        title="Regjistrohu"
        icon={<LogIn />}
        onClick={() => console.log("here")}
      />
    </>
  );
};

export default Cards;
