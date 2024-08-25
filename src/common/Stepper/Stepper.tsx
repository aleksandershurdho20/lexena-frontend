import React from "react";
import "./stepper.css";
type Step = {
  label: string;
  component: React.ReactNode;
};

interface StepperProps {
  steps: Step[];
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  onNext,
  onBack,
}) => {
  return (
    <div>
      <div className="stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? "active" : ""}`}
          >
            {step.label}
          </div>
        ))}
      </div>
      <div className="stepper-content">{steps[currentStep]?.component}</div>
      <div className="stepper-footer">
        <button
          onClick={onBack}
          disabled={currentStep === 0}
          className="btn btn-light"
        >
          <span className="text-sm">Hapi pas </span>
        </button>
        <button
          onClick={onNext}
          disabled={currentStep === steps.length - 1}
          className=" btn btn-blue-bordered"
        >
          <span className="text-sm">Hapi para</span>
        </button>
      </div>
    </div>
  );
};

export default Stepper;
