import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const Wrapper = styled.div`
  input {
    width: 100%;
    border: none;
    font-size: 20px;
    line-height: 23px;
    color: #0074D9;
    border-bottom: 1px solid #BDBDBD;
    padding: 0;
    padding-bottom: 7px;
    outline: none;
    background-color: transparent;
  }
`

export default function PhoneInput({ value, handleChange, disabled }) {
  return (
    <Wrapper>
      <NumberFormat
        format={"###-###-####"}
        mask="_"
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder="111-111-1111"
        disabled={disabled}
      />
    </Wrapper>
  )
};
