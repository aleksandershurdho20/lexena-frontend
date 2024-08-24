import { FC } from "react";

import { observer } from "mobx-react-lite";
import "./input.css";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input {...props} />
    </div>
  );
};

export default observer(Input);
