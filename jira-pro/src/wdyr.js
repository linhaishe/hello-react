import React from 'react';

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    // 是否跟踪所有组件
    trackAllPureComponents: false,
  });
}
