import styled from 'styled-components';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import calendarIcon from '../../assets/img/calendar.svg';

const Wrapper = styled.div`
  position: relative;
  max-width: 312px;
  .react-datepicker-wrapper {
    text-align: left;
    .react-datepicker__input-container {
      width: 239px;
      input {
        width: 100%;
        border: none;
        font-size: 20px;
        line-height: 23px;
        padding: 0;
        padding-bottom: 7px;
        border-bottom: 1px solid #333333;
        background-color: transparent;
      }
    }
  }
  img {
    position: absolute;
    right: 10px;
    top: 0;
  }
`
export default function BrizaDatePicker({ date, setDate, disabled }) {
  return (
    <Wrapper>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={date => setDate(date)}
        placeholderText="dd/mm/yyyy"
        disabled={disabled}
      />
      <img src={calendarIcon} alt="calendar-icon" />
    </Wrapper>
  )
}
