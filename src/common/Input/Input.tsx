import { FC } from "react";

import { observer } from "mobx-react-lite";
import "./input.css";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
};

const Input: FC<InputProps> = ({ label, required, ...props }) => {
  return (
    <div className="input-group">
      {label && (
        <label>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <input {...props} />
    </div>
  );
};

export default observer(Input);
