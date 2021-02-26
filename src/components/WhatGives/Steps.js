import ConfirmButton from '../ConfirmButton';
import PhoneInput from '../PhoneInput';
import AutoComplete from '../AutoComplete';
import BrizaDatePicker from '../DatePicker';

import { Button, Input } from '../../lib';

import {
  titles,
  insurances,
  states,
  designs,
  coverages,
} from './constants';

import {
  StepContent,
  StepWrapper,
  StepTitle,
  Cards,
  Card,
} from './styles';

export default function Steps({
  step,
  setStep,
  insurance,
  setInsurance,
  businessName,
  setBusinessName,
  phoneNumber,
  setPhoneNumber,
  state,
  setState,
  design,
  setDesign,
  coverage,
  setCoverage,
  date,
  setDate,
  setIsQuotes,
}) {
  const isValidQuotes = insurance && businessName && phoneNumber && state && design && coverage && date;
  return (
    <StepContent>
      {titles.map((title, idx) => {
        return (
          <StepWrapper myStep={idx+1} currentStep={step} key={`step-content-${idx}`}>
            <StepTitle step={step}>
              <span>{idx+1}</span>
              <h2>{title}</h2>
              {step === 1 && <h2 className="mobile-title">What type of insurance are you looking for?</h2>}
            </StepTitle>
            {idx === 0 && <Cards>
              {insurances.map((ins, idx) => {
                const { icon, title, text } = ins;
                return (
                  <Card
                    key={`insurance-${idx}`}
                    active={title === insurance}
                    disabled={step !== 1}
                    onClick={() => {
                      if (step !== 1) {
                        return undefined
                      } else {
                        setInsurance(title); setStep(step+1)
                      }
                    }}
                  >
                    <img src={icon} alt={title} />
                    <div>
                      <h5>{title}</h5>
                      <p>{text}</p>
                    </div>
                  </Card>
                )
              })}
            </Cards>}
            {idx === 1 && <>
              <Input value={businessName} onChange={e => setBusinessName(e.target.value)} placeholder="Business Name" disabled={step !== 2} />
              {businessName !== '' && <ConfirmButton step={step} setStep={setStep} />}
            </>}
            {idx === 2 && <>
              <PhoneInput value={phoneNumber} handleChange={setPhoneNumber} disabled={step !== 3} />
              {phoneNumber.replace(/\D/g,'').length === 10 && <ConfirmButton step={step} setStep={setStep}  />}
            </>}
            {idx === 3 && <>
              <AutoComplete state={state} setState={setState} step={step} />
              {states.find(s => s.label === state) && <ConfirmButton step={step} setStep={setStep}  />}
            </>}
            {idx === 4 && <>
              <Cards rows={1}>
                {designs.map((des, idx) => {
                  const { icon, title, text } = des;
                  return (
                    <Card
                      key={`design-${idx}`}
                      active={title === design}
                      disabled={step !== 5}
                      onClick={() => {
                        if (step !== 5) {
                          return undefined
                        } else {
                          setDesign(title);
                          setStep(step+1);
                        }
                      }}>
                      <img src={icon} alt={title} />
                      <div>
                        <h5>{title}</h5>
                        <p>{text}</p>
                      </div>
                    </Card>
                  )
                })}
              </Cards>
            </>}
            {idx === 5 && <>
              <Cards rows={1}>
                {coverages.map((cov, idx) => {
                  const { icon, title } = cov;
                  return (
                    <Card
                      key={`coverage-${idx}`}
                      active={title === coverage}
                      disabled={step !== 6}
                      onClick={() => {
                        if (step !== 6) {
                          return undefined;
                        } else {
                          setCoverage(title);
                          setStep(step+1);
                        }
                      }}
                    >
                      <img src={icon} alt={title} />
                      <div>
                        <h5>{title}</h5>
                      </div>
                    </Card>
                  )
                })}
              </Cards>
            </>}
            {idx === 6 && <>
              <BrizaDatePicker date={date} setDate={setDate} disabled={step !== 7} />
              {date !== '' && <ConfirmButton step={step} setStep={setStep}  />}
            </>}
          </StepWrapper>
        )
      })}
      {step === 7 && <Button onClick={() => setIsQuotes(true)} disabled={!isValidQuotes}>GET QUOTES</Button>}
    </StepContent>
  )
}