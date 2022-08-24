import React from 'react';
import { Rate } from 'antd';

// 使用React.ComponentProps继承antd中组件的类型，方便透传
interface PinProps extends React.ComponentProps<typeof Rate> {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function Pin(props: PinProps) {
  const { checked, onCheckedChange, ...restProps } = props;

  // !!num === Boolean(num)
  return (
    <Rate
      count={1}
      value={checked ? 1 : 0}
      onChange={(num) => onCheckedChange?.(!!num)}
      {...restProps}
    />
  );
}

export default Pin;
