import * as React from 'react';
import { Moment } from 'moment';
import { RangePicker as RCRangePicker }  from 'rc-picker';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';
import enUS from 'rc-picker/lib/locale/en_US';

type DatePickerProps = {
  onChange: (newValue: Moment | null, formatString?: string) => void,
  onSelect?: (newValue: Moment) => void,
}


export function RangeDatePicker(props: DatePickerProps) {

  const sharedProps = {
    generateConfig: momentGenerateConfig,
    onSelect: props.onSelect,
    onChange: props.onChange
  };
  return (
    <div style={{ margin: '0 8px' }}>
      <style>
        {`
        .danger {
          color: red;
        }
        .base {
          background-color: lightgray;
          color: turquoise;
        }
      `}
      </style>
      <h3>Basic</h3>

      <RCRangePicker
        {...sharedProps}
        locale={enUS}
      />
    </div>
  )
}
