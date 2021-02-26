import { Button } from '../../lib';

import umbrellaIcon from '../../assets/img/umbrella.svg';
import powerIcon from '../../assets/img/power.svg';

import {
  UmbrellaIcon,
  Requirements,
  ButtonWrapper,
  PoweredBy,
} from './styles';

export default function GetStarted({ setStep }) {
  return (
    <div className="get-started">
      <UmbrellaIcon>
        <img src={umbrellaIcon} alt="umbrella-icon" />
      </UmbrellaIcon>
      <h1>So what gives?</h1>
      <Requirements>
        <div>
          <span>1</span>
          <p>Answer a few simple questions about your business</p>
        </div>
        <div>
          <span>2</span>
          <p>Browse through specially curated quotes</p>
        </div>
        <div>
          <span>3</span>
          <p>Select your quote-of-choice and receive your policy instantly</p>
        </div>
      </Requirements>
      <ButtonWrapper>
        <Button onClick={() => setStep(1)}>GET STARTED</Button>
      </ButtonWrapper>
      <PoweredBy>
        <img src={powerIcon} alt="power-icon" />
        <span>Powered by Briza</span>
      </PoweredBy>
    </div>
  )
}
