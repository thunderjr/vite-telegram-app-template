import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useSteps = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => {
    if (step === 0) return navigate(-1);
    setStep(step - 1);
  };

  return {
    handleNext,
    handleBack,
    setStep,
    step,
  };
};
