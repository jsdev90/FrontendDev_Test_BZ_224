import styled from 'styled-components';

import checkIcon from '../../assets/img/check.svg';

const Wrapper = styled.div`
  padding-top: 30px;
  text-align: left;
  button {
    background: #A8DAFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #0074D9;
    padding: 15px 17px;
    border: none;
    cursor: pointer;
    img {
      margin-left: 12px;
    }
  }
  @media (max-width: 640px) {
    padding-top: 20px;
    margin-bottom: 10px;
  }
`

export default function ConfirmButton({ step, setStep }) {
  return (
    <Wrapper>
      <button onClick={() => setStep(step === 7 ? 7 : step+1)}>
        OK
        <img src={checkIcon} alt="check-icon" />
      </button>
    </Wrapper>  
  )
}