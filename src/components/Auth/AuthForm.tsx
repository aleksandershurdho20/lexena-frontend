import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Button from "src/common/Button/Button";
import { Input } from "src/common/Input";
import { Stepper } from "src/common/Stepper";
import { authFormSteps } from "src/constants/authForm";
import authStore from "src/stores/auth";

const AuthForm: FC = () => {
  const [step, setStep] = useState<number>(0);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  console.log(authFormSteps, authFormSteps[step], "??");

  return (
    <>
      {authStore.selectedAuthMethod == "register" ? (
        <Stepper
          steps={authFormSteps}
          currentStep={step}
          onNext={handleNext}
          onBack={handleBack}
        />
      ) : (
        <>
          <Input label="Email" type="text" />
          <Input label="Password" type="text" />
          <Button title={"Identifikohu"} />
        </>
      )}
    </>
  );
};

export default observer(AuthForm);
