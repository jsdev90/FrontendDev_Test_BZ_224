import styled from 'styled-components';
import windIcon from '../../assets/img/wind.svg';

import { Button } from '../../lib'

import {
  UmbrellaIcon,
  PriceCards,
  PriceCard,
  Stars
} from './styles';

import { prices } from './constants';

const Wrapper = styled.div`
  padding: 54px 86px;
  h1 {
    font-size: 44px;
    line-height: 52px;
    text-align: center;
    color: #333333;
    margin: 0;
    margin-top: 35px;
  }
  .subTitle {
    font-size: 22px;
    line-height: 26px;
    text-align: center;
    color: #333333;
    margin: 10px 0;
  }
  h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #333333;
    margin-top: 49px;
    margin-bottom: 23px;
    text-align: left;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    text-align: left;
    display: block;
    a {
      font-weight: 500;
      color: #0074D9;
    }
  }
  @media (max-width: 640px) {
    padding: 54px 32px;
    padding-top: 95px;
    h1 {
      font-size: 38px;
      line-height: 45px;
      margin-top: 31px;
    }
    .subTitle {
      margin: 15px 0;
    }
    h4 {
      margin-top: 51px;
      margin-bottom: 22px;
    }
  }
`

export default function Quotes() {
  return (
    <Wrapper>
      <UmbrellaIcon>
        <img src={windIcon} alt="wind-icon" />
      </UmbrellaIcon>
      <h1>Fast like the wind!</h1>
      <p className="subTitle">We dove deep through the internet to get you these great quotes</p>
      <PriceCards>
        {prices.map((price, idx) => {
          const { icon, rating, monthly, annually } = price
          return (
            <PriceCard key={`price-card-${idx}`}>
              <div className='price-img'>
                <img src={icon} alt="price-card-icon" />
              </div>
              <Stars rating={rating} />
              <p className='monthly'><b>${monthly}</b>/mo</p>
              <p className='annually'>${annually} per year</p>
              <Button small>BUY NOW</Button>
            </PriceCard>
          )
        })}
      </PriceCards>
      <h4>Your Summary:</h4>
      <span>
        <a href="/" target="_blank">Hoop Heaven</a>, established on <a href="/" target="_blank">Dec 12 2012</a>, and operating out of <a href="/" target="_blank">Texas</a>, is interested in purchasing <a href="/" target="_blank">cyber insurance</a>.
        <br /><br />
        Hoop Heaven would also like <a href="/" target="_blank">building coverage included</a> in their policy.
        <br /><br />
        Hoop Heaven does their own <a href="/" target="_blank">designs in-house</a>.
        <br /><br />
        Hoop Heaven can be reached at <a href="tel:231-676-4324" style={{whiteSpace: 'nowrap'}}>231-676-4324</a>.
      </span>
    </Wrapper>
  )
};
