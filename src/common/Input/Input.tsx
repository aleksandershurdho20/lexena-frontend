import { FC } from "react";

import { observer } from "mobx-react-lite";
import "./input.css";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
  errorMessage?: any;
};

const Input: FC<InputProps> = ({ label, required, errorMessage, ...props }) => {
  return (
    <div className="input-group">
      {label && (
        <label>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <input {...props} />
      <p className="error-message">{errorMessage}</p>
    </div>
  );
};

export default observer(Input);
