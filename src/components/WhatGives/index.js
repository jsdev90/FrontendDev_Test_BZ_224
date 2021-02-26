import { useCallback, useState } from 'react'

import GetStarted from './GetStarted';
import Step from './Step';
import Quotes from './Quotes';

import umbrellaIcon from '../../assets/img/umbrella.svg';
import closeIcon from '../../assets/img/close.svg';

import { Container, UmbrellaHub } from './styles';

function WhatGives({ closeModal }) {
  
  const [step, setStep] = useState(0);
  const [isQuotes, setIsQuotes] = useState(false);
  
  const renderSteps = useCallback(() => {
    if (step === 0) {
      return <GetStarted closeModal={closeModal} setStep={setStep} />
    } else {
      return (
        <Step
          step={step}
          setStep={setStep}
          setIsQuotes={setIsQuotes}
        />
      )
    }
  }, [step, closeModal]);

  return (
    <Container step={step}>
      {step !== 0 && <UmbrellaHub>
        <img src={umbrellaIcon} alt="umbrella-hub" />
        <span>Umbrella Hub</span>
      </UmbrellaHub>}
      <img
        src={closeIcon}
        alt="close-button"
        className="closeBtn"
        onClick={() => {
          closeModal();
          setIsQuotes(false)
        }}
      />
      {!isQuotes ? renderSteps() : <Quotes />}
    </Container>
  )
}

export default WhatGives;
