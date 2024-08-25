import { FC, useState } from "react";
import { ActionCards } from "src/common/ActionCards";

import { LogIn } from "lucide-react";
import { observer } from "mobx-react-lite";
import authStore from "src/stores/auth";
import { Input } from "src/common/Input";
import Button from "src/common/Button/Button";
import AdditionalOptions from "./AdditionalOptions";
import { Stepper } from "src/common/Stepper";
import { authFormSteps } from "src/constants/authForm";

const AuthForm: FC = () => {
  const [step, setStep] = useState<number>(0);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <>
      <Stepper
        steps={authFormSteps}
        currentStep={step}
        onNext={handleNext}
        onBack={handleBack}
      />

      {/* <Input label="Email" type="text" />
      <Input label="Password" type="text" />
      <Button
        title={
          authStore.selectedAuthMethod == "register"
            ? "Regjistrohu"
            : "Identifikohu"
        }
      />
      <AdditionalOptions /> */}
    </>
  );
};

export default observer(AuthForm);
