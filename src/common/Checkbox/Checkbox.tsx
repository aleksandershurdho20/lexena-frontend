import { FC } from "react";

import { observer } from "mobx-react-lite";
import "./input.css";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
};

const CheckBox: FC<InputProps> = ({ label, required, ...props }) => {
  return (
    <div className="custom-checkbox">
      {label && (
        <label>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <span className="checkmark"></span>

      <input type="checkbox" {...props} />
    </div>
  );
};

export default observer(CheckBox);
