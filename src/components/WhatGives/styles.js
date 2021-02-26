import styled, { keyframes } from 'styled-components';

const fadeInOpacity = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  position: relative;
  animation-name: ${fadeInOpacity};
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: .5s;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #E5E5E5;
  text-align: center;
  max-width: 690px;
  width: 100%;
  max-height: calc(100vh - 120px);
  overflow: auto;
  .get-started {
    padding: 55px 90px;
  }
  .closeBtn {
    width: 24px;
    height: 24px;
    cursor: pointer;
    position: absolute;
    top: 22px;
    right: 24px;
  }
  h1 {
    color: #333333;
    font-weight: bold;
    font-size: 44px;
    line-height: 52px;
    margin: 0;
    padding-top: 14px;
  }
  @media (max-width: 640px) {
    max-height: none;
    height: 100%;
    width: 100%;
    border-radius: 0;
    .get-started {
      padding: 55px 31px;
    }
    h1 {
      font-size: 40px;
      line-height: 47px;
    }
    .closeBtn {
      width: 14px;
      height: 14px;
      top: ${p => p.step === 0 ? 30 : 41}px;
      right: 35px;
    }
  }
`

export const UmbrellaIcon = styled.div`
  background-color: #A8DAFF;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 23px auto;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  img {
    width: 60px;
    height: 60px;
  }
`

export const Requirements = styled.div`
  padding-top: 60px;
  div {
    display: flex;
    align-items: center;
    margin-bottom: 29px;
    span {
      background-color: #A8DAFF;
      width: 36px;
      height: 36px;
      margin-right: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 36px;
      color: #0074D9;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      flex: none;
    }
    p {
      font-size: 18px;
      line-height: 21px;
      color: #333333;
      text-align: left;
      margin: 0;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
  @media (max-width: 640px) {
    padding-bottom: 23px;
    div {
      margin-bottom: 23px;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 312px;
  margin: auto;
  margin-bottom: 25px;
  @media (max-width: 640px) {
    margin-bottom: 60px;
  }
`

export const PoweredBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
  img {
    margin-right: 7px;
  }
  span {
    font-size: 12px;
    line-height: 14px;
    color: #BDBDBD;
  }
  @media (max-width: 640px) {
    img {
      margin-right: 9px;
    }
    span {
      font-size: 15px;
      line-height: 17px;
    }
  }
`

export const UmbrellaHub = styled.div`
  position: absolute;
  top: 27px;
  left: 24px;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 27.5px;
    margin-right: 10px;
  }
  span {
    font-size: 17px;
    line-height: 20px;
    color: #0074D9;
  }
  @media (max-width: 640px) {
    top: 38px;
    left: 28px;
    img {
      width: 26px;
      height: 24px;
      margin-right: 9px;
    }
    span {
      font-size: 15px;
      line-height: 17px;
    }
  }
`

export const StepTitle = styled.div`
  display: flex;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 52px;
  span {
    width: 37px;
    height: 37px;
    background-color: #A8DAFF;
    border-radius: 100%;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #0074D9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 22px;
    flex: none;
  }
  h2 {
    font-weight: bold;
    font-size: 33px;
    line-height: 38px;
    color: #333333;
    margin: 0;
    text-align: left;
  }
  h2.mobile-title {
    display: none;
  }
  @media (max-width: 640px) {
    padding-top: 40px;
    padding-bottom: 40px;
    span {
      width: 36px;
      height: 36px;
      margin-right: 21px;
    }
    h2 {
      font-size: 24px;
      line-height: 28px;
      display: ${p => p.step === 1 ? 'none' : 'block'};
    }
    h2.mobile-title {
      display: block;
    }
  }
`

export const StepContent = styled.div`
  padding: 53px 64px;
  height: 640px;
  overflow: hidden;
  text-align: left;
  @media (max-width: 640px) {
    padding: 63px 32px;
    min-height: 750px;
    height: calc(100vh - 60px);
  }
`

export const StepWrapper = styled.div`
  display: ${p => p.myStep === p.currentStep || p.myStep > p.currentStep ? 'block' : 'none'};
  opacity: ${p => p.currentStep !== p.myStep ? 0.1 : 1};
`

export const StepBottom = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #0074D9;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  span {
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }
  button {
    width: 37px;
    height: 37px;
    margin: 4px;
    background-color: #ffffff;
    border: none;
    border-radius: 2.5px;
    cursor: pointer;
    :disabled {
      opacity: 0.8;
      cursor: not-allowed;
    }
  }
  @media (max-width: 640px) {
    border-radius: 0;
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 270px 270px;
  grid-template-rows: ${p => p.rows === 1 ? '76px' : '76px 76px'};
  column-gap: 24px;
  row-gap: 23px;
  padding-bottom: 13px;
  @media (max-width: 640px) {
    display: block;
  }
`

export const Card = styled.div`
  width: 270px;
  height: 76px;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid ${p => p.active ? '#0074D9' : '#BDBDBD'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 22px 18px;
  cursor: ${p => p.disabled ? 'default' : 'pointer'};
  img {
    margin-right: 14px;
  }
  h5 {
    margin: 0;
    padding-bottom: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #333333;
    text-align: left;
  }
  p {
    margin: 0;
    font-size: 10px;
    line-height: 12px;
    color: #333333;
    text-align: left;
  }
  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 20px;
    padding: 25px 18px;
    height: auto;
    img {
      width: 28px;
      margin-right: 16px;
    }
    h5 {
      font-size: 17px;
      line-height: 19px;
      padding-bottom: 5px;
    }
    p {
      font-size: 12px;
      line-height: 14px;
    }
  }
`

export const PriceCards = styled.div`
  display: grid;
  grid-template-columns: 242px 242px;
  column-gap: 33px;
  @media (max-width: 640px) {
    display: block;
    padding-top: 15px;
  }
`

export const PriceCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #BDBDBD;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-top: 27px;
  padding: 20px 18px;
  .price-img {
    height: 35px;
    margin-bottom: 11px;
  }
  .monthly {
    font-size: 16px;
    line-height: 19px;
    margin-top: 46px;
    margin-bottom: 6px;
    color: #333333;
    b {
      font-weight: bold;
      font-size: 33px;
      line-height: 38px;
    }
  }
  .annually {
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    color: #828282;
    margin: 0;
  }
  :hover {
    border: 2px solid #0074D9;
  }
  @media (max-width: 640px) {
    margin-top: 30px;
    padding: 35px 22px;
    padding-top: 27px;
    border-radius: 4px;
    .price-img {
      height: 44px;
      padding: 0 11px;
      display: flex;
      align-items: flex-end;
      margin-bottom: 21px;
      img {
        width: 100%;
      }
    }
    .monthly {
      margin-top: 60px;
      margin-bottom: 8px;
      b {
        font-size: 42px;
        line-height: 49px;
      }
    }
    .annually {
      font-size: 17px;
      line-height: 19px;
      padding-bottom: 13px;
    }
    button {
      font-size: 18px;
      line-height: 21px;
      padding-top: 15px;
      padding-bottom: 14px;
    }
  }
`

export const Stars = styled.div`
  display: inline-block;
  font-size: 18px;
  line-height: 1;
  &::before {
    content: '★★★★★';
    letter-spacing: 1px;
    background: linear-gradient(90deg, #0074D9 calc(${p => p.rating} / 5 * 100%), #C4C4C4 calc(${p => p.rating} / 5 * 100%));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (max-width: 640px) {
    font-size: 22px;
  }
`
