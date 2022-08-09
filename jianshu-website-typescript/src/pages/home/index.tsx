import React, { useEffect } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { HomeLeft, HomeRight, HomeWrapper } from './style';
import Topics from './components/topics/Topics';
import Lists from './components/list/Lists';
import Recommend from './components/recommend/Recommend';
import Writers from './components/writers/Writers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as homeActionCreators from '../../store/actionCreators/homeActionCreators';

function Home() {
  const dispatch = useAppDispatch();
  const { topicList } = useAppSelector((state) => state.home);
  const { getHomeDataList } = bindActionCreators(homeActionCreators, dispatch);
  useEffect(() => {
    console.log(23);
    getHomeDataList();
    console.log('efefef', topicList);
  }, []);

  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          alt=''
          className='banner-img'
          /* eslint-disable-next-line max-len */
          src='https://images.unsplash.com/photo-1660006795957-1af9c6de897e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80'
        />
        <Topics />
        <Lists />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writers />
      </HomeRight>
    </HomeWrapper>
  );
}

export default Home;
