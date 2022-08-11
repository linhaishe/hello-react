import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { HomeLeft, HomeRight, HomeWrapper, BackTop } from './style';
import Topics from './components/topics/Topics';
import Lists from './components/list/Lists';
import Recommend from './components/recommend/Recommend';
import Writers from './components/writers/Writers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import * as homeActionCreators from '../../store/actionCreators/homeActionCreators';

function Home() {
  const dispatch = useAppDispatch();
  const { getHomeDataList } = bindActionCreators(homeActionCreators, dispatch);
  const [isBackToTop, setBAckToTop] = useState(false);
  const backToTop = () => {
    if (document.documentElement.scrollTop > 100) {
      setBAckToTop(true);
    } else {
      setBAckToTop(false);
    }
  };
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  function backToTopRender() {
    if (isBackToTop) {
      return <BackTop onClick={handleScrollTop}>顶部</BackTop>;
    }
    return null;
  }

  useEffect(() => {
    getHomeDataList();
    window.addEventListener('scroll', backToTop);

    return () => {
      window.removeEventListener('scroll', backToTop);
    };
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
      {backToTopRender()}
    </HomeWrapper>
  );
}

export default Home;
