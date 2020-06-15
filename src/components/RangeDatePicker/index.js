import * as React from 'react';
import { Moment } from 'moment';
import { RangePicker as RCRangePicker }  from 'rc-picker';
import { css } from 'emotion';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import enUS from 'rc-picker/lib/locale/en_US';
import { IconCalendar } from '../Icon/icons/IconCalendar';

type DatePickerProps = {
  onChange: (newValue: Moment | null, formatString?: string) => void,
  onSelect?: (newValue: Moment) => void,
}

const dropdownStyle = css`
  position: absolute;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  z-index: 1050;
  
  & .rc-picker-range-wrapper {
    display: flex;
  }
  
  & .rc-picker-panel-container {
    overflow: hidden;
    vertical-align: top;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);
    transition: margin .3s;
  }
  
  & .rc-picker-panel-container .rc-picker-panels {
    display: inline-flex;
    flex-wrap: nowrap;
    direction: ltr;
  }
  
  .rc-picker-date-panel .rc-picker-content th {
    width: 36px;
  }
  
  & .rc-picker-header {
    display: flex;
    padding: 0 8px;
    color: rgba(0,0,0,.85);
    border-bottom: 1px solid #f0f0f0;
  }
  
  & .rc-picker-header-view {
    flex: auto;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: rgba(0, 0, 0, 0.85);
  }
  
  & .rc-picker-header-view button:not(:first-child) {
    margin-left: 8px;
  }
  
  & .rc-picker-header>button {
    min-width: 1.6em;
    font-size: 14px;
  }
  
  & .rc-picker-header button {
    padding: 0;
    color: rgba(0,0,0,.25);
    line-height: 40px;
    background: 0 0;
    border: 0;
    cursor: pointer;
    transition: color .3s;
  }
  
  & .rc-picker-header-view button {
    color: rgba(0,0,0,.85);
  }
  
  & .rc-picker-header-view {
    flex: auto;
    font-weight: 500;
    line-height: 40px;
  }
  
  & .rc-picker-content {
    border-spacing: initial;
    padding: 14px 8px;
  }
    
  & .rc-picker-content thead tr th {
    font-weight: 500;
  }
  
  & .rc-picker-content th, .rc-picker-content td {
    position: relative;
    min-width: 24px;
    font-weight: 400;
    text-align: center;
  }
  
  & .rc-picker-cell {
    padding: 3px 0;
    color: rgba(0, 0, 0, .25);
    cursor: pointer
  }
  
  & .rc-picker-cell-in-view {
    color: rgba(0, 0, 0, .65)
  }
  
  & .rc-picker-cell-in-view.rc-picker-cell-in-range::before {
     background: #EFEFEF;
     opacity: 0.7;
  }

  & .rc-picker-cell-disabled {
    cursor: not-allowed
  }
  
  & .rc-picker-cell::before {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 1;
    height: 24px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: ''
  }
  
  & .rc-picker-cell .rc-picker-cell-inner {
    position: relative;
    z-index: 2;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 2px;
    transition: background .3s,border .3s;
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-selected .rc-picker-cell-inner,
   .rc-picker-cell-in-view.rc-picker-cell-range-start .rc-picker-cell-inner,
    .rc-picker-cell-in-view.rc-picker-cell-range-end .rc-picker-cell-inner {
    color: #fff;
    background: rgba(245, 34, 45, 0.65);
  }
  
  .rc-picker-cell:hover:not(.rc-picker-cell-in-view) .rc-picker-cell-inner,
   .rc-picker-cell:hover:not(.rc-picker-cell-selected):not(.rc-picker-cell-range-start)
   :not(.rc-picker-cell-range-end):not(.rc-picker-cell-range-hover-start):not(.rc-picker-cell-range-hover-end)
    .rc-picker-cell-inner {
      background: #f5f5f5;
  }
  
  & .rc-picker-decade-panel .rc-picker-content,
   .rc-picker-year-panel .rc-picker-content,
    .rc-picker-quarter-panel .rc-picker-content,
     .rc-picker-month-panel .rc-picker-content {
    height: 264px;
}
  
  & .rc-picker-year-panel .rc-picker-cell-inner,
   .rc-picker-quarter-panel .rc-picker-cell-inner,
    .rc-picker-month-panel .rc-picker-cell-inner {
    width: 60px;
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-start:not(.rc-picker-cell-in-range)
  :not(.rc-picker-cell-range-start):not(.rc-picker-cell-range-end)::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-end:not(.rc-picker-cell-in-range)
  :not(.rc-picker-cell-range-start):not(.rc-picker-cell-range-end)::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-end.rc-picker-cell-range-end-single::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover:not(.rc-picker-cell-in-range)::before {
    background: #EFEFEF;
  }

`;

const pickerStyles = css`
    & .rc-picker-range {
      position: relative;
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
    }
    
    & .rc-picker {
      box-sizing: border-box;
      margin: 0;
      color: rgba(0,0,0,.65);
      font-size: 14px;
      line-height: 1.5715;
      list-style: none;
      padding: 4px 11px;
      position: relative;
      display: inline-flex;
      align-items: center;
      background: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      transition: border .3s,box-shadow .3s;
    }
    
    & .rc-picker-focused {
      border-color: #40a9ff;
      border-right-width: 1px!important;
      outline: 0;
      -webkit-box-shadow: 0 0 0 2px rgba(24,144,255,.2);
      box-shadow: 0 0 0 2px rgba(24,144,255,.2);
    }
    
    & .rc-picker-input {
      position: relative;
      display: inline-flex;
      width: 100%;
      
    }
    
    & .rc-picker-range-separator {
      align-items: center;
      padding: 0 8px;
      line-height: 1;
    }
    
    & .rc-picker-input>input {
      position: relative;
      display: inline-block;
      width: 100%;
      min-width: 0;
      padding: 4px 11px;
      color: rgba(0,0,0,.65);
      font-size: 14px;
      line-height: 1.5715;
      background-color: #fff;
      background-image: none;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      transition: all .3s;
      flex: auto;
      min-width: 1px;
      height: auto;
      padding: 0;
      background: 0 0;
      border: 0;
      
      &:focus {
        outline: none;
      }
    }
`;

export function RangeDatePicker(props: DatePickerProps) {

  const sharedProps = {
    generateConfig: momentGenerateConfig,
    onSelect: props.onSelect,
    onChange: props.onChange
  };
  return (
    <div className={pickerStyles}>
      <style>
        {`
          .rc-picker-dropdown-hidden {
            display: none;
          }
        `}
      </style>
      <RCRangePicker
        {...sharedProps}
        suffixIcon={<IconCalendar />}
        placeholder={['From date', 'to date']}
        locale={enUS}
        dropdownClassName={dropdownStyle}
        format="YYYY/MM/DD"
      />
    </div>
  )
}
