import { FC } from "react";
import "src/assets/styles/auth.css";
import { Cards } from "src/components/Auth";
const Auth: FC = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <div className="logo">
          <h4>Logo here</h4>
        </div>
      </div>
      <div className="auth-right">
        <div className="intro-form-wrapper">
          <h2>Mirë se erdhe.</h2>
          <p className="description">
            {" "}
            Për të vazhduar në sistem , ju lutem zgjidhni një nga opsionet me
            poshtë.
          </p>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Auth;
