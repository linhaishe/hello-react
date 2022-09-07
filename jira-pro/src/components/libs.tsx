import React from 'react';
import styled from '@emotion/styled';
import { Spin, Typography, Button } from 'antd';
import { DevTools } from 'jira-dev-tool';

export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? 'space-between' : undefined)};
  margin-bottom: ${(props) => `${props.marginBottom}rem`};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) => (typeof props.gap === 'number' ? `${props.gap}rem` : props.gap ? '2rem' : undefined)};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function FullPageLoading() {
  return (
    <FullPage>
      <Spin size='large' />
    </FullPage>
  );
}

// 抽象出来一个组件，可以接受任意的类型，只有当它是error类型的时候显示error的信息

// 类型守卫
// 当符合value?.message的时候，value就是Error
const isError = (value: any): value is Error => value?.message;

export function ErrorBox({ error }: { error: unknown }) {
  if (isError(error)) {
    return <Typography.Text type='danger'> {error?.message}</Typography.Text>;
  }

  return null;
}

export function FullPageErrorFallBack({ error }: { error: Error | null }) {
  return (
    <FullPage>
      <DevTools />
      <ErrorBox error={error} />
    </FullPage>
  );
}

export const ButtonNoPadding = styled(Button)`
  padding: 0;
`;

export const ScreenContainer = styled.div`
  padding: 3.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
