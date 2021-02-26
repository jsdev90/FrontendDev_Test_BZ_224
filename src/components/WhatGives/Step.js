import { useState } from 'react';

import Steps from './Steps';

import { StepBottom } from './styles';

import arrowUpIcon from '../../assets/img/arrowup.svg';
import arrowDownIcon from '../../assets/img/arrowdown.svg';

export default function Step({ step, setStep, setIsQuotes }) {
  const [insurance, setInsurance] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [state, setState] = useState('');
  const [design, setDesign] = useState('');
  const [coverage, setCoverage] = useState('');
  const [date, setDate] = useState('');

  return (
    <>
      <Steps
        step={step}
        setStep={setStep}
        insurance={insurance}
        setInsurance={setInsurance}
        businessName={businessName}
        setBusinessName={setBusinessName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        state={state}
        setState={setState}
        design={design}
        setDesign={setDesign}
        coverage={coverage}
        setCoverage={setCoverage}
        date={date}
        setDate={setDate}
        setIsQuotes={setIsQuotes}
      />
      <StepBottom>
        <span>{step}/7</span>
        <div>
          <button onClick={() => setStep(step-1)} disabled={step === 1}>
            <img src={arrowUpIcon} alt="arrow-up" />
          </button>
          <button onClick={() => setStep(step+1)} disabled={step === 7}>
            <img src={arrowDownIcon} alt="arrow-down" />
          </button>
        </div>
      </StepBottom>
    </>
  )
}
