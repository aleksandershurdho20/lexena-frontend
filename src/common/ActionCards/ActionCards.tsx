import { FC, ReactNode } from "react";
import "src/assets/styles/actioncards.css";
type Props = {
  title: string;
  onClick: () => void;
  icon: ReactNode;
};
const ActionCards: FC<Props> = ({ title, icon, onClick }) => {
  return (
    <div className="action-cards" onClick={onClick}>
      <div className="left">
        <div className="icon-wrapper">{icon}</div>
      </div>
      <div className="right">
        <h4 className="action-card-title">{title}</h4>
      </div>
    </div>
  );
};

export default ActionCards;
