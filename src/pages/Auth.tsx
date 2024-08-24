import { ArrowLeft } from "lucide-react";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import "src/assets/styles/auth.css";
import { Cards } from "src/components/Auth";
import AuthForm from "src/components/Auth/AuthForm";
import authStore from "src/stores/auth";
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
          {authStore.selectedAuthMethod !== "" && (
            <div
              className="back-btn"
              onClick={() => authStore.setSelectedAuthMethod("")}
            >
              {" "}
              <ArrowLeft className="icon" />
            </div>
          )}
          <h2>Mirë se erdhe.</h2>
          {authStore.selectedAuthMethod !== "" ? (
            <AuthForm />
          ) : (
            <>
              <p className="description">
                {" "}
                Për të vazhduar në sistem , ju lutem zgjidhni një nga opsionet
                me poshtë.
              </p>
              <Cards />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(Auth);
