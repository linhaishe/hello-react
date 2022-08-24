import React from 'react';
import { Select } from 'antd';
import { Raw } from '../types';

type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps extends Omit<SelectProps, 'value' | 'onChange' | 'options'> {
  value: Raw | null | undefined;
  // value值可以传很多种类型，但是在onchange的需要把value都转换成number类型
  onChange: (value?: number) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

/**
 * value 可以传入多种类型的值
 * onChange只会回调 number|undefined 类型
 * 当 isNaN(Number(value)) 为true的时候，代表选择默认类型
 * 当选择默认类型的时候，onChange会回调undefined
 * @param props
 * @constructor
 */
// hh
const toNumber = (value: unknown) => (Number.isNaN(Number(value)) ? 0 : Number(value));

export function IdSelect(props: IdSelectProps) {
  const { value, onChange, defaultOptionName, options, ...restProps } = props;

  return (
    <Select
      value={options?.length ? toNumber(value) : 0}
      onChange={(data) => onChange(toNumber(data) || undefined)}
      {...restProps}
    >
      {defaultOptionName ? <Select.Option value={0}>{defaultOptionName}</Select.Option> : null}
      {options?.map((option) => (
        <Select.Option key={option.id} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
}
