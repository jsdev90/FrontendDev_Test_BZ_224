import styled from 'styled-components';

export const Button = styled.button`
  background: ${p => p.disabled ? 'gray' : '#71F79F'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-weight: bold;
  font-size: ${p => p.small ? 14 : 18}px;
  line-height: ${p => p.small ? 16 : 21}px;
  color: #333333;
  padding-top: ${p => p.small ? 11 : 15}px;
  padding-bottom: ${p => p.small ? 11 : 14}px;
  border: none;
  width: 100%;
  cursor: pointer;
  max-width: 312px;
  margin-top: ${p => p.small ? 47 : 62}px;
  :hover {
    color: #0074D9;
  }
  @media (max-width: 640px) {
    margin-top: 47px;
  }
`
