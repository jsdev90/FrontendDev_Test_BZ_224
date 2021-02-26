import { useState } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { states } from '../WhatGives/constants';

import arrowDownIcon from '../../assets/img/arrowdown.svg';
import arrowUpIcon from '../../assets/img/arrowup.svg';

const Wrapper = styled.div`
  position: relative;
  z-index: 999;
  & > div {
    width: 100%;
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
    .autocomplete-item {
      font-size: 16px;
      line-height: 22px;
      padding: 8px 15px;
      text-align: left;
    }
  }
  img {
    position: absolute;
    right: 10px;
    bottom: 15px;
  }
`;

export default function AutoComplete({ step, state, setState }) {
  const [isOpen, setOpen] = useState(false)
  return (
    <Wrapper>
      <Autocomplete
        getItemValue={(item) => item.label}
        items={states}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        renderItem={(item, isHighlighted) =>
          <div className="autocomplete-item" style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.id}>
            {item.label}
          </div>
        }
        value={state}
        onChange={(e) => setState(e.target.value)}
        onSelect={(val) => setState(val)}
        inputProps={{
          placeholder: 'Select State',
          onBlur: () => setOpen(false),
          onFocus: () => setOpen(true),
          disabled: step !== 4
        }}
        open={isOpen}
      />
      <img
        src={isOpen ? arrowUpIcon : arrowDownIcon}
        alt="arrow-down-icon"
        onClick={() => step !== 4 ? undefined : setOpen(!isOpen)}/>
    </Wrapper>
  )
}