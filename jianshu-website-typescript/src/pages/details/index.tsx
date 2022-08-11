import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { Content, DetailWrapper, Header } from '../home/style';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as detailCreators from '../../store/actionCreators/detailCreators';

function Details() {
  const dispatch = useAppDispatch();
  const { getDetails } = bindActionCreators(detailCreators, dispatch);
  const { content, title, imgUrl } = useAppSelector((state) => state.detail);
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <DetailWrapper>
      <Header>{title}</Header>
      <Content>
        <img
          alt=''
          /* eslint-disable-next-line max-len */
          src={imgUrl}
        />
        <p>{content}</p>
      </Content>
    </DetailWrapper>
  );
}

export default Details;
