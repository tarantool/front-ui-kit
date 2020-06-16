import * as React from 'react';
import { Moment } from 'moment';
import { RangePicker as RCRangePicker }  from 'rc-picker';
import { css } from 'emotion';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import enUS from 'rc-picker/lib/locale/en_US';
import { IconClock, IconCancel } from '../Icon';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';

type RangeTimePickerProps = {
  onChange: (newValue: [Moment, Moment] | null, formatString?: [string, string]) => void,
  placeholder: [string, string],
  allowClear: boolean,
  showSuffixIcon: boolean,
}

function PickerButton(props: ButtonProps) {
  return <Button intent="base" size="s" {...props} />;
}

const Components = { button: PickerButton };

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
  
  .rc-picker-calendar {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    background: #fff
  }
  
  .rc-picker-calendar-header {
    display: flex;
    justify-content: flex-end;
    padding: 12px 0
  }
  
  .rc-picker-calendar-header .rc-picker-calendar-year-select {
    min-width: 80px
  }
  
  .rc-picker-calendar-header .rc-picker-calendar-month-select {
    min-width: 70px;
    margin-left: 8px
  }
  
  .rc-picker-calendar-header .rc-picker-calendar-mode-switch {
    margin-left: 8px
  }
  
  .rc-picker-calendar .rc-picker-panel {
    background: #fff;
    border: 0;
    border-top: 1px solid #f0f0f0;
    border-radius: 0
  }
  
  .rc-picker-calendar .rc-picker-panel .rc-picker-month-panel,
  .rc-picker-calendar .rc-picker-panel .rc-picker-date-panel {
    width: auto
  }
  
  .rc-picker-calendar .rc-picker-panel .rc-picker-body {
    padding: 8px 0
  }
  
  .rc-picker-calendar .rc-picker-panel .rc-picker-content {
    width: 100%
  }
  
  .rc-picker-calendar-mini {
    border-radius: 2px
  }
  
  .rc-picker-calendar-mini .rc-picker-calendar-header {
    padding-right: 8px;
    padding-left: 8px
  }
  
  .rc-picker-calendar-mini .rc-picker-panel {
    border-radius: 0 0 2px 2px
  }
  
  .rc-picker-calendar-mini .rc-picker-content {
    height: 256px
  }
  
  .rc-picker-calendar-mini .rc-picker-content th {
    height: auto;
    padding: 0;
    line-height: 18px
  }
  
  .rc-picker-calendar-full .rc-picker-panel {
    display: block;
    width: 100%;
    text-align: right;
    background: #fff;
    border: 0
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-body th,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-body td {
    padding: 0
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-body th {
    height: auto;
    padding: 0 12px 5px 0;
    line-height: 18px
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell::before {
    display: none
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell:hover .rc-picker-calendar-date {
    background: #f5f5f5
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell .rc-picker-calendar-date-today::before {
    display: none
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected .rc-picker-calendar-date,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected:hover .rc-picker-calendar-date,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected .rc-picker-calendar-date-today,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected:hover .rc-picker-calendar-date-today {
    background: #F7F7F7
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected
   .rc-picker-calendar-date .rc-picker-calendar-date-value,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected:hover
   .rc-picker-calendar-date .rc-picker-calendar-date-value,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected
   .rc-picker-calendar-date-today .rc-picker-calendar-date-value,
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-cell-selected:hover
   .rc-picker-calendar-date-today .rc-picker-calendar-date-value {
    color: #1890ff
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-calendar-date {
    display: block;
    width: auto;
    height: auto;
    margin: 0 4px;
    padding: 4px 8px 0;
    border: 0;
    border-top: 2px solid #f0f0f0;
    border-radius: 0;
    transition: background .3s
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-calendar-date-value {
    line-height: 24px;
    transition: color .3s
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-calendar-date-content {
    position: static;
    width: auto;
    height: 86px;
    overflow-y: auto;
    color: rgba(0, 0, 0, .65);
    line-height: 1.5715;
    text-align: left
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-calendar-date-today {
    border-color: #1890ff
  }
  
  .rc-picker-calendar-full .rc-picker-panel .rc-picker-calendar-date-today .rc-picker-calendar-date-value {
    color: rgba(0, 0, 0, .65)
  }
  
  @media only screen and (max-width:480px) {
  .rc-picker-calendar-header {
      display: block
    }
  .rc-picker-calendar-header .rc-picker-calendar-year-select {
      width: 50%
    }
  .rc-picker-calendar-header .rc-picker-calendar-month-select {
      width: calc(50% - 8px)
    }
  .rc-picker-calendar-header .rc-picker-calendar-mode-switch {
      width: 100%;
      margin-top: 8px;
      margin-left: 0
  }
  .rc-picker-calendar-header .rc-picker-calendar-mode-switch>label {
      width: 50%;
      text-align: center
    }
  }
  
  .rc-picker-calendar-rtl {
    direction: rtl
  }
  
  .rc-picker-calendar-rtl .rc-picker-calendar-header .rc-picker-calendar-month-select {
    margin-right: 8px;
    margin-left: 0
  }
  
  .rc-picker-calendar-rtl .rc-picker-calendar-header .rc-picker-calendar-mode-switch {
    margin-right: 8px;
    margin-left: 0
  }
  
  .rc-picker-calendar-rtl.rc-picker-calendar-full .rc-picker-panel {
    text-align: left
  }
  
  .rc-picker-calendar-rtl.rc-picker-calendar-full .rc-picker-panel .rc-picker-body th {
    padding: 0 0 5px 12px
  }
  
  .rc-picker-calendar-rtl.rc-picker-calendar-full .rc-picker-panel .rc-picker-calendar-date-content {
    text-align: right
  }
  
  .rc-picker-panel {
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    background: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 2px;
    outline: none
  }
  
  .rc-picker-panel-focused {
    border-color: #1890ff
  }
  
  .rc-picker-decade-panel,
  .rc-picker-year-panel,
  .rc-picker-quarter-panel,
  .rc-picker-month-panel,
  .rc-picker-week-panel,
  .rc-picker-date-panel,
  .rc-picker-time-panel {
    display: flex;
    flex-direction: column;
    width: 280px
  }
  
  .rc-picker-header {
    display: flex;
    padding: 0 8px;
    color: rgba(0, 0, 0, .85);
    border-bottom: 1px solid #f0f0f0
  }
  
  .rc-picker-header>* {
    flex: none
  }
  
    .rc-picker-header button {
    padding: 0;
    color: rgba(0, 0, 0, .25);
    line-height: 40px;
    background: 0 0;
    border: 0;
    cursor: pointer;
    transition: color .3s
  }
  
  .rc-picker-header>button {
    min-width: 1.6em;
    font-size: 14px
  }
  
  .rc-picker-header>button:hover {
    color: rgba(0, 0, 0, .65)
  }
  
  .rc-picker-header-view {
    flex: auto;
    font-weight: 500;
    line-height: 40px
  }
  
  .rc-picker-header-view button {
    color: inherit;
    font-weight: inherit
  }
  
  .rc-picker-header-view button:not(:first-child) {
    margin-left: 8px
  }
  
  .rc-picker-header-view button:hover {
    color: #1890ff
  }
  
  .rc-picker-prev-icon,
  .rc-picker-next-icon,
  .rc-picker-super-prev-icon,
  .rc-picker-super-next-icon {
    position: relative;
    display: inline-block;
    width: 7px;
    height: 7px
  }
  
  .rc-picker-prev-icon::before,
  .rc-picker-next-icon::before,
  .rc-picker-super-prev-icon::before,
  .rc-picker-super-next-icon::before {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: ''
  }
  
  .rc-picker-super-prev-icon::after,
  .rc-picker-super-next-icon::after {
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 0 solid currentColor;
    border-width: 1.5px 0 0 1.5px;
    content: ''
  }
  
  .rc-picker-prev-icon,
  .rc-picker-super-prev-icon {
    transform: rotate(-45deg)
  }
  
  .rc-picker-next-icon,
  .rc-picker-super-next-icon {
    transform: rotate(135deg)
  }
  
  .rc-picker-content {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse
  }
  
  .rc-picker-content th,
  .rc-picker-content td {
    position: relative;
    min-width: 24px;
    font-weight: 400
  }
  
  .rc-picker-content th {
    height: 30px;
    color: rgba(0, 0, 0, .65);
    line-height: 30px
  }
  
  .rc-picker-cell {
    padding: 3px 0;
    color: rgba(0, 0, 0, .25);
    cursor: pointer
  }
  
  .rc-picker-cell-in-view {
    color: rgba(0, 0, 0, .65)
  }
  
  .rc-picker-cell-disabled {
    cursor: not-allowed
  }
  
  .rc-picker-cell::before {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 1;
    height: 24px;
    transform: translateY(-50%);
    content: ''
  }
  
  .rc-picker-cell .rc-picker-cell-inner {
    position: relative;
    z-index: 2;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 2px;
    transition: background .3s, border .3s
  }
  
  .rc-picker-cell:hover:not(.rc-picker-cell-in-view) .rc-picker-cell-inner,
  .rc-picker-cell:hover:not(.rc-picker-cell-selected):not(.rc-picker-cell-range-start):not(.rc-picker-cell-range-end)
  :not(.rc-picker-cell-range-hover-start):not(.rc-picker-cell-range-hover-end) .rc-picker-cell-inner {
    background: #f5f5f5
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-today .rc-picker-cell-inner::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    border: 1px solid #1890ff;
    border-radius: 2px;
    content: ''
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-in-range {
    position: relative
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-in-range::before {
    background: #F7F7F7
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-selected .rc-picker-cell-inner,
  .rc-picker-cell-in-view.rc-picker-cell-range-start .rc-picker-cell-inner,
  .rc-picker-cell-in-view.rc-picker-cell-range-end .rc-picker-cell-inner {
    color: #fff;
    background: #1890ff
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-start:not(.rc-picker-cell-range-start-single)::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-end:not(.rc-picker-cell-range-end-single)::before {
    background: #F7F7F7
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-start::before {
    left: 50%
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-end::before {
    right: 50%
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-start:not(.rc-picker-cell-in-range)
  :not(.rc-picker-cell-range-start):not(.rc-picker-cell-range-end)::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-end:not(.rc-picker-cell-in-range)
  :not(.rc-picker-cell-range-start):not(.rc-picker-cell-range-end)::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-start.rc-picker-cell-range-start-single::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-end.rc-picker-cell-range-end-single::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover:not(.rc-picker-cell-in-range)::after {
    position: absolute;
    top: 50%;
    z-index: 0;
    height: 24px;
    border-top: 1px dashed #7ec1ff;
    border-bottom: 1px dashed #7ec1ff;
    transform: translateY(-50%);
    content: ''
  }
  
  .rc-picker-cell-range-hover-start::after,
  .rc-picker-cell-range-hover-end::after,
  .rc-picker-cell-range-hover::after {
    right: 0;
    left: 2px
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-in-range.rc-picker-cell-range-hover::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-start.rc-picker-cell-range-hover::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-end.rc-picker-cell-range-hover::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-start:not(.rc-picker-cell-range-start-single)
  .rc-picker-cell-range-hover-start::before,
  .rc-picker-cell-in-view.rc-picker-cell-range-end:not(.rc-picker-cell-range-end-single)
  .rc-picker-cell-range-hover-end::before,
  .rc-picker-panel>:not(.rc-picker-date-panel) .rc-picker-cell-in-view.rc-picker-cell-in-range
  .rc-picker-cell-range-hover-start::before,
  .rc-picker-panel>:not(.rc-picker-date-panel) .rc-picker-cell-in-view.rc-picker-cell-in-range
  .rc-picker-cell-range-hover-end::before {
    background: #cbe6ff
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-start:not(.rc-picker-cell-range-start-single)
  :not(.rc-picker-cell-range-end) .rc-picker-cell-inner {
    border-radius: 2px 0 0 2px
  }
  
  .rc-picker-cell-in-view.rc-picker-cell-range-end:not(.rc-picker-cell-range-end-single)
  :not(.rc-picker-cell-range-start) .rc-picker-cell-inner {
    border-radius: 0 2px 2px 0
  }
  
  .rc-picker-date-panel .rc-picker-cell-in-view.rc-picker-cell-in-range.rc-picker-cell-range-hover-start
   .rc-picker-cell-inner::after,
  .rc-picker-date-panel .rc-picker-cell-in-view.rc-picker-cell-in-range.rc-picker-cell-range-hover-end
   .rc-picker-cell-inner::after {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: -1;
    background: #cbe6ff;
    content: ''
  }
  
  .rc-picker-date-panel .rc-picker-cell-in-view.rc-picker-cell-in-range.rc-picker-cell-range-hover-start
   .rc-picker-cell-inner::after {
    right: -7px;
    left: 0
  }
  
  .rc-picker-date-panel .rc-picker-cell-in-view.rc-picker-cell-in-range
  .rc-picker-cell-range-hover-end .rc-picker-cell-inner::after {
    right: 0;
    left: -7px
  }
  
  .rc-picker-cell-range-hover.rc-picker-cell-range-start::after {
    right: 50%
  }
  
  .rc-picker-cell-range-hover.rc-picker-cell-range-end::after {
    left: 50%
  }
  
  tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover:first-child::after,
  tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover-end:first-child::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-edge-start
  :not(.rc-picker-cell-range-hover-edge-start-near-range)::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-start::after {
    left: 6px;
    border-left: 1px dashed #7ec1ff;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
  }
  
  tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover:last-child::after,
  tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover-start:last-child::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-edge-end
  :not(.rc-picker-cell-range-hover-edge-end-near-range)::after,
  .rc-picker-cell-in-view.rc-picker-cell-range-hover-end::after {
    right: 6px;
    border-right: 1px dashed #7ec1ff;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
  }
  
  .rc-picker-cell-disabled {
    pointer-events: none
  }
  
  .rc-picker-cell-disabled .rc-picker-cell-inner {
    color: rgba(0, 0, 0, .25);
    background: 0 0
  }
  
  .rc-picker-cell-disabled::before {
    background: #f5f5f5
  }
  
  .rc-picker-cell-disabled.rc-picker-cell-today .rc-picker-cell-inner::before {
    border-color: rgba(0, 0, 0, .25)
  }
  
  .rc-picker-decade-panel .rc-picker-content,
  .rc-picker-year-panel .rc-picker-content,
  .rc-picker-quarter-panel .rc-picker-content,
  .rc-picker-month-panel .rc-picker-content {
    height: 264px
  }
  
  .rc-picker-decade-panel .rc-picker-cell-inner,
  .rc-picker-year-panel .rc-picker-cell-inner,
  .rc-picker-quarter-panel .rc-picker-cell-inner,
  .rc-picker-month-panel .rc-picker-cell-inner {
    padding: 0 8px
  }
  
  .rc-picker-decade-panel .rc-picker-cell-disabled .rc-picker-cell-inner,
  .rc-picker-year-panel .rc-picker-cell-disabled .rc-picker-cell-inner,
  .rc-picker-quarter-panel .rc-picker-cell-disabled .rc-picker-cell-inner,
  .rc-picker-month-panel .rc-picker-cell-disabled .rc-picker-cell-inner {
    background: #f5f5f5
  }
  
  .rc-picker-quarter-panel .rc-picker-content {
    height: 56px
  }
  
  .rc-picker-footer {
    width: min-content;
    min-width: 100%;
    line-height: 38px;
    text-align: center;
    border-bottom: 1px solid transparent
  }
  
  .rc-picker-panel .rc-picker-footer {
    border-top: 1px solid #f0f0f0
  }
  
  .rc-picker-footer-extra {
    padding: 0 12px;
    line-height: 38px;
    text-align: left
  }
  
  .rc-picker-footer-extra:not(:last-child) {
    border-bottom: 1px solid #f0f0f0
  }
  
  .rc-picker-now {
    text-align: left
  }
  
  .rc-picker-today-btn {
    color: #1890ff
  }
  
  .rc-picker-today-btn:hover {
    color: #40a9ff
  }
  
  .rc-picker-today-btn:active {
    color: #096dd9
  }
  
  .rc-picker-today-btn.rc-picker-today-btn-disabled {
    color: rgba(0, 0, 0, .25);
    cursor: not-allowed
  }
  
  .rc-picker-decade-panel .rc-picker-cell-inner {
    padding: 0 4px
  }
  
  .rc-picker-decade-panel .rc-picker-cell::before {
    display: none
  }
  
  .rc-picker-year-panel .rc-picker-body,
  .rc-picker-quarter-panel .rc-picker-body,
  .rc-picker-month-panel .rc-picker-body {
    padding: 0 8px
  }
  
  .rc-picker-year-panel .rc-picker-cell-inner,
  .rc-picker-quarter-panel .rc-picker-cell-inner,
  .rc-picker-month-panel .rc-picker-cell-inner {
    width: 60px
  }
  
  .rc-picker-year-panel .rc-picker-cell-range-hover-start::after,
  .rc-picker-quarter-panel .rc-picker-cell-range-hover-start::after,
  .rc-picker-month-panel .rc-picker-cell-range-hover-start::after {
    left: 14px;
    border-left: 1px dashed #7ec1ff;
    border-radius: 2px 0 0 2px
  }
  
  .rc-picker-panel-rtl .rc-picker-year-panel .rc-picker-cell-range-hover-start::after,
  .rc-picker-panel-rtl .rc-picker-quarter-panel .rc-picker-cell-range-hover-start::after,
  .rc-picker-panel-rtl .rc-picker-month-panel .rc-picker-cell-range-hover-start::after {
    right: 14px;
    border-right: 1px dashed #7ec1ff;
    border-radius: 0 2px 2px 0
  }
  
  .rc-picker-year-panel .rc-picker-cell-range-hover-end::after,
  .rc-picker-quarter-panel .rc-picker-cell-range-hover-end::after,
  .rc-picker-month-panel .rc-picker-cell-range-hover-end::after {
    right: 14px;
    border-right: 1px dashed #7ec1ff;
    border-radius: 0 2px 2px 0
  }
  
  .rc-picker-panel-rtl .rc-picker-year-panel .rc-picker-cell-range-hover-end::after,
  .rc-picker-panel-rtl .rc-picker-quarter-panel .rc-picker-cell-range-hover-end::after,
  .rc-picker-panel-rtl .rc-picker-month-panel .rc-picker-cell-range-hover-end::after {
    left: 14px;
    border-left: 1px dashed #7ec1ff;
    border-radius: 2px 0 0 2px
  }
  
  .rc-picker-week-panel .rc-picker-body {
    padding: 8px 12px
  }
  
  .rc-picker-week-panel .rc-picker-cell:hover .rc-picker-cell-inner,
  .rc-picker-week-panel .rc-picker-cell-selected .rc-picker-cell-inner,
  .rc-picker-week-panel .rc-picker-cell .rc-picker-cell-inner {
    background: 0 0!important
  }
  
  .rc-picker-week-panel-row td {
    transition: background .3s
  }
  
  .rc-picker-week-panel-row:hover td {
    background: #f5f5f5
  }
  
  .rc-picker-week-panel-row-selected td,
  .rc-picker-week-panel-row-selected:hover td {
    background: #1890ff
  }
  
  .rc-picker-week-panel-row-selected td.rc-picker-cell-week,
  .rc-picker-week-panel-row-selected:hover td.rc-picker-cell-week {
    color: rgba(255, 255, 255, .5)
  }
  
  .rc-picker-week-panel-row-selected td.rc-picker-cell-today .rc-picker-cell-inner::before,
  .rc-picker-week-panel-row-selected:hover td.rc-picker-cell-today .rc-picker-cell-inner::before {
    border-color: #fff
  }
  
  .rc-picker-week-panel-row-selected td .rc-picker-cell-inner,
  .rc-picker-week-panel-row-selected:hover td .rc-picker-cell-inner {
    color: #fff
  }
  
  .rc-picker-date-panel .rc-picker-body {
    padding: 8px 12px
  }
  
  .rc-picker-date-panel .rc-picker-content {
    width: 252px
  }
  
  .rc-picker-date-panel .rc-picker-content th {
    width: 36px
  }
  
  .rc-picker-datetime-panel {
    display: flex
  }
  
  .rc-picker-datetime-panel .rc-picker-time-panel {
    border-left: 1px solid #f0f0f0
  }
  
  .rc-picker-datetime-panel .rc-picker-date-panel,
  .rc-picker-datetime-panel .rc-picker-time-panel {
    transition: opacity .3s
  }
  
  .rc-picker-datetime-panel-active .rc-picker-date-panel,
  .rc-picker-datetime-panel-active .rc-picker-time-panel {
    opacity: .3
  }
  
  .rc-picker-datetime-panel-active .rc-picker-date-panel-active,
  .rc-picker-datetime-panel-active .rc-picker-time-panel-active {
    opacity: 1
  }
  
  .rc-picker-time-panel {
    width: auto;
    min-width: auto
  }
  
  .rc-picker-time-panel .rc-picker-content {
    display: flex;
    flex: auto;
    height: 224px
  }
  
  .rc-picker-time-panel-column {
    flex: 1 0 auto;
    width: 56px;
    margin: 0;
    padding: 0 0 194px;
    overflow-y: hidden;
    text-align: left;
    list-style: none;
    transition: background .3s
  }
  
  .rc-picker-time-panel-column:not(:first-child) {
    border-left: 1px solid #f0f0f0
  }
  
  .rc-picker-time-panel-column-active {
    background: rgba(230, 247, 255, .2)
  }
  
  .rc-picker-time-panel-column:hover {
    overflow-y: auto
  }
  
  .rc-picker-time-panel-column>li {
    margin: 0;
    padding: 0
  }
  
  .rc-picker-time-panel-column>li.rc-picker-time-panel-cell .rc-picker-time-panel-cell-inner {
    display: block;
    width: 100%;
    height: 28px;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .65);
    line-height: 28px;
    text-align: center;
    border-radius: 0;
    cursor: pointer;
    transition: background .3s
  }
  
  .rc-picker-time-panel-column>li.rc-picker-time-panel-cell .rc-picker-time-panel-cell-inner:hover {
    background: #f5f5f5
  }
  
  .rc-picker-time-panel-column>li.rc-picker-time-panel-cell-selected .rc-picker-time-panel-cell-inner {
    background: #F7F7F7
  }
  
  .rc-picker-time-panel-column>li.rc-picker-time-panel-cell-disabled .rc-picker-time-panel-cell-inner {
    color: rgba(0, 0, 0, .25);
    background: 0 0;
    cursor: not-allowed
  }
  
  .rc-picker {
    box-sizing: border-box;
    margin: 0;
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    padding: 4px 11px;
    position: relative;
    display: inline-flex;
    align-items: center;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: border .3s, box-shadow .3s;
  }
  
  .rc-picker.rc-picker-disabled {
    background: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed
  }
  
  .rc-picker.rc-picker-disabled .rc-picker-suffix {
    color: rgba(0, 0, 0, .25)
  }
  
  .rc-picker.rc-picker-borderless {
    background-color: transparent!important;
    border-color: transparent!important;
    box-shadow: none!important
  }
  
  .rc-picker-input {
    position: relative;
    display: inline-flex;
    width: 100%
  }
  
  .rc-picker-input>input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0, 0, 0, .65);
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
    border: 0
  }
  
  .rc-picker-input>input::placeholder {
    color: #bfbfbf
  }
  
  .rc-picker-input>input:placeholder-shown {
    text-overflow: ellipsis
  }
  
  .rc-picker-input>input:hover {
    border-color: #40a9ff;
    border-right-width: 1px!important
  }
  
  .rc-picker-input>input:focus,
  .rc-picker-input>input-focused {
    border-color: #40a9ff;
    border-right-width: 1px!important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, .2)
  }
  
  .rc-picker-input>input-disabled {
    color: rgba(0, 0, 0, .25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
  }
  
  .rc-picker-input>input-disabled:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
  }
  
  .rc-picker-input>input[disabled] {
    color: rgba(0, 0, 0, .25);
    background-color: #f5f5f5;
    cursor: not-allowed;
    opacity: 1
  }
  
  .rc-picker-input>input[disabled]:hover {
    border-color: #d9d9d9;
    border-right-width: 1px!important
  }
  
  textarea.rc-picker-input>input {
    max-width: 100%;
    height: auto;
    min-height: 32px;
    line-height: 1.5715;
    vertical-align: bottom;
    transition: all .3s, height 0s
  }
  
  .rc-picker-input>input-lg {
    padding: 6.5px 11px;
    font-size: 16px
  }
  
  .rc-picker-input>input-sm {
    padding: 0 7px
  }
  
  .rc-picker-input>input:focus {
    box-shadow: none
  }
  
  .rc-picker-input>input[disabled] {
    background: 0 0
  }
  
  .rc-picker-large {
    padding: 6.5px 11px
  }
  
  .rc-picker-large .rc-picker-input>input {
    font-size: 16px
  }
  
  .rc-picker-small {
    padding: 0 7px
  }
  
  .rc-picker-suffix {
    align-self: center;
    margin-left: 4px;
    color: rgba(0, 0, 0, .25);
    pointer-events: none
  }
  
  .rc-picker-separator {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 16px;
    color: rgba(0, 0, 0, .25);
    font-size: 16px;
    vertical-align: top;
    cursor: default
  }
  
  .rc-picker-disabled .rc-picker-range-separator .rc-picker-separator {
    cursor: not-allowed
  }
  
  .rc-picker-range {
    position: relative;
    display: inline-flex
  }
  
  .rc-picker-range .rc-picker-active-bar {
    bottom: -1px;
    height: 2px;
    margin-left: 11px;
    background: #1890ff;
    opacity: 0;
    transition: all .3s ease-out;
    pointer-events: none
  }
  
  .rc-picker-range-separator {
    align-items: center;
    padding: 0 8px;
    line-height: 1
  }
  
  .rc-picker-dropdown {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    position: absolute;
    z-index: 1050
  }
  
  .rc-picker-dropdown-hidden {
    display: none
  }
  
  .rc-picker-dropdown-placement-bottomLeft .rc-picker-range-arrow {
    top: 1.66666667px;
    display: block;
    transform: rotate(-45deg)
  }
  
  .rc-picker-dropdown-placement-topLeft .rc-picker-range-arrow {
    bottom: 1.66666667px;
    display: block;
    transform: rotate(135deg)
  }
  
  .rc-picker-dropdown-range {
    padding: 6.66666667px 0
  }
  
  .rc-picker-dropdown-range-hidden {
    display: none
  }
  
  .rc-picker-dropdown .rc-picker-panel>.rc-picker-time-panel {
    padding-top: 4px
  }
  
  .rc-picker-ranges {
    margin-bottom: 0;
    padding: 4px 12px;
    overflow: hidden;
    line-height: 34px;
    text-align: left;
    list-style: none
  }
  
  .rc-picker-ranges>li {
    display: inline-block
  }
  
  .rc-picker-ranges .rc-picker-preset>.ant-tag-blue {
    color: #1890ff;
    background: #F7F7F7;
    border-color: #91d5ff;
    cursor: pointer
  }
  
  .rc-picker-ranges .rc-picker-ok {
    float: right;
    margin-left: 8px
  }
  
  .rc-picker-range-wrapper {
    display: flex
  }
  
  .rc-picker-range-arrow {
    position: absolute;
    z-index: 1;
    display: none;
    width: 10px;
    height: 10px;
    margin-left: 16.5px;
    box-shadow: 2px -2px 6px rgba(0, 0, 0, .06);
    transition: left .3s ease-out
  }
  
  .rc-picker-range-arrow::after {
    position: absolute;
    top: 1px;
    right: 1px;
    width: 10px;
    height: 10px;
    border: 5px solid #f0f0f0;
    border-color: #fff #fff transparent transparent;
    content: ''
  }
  
  .rc-picker-panel-container {
    overflow: hidden;
    vertical-align: top;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
    transition: margin .3s
  }
  
  .rc-picker-panel-container .rc-picker-panels {
    display: inline-flex;
    flex-wrap: nowrap;
    direction: ltr
  }
  
  .rc-picker-panel-container .rc-picker-panel {
    vertical-align: top;
    background: 0 0;
    border-width: 0 0 1px;
    border-radius: 0
  }
  
  .rc-picker-panel-container .rc-picker-panel-focused {
    border-color: #f0f0f0
  }
  
  .rc-picker-rtl {
    direction: rtl
  }
  
  .rc-picker-rtl .rc-picker-suffix {
    margin-right: 4px;
    margin-left: 0
  }
  
  .rc-picker-rtl .rc-picker-separator {
    transform: rotate(180deg)
  }
  
  .rc-picker-panel-rtl .rc-picker-header-view button:not(:first-child) {
    margin-right: 8px;
    margin-left: 0
  }
  
  .rc-picker-rtl.rc-picker-range .rc-picker-active-bar {
    margin-right: 11px;
    margin-left: 0
  }
  
  .rc-picker-dropdown-rtl .rc-picker-ranges {
    text-align: right
  }
  
  .rc-picker-dropdown-rtl .rc-picker-ranges .rc-picker-ok {
    float: left;
    margin-right: 8px;
    margin-left: 0
  }
  
  .rc-picker-panel-rtl {
    direction: rtl
  }
  
  .rc-picker-panel-rtl .rc-picker-prev-icon,
  .rc-picker-panel-rtl .rc-picker-super-prev-icon {
    transform: rotate(135deg)
  }
  
  .rc-picker-panel-rtl .rc-picker-next-icon,
  .rc-picker-panel-rtl .rc-picker-super-next-icon {
    transform: rotate(-45deg)
  }
  
  .rc-picker-cell .rc-picker-cell-inner {
    position: relative;
    z-index: 2;
    display: inline-block;
    min-width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 2px;
    transition: background .3s, border .3s
  }
  
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-start::before {
    right: 50%;
    left: 0
  }
  
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-end::before {
    right: 0;
    left: 50%
  }
  
  .rc-picker-panel-rtl .rc-picker-date-panel .rc-picker-cell-in-view.rc-picker-cell-in-range
  .rc-picker-cell-range-hover-start .rc-picker-cell-inner::after {
    right: 0;
    left: -7px
  }
  
  .rc-picker-panel-rtl .rc-picker-date-panel .rc-picker-cell-in-view.rc-picker-cell-in-range
  .rc-picker-cell-range-hover-end .rc-picker-cell-inner::after {
    right: -7px;
    left: 0
  }
  
  .rc-picker-panel-rtl .rc-picker-cell-range-hover.rc-picker-cell-range-start::after {
    right: 0;
    left: 50%
  }
  
  .rc-picker-panel-rtl .rc-picker-cell-range-hover.rc-picker-cell-range-end::after {
    right: 50%;
    left: 0
  }
  
  .rc-picker-panel-rtl tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover:first-child::after,
  .rc-picker-panel-rtl tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover-end:first-child::after,
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-hover-edge-start
  :not(.rc-picker-cell-range-hover-edge-start-near-range)::after,
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-hover-start::after {
    right: 6px;
    left: 0;
    border-right: 1px dashed #7ec1ff;
    border-left: none;
    border-top-left-radius: 0;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    border-bottom-left-radius: 0
  }
  
  .rc-picker-panel-rtl tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover:last-child::after,
  .rc-picker-panel-rtl tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover-start:last-child::after,
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-hover-edge-end
  :not(.rc-picker-cell-range-hover-edge-end-near-range)::after,
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-hover-end::after {
    right: 0;
    left: 6px;
    border-right: none;
    border-left: 1px dashed #7ec1ff;
    border-top-left-radius: 2px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 2px
  }
  
  .rc-picker-panel-rtl tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover-start:last-child::after,
  .rc-picker-panel-rtl .rc-picker-cell-in-view.rc-picker-cell-range-hover-start.rc-picker-cell-in-view
  .rc-picker-cell-range-hover-end::after {
    right: 6px;
    border-right: 1px dashed #7ec1ff;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
  }
  
  .rc-picker-panel-rtl tr>.rc-picker-cell-in-view.rc-picker-cell-range-hover-end:first-child::after {
    left: 6px;
    border-left: 1px dashed #7ec1ff;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
  }
  
  .rc-picker-panel-rtl .rc-picker-time-panel {
    direction: ltr
  }
  
  .ant-input-group.ant-input-group-compact>.rc-picker-range {
    display: inline-flex
  }

`;

const pickerStyles = css`
    & .rc-picker-range {
      position: relative;
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

  .rc-picker-clear {
    cursor: pointer;
  }
`;

export function RangeTimePicker(props: RangeTimePickerProps) {
  const {
    onChange,
    placeholder = ['From time', 'to time'],
    showSuffixIcon,
    allowClear
  } = props;
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
        generateConfig={momentGenerateConfig}
        onChange={onChange}
        suffixIcon={showSuffixIcon ? <IconClock /> : null}
        placeholder={placeholder}
        picker="time"
        locale={enUS}
        dropdownClassName={dropdownStyle}
        clearIcon={<IconCancel />}
        allowClear={allowClear}
        components={Components}
      />
    </div>
  )
}

