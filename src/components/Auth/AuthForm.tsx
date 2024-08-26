import { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import Button from "src/common/Button/Button";
import { Input } from "src/common/Input";
import { Stepper } from "src/common/Stepper";
import { authFormSteps } from "src/constants/authForm";
import authStore from "src/stores/auth";
import { toast } from "sonner";

const AuthForm: FC = () => {
  const [step, setStep] = useState<number>(0);

  const handleNext = () => {
    const result = authStore.areRequiredFieldsFilledForStep(step);
    if (result) setStep((prevStep) => prevStep + 1);
    else {
      toast.error(
        "Ju lutem plotesoni te gjithe te dhenat qe jane te shenuara me *!"
      );
    }
  };
  const handleBack = () => setStep(step - 1);

  return (
    <>
      {authStore.selectedAuthMethod == "register" ? (
        <Stepper
          steps={authFormSteps}
          currentStep={step}
          onNext={handleNext}
          onBack={handleBack}
          disableBtn={authStore.disableButton}
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
